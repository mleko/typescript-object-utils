import * as test from "tape";
import {shallowEquals} from "./shallowEquals";

test("Test shallow comparision", (t) => {
	const base = {a: 1, b: 2};

	t.notEquals(base, {a: 1, b: 2});
	t.true(shallowEquals(base, {a: 1, b: 2}));
	t.false(shallowEquals(base, {a: 1, b: 3}));
	t.false(shallowEquals(base, {a: 1, b: 2, c: 3}));
	t.false(shallowEquals(base, {a: 1}));

	t.end();
});
