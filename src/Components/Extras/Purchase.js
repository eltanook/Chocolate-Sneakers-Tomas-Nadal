import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';


const Purchase = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false);}
    const handleShow = () => setShow(true);
    const handleCloseSubmit = () => {setShow(false); purchaseToast()}
    const purchaseToast = () => {
      toast.success('Got it! Now you can finish your purchase.', {position: 'top-center', autoClose: 3000} )
    }

    return (
      <>
        <Button id='empty-confirm' onClick={handleShow}>Your details</Button>
        <Modal show={show} onHide={handleClose}>
          <div id='login'>
            <Modal.Header>
              <Modal.Title><h3>Fulfil your details so as to complete your purchase</h3></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Write your credit card
              <input type="tel" className='form-control' inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" placeholder="xxxx xxxx xxxx xxxx" required/>
              Write your address
              <input type='text' className='form-control' name='adress' placeholder='Adress Here...' required/>
              Write your phone number
              <input type='tel' className='form-control' name='phone' placeholder='Phone Number Address Here...' required/>
              Anything else you want us to know...
              <input type='textarea' className='form-control' name='textarea' placeholder='Anithing Else Here...'/>
            </Modal.Body>
            <Modal.Footer>
              <Button id='close-save' onClick={handleClose}>
                Cancel
              </Button>
              <Button id='close-save' onClick={handleCloseSubmit}>
                Confirm details
              </Button>
            </Modal.Footer>
          </div>
        </Modal>
      </>
    );
};

export default Purchase;
