import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MD5 } from 'crypto-js';

//import ReactTimeout from 'react-timeout';

//API
import { insertFile } from '../../../api/files/methods.js';

//import '../sass/components/logo.scss';
import '../../sass/components/common/inputs.scss';
import '../../sass/components/common/buttons.scss';

export default class FileUpload extends Component {

	constructor (props) {
		super(props);
		// TODO Props
		// dragAndDrop : true
		// button : true
		// multiple : false
		this.state = {
			dragLabel : 'Drag a file to upload',
			buttonLabel : 'Click to Upload a file',
			progress : 0
		};

	}

	uploadFile (file) {

		let uploader = new Slingshot.Upload("imageUpload");

		let reader = new FileReader();
		let md5 = '';
		reader.onload = function(event) {
			md5 = MD5(event.target.result).toString();
			console.log(md5);
		};

		reader.readAsBinaryString(file);

		let fileObj = {
			ownerId : Meteor.userId(),
			pageId : this.props.page._id,
			name : file.name,
			size : file.size,
			type : file.type,
			hash : md5
		};

		let uploadPromise = new Promise( (resolve, reject)=> {
			uploader.send(file,  (err, res)=> {
				if (err) {
					console.error('Error uploading', uploader.xhr.response);
					reject(err);
				}
				else {
					resolve(res);
				}
			});
		});

		uploadPromise.then( (url)=> {
			return new Promise( (resolve, reject)=> {
				fileObj.url = url;
				insertFile.call({file: fileObj}, (err, res)=> {
					if(err) {
						console.log(err);
						reject(err);
					} else {
						resolve(res);
					}
				});
			});

		}).then( (fileId)=> {
			if(this.props.onFileUpload) {
				this.props.onFileUpload(fileId);
			}
		});

	}

	handleOnChange (event) {
		this.setState({
			buttonLabel : event.target.value.split( '\\' ).pop()
		});

		let input = this.refs.fileInput;
		this.uploadFile(input.files[0]);
	}

	renderProgress () {

	}

	render () {
		return (
			<div>
				<div>
					<div className="ds-empty-content light">{this.state.dragLabel}</div>
				</div>
				<div>
					<span>or</span>
				</div>
				<div>
					<input
						ref="fileInput"
						onChange={this.handleOnChange.bind(this)}
						type="file"
						name="file"
						id="file"
					/>
					<label className="button" htmlFor="file"><span className="label">{this.state.buttonLabel}</span></label>
				</div>
			</div>
		);
	}

}
