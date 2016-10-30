import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import SketchPicker from 'react-color';
import Alpha from 'react-color'

import '../../sass/components/common/ds-color-picker.scss';

export default class Button extends Component {

	render () {
		return (
			<div className="ds-color-picker">
                <Alpha {...this.props} />
            </div>
		);
	}
}
