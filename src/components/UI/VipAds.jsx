import {Button, Card, Col, Container, Placeholder, Row} from "react-bootstrap";
import square from "../../icon/square.svg"

const VipAds = ({vipAds, isVipAdsLoading, vipAdsError}) => {
    if (vipAdsError)
        return <Container className="my-3 p-3"><h2>При загрузке вип объявлений произошла ошибка ${vipAdsError}</h2>
        </Container>

    return (
        <>
            <Container className="my-3 p-3">
                <h2 className="text-center">VIP-объявления</h2>
                {isVipAdsLoading || !vipAds.length ?
                    <Row md={5} className="g-4 me-2">
                        {vipAds.map((vipAd, idx) => (
                            <Col>
                                <Card
                                    style={{ width: '14rem' }}
                                    key={idx}
                                    className="p-3"
                                >
                                    <Card.Img variant="top" src={square} />
                                    <Card.Body>
                                        <Placeholder as={Card.Title} animation="glow">
                                            <Placeholder xs={15} />
                                        </Placeholder>
                                        <Placeholder as={Card.Text} animation="glow">
                                            <Placeholder xs={5} /> <Placeholder xs={6} />
                                        </Placeholder>
                                        <Placeholder as={Card.Text} animation="glow">
                                            <Placeholder xs={3} /> <Placeholder xs={5} /> <Placeholder xs={2} />
                                        </Placeholder>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Placeholder.Button variant="outline-success" size="sm" xs={5} />
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row> :
                <Row md={5} className="g-4 me-2">
                    {vipAds.map((vipAd, idx) => (
                        <Col>
                            <Card
                                style={{ width: '14rem' }}
                                key={idx}
                                className="p-3"
                            >
                                <Card.Img
                                    variant="top"
                                    src={vipAd.url}
                                />
                                <Card.Body>
                                    <Card.Title>{vipAd.title}</Card.Title>
                                    <Card.Text>Date: {vipAd.date}</Card.Text>
                                    <Card.Text>Price: {vipAd.price}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button
                                        className="pull-right"
                                        variant="outline-success"
                                        size="sm">
                                        Купить
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
                }
            </Container>
        </>
    );
};

export default VipAds;
