import * as test from "tape";
import {pick} from "./index";

test("Test picking", (t) => {
	const base = {a: 1, b: 2, c: {}};

	t.notEquals(pick(base, Object.keys(base)), base);
	t.deepEquals(pick(base, Object.keys(base)), base);

	t.deepEquals(pick(base, ["a", "b"]), {a: 1, b: 2});
	t.deepEquals(pick(base, ["b", "c"]), {b: 2, c: {}});

	t.end();
});
