import Bar, {Baz} from './bar.js';

const Foo = (a, b)=>{
	return `Foo: ${Bar(a, b)}`;
}

export{
	Foo as default,
	Bar,
	Baz
}
//# sourceURL=foo.js