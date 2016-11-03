import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MD5 } from 'crypto-js';

//import ReactTimeout from 'react-timeout';

//API
import { insertFile } from '../../../api/files/methods.js';

//import '../sass/components/logo.scss';
import '../../sass/components/common/inputs.scss';
import '../../sass/components/common/buttons.scss';
import '../../sass/components/common/file-upload.scss';

export default class FileUpload extends Component {

	constructor (props) {
		super(props);


		this.state = {
			dragLabel : 'Drag a file to upload',
			dragOver : false,
			buttonLabel : 'Click to Upload a file',
			dragAndDrop : this.props.dragAndDrop || true,
			button : this.props.button || true,
			multiple : this.props.multiple || false,
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

	handleOnDragOver (event) {
		this.setState({
			dragOver:true
		});
		event.stopPropagation();
		return false;
	}

	handleOnDragLeave (event) {
		this.setState({
			dragOver: false
		});
		return false;
	}

	handleOnDrop (event) {
		console.log('dropped it');
		let files = event.originalEvent.dataTransfer.files;
		console.log(files);
	}

	killEvent (event) {
		event.preventDefault();
		event.stopPropagation();
		// onDrag={this.killEvent}
		// onDragEnd={this.killEvent}
		// onDragEnter={this.killEvent}
		//drag dragstart dragend dragover dragenter dragleave drop
	}


	renderProgress () {

	}

	render () {

		let dragClass = this.state.dragOver ? 'is-dragover' : '';

		return (
			<div className="file-upload">
				<div>
					<div
						className={"file-upload-drop-area ds-empty-content light " + dragClass}
						onDragOver={this.handleOnDragOver.bind(this)}
						onDragLeave={this.handleOnDragLeave.bind(this)}
						onDrop={this.handleOnDrop.bind(this)}
					>
						{this.state.dragLabel}
					</div>
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
