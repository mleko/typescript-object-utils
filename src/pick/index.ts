export function pick<A>(a: A, keysToPick: string[]): A {
	const result = {};
	const keys = Object.keys(a);
	for (let key of keys) {
		if (keysToPick.indexOf(key) !== -1 && a.hasOwnProperty(key)) {
			result[key] = a[key];
		}
	}
	return result as A;
}
