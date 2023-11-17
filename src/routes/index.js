import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "../components/Body";
import HomeScreen from "../Screens/HomeScreen";
import ArtigosScreen from "../Screens/SecaoAScreen";
import LoginScreen from "../Screens/LoginScreen";
import UserScreen from "../Screens/UserScreen";



function RouterRoot(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Body />} path="/">
                    <Route element={<HomeScreen />} path="/" />
                    <Route element={<ArtigosScreen />} path="/artigos"/>
                    <Route element={<LoginScreen />} path="/login" />
                    <Route element={<UserScreen />} path="/user" />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterRoot;