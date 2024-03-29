import {UndefinableParameters} from '../../../dist/ensure/undefinable.js';
import {BooleanParameters} from '@axiona/boolean/ensure/boolean.js';

it(`undefined `, () => {

    const value = undefined;
    expect(UndefinableParameters(value, BooleanParameters)).toBeUndefined();
    expect(value).toBeUndefined();
});
