const Bar = (a, b)=>{
	return `Bar: ${Baz(a, b)}`; 
}

const Baz = (a, b)=>{
	return `Baz: ${a + b}`
}
export {
	Bar as default,
	Baz
}

//# sourceURL=bar.js