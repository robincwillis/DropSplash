import React, { Component } from 'react';


import Button from '../Common/Button';
import Color from '../Common/Color';

import '../../sass/components/common/inputs';

//API
import { updateWidgetStyles } from '../../../api/widgets/methods';

export default class TypographyView extends Component {

	constructor(props){
		super(props);
		//TODO load init styles into here to set controls
		this.state = {
			styles : {}
		};
	}

	updateStyles (styles) {
		const widgetStyles = this.props.widget.styles || {};
		const stylesObj = Object.assign(widgetStyles, styles);
		updateWidgetStyles.call({
			widgetId : this.props.widget._id,
			styles : stylesObj
		});
	}

	updateColor (color) {
		let colorStyle = {
			color : color.hex
		};
		this.updateStyles(colorStyle);
		//create color style out of colorObj
	}


	save() {
		this.updateStyles(this.state.styles);
		this.props.hidePane();
	}

	cancel() {
		this.props.hidePane();
	}


	render () {

		return (
			<div className="has-button" key="view1">
				<div className="content pane-padded">
					<div className="row">
						<label>Font</label>
						<div className="input-group">
							<input className="two-thirds" type="text" placeholder="Work Sans" />
							<input className="one-third" type="text" placeholder="Bold" />
						</div>
					</div>
					<div className="row pane-grid-row">
						<div className="col one-third">
							<label>Size</label>
							<input type="text" placeholder="40px" />
						</div>
						<div className="col one-third">
							<label>Letter</label>
							<input type="text" placeholder="0" />
						</div>
						<div className="col one-third">
							<label>Line</label>
							<input type="text" placeholder="1.333" />
						</div>
					</div>
					<div className="row pane-grid-row range">
						<div className="col one-quarter">
							<label>Opacity</label>
						</div>
						<div className="col three-quarter opacity">
							<input type="range" min="0" max="100" defaultValue="100" />
						</div>
					</div>
					<div className="row">
						<label className="divider"><span className="text">Color</span></label>
						<Color
							onSelectColor={this.updateColor.bind(this)}
							{...this.props}
						/>
					</div>
				</div>

				<div className="pane-view-actions two-actions">
					<Button
						buttonClass="medium tertiary"
						label="Cancel"
						clickEvent={this.cancel.bind(this)}
					/>
					<Button
						buttonClass="medium"
						label="Done"
						clickEvent={this.save.bind(this)}
					/>
				</div>
			</div>
		);

	}

}