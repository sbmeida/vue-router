import Vue from "vue";
import Router from "vue-router";
import Hello from "../components/Hello";
import FirstRouteChild from "../components/FirstRouteChild";
import FirstRoute from "../components/FirstRoute";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Hello",
      component: Hello
    },
    {
      path: "/firstroute/:name",
      name: "FirstRoute",
      component: FirstRoute,
      children: [
        {
          path: "child",
          component: FirstRouteChild
        }
      ]
    }
  ]
});
