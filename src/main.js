import './app.css'
//swap these imports if using non-hash routing from svelte-routing
import App from './App.svelte'
//import AppWithoutHashRouting from './AppWithoutHashRouting.svelte'

//swap these to do the meaningful part
const app = new App({
  target: document.getElementById('app'),
})

// const app = new AppWithoutHashRouting({
//   target: document.getElementById('app'),
// })

export default app
