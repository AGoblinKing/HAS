import { Object3D, Vector3 } from 'three'
import { time } from '../state'

export interface ITransform {
	position?: number[]
	lookAt?: number[]
}

const scratch = new Vector3()

const props = Object.entries({
	lookAt(data: number[], o3d: Object3D) {
		return time.subscribe(() => {
			scratch.fromArray(data)
			o3d.lookAt(scratch)
		})
	},
	position(data: number[], o3d: Object3D) {
		o3d.position.fromArray(data)
	},
})

export const transform = (data: ITransform, o3d: Object3D) => {
	const destroys = []
	for (let [k, prop] of props) {
		if (data[k] !== undefined) {
			const destroy = prop(data[k], o3d)
			if (destroy) {
				destroys.push(destroy)
			}
		}
	}

	return () => destroys.forEach((d) => d())
}
