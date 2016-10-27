import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Components
import HeadlineWidget from '../Widgets/Headline.js';
import ParagraphWidget from '../Widgets/Paragraph.js';
import ImageWidget from '../Widgets/Image.js';
import VideoWidget from '../Widgets/Video.js';
import AudioWidget from '../Widgets/Audio.js';
import MapWidget from '../Widgets/Map.js';
import MediumWidget from '../Widgets/Medium.js';
import ButtonWidget from '../Widgets/Button.js';
import DividerWidget from '../Widgets/Divider.js';
import TwitterWidget from '../Widgets/Twitter.js';
import InstagramWidget from '../Widgets/Instagram.js';
import MailchimpWidget from '../Widgets/Mailchimp.js';

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
				return(<HeadlineWidget {...this.props} />);
			case 'PARAGRAPH_WIDGET':
				return(<ParagraphWidget {...this.props} />);
			case 'IMAGE_WIDGET':
				return(<ImageWidget {...this.props} />);
			case 'BUTTON_WIDGET':
				return(<ButtonWidget {...this.props} />);
			case 'DIVIDER_WIDGET':
				return(<DividerWidget {...this.props} />);
			case 'VIDEO_WIDGET':
				return(<VideoWidget {...this.props} />);
			case 'AUDIO_WIDGET':
				return(<AudioWidget {...this.props} />);
			case 'MAP_WIDGET':
				return(<MapWidget {...this.props} />);
			case 'MEDIUM_WIDGET':
				return(<MediumWidget {...this.props} />);
			case 'TWITTER_WIDGET':
				//EX go to a specific view
				//this.refs.addContentPane.goToView();
				return(<TwitterWidget {...this.props} />);
			case 'INSTAGRAM_WIDGET':
				return(<InstagramWidget {...this.props} />);
			case 'MAILCHIMP_WIDGET':
				return(<MailchimpWidget {...this.props} />);
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