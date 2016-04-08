import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    create(params) {
      // this.store.findAll('user')
      var newUser = this.store.createRecord('user', params);
      newUser.save();
    }
  }
});
