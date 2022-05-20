import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory} from 'vue-router'

import index from './components/index.vue';
import First from './components/files/First-section.vue';
import Second from './components/files/Second-section.vue';
import footer from './components/files/footer.vue';

import menu from './components/Menu/menu.vue';
import enrolled from './components/Enrolled/enrolled.vue';
import community from './components/Community/community.vue';
import assignment from './components/Assignments/assignment.vue';
import certificate from './components/Certificate/certificate.vue';
import upload from './components/Upload/upload.vue'
import details from './components/Assignments/assignDetails.vue'
import main from './components/Assignments/intoAssignment.vue'

const app = createApp(App);

const routes = createRouter({
    history: createWebHistory(),
    routes: [
        { path:'/', component: index},
        { path:'/menu', component: menu},
        { path:'/enrolled', component: enrolled},
        { path:'/community', component: community},
        { path:'/assignment', component: assignment},
        { path:'/certificate', component: certificate},
        { path:'/upload', component: upload},
        { path:'/assigned', component: details},
        { path:'/main', component: main},
    ]
})


app.component('app-index', index)
app.component('app-First', First)
app.component('app-Second', Second)
app.component('app-footer', footer)
app.component('app-menu', menu)
app.use(routes)
app.mount('#app')
