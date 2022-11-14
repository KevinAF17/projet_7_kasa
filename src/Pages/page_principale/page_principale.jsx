import Header from '../../Composants/header'
import Banner from '../../Composants/banner'
import Footer from '../../Composants/footer'
import main_page from '../page_principale'

export default function Home() {
    return (
        <div className= {main_page}>  
            
            <Header />
            <Banner />
            <Footer />
        </div>
    )
}