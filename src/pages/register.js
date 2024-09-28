import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const handleUsername = (e)=>{
       setUsername(e.target.value)
    }
    const handlePassword = (e)=>{
      setPassword(e.target.value)
   }
    const handleSubmit = ()=>{
        axios.get(`//localhost:3000/users/${username}`).then((res)=> { 
           const oldUser = res.data
           if(oldUser){
            console.log("user already exists")
            return
           }

          }).catch((e)=>{
            console.log(e)
          })
            axios.post(`//localhost:3000/users/add`,{
              userName:username,
              password:password
            }).then((res)=> { 
                console.log(res.data)
               }).catch((e)=>{
                 console.log(e)
               })
        }

 
  return (
    <Form className='register-container'onSubmit={handleSubmit} >
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First name</Form.Label>
          <Form.Control type="text" placeholder="Enter first name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Last name</Form.Label>
          <Form.Control type="text" placeholder="Enter last name" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>User name</Form.Label>
          <Form.Control type="text" placeholder="Enter user name" onChange={handleUsername}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={handlePassword} />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Day</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Month</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Year</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="I agree to your terms and conditions" />
        <p>Or if you already have an account, just <Link to="/login"><a>log in</a></Link></p>
      </Form.Group>

      <Button className ='register-button'variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}


export default Register;