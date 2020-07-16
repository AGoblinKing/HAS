import Anime from 'animejs'
import { Object3D } from 'three'

import { time } from '../state'

// init
export interface IAnimation extends Anime.AnimeAnimParams {}

const seek = (items, obj) => {
	for (let i of items) {
		obj = obj[i]
	}
	return obj
}

export function animation(data: IAnimation, o3d: Object3D) {
	const { property } = data
	data.targets = seek(property.split('.'), o3d)

	const a = Anime(data)
	// closer
	return () => {
		a.pause()
	}
}
