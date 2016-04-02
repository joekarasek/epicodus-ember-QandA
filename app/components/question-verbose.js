import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(questionModel, params) {
      this.sendAction('save', questionModel, params);
    },
    deleteQuestion(question) {
      this.sendAction('delete', question);
    }
  }
});
