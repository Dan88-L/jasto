import Ember from 'ember';
import DiffroutebubblMixin from 'testdenil/mixins/diffroutebubbl';
import { module, test } from 'qunit';

module('Unit | Mixin | diffroutebubbl');

// Replace this with your real tests.
test('it works', function(assert) {
  let DiffroutebubblObject = Ember.Object.extend(DiffroutebubblMixin);
  let subject = DiffroutebubblObject.create();
  assert.ok(subject);
});
