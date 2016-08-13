import React, { Component, PropTypes } from 'react';

//API
import { getMedia } from '../../../api/services/instagram.js';

//Styles
import '../../sass/components/common/instagram.scss';

export default class InstagramWidget extends Component {

	constructor (props) {
		super(props);
	}


	render () {
		//WIP DOn't touch
		// GetMedia.callPromise({
		//     val: 'hi'
		// }).then(function(result){
		//     console.log('message', result.message);
		//     console.log('val', result.val);
		// }).catch(function(err){
		//     console.log(err);
		// });

		// getMedia.call({}, (err, res) => {
		// 	if (err) {
		// 		console.log(err);
		// 	} else {
		// 		console.log(res);
		// 	}
		// });

		return(
			<div className="instagram-widget ds-grid">
				<div className="grid-item third">
					<img src="http://placehold.it/200x200" />
				</div>
				<div className="grid-item third">
					<img src="http://placehold.it/200x200" />
				</div>
				<div className="grid-item third">
					<img src="http://placehold.it/200x200" />
				</div>
				<div className="grid-item third">
					<img src="http://placehold.it/200x200" />
				</div>
				<div className="grid-item third">
					<img src="http://placehold.it/200x200" />
				</div>
				<div className="grid-item third">
					<img src="http://placehold.it/200x200" />
				</div>
				<div className="grid-item third">
					<img src="http://placehold.it/200x200" />
				</div>
				<div className="grid-item third">
					<img src="http://placehold.it/200x200" />
				</div>
				<div className="grid-item third">
					<img src="http://placehold.it/200x200" />
				</div>
				<div className="grid-item third">
					<img src="http://placehold.it/200x200" />
				</div>
				<div className="grid-item third">
					<img src="http://placehold.it/200x200" />
				</div>
				<div className="grid-item third">
					<img src="http://placehold.it/200x200" />
				</div>
			</div>
		);
	}
}
