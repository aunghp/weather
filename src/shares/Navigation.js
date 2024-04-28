import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./style.css";

export const Navigation = () => {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-start">
                    <Navbar.Text>
                        <span className='nav-color'> Weather App </span>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}