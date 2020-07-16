import * as C from './component/index'
import { scene } from './state'
import { onDestroy } from 'svelte'
import { ConfigProps } from 'svelte-types'
import { Object3D } from 'three'

export interface IEntityProps {
	po3d?: Object3D
	scene?: C.IScene
	material?: C.IMaterial
	animation?: C.IAnimation
	camera?: C.ICamera
	transform?: C.ITransform
	geometry?: C.IGeometry
	light?: C.ILight
	[propName: string]: any
}

export default function AS(ps: IEntityProps) {
	const o3d = new Object3D()
	scene.get().add(o3d)
	const props: IEntityProps = arguments[1]

	const destroys = []

	for (let k of Object.keys(props)) {
		const [key] = k.split('__')
		if (C[key] !== undefined) {
			const destroy = C[key](props[k], o3d)
			if (destroy) destroys.push(destroy)
		}
	}

	onDestroy(() => {
		destroys.forEach((d) => d())
		scene.get().remove(o3d)
	})
	;<slot props={ConfigProps<IEntityProps>({ po3d: o3d })}></slot>
}
