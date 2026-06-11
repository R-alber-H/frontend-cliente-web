import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Registro from "../pages/Registro";
import Login from "../pages/Login";

export default function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/registro" element={<Registro/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
    )
}