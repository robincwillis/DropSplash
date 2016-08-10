import React, { Component, PropTypes } from 'react';

import PlusIcon from '../../assets/icons/plus-icon';

import EmptyContent from '../Common/EmptyContent';

export default class Image extends Component {

	render () {
		return(<EmptyContent
			emptyContentClass="logo"
			emptyContentText="Drag Image Here"
			emptyContentIcon={PlusIcon}
		/>);
	}
}
