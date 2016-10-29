import React, { Component } from 'react';

import FileUpload from '../Common/FileUpload.js';
import Button from '../Common/Button.js';

import '../../sass/components/common/inputs.scss';

//API
import { updateSectionSettings } from '../../../api/sections/methods.js';

export default class ImageBackgroundView extends Component {

	onFileUpload (fileId) {
		console.log('onFileUpload Called');
		console.log(fileId);
		let settings = this.props.section.settings || {};
		console.log(settings);
		settings.background = {
			type : 'image',
			fileId : fileId
		};

		updateSectionSettings.call({
			sectionId : this.props.section._id,
			settings : settings
		}, (err, res)=> {
			if(err) {
				console.log(err);
			} else {
				console.log(res);
			}
		});


	}

	render () {
		console.log(this.props);

		return (
			<div className="has-button" key="view1">
				<div className="content pane-padded">
					<FileUpload
						onFileUpload={this.onFileUpload.bind(this)}
						{...this.props}
					/>
				</div>
				<div className="pane-view-actions">
					<Button
						buttonClass="medium hollow"
						label="Add Color Overlay"
						clickEvent={this.props.clickHandler}
					/>
				</div>
			</div>
		);

	}

}