import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

//Icons

import HeadlineIcon from '../../assets/icons/headline.js';
import ParagraphIcon from '../../assets/icons/paragraph.js';
import ImageIcon from '../../assets/icons/image.js';
import VideoIcon from '../../assets/icons/play.js';
import MailIcon from '../../assets/icons/mail.js';
import TwitterIcon from '../../assets/icons/twitter.js';
import InstagramIcon from '../../assets/icons/instagram.js';
import ButtonIcon from '../../assets/icons/button.js';
import DividerIcon from '../../assets/icons/divider.js';
import MapIcon from '../../assets/icons/map.js';
import MediumIcon from '../../assets/icons/medium.js';

//Components
import Button from '../Common/Button';
import ContentType from './ContentType';

export default class App extends Component {

	render () {
		return (
			<div className="new-content-grid clearfix">
				<ContentType
					icon={HeadlineIcon}
					title="Headline"
					type="HEADLINE"

					{...this.props}
				/>
				<ContentType
					icon={ParagraphIcon}
					title="Paragraph"
					type="PARAGRAPH"
					{...this.props}
				/>
				<ContentType
					icon={ImageIcon}
					title="Image"
					type="IMAGE"
					{...this.props}
				/>
				<ContentType
					icon={VideoIcon}
					title="Video"
					type="VIDEO"
					{...this.props}
				/>
				<ContentType
					icon={VideoIcon}
					title="Audio"
					type="AUDIO"
					{...this.props}
				/>
				<ContentType
					icon={MapIcon}
					title="Map"
					type="MAP"
					{...this.props}
				/>
				<ContentType
					icon={MediumIcon}
					title="Medium"
					type="MEDIUM"
					{...this.props}
				/>
				<ContentType
					icon={ButtonIcon}
					title="Button"
					type="BUTTON"
					{...this.props}
				/>
				<ContentType
					icon={DividerIcon}
					title="Divider"
					type="DIVIDER"
					{...this.props}
				/>
				<ContentType
					icon={TwitterIcon}
					title="Twitter"
					type="TWITTER"
					{...this.props}
				/>
				<ContentType
					icon={InstagramIcon}
					title="Instagram"
					type="INSTAGRAM"
					{...this.props}
				/>
				<ContentType
					icon={MailIcon}
					title="Mailchimp"
					type="MAILCHIMP"
					{...this.props}
				/>
			</div>
		);

	}
}