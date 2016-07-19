import Ember from 'ember';
import { join } from 'ember-awesome-macros/macros';
import { module, test } from 'qunit';

const {
  get,
  A: newArray
} = Ember;

const Obj = Ember.Object.extend({
  test: join('array', ', ')
});

let obj;

module('Unit | Macro | join', {
  beforeEach() {
    obj = Obj.create({
      array: newArray(['test1', 'test2'])
    });
  }
});

test('default', function(assert) {
  assert.expect(1);

  assert.strictEqual(get(obj, 'test'), 'test1, test2');
});

test('handles property changes', function(assert) {
  assert.expect(1);

  get(obj, 'array').pushObject('test3');

  assert.strictEqual(get(obj, 'test'), 'test1, test2, test3');
});

test('handles one element', function(assert) {
  assert.expect(1);

  get(obj, 'array').popObject();

  assert.strictEqual(get(obj, 'test'), 'test1');
});
