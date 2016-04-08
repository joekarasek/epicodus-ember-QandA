import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.inject.service('current-user'),
  showQuestionForm: false,
  actions: {
    showQuestionForm() {
      this.set('showQuestionForm', true);
    },
    hideQuestionForm() {
      this.set('showQuestionForm', false);
    },
    save() {
      if(this.get('question')) {
        var params = {
          author: this.get('currentUser').getName(),
          question: this.get('question'),
          body: this.get('body') ? this.get('body') : "",
          date: Date.now()
        };
        this.set('showQuestionForm', false);
        this.sendAction('save', params);
      } else {
        alert('You must enter a question to submit.');
      }
    }
  }
});
