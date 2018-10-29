import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
          onSelect(params){
              alert(params);
          }
	}
});
