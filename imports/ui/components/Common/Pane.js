import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactDOM from 'react-dom';

//Icons
import InlineSVG from 'svg-inline-react';
import BackArrow from '../../assets/icons/arrow-2-back.js';
import CloseX from '../../assets/icons/close-x.js';


import '../../sass/components/common/pane.scss';
import '../../sass/setup/icons.scss';


export default class Pane extends Component {

	constructor (props) {
		super(props);
		this.state = {
			currentView: 0,
			currentProps: {},
			transitionDirection: 'pane-next-transition',
			visible: this.props.visible || false,
			Component : this.props.views[0].Component
		};

		this.hidePane = this.hidePane.bind(this);
		this.showPane = this.showPane.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({visible: nextProps.visible});
		//TODO close pane if we click outside of it
		if(this.props.closeable && nextProps.visible !== this.props.visible && nextProps.visible) {
			document.body.addEventListener('click', this.handleClickOutsideOfPane.bind(this));
		}
		if(this.props.closeable && nextProps.visible !== this.props.visible && !nextProps.visible) {
			document.body.removeEventListener('click', this.handleClickOutsideOfPane);
		}
	}

	currentView () {
		return this.currentView();
	}

	//Pane Navigation

	goToViewByIndex (index, props={}) {
		this.setState({
			currentView: index,
			currentProps:props
		});
		if(this.props.onChangeView) {
			this.props.onChangeView(index);
		}
	}

	goToViewById (id, props={}) {
		let currentView = this.state.currentView;
		let nextView = this.props.views.find((view) => {
			return view.id === id;
		});

		let currentViewIndex = this.props.views.map(function(view) { return view.id; }).indexOf(currentView.id);
		let nextViewIndex = this.props.views.map(function(view) { return view.id; }).indexOf(nextView.id);

		this.setState({
			currentView: nextViewIndex,
			transitionDirection: nextViewIndex > currentViewIndex ? 'pane-next-transition' : 'pane-prev-transition',
			currentProps:props
		});

		if(this.props.onChangeView) {
			this.props.onChangeView(nextViewIndex);
		}
	}

	goToNextView (props={}) {
		if (this.state.currentView < this.props.views.length - 1) {
			var currentView = this.state.currentView;
			currentView++;
			this.setState({
				currentView: currentView,
				currentProps:props,
				transitionDirection: 'pane-next-transition'
			});
			if(this.props.onChangeView) {
				this.props.onChangeView(currentView);
			}
		}
	}

	goToPrevView (props={}) {
		if (this.state.currentView > 0) {
			var currentView = this.state.currentView;
			currentView--;
			this.setState({
				currentView: currentView,
				currentProps:props,
				transitionDirection: 'pane-prev-transition'
			});
			if(this.props.onChangeView) {
				this.props.onChangeView(currentView);
			}
		}
	}

	handleClickBackArrow (event) {
		this.goToPrevView();
	}

	handleClickForwardsArrow (event) {
		this.gotToNextView();
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

	//Pane Rendering
	showBackArrow () {
		let backArrow = '';
		if (this.state.currentView > 0) {
			backArrow = (<InlineSVG src={BackArrow}
															element="span"
															className="icon"
															onClick={this.handleClickBackArrow.bind(this)}
										/>);
		}
		return (backArrow);
	}

	paneClass () {
		var paneClass = 'ds-pane';
		if (this.props.paneClass) {
			paneClass += ' '+this.props.paneClass;
		}

		if (this.props.paneTabs) {
			paneClass += ' '+'has-tabs';
			if (this.props.views.length === 4) {
				paneClass += ' '+'four-tabs';
			}
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

	test () {

	}

	paneTabs () {
		//TOOD
		if(this.props.paneTabs) {
			let tabs = this.props.views.map( (view, index)=> {
				let active = this.state.currentView === index ? 'active' : '';
				return (
					<div
						key={'tab-'+index}
						onClick={this.goToViewById.bind(this, view.id, {})}
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

		// if(!this.state.Component) {
		// 	console.log('something fucked')

		// }

		// if (!this.props.views[this.props.currentView].Component) {
		// 	return (<span data-mr-menu/>);
		// }

		let ViewComponent = this.props.views[this.state.currentView].Component;
		let viewProps = this.props.views[this.state.currentView].props || {};
		Object.assign(viewProps, this.state.currentProps);

		if(this.state.visible) {
			return (
				<ReactCSSTransitionGroup
					transitionName='pane-transition'
					transitionAppear={true}
					transitionAppearTimeout={500}
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}
				>
				<div
					className={this.paneClass()}
					style={this.paneStyle()}
				>
					<div className="ds-pane-header">
						{this.showBackArrow()}
						<span className="pane-title">{this.props.title}</span>
						{this.props.closeable ? (<InlineSVG
																			onClick={this.hidePane.bind(this)}
																			src={CloseX}
																			element="span"
																			className="icon right" />) : false}
					</div>
					<div className="ds-pane-content">
						{this.paneTabs()}
						<ReactCSSTransitionGroup
							transitionName={this.state.transitionDirection}
							transitionEnterTimeout={550}
							transitionLeaveTimeout={550}
						>
						<ViewComponent {...viewProps} />

						</ReactCSSTransitionGroup>
					</div>
				</div>
				</ReactCSSTransitionGroup>
			);
		} else {
			return false;
		}
	}

	render () {
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
