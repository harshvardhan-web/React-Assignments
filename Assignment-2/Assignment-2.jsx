import React, {useState} from 'react';
import {Navbar,Nav, Row, Col, CardGroup, Card, Container, Button} from 'react-bootstrap';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link
} from "react-router-dom";
import './Assignment-2.css';

export default function App(){
  
  const [count, setCount] = useState(0);
  const [cartItems, setCart] = useState([]);
  

  const addRow1 = () =>{
    setCount(count+1);
    let newItem = {id: count, name: "Cotton T-Shirt", image: "./Resources/shirt1.png"}
    cartItems.push(newItem);
    console.log(cartItems);
  }

  const addRow2 = () =>{
    setCount(count+1);
    let newItem = {id: count, name: "Red T-Shirt", image: "./Resources/shirt2.png"}
    cartItems.push(newItem);
    console.log(cartItems);
  }

  const addRow3 = () =>{
    setCount(count+1);
    let newItem = {id: count, name: "Green T-Shirt", image: "./Resources/shirt3.png"}
    cartItems.push(newItem);
    console.log(cartItems);
  }

  
  
  return(
  <Router>
      <div>
        <ul>
          <li>
            <Link to="/"><h1 className="cart-heading">Shopping Cart</h1></Link>
          </li>
          <li>
            <Link to="/cart"><ShoppingCartIcon />{cartItems.length}</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
          <Route exact path="/" element={<Home addRow1={addRow1} addRow2={addRow2} addRow3={addRow3} />}/>
          <Route path="/cart" element={<Cart cartItems={cartItems} setCart={setCart}/>}/>
        </Routes>
      </div>
    </Router>
    );
}

function Home({addRow1,addRow2,addRow3}){
  // const location = useLocation();
  // const state = location.state;
  // console.log(state);
  
  
  return(
    <main>
      
      <Container fluid>
        <Row>
          <Col>
            <Card>
              <Card.Img src="./Resources/shirt1.png" height="50%" width="40%"/>
              <Card.Body>
                <Card.Title>Cotton T-Shirt</Card.Title>
                <Card.Text>
                  Premium Quality Pure Cotton T-Shirts, Made with only the World's Best Cotton.
                </Card.Text>
                <Button variant="primary" onClick={addRow1}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img src="./Resources/shirt2.png" height="70%" width="50%"/>
              <Card.Body>
                <Card.Title>Red T-Shirt</Card.Title>
                <Card.Text>
                  Premium Quality Pure Cotton T-Shirts, Made with only the World's Best Cotton.
                </Card.Text>
                <Button variant="primary" onClick={addRow2}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img src="./Resources/shirt3.png" height="70%" width="50%"/>
              <Card.Body>
                <Card.Title>Green T-Shirt</Card.Title>
                <Card.Text>
                  Premium Quality Pure Cotton T-Shirts, Made with only the World's Best Cotton.
                </Card.Text>
                <Button variant="primary" onClick={addRow3}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

function Cart({cartItems, setCart}){

  const [show, setShow] = useState(true);
  
  const remove=(id)=>{
    let arr = cartItems.filter((item)=> item.id !== id);
    setCart(arr);
    console.log(cartItems);
  }
  
  return(
    <main>
          {cartItems.map( (newItem,index)=>
           (
            <Row key={index}>
              <Col><img className="cart-img" src={newItem.image}/></Col>
              <Col className="shirt-label"><h3>{newItem.name}</h3></Col>
              <Col><Button className="remove-btn" onClick={()=>remove(newItem.id)}>Remove</Button></Col>
            </Row>
           )
         )}
    </main>
  );
}