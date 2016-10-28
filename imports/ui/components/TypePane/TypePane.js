import 'sass/components/common/buttons';

import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react/lib';

import Pane from 'Components/Common/Pane';
import TypePaneView from 'Components/TypePane/TypePaneView';

import 'sass/components/common/modal';

export default class App extends Component {

    constructor (props) {
        super(props);
        this.state = {
        };
    }

    clickHandler () {
        this.refs.typePane.goToNextView();
    }

    paneContent () {
        return [
            (<TypePaneView key="1" title="view 1" clickHandler={this.clickHandler.bind(this)} />),
            (<TypePaneView key="2" title="view 1" clickHandler={this.clickHandler.bind(this)} />),
            (<TypePaneView key="3" title="view 2" clickHandler={this.clickHandler.bind(this)} />),
            (<TypePaneView key="4" title="view 3" clickHandler={this.clickHandler.bind(this)} />)
        ]
    }

	render () {
		return (
			<Pane
                title="Type Pane"
                views={this.paneContent()}
                ref="typePane"
                {...this.props}
            />
		);
	}
}
