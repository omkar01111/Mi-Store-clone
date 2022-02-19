import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route } from "react-router-dom"; 
import Slider from './components/Slider';
import data from './data/data.json';
import Offers from './components/Offers'
import Heading from './components/Heading.js';
import StarProduct from './components/StarProduct'
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js'
import ProductReviews from './components/ProductReviews.js'
import Videos from './components/Videos.js'
function App() {
  return (
    <Router>

      <PreNavbar/>
      <Navbar/>
      <Slider start={data.banner.start}/>
      <Offers offers={data.offer}/>
      <Heading text="START PRODUCTS"/>
      <StarProduct starProduct={data.starProduct}/>
      <Heading text="HOT ACCESSORIES"/>
      <HotAccessoriesMenu/>

      <Route exact path="/music">  
      <HotAccessoriesMenu music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>
      </Route>
      <Route exact path="/smartDevice">  
      <HotAccessoriesMenu smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>
      </Route>
      <Route exact path="/home">  
      <HotAccessoriesMenu home={data.hotAccessories.home} Cover={data.hotAccessoriesCover.home}/>
      </Route>
      <Route exact path="/lifestyle">  
      <HotAccessoriesMenu lifestyle={data.hotAccessories.lifestyle} lifestyleCover={data.hotAccessoriesCover.lifestyle}/>
      </Route>
      <Route exact path="/mobileAccessories">  
      <HotAccessoriesMenu mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/>
      </Route>
      <Heading text="PRODUCT REVIEWS"/>
      
      <ProductReviews productReview={data.productReview} />

      <Heading text="VIDEOS"/>
      <Videos videos={data.videos} />
      <Heading text="IN THE PRESS"/>
     
    
    </Router>
  );
}

export default App;
