export function merge<A, B>(a: A, b: B): (A & B) {
	return Object.assign({}, a, b);
}
