import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['well'],
  actions: {
    save(questionModel, params) {
      this.sendAction('save', questionModel, params);
    },
    deleteQuestion(questionModel) {
      this.sendAction('delete', questionModel);
    }
  }
});
