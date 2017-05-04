export function discard<A>(a: A, keyToDiscard: string): A {
	const result = {};
	const keys = Object.keys(a);
	for (const key of keys) {
		if (key != keyToDiscard && a.hasOwnProperty(key)) {
			result[key] = a[key];
		}
	}
	return result as A;
}
