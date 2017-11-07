import React, { Component } from 'react';
import './App.css';

var style1={
	display: 'none'
}

var style2={
	position: 'absolute', 
	left: '-5000px'
}

class Contact extends Component {
  render() {
    return (
      	<div className="contactWrapper">
			<div id="mc_embed_signup">
				<form 
					action="https://facebook.us17.list-manage.com/subscribe/post?u=da6dfd8b71cd959e6034bba79&amp;id=745e3d596b" 
					method="post" 
					id="mc-embedded-subscribe-form" 
					name="mc-embedded-subscribe-form" 
					className="validate" 
					target="_blank" 
					novalidate
				>
			    <div id="mc_embed_signup_scroll">
					<div className="indicates-required">
						<span className="asterisk">*</span> indicates required
					</div>
					<div className="mc-field-group">
						<label for="mce-NAME">Name  <span className="asterisk">*</span> </label>
						<input type="text" value="" name="NAME" className="required" id="mce-NAME"/>
					</div>
					<div className="mc-field-group">
						<label for="mce-EMAIL">Email Address  <span className="asterisk">*</span></label>
						<input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL"/>
					</div>
					<div className="mc-field-group">
						<label for="mce-MESSAGE">Message  <span className="asterisk">*</span> </label>
						<input type="text" value="" name="MESSAGE" className="required" id="mce-MESSAGE"/>
					</div>
					<div className="mc-field-group size1of2">
						<label for="mce-PHONE">Phone Number </label>
						<input type="text" name="PHONE" className="" value="" id="mce-PHONE"/>
					</div>
					<div className="mc-field-group">
						<label for="mce-WEBSITE">Website </label>
						<input type="url" value="" name="WEBSITE" className=" url" id="mce-WEBSITE"/>
					</div>
					<div id="mce-responses" className="clear">
						<div className="response" id="mce-error-response" style={style1}></div>
						<div className="response" id="mce-success-response" style={style1}></div>
					</div>    
				{/*<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
			    	<div style={style2} aria-hidden="true">
			    		<input type="text" name="b_da6dfd8b71cd959e6034bba79_745e3d596b" tabindex="-1" value=""/>
			    	</div>
			    	<div className="clear">
			    		<input type="submit" value="Submit" name="subscribe" id="mc-embedded-subscribe" className="button"/>
			    	</div>
			    </div>
				</form>
			</div>
      	</div>
    );
  }
}

export default Contact;
