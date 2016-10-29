import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import Button from '../Common/Button';
import PlusIcon from '../../assets/icons/plus-icon.js';

import DSColorPicker from '../Common/DSColorPicker';

import '../../sass/components/common/inputs';

export default class TypographyView extends Component {

	render () {
		console.log('common typography');
		console.log(this.props);
		return (
			<div className="has-button" key="view1">
				<div className="content pane-padded">
					<div className="row">
						<label>font</label>
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
							<input type="range" min="0" max="100" value="100" />
						</div>
					</div>
					<div className="row range">
						<label className="divider"><span className="text">Color</span></label>
						<div className="color-options">
							<div className="color active"></div>
							<div className="color"></div>
							<div className="color"></div>
							<div className="color"></div>
							<div className="color"></div>
							<div className="color"></div>
							<div className="color"></div>
							<div className="color"></div>
							<div className="color"></div>
							<div className="color"></div>
							<div className="color"></div>
							<div className="color"></div>
							<div className="color"></div>
							<div className="color"></div>
							<div className="color"></div>
							<div className="color"></div>
							<div className="add-color">
								<InlineSVG src={PlusIcon} element="span" className="icon" />
							</div>
						</div>
					</div>
				</div>

				<div className="ds-pane-bottom-drawer">
					<div className="color-picker">
						<DSColorPicker />
					</div>
				</div>
				
				<div className="pane-view-actions two-actions">
					<Button
						buttonClass="medium tertiary"
						label="Cancel"
						clickEvent={this.props.hidePane}
					/>
					<Button
						buttonClass="medium"
						label="Done"
						clickEvent={this.props.hidePane}
					/>
				</div>
			</div>
		);

	}

}