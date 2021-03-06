import React, { Component, PropTypes } from 'react';
import ContentEditable from '../Common/ContentEditable';
import { _ } from 'meteor/underscore';

//Components
//import EditOptions from '../Common/EditOptions.js';

//API
import { updateWidgetContent } from '../../../api/widgets/methods.js';

export default class Headline extends Component {

	constructor (props) {
		super(props);
		this.state = {
			content: props.widget.content || 'The Splash Title'
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
		const widgetStyles = this.props.widget.styles || {};
		const style = Object.assign({},widgetStyles);
		return (
			<ContentEditable
				style={style}
				className="content"
				tagName="h1"
				html={this.state.content} // innerHTML of the editable div
				disabled={false}       // use true to disable edition
				onChange={this.updateContent.bind(this)} // handle innerHTML change
			/>
		);
	}
}