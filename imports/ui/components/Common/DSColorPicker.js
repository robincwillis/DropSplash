import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import SketchPicker from 'react-color';
import Alpha from 'react-color';
import Button from './Button';

import '../../sass/components/common/ds-color-picker.scss';

export default class DSColorPicker extends Component {

	constructor (props) {
		super(props);
		this.state = {
			color : this.props.color || '#ffffff'
		};
	}

	setColor (color) {
		this.setState({
			color: color
		});
	}

	render () {
		return (
			<div className="ds-pane-bottom-drawer">
				<div className="slider">
					<div className="content">
						<div className="color-picker">
							<div className="ds-color-picker">
								<Alpha
									color={ this.state.color }
									onChange={this.setColor.bind(this)}
								/>
							</div>
						</div>
					</div>
					<div className="pane-view-actions">
						<Button
							buttonClass="medium"
							label="Save Color"
							clickEvent={this.props.addColor.bind(this, this.state.color)}
						/>
					</div>
				</div>
			</div>
		);
	}
}
