import { Object3D, Vector3 } from 'three'

// init
import { camera as camstore, time } from '../state'

export interface ICamera {
	lookAt?: number[]
}

const scratch = new Vector3()

export const camera = (d: ICamera, o3d: Object3D) => {
	o3d.add(camstore.get())

	const destroys = []

	if (d.lookAt) {
		destroys.push(
			time.subscribe((t) => {
				camstore.get().lookAt(scratch.fromArray(d.lookAt))
			})
		)
	}

	return () => {
		o3d.remove(camstore.get())
		destroys.forEach((d) => d())
	}
}
