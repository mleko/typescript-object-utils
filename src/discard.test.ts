import * as test from "tape";
import {discard} from "./discard";

test("Test discarding", (t) => {
	const base = {a: 1, b: 2, c: {}};

	t.notEquals(discard(base, "d"), base);
	t.deepEquals(discard(base, "c"), {a: 1, b: 2});
	t.deepEquals(discard(base, "b"), {a: 1, c: base.c});
	t.notEquals(discard(base, "b").c, {});

	t.deepEquals(discard(base, ["b", "c"]), {a: 1});

	t.end();
});
