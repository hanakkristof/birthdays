import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Button, Card, CardBody, CardGroup, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import { persons } from '../../data';
import { Mymodal } from './MyModal';

const PersList = ({ pers, setPers }) => {

const [modal, setModal] = useState(false);
const [selImg,setSelImg] = useState(null);
const [selTit, setTit] = useState(null);
const toggle = (img, title) =>{
        setTit(title)
        setSelImg(img)
        setModal(!modal)};


  const deleteObj=(id)=> {
    setPers(prev=>prev.filter(pers=>pers.id!=id))
  }
  
  return (
    <div className='d-flex flex-wrap justify-content-center gap-3'>
      
        {pers.map((obj)=>
          <Card  style={{width:"300px"}} key={obj.id}>
          <CardImg onClick={()=>toggle(obj.image, obj.name)} className='d-flex justify-content-center' style={{aspectRatio:"1/1", objectFit:"cover"}}
            alt={obj.name}
            src={obj.image}
          />  
          <CardBody>
            <CardTitle tag="h5">
              {obj.name}
            </CardTitle>
            <Button onClick={()=>deleteObj(obj.id)}>
              
              Delete
            </Button>
          </CardBody>
        </Card>
        )}
        {modal && <Mymodal modal = {modal} setModal = {setModal} selImg={selImg} setSelImg={setSelImg} selTit = {selTit}/>}
    </div>
  )
}

export default PersList
