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
								<input type="radio" name="horizontal-alignment" id="align-left" />
								<label htmlFor="align-left">
									<InlineSVG src={hAlignLeft} element="span" className="icon h-align left" />
								</label>
							</li>
							<li className="tab third">
								<input type="radio" name="horizontal-alignment" id="align-center" />
								<label htmlFor="align-center">
									<InlineSVG src={hAlignCenter} element="span" className="icon h-align center" />
								</label>
							</li>
							<li className="tab third">
								<input type="radio" name="horizontal-alignment" id="align-right" />
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
									<input type="radio" name="vertical-alignment" id="align-top" />
									<label htmlFor="align-top">
										<InlineSVG src={vAlignTop} element="span" className="icon v-align top" />
									</label>
								</li>
								<li className="tab third">
									<input type="radio" name="vertical-alignment" id="align-middle" />
									<label htmlFor="align-middle">
										<InlineSVG src={vAlignMiddle} element="span" className="icon v-align middle" />
									</label>
								</li>
								<li className="tab third">
									<input type="radio" name="vertical-alignment" id="align-bottom" />
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
							<input className="lg" type="text" placeholder="600px" />
						</div>
						<div className="inline-col middle align-right one-third">
							<ul className="toggle-tabs">
								<li className="tab half">
									<input checked="checked" type="radio" name="width-unit" id="px" />
									<label htmlFor="px"><span>px</span></label>
								</li>
								<li className="tab half">
									<input type="radio" name="width-unit" id="%" />
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