import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    goHome() {
      this.transitionTo('index');
    }
  }
});
