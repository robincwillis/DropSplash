import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

//Icons
import PlusIcon from '../../assets/icons/plus-icon';

//Components
import Button from '../Common/Button';

export default class ContentTypes extends Component {

	handleClick ( event ) {
		console.log('clicked...');
		console.log(this.props);
		this.props.selectContentType(this.props.type);
	}

	render () {
		return (
			<div onClick={this.handleClick.bind(this)} className="content-item">
				<InlineSVG src={this.props.icon} element="span" className="icon" />
				<div className="label">{this.props.title}</div>
			</div>
		);
	}
}
