import Login from "./Pages/Login/Login.vue";
import Signup from "./Pages/Signup/Signup.vue";
import Main from "./Pages/Main/Main.vue";
import SellerList from "./Pages/SellerList/SellerList.vue";

// Vue.use(Router);

export default [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/:menu",
    name: "main",
    component: Main,
    children: [
      {
        path: "sellerlist",
        name: "sellerlist",
        component: SellerList,
      },
    ],
  },
];