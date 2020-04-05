export function objectReduce<A, V, T extends Dictionary<V>>(obj: T, cb: Processor<A, V, T>, initialValue: A): A {
	return Object.keys(obj)
		.reduce((pV, currKey) => {
			return cb(pV, obj[currKey], currKey, obj);
		}, initialValue);
}

export type Processor<A, V, T extends Dictionary<V>> = (prev: A, value: V, key: keyof T, obj: T) => A;

type Dictionary<A> = { [id: string]: A };
