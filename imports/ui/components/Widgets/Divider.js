import React, { Component, PropTypes } from 'react';

import '../../sass/components/common/widgets/hr.scss';

export default class Divider extends Component {

	render () {
		let styles = {
			minWidth: "100px",
			height: "2px",
			background: "#333",
			marginTop: "3px",
			marginBottom: "3px"
		};
		return(<hr style={styles} className="ds-hr" />);
	}
}
