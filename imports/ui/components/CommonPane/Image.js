import React, { Component } from 'react';

import FileUpload from '../Common/FileUpload.js';
import Button from '../Common/Button.js';

export default class Image extends Component {

	render () {
		return (
			<div className="">
				<FileUpload {...this.props} />
				<Button label="Save or something" />
			</div>
		);
	}
}
