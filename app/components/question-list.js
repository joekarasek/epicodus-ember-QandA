import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['question-list'],

  sortBy: ['author:asc'],
  sortedQuestions: Ember.computed.sort('questions', 'sortBy')
});
