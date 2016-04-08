import Ember from 'ember';

export default Ember.Service.extend({
  name: null,

  signIn(name) {
    this.set('name', name);
  },
  signOut() {
    this.set('name', null);
  },
  getName() {
    return this.get('name');
  }
});
