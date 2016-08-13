import React, { Component, PropTypes } from 'react';

export default class Divider extends Component {

	render () {
		let styles = {
			minWidth: 100,
			borderBottom: '1px solid black',
			borderTop: '1px solid transparent'
		};
		return(<hr style={styles} className="ds-hr" />);
	}
}
