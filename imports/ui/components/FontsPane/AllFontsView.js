import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

//Icons
import PlusIcon from '../../assets/icons/plus-icon.js';

//Components
import Button from '../Common/Button.js';

export default class AllFontsView extends Component {

	constructor (props) {
		super(props);
	}

	render () {
		console.log('all fonts view')
		return (
			<div key="view1">
				<div className="pane-content-wrap">
					<div className="content">
						<ul className="options-list font-list">
							<li>
								<input type="radio" id="bagnard" name="font" />
								<label htmlFor="bagnard">
									<h6 className="font-title bagnard"><span>Bagnard</span></h6>
									<span className="font-style-count">1 Style</span>
								</label>
							</li>
							<li>
								<input type="radio" id="bagnard-sans" name="font" className="checked" />
								<label htmlFor="bagnard-sans">
									<h6 className="font-title bagnard-sans"><span>Bagnard Sans</span></h6>
									<span className="font-style-count">1 Style</span>
								</label>
							</li>
							<li>
								<input type="radio" id="cormorant-garamond" name="font" />
								<label htmlFor="cormorant-garamond">
									<h6 className="font-title cormorant-garamond"><span>Cormorant Garamond</span></h6>
									<span className="font-style-count">10 Styles</span>
								</label>
							</li>
							<li>
								<input type="radio" id="cotham-sans" name="font" />
								<label htmlFor="cotham-sans">
									<h6 className="font-title cotham-sans"><span>Cotham Sans</span></h6>
									<span className="font-style-count">1 Styles</span>
								</label>
							</li>
							<li>
								<input type="radio" id="libre-franklin" name="font" />
								<label htmlFor="libre-franklin">
									<h6 className="font-title libre-franklin"><span>Libre Franklin</span></h6>
									<span className="font-style-count">18 Styles</span>
								</label>
							</li>
							<li>
								<input type="radio" id="merriweather" name="font" />
								<label htmlFor="merriweather">
									<h6 className="font-title merriweather"><span>Merriweather</span></h6>
									<span className="font-style-count">8 Styles</span>
								</label>
							</li>
							<li>
								<input type="radio" id="merriweather-sans" name="font" />
								<label htmlFor="merriweather-sans">
									<h6 className="font-title merriweather-sans"><span>Merriweather Sans</span></h6>
									<span className="font-style-count">GET FONT</span>
								</label>
							</li>
							<li>
								<input type="radio" id="questa" name="font" />
								<label htmlFor="questa">
									<h6 className="font-title questa"><span>Questa</span></h6>
									<span className="font-style-count">4 Styles</span>
								</label>
							</li>
							<li>
								<input type="radio" id="roboto" name="font" />
								<label htmlFor="roboto">
									<h6 className="font-title roboto"><span>Roboto</span></h6>
									<span className="font-style-count">12 Styles</span>
								</label>
							</li>
							<li>
								<input type="radio" id="work-sans" name="font" />
								<label htmlFor="work-sans">
									<h6 className="font-title work-sans"><span>Work Sans</span></h6>
									<span className="font-style-count">10 Styles</span>
								</label>
							</li>
							<li>
								<input type="radio" id="young-serif" name="font" />
								<label htmlFor="young-serif">
									<h6 className="font-title young-serif"><span>Young Serif</span></h6>
									<span className="font-style-count">1 Style</span>
								</label>
							</li>
						</ul>
					</div>
					<div className="pane-view-actions two-actions">
						<Button
							buttonClass="medium tertiary"
							label="Cancel"
						/>
						<Button
							buttonClass="medium"
							label="Done"
						/>
					</div>
				</div>
			</div>
		);

	}

}