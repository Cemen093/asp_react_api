import AuthorizationAdmin from "../UI/admin/AuthorizationAdmin";
import Regions from "../UI/admin/Regions";
import {useEffect, useState} from "react";
import {Container, Spinner, Tab, Tabs} from "react-bootstrap";
import HitService from "../API/HitService";
import {useFetching} from "../hooks/useFetching";
import Users from "../UI/admin/Users";
import Headings from "../UI/admin/Headings";
import Advertisements from "../UI/admin/Advertisements";

const Admin = ({id, setId}) => {
    const [key, setKey] = useState('Users');

    if (id === 0)
        return <AuthorizationAdmin id={id} setId={setId}/>
    else
        return (
            <>
                <Container>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                    >
                        <Tab eventKey="Users" title="Users">
                            <Users id={id}/>
                        </Tab>
                        <Tab eventKey="Regions" title="Regions">
                            <Regions id={id}/>
                        </Tab>
                        <Tab eventKey="Headings" title="Headings">
                            <Headings id={id}/>
                        </Tab>
                        <Tab eventKey="Ads" title="Ads">
                            <Advertisements id={id}/>
                        </Tab>
                    </Tabs>
                </Container>
            </>
        )
}

export default Admin;