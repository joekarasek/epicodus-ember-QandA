import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['special', 'well'],
  totalAnswers: Ember.computed('question.answers', function() {
    return this.get('question.answers').get('length');
  })
});
