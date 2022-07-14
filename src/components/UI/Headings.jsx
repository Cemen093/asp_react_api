import Loader from "./Loader";
import {Card, CardGroup, Col, Container, Placeholder, Row} from "react-bootstrap";
import circle from '../../icon/circle.png'

const Headings = ({headings, isHeadingsLoading, headingsError}) => {
    if (headingsError)
        return <Container className="my-3 p-3"><h2>При загрузке рубрик произошла ошибка ${headingsError}</h2>
        </Container>

    return (
        <>
            <Container className="my-3 p-3">
                <h2 className="text-center">Главные рубрики</h2>
                {isHeadingsLoading || !headings.length ?
                <Row md={8} className="g-4 me-2">
                    {Array.from({ length: 10 }).map((_, idx) => (
                        <Col>
                        <Card style={{ width: '8rem' }} key={idx}>
                            <Card.Img variant="top" src={circle} />
                            <Card.Body>
                                <Placeholder as={Card.Title} animation="glow">
                                    <Placeholder xs={12} />
                                </Placeholder>
                            </Card.Body>
                        </Card>
                        </Col>
                    ))}
                </Row> :
                <Row md={8} className="g-4 me-2">
                    {headings.map((heading, idx) => (
                        <Col>
                            <Card style={{ width: '8rem' }} key={idx}>
                                <Card.Img
                                    variant="top"
                                    src={heading.url}
                                />
                                <Card.Body>
                                    <Card.Title>{heading.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                }
            </Container>
        </>
    );
};

export default Headings;