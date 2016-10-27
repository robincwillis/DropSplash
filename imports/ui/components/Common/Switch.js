import React, { Component } from 'react';

import '../../sass/components/common/input-switch';

export default class App extends Component {

	render () {

		return (
			<div className="switch-wrap">
				<input id="publish" type="checkbox" />
				<label htmlFor="publish">
					<div className="switch">
						<span className="text off">Unpublished</span>
						<span className="text on">Published</span>
					</div>
				</label>
			</div>
		);

	}
}