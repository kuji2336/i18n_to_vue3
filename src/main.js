import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import geo from "./translations/geo.json"
import eng from "./translations/eng.json"
import rus from "./translations/rus.json"

const i18n = createI18n({
    messages:{
        ge:geo,
        en:eng,
        ru:rus
    },
    fallbackLocale:'en'
})
const app = createApp(App)
app.use(i18n)
app.mount('#app')
