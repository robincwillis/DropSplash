import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { DropTarget } from 'react-dnd';
import update from 'react-addons-update';

//Icons
import InlineSVG from 'svg-inline-react';
import PlusIcon from '../../assets/icons/plus-icon.js';

//Components
import Button from './Button.js';
import ContentPane from '../ContentPane/ContentPane.js';
import AddContentBetween from './AddContentBetween.js';
import BackgroundContent from './BackgroundContent.js';
import EmptyContent from './EmptyContent.js';
import SectionControls from './SectionControls.js';
import EditableComponent from './EditableComponent.js';
import ReorderControls from './ReorderSectionControls.js';

//Collections
import { Sections } from '../../../api/sections/sections.js';
import { Widgets } from '../../../api/widgets/widgets.js';
import { Pages } from '../../../api/pages/pages.js';

// Style
import '../../sass/components/common/reorder-sections';

//API
import { insertWidget, updateWidgetOrder } from '../../../api/widgets/methods.js';
import { removeSection } from '../../../api/sections/methods.js';


import ItemTypes from '../ItemTypes';

class PageSection extends Component {

	constructor (props) {
		super(props);
		//TODO if is initial section and is empty add some widgets

	}

	sectionClass () {
		var sectionClass = 'ds-page-section';
		if (this.props.alignment) {
			sectionClass += ' '+this.props.section.settings.alignment;
		}
		return sectionClass;
	}

	removeSection () {
		removeSection.call({sectionId : this.props.section._id}, (err) => {
			if (err) {
				console.log('removing section fucked');
				console.log(err);
			} else {

			}
		});
	}

	sectionStyle () {
		var sectionStyle = {
			minHeight: this.props.section.style.height
		};
		return sectionStyle;
	}

	sectionContent () {
		//should probably check loading and widgets length
		if (this.props.widgets.length === 0) {
			return (
				<div className="section-content empty">
					<div className="pane-static">
						<ContentPane section={this.props.section} closeable={false} />
					</div>
					<div>
						<span onClick={this.removeSection.bind(this)} className="small-caps link hover-red delete-empty-link">Delete Section</span>
					</div>
					<ReorderControls />
				</div>
			);
		}

		else {

			const editableComponents = this.props.widgets.map( (widget, index)=> {
				return(
					<li key={widget._id}>
						<div className="container" style={this.props.containerStyles} >
							<EditableComponent
								widget={widget}
								moveWidget={this.moveWidget.bind(this)}
							/>
							{index < this.props.widgets.length-1 ? <AddContentBetween section={this.props.section} index={index} /> : false}
						</div>
					</li>
				);
			});

			return (
				<div className="section-content">
					<ul>
						{editableComponents}
					</ul>
					<div className="add-content-below">
						<div className="container">
							<ContentPane section={this.props.section} closeable={false} />
						</div>
					</div>
					<ReorderControls />
				</div>
			);
		}
	}

	moveWidget (dragIndex, hoverIndex) {
		console.log(this.props.widgets[dragIndex].content);
		//let widgets == this.props.widgets;
		let dragWidget = this.props.widgets[dragIndex];
		let widgets = update(this.props.widgets,
			{$splice: [
				[dragIndex, 1],
				[hoverIndex, 0, dragWidget]
			]}
		).map( (widget, index)=> {
			widget.index = index;
			return widget;
		});
		//widgets.splice(dragIndex, 0).splice(hoverIndex, 0, dragWidget);
		console.log(widgets);

		updateWidgetOrder.call({
			widgets : widgets,
		},(err) => {
			if (err) {
				console.log('updated widget order barf');
				console.log(err);
			}
		});

		// set new index's on items
		// widgets.splice(hoverIndex, 0, "drum");
		// console.log('move widget called');
		// console.log(dragIndex);
		// console.log(hoverIndex);
		//get updated Order
		//call reorder function on backend

	}

	render () {
		if(this.props.loading) {
			return (<div>loading</div>);
		}

		console.log(this.props.widgets);

		return (
			<div className={this.sectionClass()} style={this.props.section.styles} >
				<SectionControls removeSection={this.removeSection.bind(this)} {...this.props} />

				{this.sectionContent()}

				<BackgroundContent
					{...this.props}
				/>
			</div>
		);
	}

}

PageSection.propTypes = {

};

const cardTarget = {
	drop(props, monitor, component ) {
		console.log('drop on list');
		console.log(props);
		const { id } = props;
		const sourceObj = monitor.getItem();
		//if ( id !== sourceObj.listId ) component.pushCard(sourceObj.card);
		return props
	}
};




export default createContainer( ({ section : {_id}, empty }) => {

	const widgetsHandle = Meteor.subscribe('widgets.inSection', _id);
	const loading = !widgetsHandle.ready();
	const section = Sections.findOne(_id);
	const sectionExists = !loading && !!section;
	//TODO if is initial section and is empty add widgets, only if page is empty
	if(	empty &&
			!loading &&
			sectionExists &&
			section.initialSection &&
			Widgets.find().count() === 0)
	{

		const sectionOptions = {
			content : 'My Awesome Widget Content'
		};
		const sectionId = insertWidget.call({
			sectionId : section._id,
			type : 'HEADLINE_WIDGET',
			options : sectionOptions
		},(err) => {
			if (err) {
				console.log('inserting widget fucked');
				console.log(err);
			}
		});
	}

	return {
		loading,
		widgets: sectionExists ? section.widgets().fetch() : []
	};
}, PageSection );

// DropTarget(ItemTypes.CARD, cardTarget, (connect, monitor) => ({
// 	connectDropTarget: connect.dropTarget(),
// 	isOver: monitor.isOver(),
// 	canDrop: monitor.canDrop()
// }))(PageSection)
