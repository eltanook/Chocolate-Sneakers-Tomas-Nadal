import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';


const Login = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false);}
    const handleShow = () => setShow(true);
    const handleCloseSubmit = () => {setShow(false); welcomeToast()}
    const welcomeToast = () => {
      toast.success('Welcome to the Chocolate Club.', {position: 'top-center', autoClose: 3000} )
    }

    return (
      <>
        <Button id='registrarse' onClick={handleShow}>Become a member</Button>
        <Modal show={show} onHide={handleClose}>
          <div id='login'>
            <Modal.Header>
              <Modal.Title><h3>Fulfil your details</h3></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Write your Email
              <input type='email' className='form-control' name='email' placeholder='Email Address Here...' required/>
              Write your password
              <input type='password' className='form-control' name='password' placeholder='Password Here...' required/>
              Write your address
              <input type='text' className='form-control' name='adress' placeholder='Adress Here...' required/>
              Write your phone number
              <input type='tel' className='form-control' name='phone' placeholder='Phone Number Here...' required/>
            </Modal.Body>
            <Modal.Footer>
              <Button id='close-save' onClick={handleClose}>
                Close
              </Button>
              <Button id='close-save' onClick={handleCloseSubmit}>
                Become a member
              </Button>
            </Modal.Footer>
          </div>
        </Modal>
      </>
    );
};

export default Login;
