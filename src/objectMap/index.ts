export function objectMap<A, B, T extends { [id: string]: A }>(obj: T, cb: Processor<A, B, T>): { [P in keyof T]: B } {
	return Object.keys(obj)
		.reduce((pV, currKey) => {
			return {...pV, [currKey]: cb(obj[currKey], currKey, obj)};
		}, {}) as { [P in keyof T]: B };
}

export type Processor<A, B, T extends { [id: string]: A }> = (v: A, key: keyof T, obj: T) => B;
