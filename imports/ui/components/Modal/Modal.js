import 'sass/components/common/buttons';

import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react/lib';

import Pane from 'Components/Common/Pane';
import TypePaneView from 'Components/TypePane/TypePaneView';

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
            (<div>Modal Content</div>)
        ]
    }

	render () {
		return (
            <div className="ds-modal">
                <div className="v-center">
        			<Pane
                        paneClass="wide"
                        title="Modal Title"
                        views={this.paneContent()}
                        ref="typePane"
                        {...this.props}
                    />
                </div>
            </div>
		);
	}
}
