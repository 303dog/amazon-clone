import Product from './Product';
import './Home.css';


function Home() {
    return (
        <div classname='home'>
            <img className='home__image'
            src="https://static.wixstatic.com/media/71151b_9aab329f389a4b2a938631a43d55beff~mv2.jpg" 
            alt="home-logo"/>

            <div className='home__row'>
                <Product
                    id="00001"
                    title="B&W Carpet Label"
                    price={3.99}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzXd98J2LnveIztNV3WrOCqTwEqjcf17RaJ0FRTaE1egKyfFFLaadZFI1oBONwYzNNYg&usqp=CAU" />
                <Product
                    id="00001"
                    title="Full Color Carpet Label"
                    price={4.99}
                    image="https://www.rippedsheets.com/images/203051-8-mil-carpet-tire-tag.JPG" />    
                <Product
                    id="00001"
                    title="Carpet Label w/ logo"
                    price={5.99}
                    image="https://cache.hedgeapple.com/thumb/2020/10/x4/wzynmumrfmnt7jstu3tb75ro2h3uuk/Fiber-Pile-and-Care-Instructions.jpg" />
            </div>
        </div>
    )
}

export default Home;

