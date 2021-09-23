import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(jsonData => setUsers(jsonData))
  }, [])
  return (
    <div className="">
      <h3>External Users</h3>
      {
        users.map(user => <User name={user.username} email={user.email}></User>)
      }
    </div>
  );
}

function User(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h5>Email: {props.email}</h5>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  // console.log(count, setCount);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button> <br /> <br />
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: "3px solid black",
    borderRadius: "7px"
  }
  return (
    <div className="product" style={productStyle}>
      <h2>Name: {props.name}</h2>
      <h5>Price: {props.price}</h5>
    </div>
  );
}

export default App;

/* 
const products = [
    {name: "mobile", price: "1750"},
    {name: "camera", price: "10750"},
    {name: "bike", price: "170500"},
    {name: "cycle", price: "17050"},
    {name: "laptop", price: "170050"},
    {name: "watch", price: "7750"}
  ] 

*/

/*  
{
        products.map(product => <Product name={product.name} price= {product.price}></Product>)
      }
      <Product name="laptop" price="57500"></Product>
      <Product name="laptop" price="57500"></Product>
      <Product name="laptop" price="57500"></Product>
      <Product name="laptop" price="57500"></Product>
      <Product name="laptop" price="57500"></Product>
*/