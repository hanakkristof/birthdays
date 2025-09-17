import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const Mymodal=({modal, setModal, selImg, setSelImg, selTit})=> {
  

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader className='text-capitalize' toggle={toggle}>{selTit}</ModalHeader>
        <ModalBody className='d-flex justify-content-center'>
          <img className='d-flex' style={{maxWidth:"100%", maxHeight:"100%"}} src={selImg} alt="" />
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </Modal>
    </div>
  );
}
