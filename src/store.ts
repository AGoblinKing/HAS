export type Callback<T> = (v?: T) => void
export type CallbackTransform<D, T> = (v: D) => T

export class Readable<T> {
	value: T
	callbacks: Set<Callback<T>>

	constructor(value: T) {
		this.value = value
		this.callbacks = new Set()
	}

	subscribe(callback: Callback<T>) {
		this.callbacks.add(callback)
		callback(this.value)

		return () => this.callbacks.delete(callback)
	}

	get(): T {
		return this.value
	}
}

export class Writable<T> extends Readable<T> {
	set(value: T) {
		if (value === this.value) return

		this.value = value
		this.poke()

		return this
	}

	poke() {
		for (let callback of this.callbacks) {
			callback(this.value)
		}

		return this
	}

	derive<D>(r: Readable<D>, c: CallbackTransform<D, T>) {
		return this
	}
}
