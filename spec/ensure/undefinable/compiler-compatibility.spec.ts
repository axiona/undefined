import {UndefinableParameters} from '../../../dist/ensure/undefinable';
import {BooleanParameters} from '@alirya/boolean/ensure/boolean';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('union', () => {

    let target : undefined|boolean = <any>true;

    try {

        UndefinableParameters(target, BooleanParameters);

        let undefinable : boolean|undefined = target;
        // @ts-expect-error
        let undefined : undefined = target;
        // @ts-expect-error
        let boolean : boolean = target;

    } catch (e) {

    }
});
