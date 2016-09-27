import Component from 'ember-component';

export default Component.extend({
  didInsertElement() {
    this._super(...arguments);
    document.querySelector('body > .ember-view').classList = 'container';
  }
}).reopenClass({ positionalParams: ['currentRouteName'] });
