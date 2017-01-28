import {merge} from "./merge";
import {shallowMerge} from "./shallowMerge";

export const mergeNested = mergeNestedFactory(merge);
export const shallowMergeNested = mergeNestedFactory(shallowMerge);

function mergeNestedFactory<A,B>(mrg: Merge<A,B>): Merge<A,B> {
	let mrgDeep;
	mrgDeep = <A, B>(a: A, b: B): (A & B) => {
		let r = a;
		for (let p in b) {
			if (b.hasOwnProperty(p)) {
				let v = typeof b[p] === "object" ? mrgDeep(a.hasOwnProperty(p) ? a[p as any] : {}, b[p], mrg) : b[p];
				r = mrg(r, {[p]: v});
			}
		}
		return r as (A & B);
	};
	return mrgDeep;
}

export interface Merge<A,B> {
	<A, B>(a: A, b: B): (A & B)
}
