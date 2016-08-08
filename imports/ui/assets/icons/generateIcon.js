import InlineSVG from 'svg-inline-react';
import React from 'react';

export default function generateIcon (src, element) {
	return class Icon extends React.Component {
		render () {
			return <InlineSVG
				src={src}
				element= {element || 'i'}
			/>;
		}
	};
}