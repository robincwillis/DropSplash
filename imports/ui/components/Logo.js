import React, { Component } from 'react';

import ReactTimeout from 'react-timeout';

import '../sass/components/logo.scss';

class Logo extends Component {

	constructor (props) {
		super(props);
		this.state = {
			size : 90,
			ripple : false
		};
	}

	componentDidMount () {
		this.triggerRipple();
	}

	triggerRipple () {
		this.setState({
			ripple : true
		});
		this.props.setTimeout( () => {
			this.setState({
				ripple : false
			});
		}, 3000);
	}

	handleHover (event) {
		if(!this.state.ripple) {
			this.triggerRipple();
		}
	}

	render () {

		let logoClass = 'logo dark';

		if(this.state.ripple) {
			logoClass += ' ripple';
		}

		return (
			<div onMouseOver={this.handleHover.bind(this)} className={logoClass}>
			<svg viewBox="0 0 96 96">
			<circle className="ball-center" cx="48" cy="48" r="3"/>
			<g className="balls-1">
				<circle cx="48" cy="1.4" r="1.4"/>
				<circle cx="48" cy="94.6" r="1.4"/>
				<ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -6.2162 15.0072)" cx="15" cy="15" rx="1.4" ry="1.4"/>
				<ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -33.517 80.9172)" cx="80.9" cy="80.9" rx="1.4" ry="1.4"/>
				<circle cx="1.4" cy="48" r="1.4"/>
				<circle cx="94.6" cy="48" r="1.4"/>
				<ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -52.8216 34.3118)" cx="15" cy="80.9" rx="1.4" ry="1.4"/>
				<ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 13.0884 61.6126)" cx="80.9" cy="15" rx="1.4" ry="1.4"/>
				<ellipse transform="matrix(0.9239 -0.3827 0.3827 0.9239 0.4164 11.9025)" cx="30.1" cy="4.9" rx="1.4" ry="1.4"/>
				<ellipse transform="matrix(0.9239 -0.3827 0.3827 0.9239 -29.8233 32.108)" cx="65.8" cy="91" rx="1.4" ry="1.4"/>
				<ellipse transform="matrix(0.3827 -0.9239 0.9239 0.3827 -24.8062 23.1291)" cx="4.9" cy="30.1" rx="1.4" ry="1.4"/>
				<ellipse transform="matrix(0.3827 -0.9239 0.9239 0.3827 -4.6007 124.7093)" cx="91" cy="65.8" rx="1.4" ry="1.4"/>
				<ellipse transform="matrix(0.9239 -0.3827 0.3827 0.9239 -24.8062 6.8854)" cx="4.9" cy="65.8" rx="1.4" ry="1.4"/>
				<ellipse transform="matrix(0.9239 -0.3827 0.3827 0.9239 -4.6007 37.1251)" cx="91" cy="30.1" rx="1.4" ry="1.4"/>
				<ellipse transform="matrix(0.3827 -0.9239 0.9239 0.3827 -65.4936 84.022)" cx="30.1" cy="91" rx="1.4" ry="1.4"/>
				<ellipse transform="matrix(0.3827 -0.9239 0.9239 0.3827 36.0867 63.8164)" cx="65.8" cy="4.9" rx="1.4" ry="1.4"/>
			</g>
			<g className="balls-2">
				<ellipse transform="matrix(0.9808 -0.1951 0.1951 0.9808 -0.6051 7.9033)" cx="39.8" cy="7" rx="1.6" ry="1.6"/>
				<ellipse transform="matrix(0.9808 -0.1951 0.1951 0.9808 -16.2657 12.6538)" cx="56.1" cy="88.9" rx="1.6" ry="1.6"/>
				<ellipse transform="matrix(0.5556 -0.8315 0.8315 0.5556 -14.706 22.0315)" cx="13.3" cy="24.8" rx="1.6" ry="1.6"/>
				<ellipse transform="matrix(0.5556 -0.8315 0.8315 0.5556 -22.4206 100.3585)" cx="82.7" cy="71.2" rx="1.6" ry="1.6"/>
				<ellipse transform="matrix(0.9808 -0.1951 0.1951 0.9808 -10.8107 2.4482)" cx="7" cy="56.1" rx="1.6" ry="1.6"/>
				<ellipse transform="matrix(0.9808 -0.1951 0.1951 0.9808 -6.0601 18.1088)" cx="88.9" cy="39.8" rx="1.6" ry="1.6"/>
				<ellipse transform="matrix(0.5556 -0.8315 0.8315 0.5556 -57.7268 57.3377)" cx="24.8" cy="82.7" rx="1.6" ry="1.6"/>
				<ellipse transform="matrix(0.5556 -0.8315 0.8315 0.5556 20.6002 65.0522)" cx="71.2" cy="13.3" rx="1.6" ry="1.6"/>
				<ellipse transform="matrix(0.8315 -0.5556 0.5556 0.8315 -3.1897 15.9968)" cx="24.8" cy="13.3" rx="1.6" ry="1.6"/>
				<ellipse transform="matrix(0.8315 -0.5556 0.5556 0.8315 -33.9368 53.4622)" cx="71.2" cy="82.7" rx="1.6" ry="1.6"/>
				<ellipse transform="matrix(0.1951 -0.9808 0.9808 0.1951 -33.4007 38.9391)" cx="7" cy="39.8" rx="1.6" ry="1.6"/>
				<ellipse transform="matrix(0.1951 -0.9808 0.9808 0.1951 16.5299 132.3526)" cx="88.9" cy="56.1" rx="1.6" ry="1.6"/>
				<ellipse transform="matrix(0.8315 -0.5556 0.5556 0.8315 -37.296 19.3559)" cx="13.3" cy="71.2" rx="1.6" ry="1.6"/>
				<ellipse transform="matrix(0.8315 -0.5556 0.5556 0.8315 0.1694 50.103)" cx="82.7" cy="24.8" rx="1.6" ry="1.6"/>
				<ellipse transform="matrix(0.1951 -0.9808 0.9808 0.1951 -55.1421 110.6112)" cx="39.8" cy="88.9" rx="1.6" ry="1.6"/>
				<ellipse transform="matrix(0.1951 -0.9808 0.9808 0.1951 38.2714 60.6806)" cx="56.1" cy="7" rx="1.6" ry="1.6"/>
			</g>
			<g className="balls-3">
				<circle cx="48" cy="12.2" r="1.9"/>
				<circle cx="48" cy="83.7" r="1.9"/>
				<ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -9.4055 22.707)" cx="22.7" cy="22.7" rx="1.9" ry="1.9"/>
				<ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -30.3277 73.2174)" cx="73.2" cy="73.2" rx="1.9" ry="1.9"/>
				<circle cx="12.2" cy="48" r="1.9"/>
				<circle cx="83.7" cy="48" r="1.9"/>
				<ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -45.1218 37.5012)" cx="22.7" cy="73.2" rx="1.9" ry="1.9"/>
				<ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 5.3886 58.4233)" cx="73.2" cy="22.7" rx="1.9" ry="1.9"/>
				<ellipse transform="matrix(0.9239 -0.3827 0.3827 0.9239 -3.1162 14.2629)" cx="34.3" cy="15" rx="1.9" ry="1.9"/>
				<ellipse transform="matrix(0.9239 -0.3827 0.3827 0.9239 -26.2906 29.7476)" cx="61.6" cy="81" rx="1.9" ry="1.9"/>
				<ellipse transform="matrix(0.3827 -0.9239 0.9239 0.3827 -22.4458 34.9959)" cx="15" cy="34.3" rx="1.9" ry="1.9"/>
				<ellipse transform="matrix(0.3827 -0.9239 0.9239 0.3827 -6.9611 112.8424)" cx="81" cy="61.6" rx="1.9" ry="1.9"/>
				<ellipse transform="matrix(0.9239 -0.3827 0.3827 0.9239 -22.4458 10.4181)" cx="15" cy="61.6" rx="1.9" ry="1.9"/>
				<ellipse transform="matrix(0.9239 -0.3827 0.3827 0.9239 -6.9611 33.5924)" cx="81" cy="34.3" rx="1.9" ry="1.9"/>
				<ellipse transform="matrix(0.3827 -0.9239 0.9239 0.3827 -53.6267 81.6615)" cx="34.3" cy="81" rx="1.9" ry="1.9"/>
				<ellipse transform="matrix(0.3827 -0.9239 0.9239 0.3827 24.2198 66.1769)" cx="61.6" cy="15" rx="1.9" ry="1.9"/>
			</g>
			<g className="balls-4">
				<ellipse transform="matrix(0.9808 -0.1951 0.1951 0.9808 -3.083 8.6549)" cx="42.4" cy="20" rx="2.2" ry="2.2"/>
				<ellipse transform="matrix(0.9808 -0.1951 0.1951 0.9808 -13.7877 11.9022)" cx="53.5" cy="75.9" rx="2.2" ry="2.2"/>
				<ellipse transform="matrix(0.5556 -0.8315 0.8315 0.5556 -15.9267 34.425)" cx="24.2" cy="32.1" rx="2.2" ry="2.2"/>
				<ellipse transform="matrix(0.5556 -0.8315 0.8315 0.5556 -21.1999 87.965)" cx="71.7" cy="63.8" rx="2.2" ry="2.2"/>
				<ellipse transform="matrix(0.9808 -0.1951 0.1951 0.9808 -10.059 4.9262)" cx="20" cy="53.5" rx="2.2" ry="2.2"/>
				<ellipse transform="matrix(0.9808 -0.1951 0.1951 0.9808 -6.8118 15.6309)" cx="75.9" cy="42.4" rx="2.2" ry="2.2"/>
				<ellipse transform="matrix(0.5556 -0.8315 0.8315 0.5556 -45.3333 58.5583)" cx="32.1" cy="71.7" rx="2.2" ry="2.2"/>
				<ellipse transform="matrix(0.5556 -0.8315 0.8315 0.5556 8.2067 63.8316)" cx="63.8" cy="24.2" rx="2.2" ry="2.2"/>
				<ellipse transform="matrix(0.8315 -0.5556 0.5556 0.8315 -8.0548 21.9248)" cx="32.1" cy="24.2" rx="2.2" ry="2.2"/>
				<ellipse transform="matrix(0.8315 -0.5556 0.5556 0.8315 -29.0718 47.5341)" cx="63.8" cy="71.7" rx="2.2" ry="2.2"/>
				<ellipse transform="matrix(0.1951 -0.9808 0.9808 0.1951 -25.5003 53.7197)" cx="20" cy="42.4" rx="2.2" ry="2.2"/>
				<ellipse transform="matrix(0.1951 -0.9808 0.9808 0.1951 8.6295 117.572)" cx="75.9" cy="53.5" rx="2.2" ry="2.2"/>
				<ellipse transform="matrix(0.8315 -0.5556 0.5556 0.8315 -31.3679 24.221)" cx="24.2" cy="63.8" rx="2.2" ry="2.2"/>
				<ellipse transform="matrix(0.8315 -0.5556 0.5556 0.8315 -5.7586 45.238)" cx="71.7" cy="32.1" rx="2.2" ry="2.2"/>
				<ellipse transform="matrix(0.1951 -0.9808 0.9808 0.1951 -40.3615 102.7108)" cx="42.4" cy="75.9" rx="2.2" ry="2.2"/>
				<ellipse transform="matrix(0.1951 -0.9808 0.9808 0.1951 23.4908 68.581)" cx="53.5" cy="20" rx="2.2" ry="2.2"/>
			</g>
			<g className="balls-5">
				<circle cx="48" cy="27.8" r="2.4"/>
				<circle cx="48" cy="68.1" r="2.4"/>
				<ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -13.9539 33.6877)" cx="33.7" cy="33.7" rx="2.4" ry="2.4"/>
				<ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -25.7793 62.2367)" cx="62.2" cy="62.2" rx="2.4" ry="2.4"/>
				<circle cx="27.8" cy="48" r="2.4"/>
				<circle cx="68.1" cy="48" r="2.4"/>
				<ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -34.1411 42.0495)" cx="33.7" cy="62.2" rx="2.4" ry="2.4"/>
				<ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -5.5921 53.8749)" cx="62.2" cy="33.7" rx="2.4" ry="2.4"/>
				<ellipse transform="matrix(0.9239 -0.3827 0.3827 0.9239 -8.1543 17.6292)" cx="40.2" cy="29.3" rx="2.4" ry="2.4"/>
				<ellipse transform="matrix(0.9239 -0.3827 0.3827 0.9239 -21.2526 26.3813)" cx="55.7" cy="66.6" rx="2.4" ry="2.4"/>
				<ellipse transform="matrix(0.3827 -0.9239 0.9239 0.3827 -19.0795 51.9194)" cx="29.3" cy="40.2" rx="2.4" ry="2.4"/>
				<ellipse transform="matrix(0.3827 -0.9239 0.9239 0.3827 -10.3274 95.919)" cx="66.6" cy="55.7" rx="2.4" ry="2.4"/>
				<ellipse transform="matrix(0.9239 -0.3827 0.3827 0.9239 -19.0795 15.4561)" cx="29.3" cy="55.7" rx="2.4" ry="2.4"/>
				<ellipse transform="matrix(0.9239 -0.3827 0.3827 0.9239 -10.3274 28.5544)" cx="66.6" cy="40.2" rx="2.4" ry="2.4"/>
				<ellipse transform="matrix(0.3827 -0.9239 0.9239 0.3827 -36.7032 78.2952)" cx="40.2" cy="66.6" rx="2.4" ry="2.4"/>
				<ellipse transform="matrix(0.3827 -0.9239 0.9239 0.3827 7.2963 69.5432)" cx="55.7" cy="29.3" rx="2.4" ry="2.4"/>
			</g>
			<g className="balls-6">
				<circle cx="48" cy="37.3" r="2.7"/>
				<circle cx="48" cy="58.6" r="2.7"/>
				<ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -16.743 40.4212)" cx="40.4" cy="40.4" rx="2.7" ry="2.7"/>
				<ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -22.9902 55.5032)" cx="55.5" cy="55.5" rx="2.7" ry="2.7"/>
				<circle cx="37.3" cy="48" r="2.7"/>
				<ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -27.4076 44.8386)" cx="40.4" cy="55.5" rx="2.7" ry="2.7"/>
				<ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -12.3256 51.0858)" cx="55.5" cy="40.4" rx="2.7" ry="2.7"/>
				<circle cx="58.6" cy="48" r="2.7"/>
			</g>
			</svg>
			</div>
		);
	}
}


export default ReactTimeout(Logo)