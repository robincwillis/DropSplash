import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import InlineSVG from 'svg-inline-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//Components
import DSColorPicker from './DSColorPicker';


//Icons
import PlusIcon from '../../assets/icons/plus-icon.js';
import ColorCirlce from '../../assets/icons/color-circle.js';

//API
import { Pages } from '../../../api/pages/pages.js';
import { addColor, removeColor } from '../../../api/pages/methods.js';

class ColorView extends Component {

	constructor (props) {
		super(props);
		this.state = {
			colorPickerVisible : false
		};
	}

	showColorPicker () {
		this.setState({
			colorPickerVisible: true
		});
	}

	hideColorPicker () {
		this.setState({
			colorPickerVisible: false
		});
	}

	addColor (color) {
		let colorObj = {
			hex : color.hex,
			rgb : color.rgb,
			alpha : color.rgb.a
		};
		addColor.call({
			pageId : this.props.page._id,
			color : colorObj
		}, (err, res)=> {
			if(err) {
				console.log(err);
			} else {
				console.log(res);
				this.hideColorPicker();
			}
		});
	}

	removeColor () {

	}

	selectColor (color) {
		if(this.props.onSelectColor) {
			this.props.onSelectColor(color);
		}
	}

	colorClass () {
		var colorClass = 'color';
		// if (this.props.paneClass) {
		// 	paneClass += ' '+this.props.paneClass;
		// }

		// if (this.props.paneClass) {
		// 	paneClass += ' '+this.props.paneClass;
		// }

		return colorClass;
	}

	activeColor () {
		//TODO deep compare or object string compare
	}

	renderColorPicker () {
		if (this.state.colorPickerVisible) {
			return (
				<div>
					<ReactCSSTransitionGroup
						transitionName='pane-drawer'
						transitionAppear={true}
						transitionAppearTimeout={500}
						transitionEnterTimeout={500}
						transitionLeaveTimeout={500}
					>
						<DSColorPicker
							addColor={this.addColor.bind(this)}
						/>
					</ReactCSSTransitionGroup>
				</div>
			);
		}
		else {
			return false;
		}
	}

	render () {
		if(!this.props.page) {
			console.error('Need a page for color picker');
		}

		return (
			<div className="color-view">
				<div className="color-options">
					{this.props.page.colors.map( (color, index) => {
						return(
							<div onClick={this.selectColor.bind(this, color)} key={"col-"+index} className={this.colorClass()} style={{ background: color.hex }}>
								<InlineSVG src={ColorCirlce} element="span" className="icon" />
							</div>
						);
					})}
					<div className="color add-color" onClick={this.showColorPicker.bind(this)}>
						<InlineSVG src={ColorCirlce} element="span" className="icon" />
						<InlineSVG src={PlusIcon} element="span" className="plus-icon" />
					</div>
				</div>
				{this.renderColorPicker()}
			</div>
		);
	}
}
//page : {_id}
export default createContainer( () => {

	const page = Pages.findOne({ownerId : Meteor.userId()});

	return {
		page : page
  };
}, ColorView );