import Ember from 'ember';

export function numAnswers(params) {
  return params[0].get('answers').get('length');
}

export default Ember.Helper.helper(numAnswers);
