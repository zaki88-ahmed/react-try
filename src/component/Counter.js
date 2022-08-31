import React, { Component }  from 'react';
// import logoImage from './Images/logo.png';
// import logoImage from './logo.png';

class Counter extends Component{
  render(){

	return <nav class="navbar navbar-inverse navbar-fixed-top">
	<div class="container">
	 <div class="navbar-header">
		 <button type="button" class="navbar-toggle" 
		  data-toggle="collapse" data-target="#mobile-navbar-collapse">
			  <span class="sr-only">Toggle navigation</span>
			  <span class="icon-bar"></span>
			  <span class="icon-bar"></span>
			  <span class="icon-bar"></span>
		 </button>

		 <a class="navbar-brand scroll" href="#Home">
			 <img class="brand_logo" src="" alt="Coder Bits Freelance Web Developer"/>
			 <span class="brand_title">CODER.BITS</span>
		 </a>
	 </div>

	 <div class="collapse navbar-collapse" id="mobile-navbar-collapse">
		 <ul class="nav navbar-nav navbar-right">
			 <li class="current"><a href="#home">Home</a></li>
			 <li><a href="#about">About</a> </li>
			 <li><a href="#work">Work</a></li>
			 <li><a href="#portfolio">Portfolio</a></li>
			 <li><a href="#contact">Hire Me</a></li>		
		 </ul>
	 </div>
	</div>
</nav>
		
  }
}

export default Counter;