import Ember from 'ember';
import just from '../mixins/diffroutebubbl';

export default Ember.Component.extend(just, {
 actions: {
    playMusic() {
      alert("play music");
    },

    onSelect(){
    	alert("this is component");
    	this.send('displayBanner', 'hello');
    },

    ondenil(){

    	alert('hellow world');
    }
  },

});