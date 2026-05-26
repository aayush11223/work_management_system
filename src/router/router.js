import Vue from "vue";

import VueRouter from "vue-router";
import AuthLayout from "../layouts/AuthLayout.vue";
import EmployeeLayout from "../layouts/EmployeeLayout.vue"

import DashboardView from "../views/DashboardView.vue"
import LogIn from "../views/auth/LogIn.vue";
import AttendanceView from "../views/employee/AttendanceView.vue"
import LeaveView from "../views/employee/LeaveView.vue"
import WorkLogView from "../views/employee/WorkLogView.vue"
import MonthlySummaryView from "../views/employee/MonthlySummaryView.vue"




Vue.use(VueRouter);

const routes = [
    // Redirect root to login
    { path: "/", redirect: "/login" },

    // Layout 1: Auth pages (no navbar)
    {
        path: "/",
        component: AuthLayout,
        meta: { requiresGuest: true },
        children: [
            {
                path: "login",
                name: "login",
                component: LogIn,
            },
        ],
    },

    // Layout 2:, Employee Layout
    {
        path: "/",
        component: EmployeeLayout,
        meta: { requiresAuth: true },
        children: [
            { path: "dashboard", name: "dashboard", component: DashboardView },
            { path: "attendance", name: "attendance", component: AttendanceView },
            { path: "leave", name: "leave", component: LeaveView },
            { path: "worklog", name: "worklog", component: WorkLogView },
            { path: "summary", name: "summary", component: MonthlySummaryView },
        ]
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});


export default router;