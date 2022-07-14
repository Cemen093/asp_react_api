import {Alert, Button, Col, Container, Form, ListGroup, Modal, Placeholder} from "react-bootstrap";
import {useState, useEffect} from "react";
import {useFetching} from "../../hooks/useFetching";
import HitService from "../../API/HitService";


const Regions = ({id}) => {
    const [regions, setRegions] = useState([]);
    const [fetchRegions, isRegionsLoading, regionsError] = useFetching(async () => {
        const response = await HitService.getRegions();
        setRegions(response)
    })
    useEffect(() => {
        fetchRegions();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const type = e.target.type.value;
        const _id = e.target.id.value;
        const title = e.target.title.value;

        switch (type) {
            case "Create":
                if (!await HitService.createRegion(
                    {
                        id: 0,
                        title: title
                    }, id))
                    setErShow(true)
                break;
            case "Update":
                if (!await HitService.updateRegion(
                    {
                        id: _id,
                        title: title
                    }, id))
                    setErShow(true)
                break;
            case "Delete":
                if (!await HitService.deleteRegion(_id, id))
                    setErShow(true)
                break;
            default:
                setErShow(true);
        }
        fetchRegions();
    }

    const [erShow, setErShow] = useState(false);

    if (regionsError)
        return <h2>Error: {regionsError}</h2>
    if (isRegionsLoading)
        return (
            <>
                <Container>
                    <Alert variant="primary" className="text-center">
                        Regions
                    </Alert>
                    <ListGroup horizontal className="mb-3">
                        <Col xs={1}><ListGroup.Item>Id</ListGroup.Item></Col>
                        <Col><ListGroup.Item>Region</ListGroup.Item></Col>
                        <Col xs={2}><ListGroup.Item>Action</ListGroup.Item></Col>
                        <Col xs={1}><ListGroup.Item className="text-center">Send</ListGroup.Item></Col>
                    </ListGroup>
                    {Array(5).fill(0).map((el, idx) => (
                        <Form className="d-flex" key={idx}>
                            <Col xs={1}>
                                <Form.Group className="mb-3">
                                    <Form.Control placeholder="id" name="id" disabled/>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Control placeholder="title" name="title" disabled/>
                                </Form.Group>
                            </Col>

                            <Col xs={2}>
                                <Form.Select className="mb-3" name="type" disabled>
                                    <Placeholder/>
                                </Form.Select>
                            </Col>
                            <Col xs={1}>
                                <Form.Group className="text-center">
                                    <Button variant="outline-dark" className="mb-3" type="submit" disabled>Send</Button>
                                </Form.Group>
                            </Col>
                        </Form>
                    ))}
                </Container>
            </>
        )
    if (!regions.length)
        return <h2>Not found</h2>

    return (
        <>
            <Container>
                <Alert variant="primary" className="text-center">
                    Regions
                </Alert>
                <ListGroup horizontal className="mb-3">
                    <Col xs={1}><ListGroup.Item>Id</ListGroup.Item></Col>
                    <Col><ListGroup.Item>Region</ListGroup.Item></Col>
                    <Col xs={2}><ListGroup.Item>Action</ListGroup.Item></Col>
                    <Col xs={1}><ListGroup.Item className="text-center">Send</ListGroup.Item></Col>
                </ListGroup>
                {regions.map((el, idx) => (
                    <Form className="d-flex" onSubmit={handleSubmit} key={idx}>
                        <Col xs={1}>
                            <Form.Group className="mb-3">
                                <Form.Control placeholder="id" name="id" defaultValue={el.id} disabled/>
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Control placeholder="title" name="title" defaultValue={el.title}/>
                            </Form.Group>
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
                            <Form.Control placeholder="title" name="title"/>
                        </Form.Group>
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