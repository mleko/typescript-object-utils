import * as test from "tape";
import {shallowMerge} from "./shallowMerge";

test("Test shallow merging", (t) => {
	const base = {a: 1, b: 2, c: {}};

	t.equals(base, shallowMerge(base, {a: 1}));
	t.equals(base, shallowMerge(base, {b: 2}));
	t.notEquals(base, shallowMerge(base, {c: {}}));
	t.equals(base, shallowMerge(base, {c: shallowMerge(base.c, {})}));

	t.end();
});
