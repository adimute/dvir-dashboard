/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import Notifications from "views/Notifications.jsx";
import TrailerScreen from "views/TrailerScreen.jsx";
import TruckScreen from "views/TruckScreen.jsx";
import Maps from "views/Map.jsx";
import UserScreen from "views/UserScreen.jsx";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/user-page",
    name: "Users",
    icon: "nc-icon nc-single-02",
    component: UserScreen,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Truck",
    icon: "nc-icon nc-delivery-fast",
    component: TruckScreen,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Trailer",
    icon: "nc-icon nc-delivery-fast",
    component: TrailerScreen,
    layout: "/admin"
  }
];
export default routes;
