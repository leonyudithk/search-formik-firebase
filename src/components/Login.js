import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../Hooks/useForm';
import { loginEmailPassAsync, loginGoogle} from '../redux/actions/actionLogin';

const Login = () => {

    const dispatch = useDispatch()
    const  [values, handleInputChange, reset]=  useForm({
         email: '',
         password: '',
      
    })
  
    const {email, password} = values
  
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(values)
         dispatch(loginEmailPassAsync(email, password))
        reset()
    }
  
const handleGoogle =()=>{
    dispatch(loginGoogle())
}

    return (
        <div>
             <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
              
                  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                
                    />
            </Form.Group>
            <Button variant="primary" type="submit">
                Enviar
            </Button>

            <Button variant="primary" type="button" >
                salir
            </Button>

            <Container className="auth__social-networks">
                <Container
                    className="google-btn"
                    onClick={handleGoogle}
                  

                >
                    <Container className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </Container>
                </Container>
            </Container>
            <Link to="/register">Registrarse</Link>

        </Form>
        </div>
    );
};

export default Login;
