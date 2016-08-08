import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactDOM from 'react-dom';

//Icons
import InlineSVG from 'svg-inline-react';
import BackArrow from '../../assets/icons/arrow-2-back.js';
import CloseX from '../../assets/icons/close-x.js';


import '../../sass/components/common/pane.scss';
import '../../sass/setup/icons.scss';


export default class App extends Component {

	constructor (props) {
		super(props);
		this.state = {
			currentView: 0,
			transitionDirection: 'pane-next-transition',
			visible: this.props.visible || false
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({visible: nextProps.visible});
		//TODO close pane if we click outside of it
		// if(this.props.closeable && nextProps.visible !== this.props.visible && nextProps.visible) {
		// 	document.body.addEventListener('click', this.handleClickOutsideOfPane.bind(this));
		// }
		// if(this.props.closeable && nextProps.visible !== this.props.visible && !nextProps.visible) {
		// 	document.body.removeEventListener('click', this.handleClickOutsideOfPane);
		// }
	}

	goToViewByIndex (index) {
		this.setState({currentView: index});
	}

	goToViewById (id) {
		let currentView = this.state.currentView;
		let nextView = this.props.views.find((view) => {
			return view.id === id;
		});

		let currentViewIndex = this.props.views.map(function(view) { return view.id; }).indexOf(currentView.id);
		let nextViewIndex = this.props.views.map(function(view) { return view.id; }).indexOf(nextView.id);

		console.log(nextView);

		this.setState({
			currentView: nextViewIndex,
			transitionDirection: nextViewIndex > currentViewIndex ? 'pane-next-transition' : 'pane-prev-transition'
		});
	}

	goToNextView () {
		if (this.state.currentView < this.props.views.length - 1) {
			var currentView = this.state.currentView;
			currentView++;
			this.setState({currentView: currentView, transitionDirection: 'pane-next-transition'});
		}
	}

	goToPrevView () {
		if (this.state.currentView > 0) {
			var currentView = this.state.currentView;
			currentView--;
			this.setState({currentView: currentView, transitionDirection: 'pane-prev-transition'});
		}
	}

	showBackArrow () {
		let backArrow = '';
		if (this.state.currentView > 0) {
			backArrow = (<InlineSVG src={BackArrow} element="span" className="icon" onClick={this.goToPrevView.bind(this)} />);
		}
		return (backArrow);
	}

	handleClickOutsideOfPane (event) {
		const node = ReactDOM.findDOMNode(this);
		if(!node.contains(event.target)) {
			this.setState({visible : false});
		}
	}

	hidePane () {
		this.setState({visible : false});
	}

	showPane () {
		this.setState({visible : true});
	}

	paneClass () {
		var paneClass = 'ds-pane';
		if (this.props.paneClass) {
			paneClass += ' '+this.props.paneClass;
		}
		if (this.props.paneTabs) {
			paneClass += ' '+'has-tabs';
		}

		if (this.props.paneClass) {
			paneClass += ' '+this.props.paneClass;
		}

		return paneClass;
	}

	paneStyle () {
		var paneStyle = {
			height: this.props.paneHeight
		};
		return paneStyle;
	}

	paneTabs () {
		//TOOD
		if(this.props.paneTabs) {
			let tabs = this.props.views.map( (view, index)=> {
				let active = this.state.currentView === index ? 'active' : '';
				return (
					<div
						key={'tab-'+index}
						onClick={this.goToViewById.bind(this, view.id)}
						className={'tab ' + active}
					>
						{view.title}
					</div>
				);
			});
			return (<div className="ds-pane-tabs small-caps">{tabs}<hr/></div>);
		} else {
			return false;
		}
	}

	renderPane () {
		if(this.state.visible) {
			return (
				<div
					className={this.paneClass()}
					style={this.paneStyle()}
				>
					<div className="ds-pane-header">
						{this.showBackArrow()}
						<span className="pane-title">{this.props.title}</span>
						{this.props.closeable ? (<InlineSVG onClick={this.hidePane.bind(this)} src={CloseX} element="span" className="icon right" />
) : false}
					</div>
					<div className="ds-pane-content">
						{this.paneTabs()}
						<ReactCSSTransitionGroup
							transitionName={this.state.transitionDirection}
							transitionEnterTimeout={550}
							transitionLeaveTimeout={550}
						>
							{this.props.views[this.state.currentView].Component}
						</ReactCSSTransitionGroup>
					</div>
				</div>
			);
		} else {
			return false;
		}
	}

	render () {
		console.log(this.props.views[this.state.currentView].Component);

		return (
			<ReactCSSTransitionGroup
				transitionName='pane-transition'
				transitionAppear={true}
				transitionAppearTimeout={500}
				transitionEnterTimeout={500}
				transitionLeaveTimeout={500}
			>
				{this.renderPane()}
			</ReactCSSTransitionGroup>
		);
	}

}
