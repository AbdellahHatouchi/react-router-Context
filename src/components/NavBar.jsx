import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { UserContext } from './ContextUser';


function NavBar() {
    const {user} = useContext(UserContext)
    const navstayle = ({isActive})=>{
        return isActive ? {color:'#fff',textDecoration:'none'}:{textDecoration:'none'}
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={'div'}>Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink style={navstayle} to='/'><Nav.Link as={'div'}>Home</Nav.Link></NavLink>
                    <NavLink style={navstayle} to='/about'><Nav.Link as={'div'}>About</Nav.Link></NavLink>
                    <NavLink style={navstayle} to='/profile'><Nav.Link as={'div'}>Profile</Nav.Link></NavLink>
                    {!user && <NavLink style={navstayle} to='/login'><Nav.Link as={'div'}>Login</Nav.Link></NavLink>}
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;