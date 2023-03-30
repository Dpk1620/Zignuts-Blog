import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgetPassword from "../views/ForgetPassword.vue";
import Blogs from "../views/Blogs.vue";
import Profile from "../views/Profile.vue";

Vue.use(VueRouter);
// use to define the path here...Mapping of components
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta:{
      title:"Home"
    }
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs,
    meta:{
      title:"Blogs"
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta:{
      title:"Login"
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta:{
      title:"Register"
    }
  },
  {
    path: "/reset",
    name: "ForgetPassword",
    component: ForgetPassword,
    meta:{
      title:"Reset"
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta:{
      title:"Profile"
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to,from,next)=>{
  document.title=`${to.meta.title} | ZignutsBlog`;
  next();
});

export default router;
