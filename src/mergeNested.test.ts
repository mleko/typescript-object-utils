import * as test from "tape";
import {mergeNested, shallowMergeNested} from "./mergeNested";

test("Test merging nested", (t) => {
	const base = {a: 1, b: 2, c: {d: 4, f: {g: 6, h: 8}}};

	t.notEquals(mergeNested(base, {a: 1}), base);

	t.notEquals(mergeNested(base, {c: {d: 5}}), base);
	t.equals(mergeNested(base, {c: {d: 5}}).c.d, 5);

	t.notEquals(mergeNested(base, {c: {e: 5}}), base);
	t.equals(mergeNested(base, {c: {e: 5}}).c.d, 4);
	t.equals(mergeNested(base, {c: {e: 5}}).c.e, 5);
	t.equals(mergeNested(base, {c: {e: 5}}).a, 1);

	t.equals(mergeNested(base, {c: {f: {g: 7}}}).c.f.g, 7);
	t.equals(mergeNested(base, {c: {f: {g: 7}}}).c.f.h, 8);

	t.end();
});

test("Test shallowMerging nested", (t) => {
	const base = {a: 1, b: 2, c: {d: 4, f: {g: 6, h: 8}}};

	t.equals(shallowMergeNested(base, {a: 1}), base);

	t.notEquals(shallowMergeNested(base, {c: {d: 5}}), base);
	t.equals(shallowMergeNested(base, {c: {d: 5}}).c.d, 5);

	t.equals(shallowMergeNested(base, {c: {d: 4}}), base);

	t.notEquals(shallowMergeNested(base, {c: {e: 5}}), base);
	t.equals(shallowMergeNested(base, {c: {e: 5}}).c.d, 4);
	t.equals(shallowMergeNested(base, {c: {e: 5}}).c.e, 5);
	t.equals(shallowMergeNested(base, {c: {e: 5}}).a, 1);

	t.equals(shallowMergeNested(base, {c: {f: {g: 6}}}), base);
	t.equals(shallowMergeNested(base, {c: {f: {g: 7}}}).c.f.g, 7);
	t.equals(shallowMergeNested(base, {c: {f: {g: 7}}}).c.f.h, 8);

	t.end();
});
