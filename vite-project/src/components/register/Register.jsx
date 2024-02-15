import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import usersservice from "../../services/usersservice";


import './register.css'

const Register = () => {

  
  function saveTutorial() {
    var data = {
      title: this.formData.name
      
    };

    usersservice.create(data)
      .then(response => {
        this.setState({
          id: response.data.name,
          

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  function onChangeName(e) {
    this.setState({
      title: e.target.value
    });
  }
  

  const [textInput, setTextInput] = useState('');

  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleFormData = () => {
    const formData = new FormData();
    formData.append('name', textInput);
    
    // Aquí puedes hacer lo que quieras con el objeto FormData, como enviarlo a una API
    
    console.log(formData);
  };


  return (
  
  <section className='bg_body_register pt-5'>
  <Container className=" bg-white container-start">




      <Row className="justify-content-md-center">
        <Col xs={12} md={3}><h1 className="pt-5 " >Regístrate</h1></Col>
      </Row>

      

      <Row className="justify-content-md-center pt-5 ">
        <Col className="col-md-auto"    xs={12} ><p className="text-start text-md-end px-md-2">Nombre:</p> 
        </Col>
        <Col xs={12} md={3}> 
        <Form.Control  
                type="text"
                name="name"
                value={textInput}
                onChange={handleTextInputChange}
                placeholder="Enter username" />
          </Col>

          <Col className="col-md-auto "   xs={12}   ><p className=" text-md-end text-start px-md-2" >Apellido:</p> 
        </Col>
        <Col   xs={12} md={3}> 
         <Form.Control type="text" placeholder="" />
          </Col>

      </Row>

      <Row className="justify-content-md-center pt-3">
      <Col className="" xs={12} md={3}><p className="text-start px-md-2" >Ingresa tu correo:</p> 
        </Col>
        <Col xs={12} md={6}> 
         <Form.Control type="text" placeholder="" />
          </Col>
      </Row>

      <Row className="justify-content-md-center pt-3">
      <Col className="col-md-5" xs={12} ><p className="text-start px-md-1" >Crea tu contraseña:</p> 
        </Col>
        <Col xs={12} md={4}> 
         <Form.Control type="text" placeholder="" />
          </Col>

     
      </Row>

      <Row className="justify-content-md-center pt-3">
      <Col className="col-md-5" xs={12} ><p className="text-start px-md-1" >Reingresa tu contraseña:</p> 
        </Col>
        <Col xs={12} md={4}> 
         <Form.Control type="text" placeholder="" />
          </Col>

     
      </Row>


      <Row className="justify-content-md-center pt-3">
      <Col xs={12} md={4}> 
        
         <Form.Control as="button" variant="primary" onClick={handleFormData} >Click Me</Form.Control>
          </Col>
      </Row>

   

   
    </Container>

  </section>
)
};

export default Register;
