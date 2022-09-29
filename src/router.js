import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/votar",
    name: "votar",
    component: () => import("./components/PremiosComponent")
  },
  {
    path: "/awards-list",
    alias: "/awards-list",
    name: "awards-list",
    component: () => import("./components/AwardsComponents/AwardsList")
  },
  {
    path: "/awards/:id",
    name: "award-details",
    component: () => import("./components/AwardsComponents/DetailAward")
  },
  {
    path: "/add-award",
    name: "add-award",
    component: () => import("./components/AwardsComponents/AddAward")
  },
  {
    path: "/participantes-list",
    alias: "/participantes-list",
    name: "participantes-list",
    component: () => import("./components/PartiComponents/PartisList")
  },
  {
    path: "/participantes/:id",
    name: "award-details",
    component: () => import("./components/PartiComponents/DetailParti")
  },
  {
    path: "/add-participante",
    name: "add-participante",
    component: () => import("./components/PartiComponents/AddParti")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./components/LoginComponent")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;