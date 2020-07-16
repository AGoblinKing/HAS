# ASFRAME

- DOMLess AFRAME wrapper SVELTE

```svelte
<script>
import THREE from "three"
import { Entity, Scene, Camera, Box } from "asframe"

</script>

<Scene>
<Box
	material={{color: "blue"}}
	animation={{
		property: "rotation",
		to: [360, 360, 360],
		loop: true,
	}}
/>

<Camera
	position={[15, 15, 15]}
	lookAt={[0, 0, 0]}
	camera={{
		type: THREE.PERSPECTIVE
	}}
/>

</Scene>
```
