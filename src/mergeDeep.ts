import {merge} from "./merge";
import {shallowMerge} from "./shallowMerge";

export const mergeDeep = mergeDeepFactory(merge);
export const shallowMergeDeep = mergeDeepFactory(shallowMerge);

function mergeDeepFactory<A, B>(mrg: Merge<A, B>): Merge<A, B> {
	let mrgDeep;
	mrgDeep = <MA, MB>(a: MA, b: MB): (MA & MB) => {
		let r = a;
		for (const p in b) {
			if (b.hasOwnProperty(p)) {
				const v = isObject(b, p) ? mergeProperty<MA, MB>(a, b, p, mrg, mrgDeep) : b[p];
				r = mrg(r, {[p]: v});
			}
		}
		return r as (MA & MB);
	};
	return mrgDeep;
}

function mergeProperty<A, B>(a: A, b: B, p, mrg: Merge<A, B>, mrgDeep): (A & B) {
	if (a.hasOwnProperty(p)) {
		return mrgDeep(a[p as any], b[p], mrg);
	}
	return b[p];
}

function isObject(b, p) {
	return (null !== b[p] && typeof b[p] === "object" && !Array.isArray(b[p]));
}

export type Merge<A, B> = <MA, MB>(a: MA, b: MB) => (MA & MB);
