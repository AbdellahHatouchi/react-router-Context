import { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './ContextUser';

function Login() {
    const [user , setUser] = useState({username:'',password:''})
    
    const navigate = useNavigate()
    const {login} = useContext(UserContext)
    const handeleChange =(e)=>{
        const {name , value } = e.target
        setUser({...user,[name]:value})
    }
    const handeleSubmit = (e)=>{
        e.preventDefault()
        login(user)
        navigate('/',{replace:true})
    }
    return (
        <Container>
            <Form onSubmit={handeleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" onChange={handeleChange} value={user.username} name='username'/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={handeleChange} value={user.password} name='password'/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default Login;