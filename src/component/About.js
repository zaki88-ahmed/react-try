import React, { Component }  from 'react';
// import logoImage from './Images/logo.png';
// import logoImage from './logo.png';

class About extends Component{
  render(){

	return <div id="section_counter" class="counter_box" data-paroller-factor="0.3">
	<div class="container">
    	<div class="col-md-3 text-center">
        	<div class="counter_wrap">
            	<div class="counter_icon">
                	<i class="fa fa-magic fa-2x"></i>
                </div>
                <span class="counter">795</span>
                <h4 class="counter_tittle">Logo Design</h4>
                
            </div>
            
        </div>
        <div class="col-xs-12 col-sm-3 col-md-3 text-center">
					<div class="counter_wrap">
						<div class="counter_icon">
							<i class="fa fa-desktop fa-2x"></i>
						</div>
						<span class="counter">1459</span>
						<h4 class="counter_tittle">Websites</h4>
					</div>
		</div>
        <div class="col-xs-12 col-sm-3 col-md-3 text-center">
					<div class="counter_wrap">
						<div class="counter_icon">
							<i class="fa fa-wordpress fa-2x"></i>
						</div>
						<span class="counter">359</span>
						<h4 class="counter_tittle">Wordpress</h4>
					</div>
		</div>

				<div class="col-xs-12 col-sm-3 col-md-3 text-center">
					<div class="counter_wrap">
						<div class="counter_icon">
							<i class="fa fa-smile-o fa-2x"></i>
						</div>
						<span class="counter">3459</span>
						<h4 class="counter_tittle">Happy Clients</h4>
					</div>
		</div>
        
    </div>

</div>
		
  }
}

export default About;