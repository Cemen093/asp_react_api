import {Alert, Button, Col, Container, Form, ListGroup, Modal, Placeholder} from "react-bootstrap";
import {useState, useEffect} from "react";
import {useFetching} from "../../hooks/useFetching";
import HitService from "../../API/HitService";
import regions from "./Regions";


const Advertisements = ({id}) => {
    const [hitsRegions, setHitsRegions] = useState([]);
    const [fetchHitsRegions, isHitsRegionsLoading, hitsRegionsError] = useFetching(async () => {
        const response = await HitService.getRegions();
        setHitsRegions(response)
    })
    useEffect(() => {
        fetchHitsRegions();
    }, [])

    const [hitsHeadings, setHitsHeadings] = useState([]);
    const [fetchHitsHeadings, isHitsHeadingsLoading, hitsHeadingsError] = useFetching(async () => {
        const response = await HitService.getHeadings();
        setHitsHeadings(response)
    })
    useEffect(() => {
        fetchHitsHeadings();
    }, [])

    const [hits, setHits] = useState([]);
    const [fetchHits, isHitsLoading, hitsError] = useFetching(async () => {
        const response = await HitService.getAdvertisements();
        setHits(response)
    })
    useEffect(() => {
        fetchHits();
    }, [hitsRegions, hitsHeadings])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const type = e.target.type.value;
        const _id = e.target.id.value;
        const title = e.target.title.value;
        const description = e.target.description.value;
        const url = e.target.url.value;
        const price = e.target.price.value;
        const date = e.target.date.value;
        const vip = e.target.vip.value === "true";
        const regionId = e.target.regionId.value;
        const headingId = e.target.headingId.value;

        switch (type) {
            case "Create":
                if (!await HitService.createAdvertisements(
                    {
                        id: 0,
                        title: title,
                        description: description,
                        url: url,
                        price: price,
                        date: date,
                        vip: vip,
                        regionId: regionId,
                        headingId: headingId
                    }, id))
                    setErShow(true)
                break;
            case "Update":
                if (!await HitService.updateAdvertisements(
                    {
                        id: _id,
                        title: title,
                        description: description,
                        url: url,
                        price: price,
                        date: date,
                        vip: vip,
                        regionId: regionId,
                        headingId: headingId
                    }, id))
                    setErShow(true)
                break;
            case "Delete":
                if (!await HitService.deleteAdvertisements(_id, id))
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
                <Container>
                    Loading
                </Container>
            </>
        )
    if (!hits.length)
        return <h2>Not found</h2>

    return (
        <>
            <Container>
                <Alert variant="primary" className="text-center">
                    Regions
                </Alert>
                <ListGroup horizontal className="mb-3">
                    <Col><ListGroup.Item>Id</ListGroup.Item></Col>
                    <Col><ListGroup.Item>Title</ListGroup.Item></Col>
                    <Col><ListGroup.Item>Url</ListGroup.Item></Col>
                    <Col><ListGroup.Item>Description</ListGroup.Item></Col>
                    <Col><ListGroup.Item>Prise</ListGroup.Item></Col>
                    <Col><ListGroup.Item>Date</ListGroup.Item></Col>
                    <Col><ListGroup.Item>Vip</ListGroup.Item></Col>
                    <Col><ListGroup.Item>RegionId</ListGroup.Item></Col>
                    <Col><ListGroup.Item>HeadingId</ListGroup.Item></Col>
                    <Col><ListGroup.Item>Action</ListGroup.Item></Col>
                    <Col><ListGroup.Item className="text-center">Send</ListGroup.Item></Col>
                </ListGroup>
                {hits.map((ad, idx) => (
                    <Form className="d-flex" onSubmit={handleSubmit} key={"form " + idx}>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Control placeholder="id" name="id" defaultValue={ad.id} disabled/>
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Control placeholder="title" name="title" defaultValue={ad.title}/>
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Control placeholder="url" name="url" defaultValue={ad.url}/>
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Control placeholder="description" name="description"
                                              defaultValue={ad.description}/>
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Control placeholder="price" name="price" defaultValue={ad.price}/>
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Control placeholder="date" name="date" defaultValue={ad.date}/>
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Select className="mb-3" name="vip" defaultValue={ad.vip}>
                                {["true", "false"].map((type) => (
                                    <option>{type}</option>
                                ))}
                            </Form.Select>
                        </Col>

                        <Col>
                            {hitsRegions.length === 0 || isHitsRegionsLoading ?
                                <div>Loading</div>:
                                <Form.Select className="mb-3" name="regionId" defaultValue={ad.regionId}>
                                    {hitsRegions.map((el, idx) => (
                                    <option key={"regionId " + idx}>{el.id}</option>
                                    ))}
                                </Form.Select>
                            }
                        </Col>

                        <Col>
                            <Form.Select className="mb-3" name="headingId" defaultValue={ad.headingId}>
                                {hitsHeadings.length === 0 || isHitsHeadingsLoading ?
                                    <option>Loading</option> :
                                    hitsHeadings.map((el, idx) => (
                                        <option key={"headingId " + idx}>{el.id}</option>
                                    ))
                                }
                            </Form.Select>
                        </Col>

                        <Col>
                            <Form.Select className="mb-3" name="type">
                                {["Delete", "Update"].map((type) => (
                                    <option>{type}</option>
                                ))}
                            </Form.Select>
                        </Col>

                        <Col>
                            <Form.Group className="text-center">
                                <Button variant="outline-dark" className="mb-3" type="submit">Send</Button>
                            </Form.Group>
                        </Col>
                    </Form>
                ))}

                <Form className="d-flex" onSubmit={handleSubmit}>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control placeholder="id" name="id" defaultValue="-" disabled/>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control placeholder="title" name="title"/>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control placeholder="url" name="url"/>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control placeholder="description" name="description"/>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control placeholder="price" name="price"/>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control placeholder="date" name="date"/>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Select className="mb-3" name="vip">
                            {["true", "false"].map((type) => (
                                <option>{type}</option>
                            ))}
                        </Form.Select>
                    </Col>

                    <Col>
                        {hitsRegions.length === 0 || isHitsRegionsLoading ?
                            <div>Loading</div>:
                            <Form.Select className="mb-3" name="regionId">
                                {hitsRegions.map((el, idx) => (
                                    <option key={"regionId " + idx}>{el.id}</option>
                                ))}
                            </Form.Select>
                        }
                    </Col>

                    <Col>
                        <Form.Select className="mb-3" name="headingId">
                            {hitsHeadings.length === 0 || isHitsHeadingsLoading ?
                                <option>Loading</option> :
                                hitsHeadings.map((el, idx) => (
                                    <option key={"headingId " + idx}>{el.id}</option>
                                ))
                            }
                        </Form.Select>
                    </Col>

                    <Col>
                        <Form.Select className="mb-3" name="type" disabled>
                            <option>Create</option>
                        </Form.Select>
                    </Col>

                    <Col>
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
export default Advertisements;