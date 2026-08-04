import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from '../pages/Home';
import Search from '../pages/Search';
import Library from '../pages/Library';




function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element= {<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="library" element={<Library />} />
              
            </Route>
        </Routes>
    );
}



export default MainRoutes;

