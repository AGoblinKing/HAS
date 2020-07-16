import {
	Object3D,
	MeshPhysicalMaterial,
	MeshPhysicalMaterialParameters,
	Mesh,
} from 'three'

// init

export type IMaterial = MeshPhysicalMaterialParameters

export const material = (d: MeshPhysicalMaterialParameters, o3d: Object3D) => {
	o3d.userData.material = new MeshPhysicalMaterial(d)

	if (o3d.userData.mesh) {
		;(o3d.userData.mesh as Mesh).material = o3d.userData.material
	}

	return () => {}
}
