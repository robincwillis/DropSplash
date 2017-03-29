import React, { Component } from 'react';

import '../../sass/components/common/backgrounds';

export default class App extends Component {

	render () {

		var backgroundStyle = {
			backgroundImage: 'url(' + this.props.backgroundImage + ')'
		}

		var overlayStyle = {
			backgroundColor: this.props.overlayColor,
			opacity: this.props.overlayOpacity
		}

		var overlay = (<span className="bg-overlay" style={overlayStyle}></span>);

		return (
			<div className="background-content" style={backgroundStyle}>
				{overlay}
			</div>
		);

	}
}