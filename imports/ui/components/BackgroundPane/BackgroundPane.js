import React, { Component } from 'react';

import Pane from '../Common/Pane.js';

import ImageBackground from './ImageBackgroundView.js';
import VideoBackground from './VideoBackgroundView.js';
import ColorBackground from './ColorBackgroundView.js';
import OverlayBackground from './OverlayBackgroundView.js';

import '../../sass/components/common/buttons.scss';

export default class BackgroundPane extends Component {

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
            {
                id : 'background-image-view',
                title : 'Image',
                Component : ImageBackground,
                props : {
                    key:"1",
                    title:"view 1",
                    clickHandler: this.clickHandler.bind(this),
                    page: this.props.page,
                    section : this.props.section
                }
            },
            {
                id : 'background-video-view',
                title : 'Video',
                Component : VideoBackground,
                props : {
                    key:"2",
                    title:"view 2",
                    clickHandler: this.clickHandler.bind(this)
                }
            },
            {
                id : 'background-color-view',
                title : 'Color',
                Component : ColorBackground,
                props : {
                    key:"3",
                    title:"view 3",
                    clickHandler: this.clickHandler.bind(this),
                    page: this.props.page,
                    section : this.props.section
                }
            },
            {
                id : 'background-overlay-view',
                title : 'Overlay',
                Component : OverlayBackground,
                props : {
                    key:"4",
                    title:"view 4",
                    clickHandler: this.clickHandler.bind(this)
                }
            }

        ];
    }

	render () {
		return (
			<Pane
                paneClass="wide"
                paneTabs={true}
                closeable={true}
                visible={this.props.visible}
                title="Background"
                contentMaxHeight="245px"
                contentMinHeight="245px"
                views={this.paneContent()}
                ref="backgroundPane"
                {...this.props}
            />
		);
	}
}
