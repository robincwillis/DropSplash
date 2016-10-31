import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import onClickOutside  from 'react-onclickoutside';
import { DragSource, DropTarget } from 'react-dnd';
import { _ } from 'meteor/underscore';


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

import ItemTypes from '../ItemTypes';

const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move'
};

const cardSource = {
	beginDrag(props) {

		console.log('begin dragging note', props);

		return {
			id: props.widget._id,
      index: props.widget.index
		};
	}
};

const cardTarget = {
	hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.widget.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = ReactDOM.findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    props.moveWidget(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
	}
};

class EditableComponent extends Component {

	constructor (props) {
		super(props);
		this.state = {
			editing: false
		};
	}

	handleClickOutside (event) {
		this.exitEditMode(event);
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
		const {canDrop, isOver, isDragging, connectDragSource, connectDropTarget } = this.props;

		const isActive = canDrop && isOver;


		let dragStyle = isDragging ? {
			opacity : 0.5 ,
			backgroundColor : '#ffffff'
		} : {};
		let dropStyle = isOver ? {backgroundColor: 'rgba(22, 225, 185, 0.3)'} : {};
		let isActiveStyle = isActive ? {backgroundColor: 'red'} : {};
		let dragDropStyle = Object.assign({}, dragStyle, dropStyle, isActiveStyle);

		return connectDragSource(connectDropTarget(
		//return (
			<div style={dragDropStyle}>
				<div
					className={this.editableClass()}
					onClick={this.enterEditMode.bind(this)}
				>
					{this.renderWidget()}
					<EditOptions
						page={this.props.page}
						section={this.props.page}
						widget={this.props.widget}
						editing={this.state.editing}
						clickHandler={this.clickHandler.bind(this)}
					/>
				</div>
			</div>


		));

	}
}

export default _.compose(
  DragSource(ItemTypes.CARD, cardSource, connect => ({
    connectDragSource: connect.dragSource()
  })),
  DropTarget(ItemTypes.CARD, cardTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
		canDrop: monitor.canDrop()
  }))
)(onClickOutside(EditableComponent));


