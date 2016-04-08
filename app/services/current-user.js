import Ember from 'ember';

export default Ember.Service.extend({
  currentUser: null,

  signIn(name) {
    this.set('currentUser', name);
  },
  signOut() {
    this.set('currentUser', null);
  }
});
