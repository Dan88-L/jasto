import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('testSharepoint');
  this.route('bridge');
  this.route('densharepoint');
  this.route('denactionbubbling');
  this.route('diffroutebubbling');
  this.route('diffroutebubblinga');
});

export default Router;
