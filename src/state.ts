import { Writable, Readable } from './store'
import { PerspectiveCamera, Scene } from 'three'

let s = [window.innerWidth, window.innerHeight]

export const scene = new Writable(new Scene())
export const size = new Writable(s)
export const rate = new Readable(250)
export const time = new Writable(0)
export const camera = new Writable(
	new PerspectiveCamera(90, s[0] / s[1], 0.1, 1000)
)

export const tick = new Writable(0).derive(time, (t) => {
	return Math.floor(t / rate.get())
})

window.addEventListener('resize', (e) => {
	s = [window.innerWidth, window.innerHeight]
	size.set(s)
	camera.get().aspect = s[0] / s[1]
})

size.set([window.innerWidth, window.innerHeight])

time.subscribe(() => {
	requestAnimationFrame((t) => {
		time.set(time.get() + t)
	})
})
