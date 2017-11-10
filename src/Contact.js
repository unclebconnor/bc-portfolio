import React, { Component } from 'react';
import './App.css';

class Contact extends Component {
  render() {
    return (
      	<div className="contactWrapper container">
      		<div className="iNeedSomeSpace"></div>
			<iframe 
				src="https://docs.google.com/forms/d/e/1FAIpQLSeH1UmEdrfokmUz_A6hEL4TWx5lgEV-T8tfUGor4qgQta5Yeg/viewform?embedded=true" 
				width="100%" 
				height="1100" 
				frameBorder="0" 
				marginHeight="0" 
				marginWidth="0"
				title="contactIframe"
				color="white"
				className="boxShadow"
			>Loading...</iframe>
			<div className="iNeedSomeSpace"></div>
      	</div>
    );
  }
}

export default Contact;
