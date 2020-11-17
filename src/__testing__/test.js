import jest from 'jest';
import Foo, {Bar, Baz} from '../foo.js';

test('Make sure Foo works properly', ()=>{
	expect(Foo(1, 2)).toBe('Foo: Bar: Baz: 3');
});

test('Make sure Bar works properly', ()=>{
	expect(Bar(1, 2)).toBe('Bar: Baz: 3');
});

test('Make sure Baz works properly', ()=>{
	expect(Baz(1, 2)).toBe('Baz: 3');
});
