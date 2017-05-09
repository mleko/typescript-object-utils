import {merge} from "typescript-object-utils";

const a = merge({a: 1}, {b: 2});

if (a.a !== 1 || a.b !== 2) {
	throw "Merge failed";
}
