import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    create() {
      var params = {
        name: this.get('name')
      };
      this.sendAction('create', params);
    }
  }
});
