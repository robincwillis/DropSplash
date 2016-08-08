import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import '../../sass/components/common/buttons.scss';

export default class Button extends Component {

    constructor (props) {
        super(props);
        this.state = {
            buttonClass: this.props.buttonClass
        };
    }

    buttonClass () {
        var buttonClass = 'button';
        if (this.state.buttonClass) {
          buttonClass += ' '+this.state.buttonClass;
        }
        return buttonClass;
    }

    buttonLabel () {
        var label = '';
        if (this.props.label) {
            label = (<span className="label">{this.props.label}</span>);
        }
        return label;
    }

    buttonIcon () {
        var icon = '';
        if (this.props.icon) {
            icon = (<InlineSVG src={this.props.icon} element="span" className="icon" />);
        }
        return icon;
    }

    clickHandler (event) {
        this.props.clickEvent(event);
    }

	render () {
		return (
			<button
                onClick={this.clickHandler.bind(this)}
                className={this.buttonClass()}
                data-tooltip-text={this.props.tooltipText}
                data-tooltip-position={this.props.tooltipPosition}
                {...this.props.extraProps}
            >
                {this.buttonIcon()}{this.buttonLabel()}
            </button>
		);
	}
}
