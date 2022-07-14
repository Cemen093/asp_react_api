import {useState} from "react";
import {Button, Modal, Form, ToggleButton, ButtonGroup} from 'react-bootstrap';
import HitService from "../../API/HitService";

const AuthorizationAdmin = ({id, setId}) => {
    const [logReg, setLogReg] = useState(true);
    const [show, setShow] = useState(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [key, setKey] = useState("");

    const [erShow, setErShow] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        const user = await HitService.loginUser(email, password)
        if (user == null)
            setErShow(true)
        else
            setId(user.id);
        setShow(false);
    };

    const handleRegistration = async (e) => {
        e.preventDefault();
        const result = await HitService.registrationUser(email, password, passwordRepeat, key)
        if (!result)
            setErShow(true);
        else
            setShow(false);
    };

    return (
        <>
            {logReg ?
                <Modal show={show}>
                    <Modal.Header>
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
                        <Button variant="primary" onClick={handleLogin}>
                            Login
                        </Button>
                    </Modal.Footer>
                </Modal>
                :
                <Modal show={show}>
                    <Modal.Header>
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
                            <Form.Group className="mb-3">
                                <Form.Label>Key</Form.Label>
                                <Form.Control
                                    type="password"
                                    autoFocus
                                    onChange={(e) => setKey(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
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

export default AuthorizationAdmin;