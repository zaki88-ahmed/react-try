import React, { Component }  from 'react';

class Banner extends Component{
  render(){

      return <section id="home" class="cover" data-paroller-factor="0.3">
	  <div class="cover_wrap">
		  <div class="cover_info">
			  <div class="cover_content">
				  <div class="container">
					  <div class="col-xs-12 col-sm-10 col-md-10 col-lg-10">
						  <h1 class="cover_title">LETS WORK ON SOMETHING INTERESTING TODAY</h1>
						  <h3 class="cover_subtitle">Frontend Developer based in London UK</h3>
						  <a href="#about" class="btn btn_inverse cover_cta scroll">Know More &raquo;</a>
					  </div>
				  </div>
			  </div>
		  </div>
	  </div>
	  <a class="section_scroll scroll" href="#about"><i class="fa fa-angle-down fa-4x"></i></a>
  </section>
		
  }
}

export default Banner;