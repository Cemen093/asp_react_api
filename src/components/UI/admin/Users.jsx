import {Alert, Button, Col, Container, Form, ListGroup, Modal, Placeholder} from "react-bootstrap";
import {useState, useEffect} from "react";
import {useFetching} from "../../hooks/useFetching";
import HitService from "../../API/HitService";


const Regions = ({id}) => {
    const [hits, setHits] = useState([]);
    const [fetchHits, isHitsLoading, hitsError] = useFetching(async () => {
        const response = await HitService.getUsers(id);
        setHits(response)
    })
    useEffect(() => {
        fetchHits();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const type = e.target.type.value;
        const _id = e.target.id.value;
        const email = e.target.email.value;
        const hashPassword = e.target.hashPassword.value;
        const isAdmin = e.target.isAdmin.value === "true";
        switch (type) {
            case "Create":
                if (! await HitService.createUser({
                    id: 0,
                    email: email,
                    hashPassword: hashPassword,
                    isAdmin: isAdmin
                }, id))
                    setErShow(true)
                break;
            case "Update":
                if (! await HitService.updateUser({
                    id: _id,
                    email: email,
                    hashPassword: hashPassword,
                    isAdmin: isAdmin
                }, id))
                    setErShow(true)
                break;
            case "Delete":
                if (! await HitService.deleteUser(_id, id))
                    setErShow(true)
                break;
            default:
                setErShow(true);
        }
        fetchHits();
    }

    const [erShow, setErShow] = useState(false);

    if (hitsError)
        return <h2>Error: {hitsError}</h2>
    if (isHitsLoading)
        return (
            <>
                <Alert variant="primary" className="text-center">
                    Users
                </Alert>
                <ListGroup horizontal className="mb-3">
                    <Col xs={1}><ListGroup.Item>Id</ListGroup.Item></Col>
                    <Col><ListGroup.Item>Email</ListGroup.Item></Col>
                    <Col><ListGroup.Item>HashPassword</ListGroup.Item></Col>
                    <Col xs={2}><ListGroup.Item>Is Admin</ListGroup.Item></Col>
                    <Col xs={2}><ListGroup.Item>Action</ListGroup.Item></Col>
                    <Col xs={1}><ListGroup.Item className="text-center">Send</ListGroup.Item></Col>
                </ListGroup>
                {Array(5).fill(0).map((el, idx) => (
                    <Form className="d-flex" onSubmit={handleSubmit}key={idx}>
                        <Col xs={1}>
                            <Form.Group className="mb-3">
                                <Form.Control placeholder="id" name="id" disabled/>
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Control placeholder="email" name="email" disabled/>
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Control placeholder="hashPassword" name="hashPassword"  disabled/>
                            </Form.Group>
                        </Col>

                        <Col xs={2}>
                            <Form.Select className="mb-3" name="isAdmin" disabled>
                            </Form.Select>
                        </Col>

                        <Col xs={2}>
                            <Form.Select className="mb-3" name="type" disabled>
                            </Form.Select>
                        </Col>
                        <Col xs={1}>
                            <Form.Group className="text-center">
                                <Button variant="outline-dark" className="mb-3" type="submit"  disabled>Send</Button>
                            </Form.Group>
                        </Col>
                    </Form>
                ))}
            </>
        )
    if (!hits.length)
        return <h2>Not found</h2>

    return (
        <>
            <Container>
                <Alert variant="primary" className="text-center">
                    Users
                </Alert>
                <ListGroup horizontal className="mb-3">
                    <Col xs={1}><ListGroup.Item>Id</ListGroup.Item></Col>
                    <Col><ListGroup.Item>Email</ListGroup.Item></Col>
                    <Col><ListGroup.Item>HashPassword</ListGroup.Item></Col>
                    <Col xs={2}><ListGroup.Item>Is Admin</ListGroup.Item></Col>
                    <Col xs={2}><ListGroup.Item>Action</ListGroup.Item></Col>
                    <Col xs={1}><ListGroup.Item className="text-center">Send</ListGroup.Item></Col>
                </ListGroup>
                {hits.map((el, idx) => (
                    <Form className="d-flex" onSubmit={handleSubmit}key={idx}>
                        <Col xs={1}>
                            <Form.Group className="mb-3">
                                <Form.Control placeholder="id" name="id" defaultValue={el.id} disabled/>
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Control placeholder="email" name="email" defaultValue={el.email}/>
                                </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Control placeholder="hashPassword" name="hashPassword" defaultValue={el.hashPassword}/>
                            </Form.Group>
                        </Col>

                        <Col xs={2}>
                            <Form.Select className="mb-3" name="isAdmin" defaultValue={el.isAdmin}>
                                {["true", "false"].map((type) => (
                                    <option>{type}</option>
                                ))}
                            </Form.Select>
                        </Col>

                        <Col xs={2}>
                            <Form.Select className="mb-3" name="type">
                                {["Delete", "Update"].map((type) => (
                                    <option>{type}</option>
                                ))}
                            </Form.Select>
                        </Col>
                        <Col xs={1}>
                            <Form.Group className="text-center">
                                <Button variant="outline-dark" className="mb-3" type="submit">Send</Button>
                            </Form.Group>
                        </Col>
                    </Form>
                ))}

                <Form className="d-flex" onSubmit={handleSubmit}>
                    <Col xs={1}>
                        <Form.Group className="mb-3">
                            <Form.Control placeholder="id" name="id" defaultValue="-" disabled/>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control placeholder="email" name="email"/>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control placeholder="hashPassword" name="hashPassword"/>
                        </Form.Group>
                    </Col>

                    <Col xs={2}>
                        <Form.Select className="mb-3" name="isAdmin">
                            {["true", "false"].map((type) => (
                                <option>{type}</option>
                            ))}
                        </Form.Select>
                    </Col>

                    <Col xs={2}>
                        <Form.Select className="mb-3" name="type" disabled>
                            <option>Create</option>
                        </Form.Select>
                    </Col>
                    <Col xs={1}>
                        <Form.Group className="text-center">
                            <Button variant="outline-dark" className="mb-3" type="submit">Send</Button>
                        </Form.Group>
                    </Col>
                </Form>

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
            </Container>
        </>
    )

}
export default Regions;