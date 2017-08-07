export function objectMap<A, B>(obj: { [id: string]: A }, cb: Processor<A, B>): { [id: string]: B } {
	return Object.keys(obj).reduce((pV, currKey) => {
		return {...pV, [currKey]: cb(obj[currKey], currKey, obj)}
	}, {})
}

type Processor<A, B> = (v: A, key: string, obj: { [id: string]: A }) => B;
