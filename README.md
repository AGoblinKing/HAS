# ASFRAME

- DOMLess AFRAME wrapper SVELTE
- See src/example https://agoblinking.github.io/HAS/

```ts
import HAS from '../HAS'

export default function App() {
	;<HAS scene>
		<HAS
			transform={{ position: [0, -15, 15] }}
			light={{
				type: 'ambient',
				intensity: 0.5,
			}}
			light__dir={{
				type: 'directional',
				intensity: 0.5,
			}}
		/>
		<HAS
			transform={{ position: [0, 6, 0] }}
			geometry={{ primitive: 'sphere', dims: [5, 5, 5] }}
			material={{ color: 'blue' }}
			animation__color={{
				property: 'userData.material.color',
				r: 0.5,
				loop: true,
				duration: 10000,
				direction: 'alternate',
			}}
			animation={{
				property: 'rotation',
				x: Math.PI * 2,
				y: Math.PI * 2,
				easing: 'linear',
				loop: true,
				duration: 1000,
			}}
		/>
		<HAS geometry={{ dims: [30, 0.1, 30] }} />

		<HAS
			transform={{ position: [0, 0, 0] }}
			geometry={{ primitive: 'sphere', dims: [5, 0.1, 5] }}
			material={{ color: 'black' }}
		/>
		<HAS
			camera={{
				lookAt: [0, 0, 0],
			}}
			transform={{
				position: [15, 15, 15],
			}}
		/>
	</HAS>
}
```
