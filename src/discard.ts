export function discard<A>(a: A, toDiscard: string | string[]): A {
	return typeof toDiscard === "string" ? discardSingle(a, toDiscard) : discardMany(a, toDiscard as string[]);
}

function discardSingle<A>(a: A, toDiscard: string): A {
	const result = {};
	const keys = Object.keys(a);
	for (const key of keys) {
		if (key !== toDiscard && a.hasOwnProperty(key)) {
			result[key] = a[key];
		}
	}
	return result as A;
}

function discardMany<A>(a: A, toDiscard: string[]): A {
	const result = {};
	const keys = Object.keys(a);
	for (const key of keys) {
		if (-1 === toDiscard.indexOf(key) && a.hasOwnProperty(key)) {
			result[key] = a[key];
		}
	}
	return result as A;
}
