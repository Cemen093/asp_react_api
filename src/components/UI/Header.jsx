import {Navbar, Container, Nav, Button, ButtonGroup, ToggleButton} from "react-bootstrap";
import {useState} from "react";

import logo from '../../icon/logo.png';
import heard from '../../icon/heard.png';
import message from '../../icon/message.png';
import Authorization from "./Authorization";
import {Link} from "react-router-dom";

const Header = ({id, setId}) => {
    const [radioValue, setRadioValue] = useState('1');

    const languages = [
        { name: 'язык', value: '1' },
        { name: 'мова', value: '2' },
    ];

    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" >
                <Container>
                    <Navbar.Brand className="me-auto">
                        <Link to="/">
                            <img
                                src={logo}
                                width="87"
                                height="55"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Link>
                    </Navbar.Brand>

                    <ButtonGroup className="mb-2">
                        {languages.map((radio, idx) => (
                            <ToggleButton
                                style={{color:"white"}}
                                key={idx}
                                id={`radio-${idx}`}
                                type="radio"
                                variant="link"
                                size="sm"
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>

                    <Nav.Link href="#" style={{color:"white"}}>
                        <img
                            src={message}
                            width="30"
                            height="30"
                            className="d-inline-block align-top mx-2"
                            alt=""
                        />
                        Сообщения
                    </Nav.Link>
                    <Nav.Link>
                        <img
                            src={heard}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt=""
                        />
                    </Nav.Link>
                    <Authorization id={id} setId={setId}/>
                    <Button variant="outline-secondary">Подать объявление</Button>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;