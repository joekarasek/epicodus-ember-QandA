import Ember from 'ember';

export default Ember.Component.extend({
  showQuestionForm: false,
  actions: {
    showQuestionForm() {
      this.set('showQuestionForm', true);
    },
    hideQuestionForm() {
      this.set('showQuestionForm', false);
    },
    save() {
      if(this.get('author') && this.get('question')) {
        var params = {
          author: this.get('author'),
          question: this.get('question'),
          body: this.get('body') ? this.get('body') : ""
        };
        this.set('showQuestionForm', false);
        this.sendAction('save', params);
      } else {
        alert('You must enter a question and author name to submit a new question.');
      }
    }
  }
});
