import {shallowEquals} from "./shallowEquals";
export function shallowMerge<A, B>(a: A, b: B): (A & B) {
	let result = Object.assign({}, a, b);
	return shallowEquals(a, result) ? a : result;
}
