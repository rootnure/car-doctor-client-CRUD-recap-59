import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import NavBar from '../pages/Shared/NavBar';


const Main = () => {
    return (
        <div className='container mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;