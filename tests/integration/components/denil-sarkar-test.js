import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('denil-sarkar', 'Integration | Component | denil sarkar', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{denil-sarkar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#denil-sarkar}}
      template block text
    {{/denil-sarkar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
