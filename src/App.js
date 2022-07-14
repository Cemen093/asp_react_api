import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import Home from "./components/pages/Home";
import Admin from './components/pages/Admin'
import Error from "./components/pages/Error";
import {useState} from "react";

function App() {
    const [id, setId] = useState(0);

    return (
        <>

            <BrowserRouter>
                <Header  id={id} setId={setId}/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/admin" element={<Admin id={id} setId={setId}/>}/>
                    <Route path="*" element={<Error/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default App;