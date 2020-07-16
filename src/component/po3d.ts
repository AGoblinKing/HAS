import { Object3D } from 'three'

export const po3d = (data: Object3D, o3d: Object3D) => {
	console.log('o3d!')
	data.add(o3d)
	return () => {
		data.remove(o3d)
	}
}
