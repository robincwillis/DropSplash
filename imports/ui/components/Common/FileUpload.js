import React, { Component } from 'react';

//import ReactTimeout from 'react-timeout';

//import '../sass/components/logo.scss';
import '../../sass/components/common/inputs.scss';
import '../../sass/components/common/buttons.scss';

export default class FileUpload extends Component {

	constructor (props) {
		super(props);
		// TODO Props
		// dragAndDrop : true
		// button : true
		//
		// multiple : false
		this.state = {
			dragLabel : 'Drag a file to upload',
			buttonLabel : 'Click to Upload a file'
		};

	}

	handleOnChange (event) {
		//Todo check for multiple and split
		this.setState({
			buttonLabel : event.target.value.split( '\\' ).pop()
		});

	}

	render () {

		console.log('render running');

		return (
			<div>
				<div>
					<div className="ds-empty-content light">{this.state.dragLabel}</div>
				</div>
				<div>
					<span>or</span>
				</div>
				<div>
					<input onChange={this.handleOnChange.bind(this)} type="file" name="file" id="file"/>
					<label className="button" htmlFor="file"><span className="label">{this.state.buttonLabel}</span></label>
				</div>
			</div>
		);
	}

}
