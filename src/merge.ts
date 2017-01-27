import "es6-shim";

export function merge<A, B>(a: A, b: B): (A & B) {
	return Object.assign({}, a, b);
}
