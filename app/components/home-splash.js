import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showQuestionForm() {
      this.sendAction('showQuestionForm');
    }
  }
});
