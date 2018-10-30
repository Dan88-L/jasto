import Ember from 'ember';

export default Ember.Mixin.create({
 actions: {
    displayBanner(msg) {
      alert("this is a displayBanner");
      alert(msg);
    }
  }

});
