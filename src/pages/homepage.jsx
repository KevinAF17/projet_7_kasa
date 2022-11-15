import Header from '../components/header';
import Banner from '../components/banner';
import MainHome  from '../components/mainHome';
import Footer from '../components/footer';
import '../styles/homepage.css';

export default function Home() {
    return (
        <div className= 'home'>  
            <Header />
            <Banner />
            <MainHome />
            <Footer />
        </div>
    )
}
