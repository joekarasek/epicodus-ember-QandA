import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('question');
  },
  actions: {
    addQuestion() {
      var newQuestion = this.store.createRecord('question', {
        author: "Joe MaMa",
        body: "This really puzzles me a lot, it would be great if someone can figure it out for me!",
        question: "If 'i' is an imaginary number, how come I can hold my iPhone?"
      });
      newQuestion.save();
    }
  }
});
