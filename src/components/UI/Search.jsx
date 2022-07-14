import {Button, Col, Container, Form, Placeholder, Spinner} from "react-bootstrap";

const Search = ({handleSubmitSearchForm, regions, isRegionsLoading ,regionsError}) => {
    if (regionsError)
        return <Container className="my-3 p-3"><h2>При загрузке регионов произошла ошибка ${regionsError}</h2>
        </Container>
    return (
        <>
            <Container className="my-3 p-3">
                <Form className="d-flex" onSubmit={handleSubmitSearchForm}>
                    <Col xs={9}>
                        <Form.Group className="mb-3">
                            <Form.Control type="search" placeholder="Search" />
                        </Form.Group>
                    </Col>
                    <Col>
                        {isRegionsLoading || !regions.length?
                            <Form.Select className="mb-3" disabled/> :
                            <Form.Select className="mb-3">
                                {regions.map((region) => (
                                    <option>{region.title}</option>
                                ))}
                            </Form.Select>
                        }
                    </Col>
                    <Col xs="auto">
                        <Button variant="outline-dark"  className="mb-3">Search</Button>
                    </Col>
                </Form>

            </Container>
        </>
    );
};

export default Search;