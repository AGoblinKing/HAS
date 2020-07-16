import { Color, Object3D, Light, AmbientLight, DirectionalLight } from 'three'

export interface ILight {
	type?: string
	color?: Color | string | number
	intensity?: number
}

export const light = (d: ILight, o3d: Object3D) => {
	const { color, intensity = 1 } = d
	switch (d.type) {
		case 'directional':
			o3d.userData.light = new DirectionalLight(color, intensity)
			break
		case 'ambient':
		default:
			o3d.userData.light = new AmbientLight(color, intensity)
	}
	o3d.add(o3d.userData.light)
	return () => {
		o3d.remove(o3d.userData.light)
		delete o3d.userData.light
	}
}
