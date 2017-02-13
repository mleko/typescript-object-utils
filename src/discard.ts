export function discard<A>(a: A, keyToDiscard: string): A {
	const result = {};
	const keys = Object.keys(a);
	for (let i = 0; i < keys.length; i++) {
		let key = keys[i];
		if (key != keyToDiscard && a.hasOwnProperty(key)) {
			result[key] = a[key];
		}
	}
	return result as A;
}
