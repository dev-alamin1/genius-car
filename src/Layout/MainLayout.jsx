import { Outlet } from 'react-router-dom';
import Header from '../Pages/Components/Shared/Header/Header';
import Footer from '../Pages/Components/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='w-full max-w-screen-xl mx-auto px-10'>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;