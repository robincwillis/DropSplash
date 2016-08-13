import React, { Component, PropTypes } from 'react';

//API
import { getMedia } from '../../../api/services/instagram.js';

//Styles
import '../../sass/components/common/instagram.scss';

export default class InstagramWidget extends Component {

	constructor (props) {
		super(props);
		this.state = {
			media : [],
			count : 9
		};
	}

	componentWillMount () {
		getMedia.callPromise({count : this.state.count}).then( (result) => {
				this.setState({
					media : result
				});
		}).catch( (err) => {
				console.log(err);
		});

	}

	render () {
		if(this.state.media.length === 0) {
			return (<div>Loading</div>);
		}

		return(
			<div className="instagram-widget ds-grid">
			{
				this.state.media.map( (item) => {
					return(
						<div key={item.id} className="grid-item third">
							<img src={item.images.standard_resolution.url} />
						</div>
					);
				} )
			}
			</div>
		);
	}
}
