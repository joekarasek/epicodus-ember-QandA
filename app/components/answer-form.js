import Ember from 'ember';

export default Ember.Component.extend({
  showAnswerForm: false,
  actions: {
    showAnswerForm() {
      this.set('showAnswerForm', true);
    },
    hideAnswerForm() {
      this.set('showAnswerForm', false);
    },
    save() {
      if(this.get('author') && this.get('body')) {
        var params = {
          author: this.get('author'),
          body: this.get('body'),
          question: this.get('question')
        };
        this.set('showAnswerForm', false);
        this.sendAction('save', params);
      } else {
        alert('You must fill in both fields to submit an answer to this question.');
      }
    }
  }
});
