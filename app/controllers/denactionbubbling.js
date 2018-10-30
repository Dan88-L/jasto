import Ember from 'ember';

export default Ember.Controller.extend({

	//Comparing with routes always the actions routes get the priority first
	//this.send sends the data and calls another action name
	//it also can call the routes actions similar in the controller

	actions:{

		playTheme() {

			this.send('playMusic', 'theme.mp3');

			// this can also pass variables and data to the routes actions
        },

        playMusic(track) {
        	alert("this is controller");
             alert(track)
        },


	},


});
