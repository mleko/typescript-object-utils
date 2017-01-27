import * as test from "tape";
import {merge} from "./merge";

test("Test merging", (t) => {
	const base = {a: 1, b: 2, c: {}};

	t.notEquals(base, merge(base, {a: 1}));
	t.equals(1, merge(base, {a: 1}).a);
	t.equals(3, merge(base, {b: 3}).b);
	t.equals(1, merge(base, {b: 3}).a);

	t.end();
});
