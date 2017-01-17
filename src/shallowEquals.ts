export function shallowEquals(a, b): boolean {
	if (Object.is(a, b)) {
		return true;
	}

	if (typeof a !== "object" || a === null || typeof b !== "object" || b === null) {
		return false;
	}

	let keysA = Object.keys(a);
	let keysB = Object.keys(b);

	if (keysA.length !== keysB.length) {
		return false;
	}

	// Test for A's keys different from B.
	for (let key of keysA) {
		if (!b.hasOwnProperty(key) || !Object.is(a[key], b[key])) {
			return false;
		}
	}

	return true;
}
