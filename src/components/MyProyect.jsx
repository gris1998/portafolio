import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { data } from '../Data'
import githubm from '../assets/logogg.png'
import deploy from '../assets/logodeploy.png'
import { Image } from 'react-bootstrap';

function MyProyect() {
  return (

    <div className='myproyect'>
      {data.map(data => (

        <Card style={{ width: '10rem', height: '16rem' }}>
          <Card.Img id='imagenproject' variant="top" src={data.image} />
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text className='spaceproject'>

              <a className= 'w-100' href={data.github}>
               <img className= 'img-fluid' src={githubm} alt="" />
              </a>
            
             <a className= 'w-100'href={data.deploy}>
             <img id='deployproject' className= 'img-fluid' src={deploy} alt="" />
             </a>
            </Card.Text>
            <Button id='btnproject' variant="primary">haga click en repositorio o deploy</Button>
          </Card.Body>
        </Card>
      ))
      }
      </div>
      );

    }


      export default MyProyect;