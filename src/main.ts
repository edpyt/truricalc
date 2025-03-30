import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

const app = createApp(App);
app.use(PrimeVue, {
  theme: { preset: Aura }
});

// NOTE: components
import { Button, InputText } from "primevue";
app.component('Button', Button);
app.component('InputText', InputText);

app.mount("#app");
