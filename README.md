# typescript-object-utils
> Immutable object manipulation methods

[![NPM](https://nodei.co/npm/typescript-object-utils.png?compact=true)](https://nodei.co/npm/typescript-object-utils/)

### Installation

Library can be installed via [npm](https://www.npmjs.com/package/typescript-object-utils).

```
$ npm install typescript-object-utils
```

### Examples 

#### shallowEquals
```
import {shallowEquals} from "typescript-object-utils";
shallowEquals({a:1,b:2}, {a:1,b:2});
 //=> true
```

#### merge
```
import {merge} from "typescript-object-utils";
const x = {a: 1, b: 2};
const y = {b: 2, c: 3};

const r = merge(x, y); r;
 //=> { a: 1, b: 2, c: 3 }
 
const s = merge(x, x); s;
 //=> {a: 1, b: 2}
x === s;
 //=> false
```

#### shallowMerge
```
import {shallowMerge} from "typescript-object-utils";
const x = {a: 1, b: 2, c: 3};
const y = {c: 5, d: 4};
const z = {a: 1, b: 2};

const r = shallowMerge(x, y); r;
 //=> { a: 1, b: 2, c: 5, d: 4 }

const s = shallowMerge(x, x); s;
 //=> { a: 1, b: 2, c: 3 }
x === s;
 //=> true

const t = shallowMerge(x, z); t;
 //=> { a: 1, b: 2, c: 3 }
x === t;
 //=> true
```

#### mergeDeep
```
import {mergeDeep} from "typescript-object-utils";
const x = {a: 1, b: {c: 3}};
const y = {b: {c: 3, d: 4}};
const z = {b: {c: 3}};

const r = mergeDeep(x, y); r;
 //=> { a: 1, b: { c: 3, d: 4 } }
 
const s = mergeDeep(x, z); s;
 //=> { a: 1, b: { c: 3 } }
x === s;
 //=> false
```

#### shallowMergeDeep
```
import {shallowMergeDeep} from "typescript-object-utils";
const x = {a: 1, b: {c: 3}};
const y = {b: {c: 3, d: 4}};
const z = {b: {c: 3}};

const r = shallowMergeDeep(x, y); r;
 //=> { a: 1, b: { c: 3, d: 4 } }
 
const s = shallowMergeDeep(x, z); s;
 //=> { a: 1, b: { c: 3 } }
x === s;
 //=> true
```

### [License (MIT)](LICENSE.md)
