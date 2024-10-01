import { createRouter, createWebHistory } from 'vue-router'; // Switch to createWebHistory
import HomeView from '../views/HomeView.vue';
import AddProject from '../views/AddProject.vue';
import EditProject from '../views/EditProject.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add',
    name: 'AddProject',
    component: AddProject
  },
  {
    path: '/projects/:id',
    name: 'EditProject',
    component: EditProject,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(), // Use history mode
  routes
});

export default router;
