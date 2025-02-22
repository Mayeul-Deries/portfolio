// Plugins
import { registerPlugins } from '@/plugins'
// Components
import App from './App.vue'
// Composables
import { createApp } from 'vue'
// i18n
import i18n from '../i18n'

const app = createApp(App)

registerPlugins(app)
app.use(i18n)

app.mount('#app')
