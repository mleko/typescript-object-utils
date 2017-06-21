import * as test from "tape";
import {mergeDeep, shallowMergeDeep} from "./mergeDeep";

test("Test mergingDeep", (t) => {
	const base = {a: 1, b: 2, c: {d: 4, f: {g: 6, h: 8}}};

	t.notEquals(mergeDeep(base, {a: 1}), base);

	t.notEquals(mergeDeep(base, {c: {d: 5}}), base);
	t.equals(mergeDeep(base, {c: {d: 5}}).c.d, 5);

	t.notEquals(mergeDeep(base, {c: {e: 5}}), base);
	t.equals(mergeDeep(base, {c: {e: 5}}).c.d, 4);
	t.equals(mergeDeep(base, {c: {e: 5}}).c.e, 5);
	t.equals(mergeDeep(base, {c: {e: 5}}).a, 1);

	t.equals(mergeDeep(base, {c: {f: {g: 7}}}).c.f.g, 7);
	t.equals(mergeDeep(base, {c: {f: {g: 7}}}).c.f.h, 8);

	t.end();
});

test("Test shallowMergingDeep", (t) => {
	const base = {a: 1, b: 2, c: {d: 4, f: {g: 6, h: 8}}};

	t.equals(shallowMergeDeep(base, {a: 1}), base);

	t.notEquals(shallowMergeDeep(base, {c: {d: 5}}), base);
	t.equals(shallowMergeDeep(base, {c: {d: 5}}).c.d, 5);

	t.equals(shallowMergeDeep(base, {c: {d: 4}}), base);

	t.notEquals(shallowMergeDeep(base, {c: {e: 5}}), base);
	t.equals(shallowMergeDeep(base, {c: {e: 5}}).c.d, 4);
	t.equals(shallowMergeDeep(base, {c: {e: 5}}).c.e, 5);
	t.equals(shallowMergeDeep(base, {c: {e: 5}}).a, 1);

	t.equals(shallowMergeDeep(base, {c: {f: {g: 6}}}), base);
	t.equals(shallowMergeDeep(base, {c: {f: {g: 7}}}).c.f.g, 7);
	t.equals(shallowMergeDeep(base, {c: {f: {g: 7}}}).c.f.h, 8);

	t.end();
});

test("Test mergingDeep with array", (t) => {
	const base = {a: 1, b: [2, 2]};

	const result = mergeDeep(base, {b: [3]});

	t.equals(result.b.length, 1);
	t.equals(result.b[0], 3);
	t.equals(result.a, 1);
	t.notEquals(result, base);

	t.end();
});

test("Test null merge", (t) => {
	const base = {a: null, b: {c: null}};
	const result = mergeDeep(base, {b: {d: 3}});

	t.equal(result.a, null);
	t.equal(result.b.c, null);
	t.equal(result.b.d, 3);

	t.equal(mergeDeep({}, {a: null}).a, null);

	t.end();
});
