import {merge} from "./merge";
import {shallowMerge} from "./shallowMerge";

export const mergeDeep = mergeDeepFactory(merge);
export const shallowMergeDeep = mergeDeepFactory(shallowMerge);

function mergeDeepFactory<A, B>(mrg: Merge<A, B>): Merge<A, B> {
	let mrgDeep;
	mrgDeep = <A, B>(a: A, b: B): (A & B) => {
		let r = a;
		for (const p in b) {
			if (b.hasOwnProperty(p)) {
				const v = (typeof b[p] === "object" && !Array.isArray(b[p])) ? mrgDeep(a.hasOwnProperty(p) ? a[p as any] : {}, b[p], mrg) : b[p];
				r = mrg(r, {[p]: v});
			}
		}
		return r as (A & B);
	};
	return mrgDeep;
}

export type Merge<A, B> = <A, B>(a: A, b: B) => (A & B);
