import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.inject.service('current-user'),

  actions: {
    signIn() {
      this.get('currentUser').signIn(this.get('name'));
    }
  }
});
