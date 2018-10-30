import Ember from 'ember';
import just from '../mixins/diffroutebubbl';

export default Ember.Route.extend(just, {
 actions: {
    playMusic() {
      alert("play music");
    },

    onS(){
    	//this.send('displayBanner', 'hello');
    	this.send('ondenil');

    }
  },

});

// `WelcomeRoute`, when active, will be able to respond
// to both actions, since the actions hash is merged rather
// then replaced when extending mixins / parent classes.



