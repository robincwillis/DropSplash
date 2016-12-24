import { updateWidgetStyles } from '../../../api/widgets/methods';
import React, { Component } from 'react';

//Icons
import CheckIcon from '../../assets/icons/check.js';

//Components
import Color from '../Common/Color';
import Button from '../Common/Button.js';

// import '../../sass/components/common/color-picker.scss';
import '../../sass/components/common/inputs.scss';

import { updateSectionStyles } from '../../../api/sections/methods.js';


export default class App extends Component {

	selectColor (color) {
		let stylesObj = Object.assign(this.props.section.settings, {
			backgroundColor : color.hex
		});
		updateSectionStyles.call({
			sectionId : this.props.section._id,
			styles : stylesObj
		}, (err)=> {
			if(err){
				console.log(err);
			}
		});
	}

	render () {

		return (
			<div key="view1">
				<div className="pane-content-wrap">
					<div className="content pane-padded">
						<Color
							onSelectColor={this.selectColor.bind(this)}
							{...this.props}
						/>
					</div>
				</div>
			</div>
		);

	}

}