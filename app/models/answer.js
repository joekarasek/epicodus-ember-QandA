import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('string'),
  body: DS.attr('string'),
  question: DS.belongsTo('queston', { async: true })
});
