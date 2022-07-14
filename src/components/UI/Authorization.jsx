import {useState} from "react";
import {Button, Modal, Form, ToggleButton, ButtonGroup, Nav} from 'react-bootstrap';
import profile from "../../icon/profile.png";
import HitService from "../API/HitService";

const Authorization = ({id, setId}) => {
    const [logReg, setLogReg] = useState(true);
    const [show, setShow] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");

    const [erShow, setErShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLogin = async (e) => {
        e.preventDefault();
        const user = await HitService.loginUser(email, password)
        if (user == null)
            setErShow(true)
        else
            setId(user.id);
    };

    const handleRegistration = async (e) => {
        e.preventDefault();
        const result = await HitService.registrationUser(email, password, passwordRepeat)
        if (!result)
            setErShow(true);
        else
            setShow(false);
    };

    if (id !== 0)
        return (
            <>
                <Button variant="outline-light me-2" onClick={() => setId(0)}>
                    Logout
                </Button>
            </>
        )

    return (
        <>
            <Nav.Link onClick={handleShow} style={{color: "white"}}>
                <img
                    src={profile}
                    width="30"
                    height="30"
                    className="d-inline-block align-top mx-2"
                    alt=""
                />
                Мой профиль
            </Nav.Link>

            {logReg ?
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <div>
                                <Button onClick={() => setLogReg(true)} disabled>Login</Button>
                                <Button onClick={() => setLogReg(false)}>Registration</Button>
                            </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    autoFocus
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Qwerty123"
                                    autoFocus
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleLogin}>
                            Login
                        </Button>
                    </Modal.Footer>
                </Modal>
                :
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <div>
                                <Button onClick={() => setLogReg(true)}>Login</Button>
                                <Button onClick={() => setLogReg(false)} disabled>Registration</Button>
                            </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    autoFocus
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Qwerty123"
                                    autoFocus
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password Repeat</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Qwerty123"
                                    autoFocus
                                    onChange={(e) => setPasswordRepeat(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleRegistration}>
                            Registration
                        </Button>
                    </Modal.Footer>
                </Modal>
            }

            <Modal
                size="sm"
                show={erShow}
                onHide={() => setErShow(false)}
                aria-labelledby="example-modal-sizes-title-sm">
                <Modal.Header closeButton>
                    <Modal.Title>
                        Fail
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>Error</Modal.Body>
            </Modal>
        </>
    )
}

export default Authorization;