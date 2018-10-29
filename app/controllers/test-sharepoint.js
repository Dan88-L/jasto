import Ember from 'ember';

export default Ember.Controller.extend({


    isExpanded: false,

    


	actions: {
        onSelect(params){
            alert(params);
            alert(title);
            alert(url);
        },

        expand: function() {
            this.set('isExpanded', true);

        },

        contract: function() {
            this.set('isExpanded', false);
        },
    }




});
