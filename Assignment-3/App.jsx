import React, {useState, render} from 'react';
import {Navbar,Nav, Row, Col, CardGroup, Card, Container, Button} from 'react-bootstrap';
import './App.css';
import ResponsiveGallery from 'react-responsive-gallery';
    
function App(){
  const images=[
          {
            src: './Resources/dog1.jpg',
            lightboxTitle: 'Bulldog'
          },
          {
            src: './Resources/dog2.jpg',
            lightboxTitle: 'Crocker Spaniel'
          },
          {
            src: './Resources/dog3.jpg',
            lightboxTitle: 'Labrador'
          },
          {
            src: './Resources/dog4.jpg',
            lightboxTitle: 'Labrador pup'
          },
          {
            src: './Resources/dog5.jpg',
            lightboxTitle: 'Golden Retriever'
          },
          {
            src: './Resources/dog6.jpg',
            lightboxTitle: 'Snow Hound'
          },
        ];

  return(
    <ResponsiveGallery images={images} numOfImagesPerRow={{xxl: 3, xl: 3, l: 2, m: 2}} useLightBox={true} />
  );
}

export default App;






// function Element1(num){

//   const data = [{
//     id: 0,
//     source: "./Resources/dog1.jpg",
//     details: "Bull Dog"
//   },
//   {
//     id: 1,
//     source: "./Resources/dog2.jpg",
//     details: "Crocker Spaniel"
//   },
//   {
//     id: 2,
//     source: "./Resources/dog3.jpg",
//     details: "Golden Retriever"
//   },
//   {
//     id: 3,
//     source: "./Resources/dog4.jpg",
//     details: "Golden Retriever Pup"
//   },
//   {
//     id: 4,
//     source: "./Resources/dog5.jpg",
//     details: "Labrador"
//   },
//   {
//     id: 5,
//     source: "./Resources/dog6.jpg",
//     details: "Snow Hound"
//   }
//   ]



//   return(
//     {data.map(item,index)=>{
//       if(index==num){
//         return <Card key=={index}>
//           <Card.Img className="img-size" src={item.source}></Card.Img>
//           <Card.Body>
//             <Card.Title>{item.details}</Card.Title>
//           </Card.Body>
//         </Card>
//       }
//     }}
//   );
// }

// function App(){
  

//   return(
//     <Container>
//       <div>
//         <Row>
//           <Col sm={12} md={4}>
//             <Element1 num={0} />
//           </Col>
//           <Col>
//             <Element1 num={1} />
//           </Col>
//           <Col>
//             <Element1 num={2} />
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             <Element1 num={3} />
//           </Col>
//           <Col>
//             <Element1 num={4} />
//           </Col>
//           <Col>
//             <Element1 num={5} />
//           </Col>
//         </Row>
//       </div>
//     </Container>
//   );
// }

// export default App;