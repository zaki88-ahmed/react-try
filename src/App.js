// import logo from './logo.svg';

import React, { Component }  from 'react';
// import Home from './component/Home';
import Navbar from './component/Navbar';
import Banner from './component/Banner';
import Counter from './component/Counter';
import CopyRight from './component/Copyright';
import Footer from './component/Footer';
import About from './component/About';
// import logoImage from './Images/logo.jpg';

// import Contactus from './component/Contactus';

class App extends Component{
  render(){

      return <div>
        <Navbar/>
        <Banner/>
        <About/>
        <Counter/>
        <Footer/>
        <CopyRight/>
        
      </div>

  }
}


export default App;
