import React, { Component, PropTypes } from 'react';

import EmptyContent from '../Common/EmptyContent';

export default class ButtonWidget extends Component {

	render () {
		return(<EmptyContent
			emptyContentClass="empty-button"
			emptyContentText="Add Button"
		/>);
	}
}
