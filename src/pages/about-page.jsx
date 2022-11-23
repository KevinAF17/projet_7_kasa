import Header from '../components/header';
import Banner from '../components/banner-2';
import Reliability from '../components/reliability';
import Respect from '../components/respect';
import Service from '../components/service';
import Safety from '../components/safety';
import Footer from '../components/footer';

export default function About() {
    return (
        <div className= 'home'>  
            <Header />
            <Banner />
            <Reliability />
            <Respect />
            <Service />
            <Safety />
            <Footer />
        </div>
    )
}
