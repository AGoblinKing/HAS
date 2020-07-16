import App from './App.tsx'
import * as s from "../state"

const app = new App({
	target: document.body,
})

export default app

window.s = s