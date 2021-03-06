import { uniqBy, raw } from 'ember-awesome-macros';
import { module, test } from 'qunit';
import sinon from 'sinon';
import compute from 'ember-macro-test-helpers/compute';

const key = 'test key';
const retVal = 'return value';

let uniqByStub;
let array;

module('Unit | Macro | uniq by', {
  beforeEach() {
    uniqByStub = sinon.stub().returns(retVal);
    array = { uniqBy: uniqByStub };
  }
});

test('it returns undefined if array undefined', function(assert) {
  compute({
    assert,
    computed: uniqBy('array', 'key'),
    strictEqual: undefined
  });
});

test('it returns original array if key undefined', function(assert) {
  compute({
    assert,
    computed: uniqBy('array', 'key'),
    properties: {
      array: retVal
    },
    strictEqual: retVal
  });
});

test('it calls uniqBy on array', function(assert) {
  let { result } = compute({
    computed: uniqBy('array', 'key'),
    properties: {
      array,
      key
    }
  });

  assert.deepEqual(uniqByStub.args, [[key]]);
  assert.strictEqual(result, retVal);
});

test('composable: it calls uniqBy on array', function(assert) {
  let { result } = compute({
    computed: uniqBy(
      raw(array),
      raw(key)
    )
  });

  assert.deepEqual(uniqByStub.args, [[key]]);
  assert.strictEqual(result, retVal);
});
