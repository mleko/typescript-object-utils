import * as test from "tape";
import {objectReduce} from "./index";
import {merge} from "../merge";

test("Test object reduction to object", (t) => {
	const result = objectReduce({
		a: {k: "X", v: [1, 4, 7]},
		b: {k: "Y", v: [2, 5, 7, 24]}
	}, (acc: { [id: string]: number }, value: { k: string, v: number[] }, key: string) => {
		return merge(acc, {[value.k]: value.v.reduce((a, n) => a + n)});
	}, {});

	t.equals(result.X, 12);
	t.equals(result.Y, 38);

	t.end();
});

test("Test object reduction to array", (t) => {
	const result = objectReduce({a: 1, b: 2}, (acc: { key: string, value: number }[], value: number, key: string) => {
		return acc.concat([{key, value}]);
	}, []);

	t.equals(result[0].key, "a");
	t.equals(result[0].value, 1);
	t.equals(result[1].key, "b");
	t.equals(result[1].value, 2);

	t.end();
});

test("Test object reduction to scalar", (t) => {
	const result = objectReduce({a: 1, b: 2}, (acc: number, value: number) => {
		return acc + value;
	}, 0);

	t.equals(result, 3);

	const obj = {a: 1, b: 2};
	t.equal(objectReduce(obj, (acc: number, v: number) => acc + v, 0), 3);

	t.end();
});
