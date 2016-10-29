import React, { Component, PropTypes } from 'react';
import ContentEditable from 'react-contenteditable';
import { _ } from 'meteor/underscore';

//Components
import EditOptions from '../Common/EditOptions.js';

//API
import { updateWidgetContent } from '../../../api/widgets/methods.js';

export default class Paragraph extends Component {

	constructor (props) {
		super(props);
		this.state = {
			content: props.widget.content || 'This is a Paragraph Widget'
		};

		this.throttledUpdate = _.throttle(value => {
			if (value) {
				updateWidgetContent.call({
					widgetId: this.props.widget._id,
					content: value
				}, (err) => {
					if (err) {
						console.log(err);
					}
				});
			}
		},300);

	}

	updateContent(event) {
		this.setState({content: event.target.value});
		this.throttledUpdate(event.target.value);
	}

	render () {
		return (
			<ContentEditable
				spellcheck={false}
				className="content"
				tagName="p"
				html={this.state.content} // innerHTML of the editable div
				disabled={false}       // use true to disable edition
				onChange={this.updateContent.bind(this)} // handle innerHTML change
			/>
		);
	}
}