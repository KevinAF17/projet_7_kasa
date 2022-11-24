import Home from './pages/homepage';
import About from './pages/about-page';
import Appartments from './pages/appartments'
import ErrorPage from './pages/404notFound';
import { Route, Routes } from 'react-router-dom';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/appartements/:id" element={<Appartments/>}/>
            <Route path="/404notFound" element={<ErrorPage/>}/>
        </Routes>
    )
}