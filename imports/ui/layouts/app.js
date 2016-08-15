import React from 'react';

export default AppLayout = ({content, settings, footer}) => (
		<div>
			<main className="app-content">
				{content}
			</main>
			<div className="app-settings">
				{settings}
			</div>
			<footer className="app-footer">
				{footer}
			</footer>
		</div>
);
