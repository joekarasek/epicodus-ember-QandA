import Ember from 'ember';

export default Ember.Component.extend({
  showEditForm: false,
  actions: {
    showEditForm() {
      this.set('showEditForm', true);
    },
    save(questionModel) {
      var params = {
        author: this.get('item.author'),
        question: this.get('item.question'),
        body: this.get('item.body')
      };
      this.set('showEditForm', false);
      this.sendAction('save', questionModel, params);
    }
  }
});
