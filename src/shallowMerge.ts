import {shallowEquals} from "./shallowEquals";
export function shallowMerge<A, B>(a: A, b: B): (A & B) {
	const result = Object.assign({}, a, b);
	return shallowEquals(a, result) ? a as any : result;
}
