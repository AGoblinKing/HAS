// init
import { WebGLRenderer, Object3D } from 'three'
import { size, time, camera, scene as s } from '../state'

export interface IScene {}

export function scene(data: IScene, o3d: Object3D) {
	const [w, h] = size.get()

	const r = new WebGLRenderer()

	s.get().add(o3d)

	const destroys = [
		size.subscribe(([w, h]) => {
			r.setSize(w, h)
		}),
		time.subscribe((t) => {
			r.render(s.get(), camera.get())
		}),
	]

	// TODO: append to node instead of body
	document.body.appendChild(r.domElement)
	return () => destroys.forEach((d) => d())
}
