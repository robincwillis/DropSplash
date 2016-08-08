import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Components
import Headline from '../Widgets/Headline.js';
import Paragraph from '../Widgets/Paragraph.js';
import Image from '../Widgets/Image.js';
import ButtonWidget from '../Widgets/Button.js';
import Divider from '../Widgets/Divider.js';

import EditOptions from './EditOptions.js';

import { WidgetTypes } from '../../../api/widgets/schema.js';

import '../../sass/components/common/input-switch.scss';

export default class EditableComponent extends Component {

	constructor (props) {
    super(props);
    this.state = {
      editing: false
    };
  }

	componentDidMount () {
    document.body.addEventListener('click', this.exitEditMode.bind(this));
  }

  componentWillUnmount () {
    document.body.removeEventListener('click', this.exitEditMode);
  }

	renderWidget () {
		switch (WidgetTypes[this.props.widget.type]) {
			case 'HEADLINE_WIDGET':
				return(<Headline {...this.props} />);
			case 'PARAGRAPH_WIDGET':
				return(<Paragraph {...this.props} />);
			case 'IMAGE_WIDGET':
				return(<Image {...this.props} />);
			case 'BUTTON_WIDGET':
				return(<ButtonWidget {...this.props} />);
			case 'DIVIDER_WIDGET':
				return(<Divider {...this.props} />);
			case 'VIDEO_WIDGET':
				return false;
			case 'AUDIO_WIDGET':
				return false;
			case 'MAP_WIDGET':
				return false;
			case 'MEDIUM_WIDGET':
				return false;
			case 'TWITTER_WIDGET':
				//EX go to a specific view
				//this.refs.addContentPane.goToView();
				return false;
			case 'INSTAGRAM_WIDGET':
				return false;
			case 'MAILCHIMP_WIDGET':
				return false;
			default :
				return false;
		}
	}

	enterEditMode () {
		if (this.state.editing === false) {
			this.setState({editing: true});
		}
	}

	exitEditMode ( event ) {
		const node = ReactDOM.findDOMNode(this);
		if(!node.contains(event.target)) {
			if (this.state.editing === true) {
				this.setState({editing: false});
			}
		}
	}

	editableClass () {
    var editableClass = 'ds-editable';
    if (this.state.editing === true) {
      editableClass += ' editing';
    }
    return editableClass;
  }

  clickHandler () {
    if (this.state.editing === true) {
			this.setState({editing: false});
		} else {
			if (this.state.editing === false) {
				this.setState({editing: true});
			}
		}
  }

	render () {
		return (
			<div>
				<div
					className={this.editableClass()}
					onClick={this.enterEditMode.bind(this)}
				>
					{this.renderWidget()}
					<EditOptions
						widget={this.props.widget}
						editing={this.state.editing}
						clickHandler={this.clickHandler.bind(this)}
					/>
				</div>
			</div>
		);

	}
}