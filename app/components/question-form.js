import Ember from 'ember';

export default Ember.Component.extend({
  showQuestionForm: false,
  actions: {
    showQuestionForm() {
      this.set('showQuestionForm', true);
    },
    save() {
      if(this.get('author') && this.get('question')) {
        var params = {
          author: this.get('author'),
          question: this.get('question'),
          note: this.get('note') ? this.get('note') : ""
        };
        this.set('showQuestionForm', false);
        this.sendAction('save', params);
      } else {
        alert('You must enter a question and author name to submit a new question.');
      }
    }
  }
});
