import React, { Component }  from 'react';
// import logoImage from './Images/logo.png';
// import logoImage from './logo.png';

class Footer extends Component{
  render(){

	return <footer id="section_contact" class="contact">
	<div class="container">
		
		<div class="col-xs-12 section_heading">
			<h2 class="section_title">HIRE ME</h2>
			<p class="section_subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
		</div>

		
		<div class="col-xs-12 col-sm-8 col-md-6">
			<div class="contact_container">
				  <h4 class="contact_title">Contact Info</h4>
				<p>Why you should hire me writeup Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque nascetur ridiculus mus.
				</p>

				<div class="contact_info">
					<div class="contact_icon">
						<i class="fa fa-map-marker"></i>
					</div> 
					<p class="contact_details">New Street 22545, Nexa Road, New York City, USA</p>
				</div>
				<div class="contact_info">
					<div class="contact_icon">
						<i class="fa fa-envelope"></i>
					</div> 
					<p class="contact_details"><a class="link" href="mailto:yourname@gmail.com">hello@uigrid.com</a></p>
				</div>
				<div class="contact_info">
					<div class="contact_icon">
						<i class="fa fa-phone"></i>
					</div> 
					<p class="contact_details"> 001-000-000-000</p>
				</div>

				<div class="social">
					<ul class="social_ico">
						<li><a href="#" target="_blank" title="Facebook"><i class="fa fa-facebook"></i></a></li>
						<li><a href="#" target="_blank" title="Twitter"><i class="fa fa-twitter"></i></a></li>
						<li><a href="#" target="_blank" title="Google Plus"><i class="fa fa-google-plus"></i></a></li>
						<li><a href="#" target="_blank" title="Github"><i class="fa fa-github"></i></a></li>
						<li><a href="#" target="_blank" title="Behance"><i class="fa fa-behance"></i></a></li>
						<li><a href="#" target="_blank" title="Dribbble"><i class="fa fa-dribbble"></i></a></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="col-xs-12 col-sm-4 col-md-6">
			<div class="contact_container">
				<form id="ajax-contact" method="post" action="send.php">
					<div class="field">
						<input type="text" id="name" class="form-control" name="name" placeholder="Enter Name" required/>
					</div>

					<div class="field">
						<input type="email" id="email" class="form-control" name="email" placeholder="Enter Email" required/>
					</div>

					<div class="field">
						<textarea id="message" class="form-control" name="message" placeholder="Enter Message" rows="6" required></textarea>
					</div>

					<div class="field">
						<button type="submit" class="btn btn_cta">Send Message</button>
					</div>
				</form>
				  <div id="form-messages"></div>
				<div class="clearfix"></div>
			</div>
		</div>
		<div class="clearfix"></div>

	</div>
</footer>
		
  }
}

export default Footer;