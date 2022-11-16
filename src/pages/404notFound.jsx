import Header from '../components/header';
import Page404 from '../components/404';
import Footer from '../components/404footer';

export default function error404() {
    return (
        <div className= 'home'>  
            <Header />
            <Page404 />            
            <Footer />
        </div>
    )
}