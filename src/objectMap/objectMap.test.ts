import * as test from "tape";
import {objectMap} from "./index";

test("Test object mapping", (t) => {
	const result = objectMap({a: 1, b: 2}, (v: number) => {
		return String(v * 2);
	});

	t.equals(result.a, "2");
	t.equals(result.b, "4");

	t.end();
});
