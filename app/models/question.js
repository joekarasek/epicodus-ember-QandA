import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr('string'),
  author: DS.attr('string'),
  body: DS.attr('string'),
  date: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
