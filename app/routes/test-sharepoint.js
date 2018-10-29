import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    expand: function() {
      this.controller.set('isExpanded', true);
    },

    contract: function() {
      this.controller.set('isExpanded', false);
    }
  },

   model: function() {
    return {
      title: "Tomster",
      url: "http://emberjs.com/images/about/ember-productivity-sm.png"};
  },

});