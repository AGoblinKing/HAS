import {
	Object3D,
	BoxGeometry,
	Mesh,
	MeshPhysicalMaterial,
	SphereGeometry,
} from 'three'

// init
export interface IGeometry {
	primitive?: string
	dims?: number[]
}

export const geometry = (d: IGeometry, o3d: Object3D) => {
	const ud = o3d.userData
	switch (d.primitive) {
		case 'sphere':
			ud.geometry = new SphereGeometry(...d.dims)
			break
		case 'box':
		default:
			ud.geometry = new BoxGeometry(...d.dims)
	}
	if (!ud.material) {
		ud.material = new MeshPhysicalMaterial({})
	}

	ud.mesh = new Mesh(ud.geometry, ud.material)

	o3d.add(ud.mesh)

	return () => {
		o3d.remove(ud.mesh)

		delete ud.mesh
		delete ud.geometry
	}
}
