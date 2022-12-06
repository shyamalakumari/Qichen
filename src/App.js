import { Component } from "react";
import Header from "./components/header";
// import Banner from "./components/banner";
import Popular from "./components/popular";
import Banner from "./components/banner";
import About from "./components/about";
import Menu from "./components/menu";
import Meet from "./components/meet";
import Vedio from "./components/vedio";
import Watch from "./components/watch";
import Booking from "./components/booking";
import Insta from "./components/insta";
import Reviews from "./components/reviews";
import Footer from "./components/footer";

class App extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Banner/>
               <Popular/>
               <About/>
               <Menu/>
               <Meet/>
               <Vedio/>
               
               <Watch/>
               <Booking/>
               <Reviews/>
               <Insta/>
               <Footer/>
            </div>
        )
    }
}

export default App;
