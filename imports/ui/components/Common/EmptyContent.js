import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';


import '../../sass/components/common/empty-content.scss';

export default class App extends Component {

	emptyContentClass () {
    var emptyClass = 'ds-empty-content';
    if (this.props.emptyContentClass) {
      emptyClass += ' '+this.props.emptyContentClass;
    }
    return emptyClass;
  }

  icon () {
    var icon = '';
    if (this.props.emptyContentIcon) {
        icon = (<InlineSVG src={this.props.emptyContentIcon} element="span" className="icon" />);
    }
    return icon;
  }

	render () {

		return (
			<div>
				<div className={this.emptyContentClass()}>
					{this.icon()}
					<span className="text">{this.props.emptyContentText}</span>
				</div>
			</div>
		);

	}
}