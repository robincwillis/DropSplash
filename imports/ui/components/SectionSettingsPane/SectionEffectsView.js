import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

//Icons
import PlusIcon from '../../assets/icons/plus-icon.js';

//Components
import Button from '../Common/Button.js';


import '../../sass/components/common/inputs';
import '../../sass/components/common/options-list';

export default class SectionEffectsView extends Component {

	constructor (props) {
		super(props);
	}

	render () {

		return (
			<div key="view1">
				<div className="pane-content-wrap">
					<div className="content">
						<ul className="options-list">
							<li>
								<input type="radio" id="none" name="entrance-transition" />
								<label htmlFor="none">
									<div className="icon fx">
										<img src="http://stage.mattgordils.com/temp/none.gif" />
									</div>
									<div className="description">
										<div>
											<h6>None</h6>
											<p>No transitions, just content</p>
										</div>
									</div>
								</label>
							</li>
							<li>
								<input type="radio" id="fade-in" name="entrance-transition" />
								<label htmlFor="fade-in">
									<div className="icon fx">
										<img src="http://stage.mattgordils.com/temp/fade-in.gif" />
									</div>
									<div className="description">
										<div>
											<h6>Fade In</h6>
											<p>Content fades in</p>
										</div>
									</div>
								</label>
							</li>
							<li>
								<input type="radio" id="stagger-in" name="entrance-transition" />
								<label htmlFor="stagger-in">
									<div className="icon fx">
										<img src="http://stage.mattgordils.com/temp/stagger-in.gif" />
									</div>
									<div className="description">
										<div>
											<h6>Stagger In</h6>
											<p>Content fades in and slides up</p>
										</div>
									</div>
								</label>
							</li>
							<li>
								<input type="radio" id="scale" name="entrance-transition" />
								<label htmlFor="scale">
									<div className="icon fx">
										<img src="http://stage.mattgordils.com/temp/scale.gif" />
									</div>
									<div className="description">
										<div>
											<h6>Scale</h6>
											<p>Content fades in and scales up</p>
										</div>
									</div>
								</label>
							</li>
						</ul>
					</div>
					<div className="pane-view-actions">
						<Button
							buttonClass="medium tertiary"
							label="Edit account info"
							clickEvent={this.props.clickHandler}
						/>
					</div>
				</div>
			</div>
		);

	}

}