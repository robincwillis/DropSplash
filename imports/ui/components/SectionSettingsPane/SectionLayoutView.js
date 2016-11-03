import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

//Icons
import hAlignLeft from '../../assets/icons/h-align-left.js';
import hAlignCenter from '../../assets/icons/h-align-center.js';
import hAlignRight from '../../assets/icons/h-align-right.js';
import vAlignTop from '../../assets/icons/v-align-top.js';
import vAlignMiddle from '../../assets/icons/v-align-middle.js';
import vAlignBottom from '../../assets/icons/v-align-bottom.js';

//Components
import Button from '../Common/Button.js';


import '../../sass/components/common/inputs';
import '../../sass/components/common/toggle-tabs';

export default class SectionLayoutView extends Component {

	constructor (props) {
		super(props);
		let widthUnit = String(this.props.section.containerStyles.maxWidth).endsWith("%") ? '%' : 'px';
		this.state = {
			widthUnit : widthUnit
		};
	}

	getWidthValue () {
		return String(this.props.section.containerStyles.maxWidth).replace('px','').replace('%','');
	}

	componentWillReceiveProps (nextProps) {
		if(nextProps.section.containerStyles.maxWidth && nextProps.section.containerStyles.maxWidth !== this.props.section.containerStyles.maxWidth ) {
			let widthUnit = String(nextProps.section.containerStyles.maxWidth).endsWith("%") ? '%' : 'px';
			this.setState({
				widthUnit : widthUnit
			});
		}
	}

	updateWidthUnit (event) {
		this.setState({
			widthUnit : event.target.value
		});
	}

	updateWidth (event) {
		let width = event.target.value;

		if(width < 0) {
			width = 0;
		}

		if(this.state.widthUnit === '%' && width > 100) {
			width = 100;
		}

		let containerStylesObj = Object.assign( this.props.section.settings, {
			'maxWidth' : width + this.state.widthUnit
		});
		this.props.updateSectionContainerStyles(containerStylesObj);
	}

	updateHorizonalAlignment (event) {
		let settingsObj = Object.assign( this.props.section.settings, {
			'alignment' : event.target.value
		});
		this.props.updateSectionSettings(settingsObj);
	}

	updateVerticalAlignment (event) {
		let settingsObj = Object.assign( this.props.section.settings, {
			'verticalAlignment' : event.target.value
		});
		this.props.updateSectionSettings(settingsObj);
	}

	render () {
		return (
			<div className="has-button" key="view1">
				<div className="content pane-padded">
					<div className="row pane-grid-row">
						<div className="inline-col middle one-third">
							<label>Horizontal</label>
						</div>
						<div className="inline-col middle align-right two-thirds">
						<ul className="toggle-tabs">
							<li className="tab third">
								<input
									onChange={this.updateHorizonalAlignment.bind(this)}
									type="radio"
									name="horizontal-alignment"
									value="left"
									id="align-left"
									checked={this.props.section.settings.alignment === 'left'}
								/>
								<label htmlFor="align-left">
									<InlineSVG src={hAlignLeft} element="span" className="icon h-align left" />
								</label>
							</li>
							<li className="tab third">
								<input
									onChange={this.updateHorizonalAlignment.bind(this)}
									type="radio"
									name="horizontal-alignment"
									value="center"
									id="align-center"
									checked={this.props.section.settings.alignment === 'center'}
								/>
								<label htmlFor="align-center">
									<InlineSVG src={hAlignCenter} element="span" className="icon h-align center" />
								</label>
							</li>
							<li className="tab third">
								<input
									onChange={this.updateHorizonalAlignment.bind(this)}
									type="radio"
									name="horizontal-alignment"
									value="right"
									id="align-right"
									checked={this.props.section.settings.alignment === 'right'}
								/>
								<label htmlFor="align-right">
									<InlineSVG src={hAlignRight} element="span" className="icon h-align right" />
								</label>
							</li>
						</ul>
						</div>
					</div>

					<div className="row pane-grid-row">
						<div className="inline-col middle one-third">
							<label>Vertical</label>
						</div>
						<div className="inline-col middle align-right two-thirds">
							<ul className="toggle-tabs">
								<li className="tab third">
									<input
										type="radio"
										name="vertical-alignment"
										onChange={this.updateVerticalAlignment.bind(this)}
										value="top"
										checked={this.props.section.settings.verticalAlignment === 'top'}
										id="align-top"
									/>
									<label htmlFor="align-top">
										<InlineSVG src={vAlignTop} element="span" className="icon v-align top" />
									</label>
								</li>
								<li className="tab third">
									<input
										type="radio"
										name="vertical-alignment"
										onChange={this.updateVerticalAlignment.bind(this)}
										value="middle"
										checked={this.props.section.settings.verticalAlignment === 'middle'}
										id="align-middle"
									/>
									<label htmlFor="align-middle">
										<InlineSVG src={vAlignMiddle} element="span" className="icon v-align middle" />
									</label>
								</li>
								<li className="tab third">
									<input
										type="radio"
										name="vertical-alignment"
										onChange={this.updateVerticalAlignment.bind(this)}
										value="bottom"
										checked={this.props.section.settings.verticalAlignment === 'bottom'}
										id="align-bottom"
									/>
									<label htmlFor="align-bottom">
										<InlineSVG src={vAlignBottom} element="span" className="icon v-align bottom" />
									</label>
								</li>
							</ul>
						</div>
					</div>

					<div className="row pane-grid-row">
						<div className="inline-col middle one-third">
							<label>Width</label>
						</div>
						<div className="inline-col middle align-right one-third">
							<input
								onChange={this.updateWidth.bind(this)}
								value={this.getWidthValue()}
								className="lg"
								type="text"
								placeholder="600"
							/>
						</div>
						<div className="inline-col middle align-right one-third">
							<ul className="toggle-tabs">
								<li className="tab half">
									<input
										onChange={this.updateWidthUnit.bind(this)}
										checked={this.state.widthUnit === 'px'}
										type="radio"
										name="width-unit"
										value="px"
										id="px"
									/>
									<label htmlFor="px"><span>px</span></label>
								</li>
								<li className="tab half">
									<input
										onChange={this.updateWidthUnit.bind(this)}
										checked={this.state.widthUnit === '%'}
										type="radio"
										name="width-unit"
										value="%"
										id="%"
									/>
									<label htmlFor="%"><span>%</span></label>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="pane-view-actions two-actions">
					<Button
						buttonClass="medium tertiary"
						label="Cancel"
						clickEvent={this.props.clickHandler}
					/>
					<Button
						buttonClass="medium"
						label="Done"
						clickEvent={this.props.clickHandler}
					/>
				</div>
			</div>
		);

	}


}