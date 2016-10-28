import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';


import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


import Page from './Page.js';

import { App } from '../../api/app/app.js';
import { Pages } from '../../api/pages/pages.js';


import '../sass/components/app';

//import '../sass/components/common/font-pane-view';


class AppComponent extends Component {

render () {
  if(!this.props.page) {
    return (
      <div className="loader-wrapper">
        <div className="loader">loading ******</div>
      </div>
    );
  }
  return (
    <div>
      <Page key={this.props.page._id} page={this.props.page} app={this.props.app} />
    </div>
  );
}

}



AppComponent.propTypes = {
  currentUser: PropTypes.object
};

export default createContainer( () => {

  Meteor.subscribe('pages');
  Meteor.subscribe('sections');
  Meteor.subscribe('app');
  Meteor.subscribe('user.services');

  return {
    currentUser: Meteor.user(),
    app: App.findOne(),
    page: Pages.findOne()
  };
}, DragDropContext(HTML5Backend)(AppComponent) );

