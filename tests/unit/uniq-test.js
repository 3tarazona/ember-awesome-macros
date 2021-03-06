import { uniq, raw } from 'ember-awesome-macros';
import { module, test } from 'qunit';
import sinon from 'sinon';
import compute from 'ember-macro-test-helpers/compute';

const retVal = 'return value';

let uniqStub;
let array;

module('Unit | Macro | uniq', {
  beforeEach() {
    uniqStub = sinon.stub().returns(retVal);
    array = { uniq: uniqStub };
  }
});

test('it returns undefined if array undefined', function(assert) {
  compute({
    assert,
    computed: uniq('array'),
    strictEqual: undefined
  });
});

test('it calls uniq on array', function(assert) {
  let { result } = compute({
    computed: uniq('array'),
    properties: {
      array
    }
  });

  assert.deepEqual(uniqStub.args, [[]]);
  assert.strictEqual(result, retVal);
});

test('composable: it calls uniq on array', function(assert) {
  let { result } = compute({
    computed: uniq(
      raw(array)
    )
  });

  assert.deepEqual(uniqStub.args, [[]]);
  assert.strictEqual(result, retVal);
});
