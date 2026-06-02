import Vue from "vue";
import VueRouter from "vue-router";

import AuthLayout from "@/layouts/AuthLayout.vue";
import EmployeeLayout from "@/layouts/EmployeeLayout.vue";
import AdminLayout from "@/layouts/AdminLayout.vue"

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        redirect: "/login",
    },

    // Auth Layout
    {
        path: "/",
        component: AuthLayout,
        meta: { requiresGuest: true },

        children: [
            {
                path: "login",
                name: "login",

                component: () => import("../views/auth/LogIn.vue"),
            },
        ],
    },

    // Employee Layout
    {
        path: '/',
        component: EmployeeLayout,
        meta: { requiresAuth: true },

        children: [
            {
                path: "dashboard",
                name: "dashboard",
                component: () => import("@/views/DashboardView.vue"),
            },

            {
                path: "attendance",
                name: "attendance",
                component: () => import("@/views/employee/AttendanceView.vue"),
            },

            {
                path: "leave",
                name: "leave",
                component: () => import("@/views/employee/LeaveView.vue"),
            },

            {
                path: "worklog",
                name: "worklog",
                component: () => import("@/views/employee/WorkLogView.vue"),
            },

            {
                path: "summary",
                name: "summary",
                component: () =>
                    import("@/views/employee/MonthlySummaryView.vue"),
            },

            {
                path: "profile",
                name: "profile",
                component: () => import("@/views/ProfileView.vue"),
            },
        ],
    },

    // Admin Layout
    {
        path: '/admin',
        component: AdminLayout,
        meta: { requiresAuth: true, },

        children: [
            {
                path: "dashboard",
                name: "admin-dashboard",
                component: () => import("@/views/DashboardView.vue"),
            },
            {
                path: 'employees',
                component: () => import("@/views/admin/EmployeeListView.vue")
            },
            {
                path: 'attendance',
                component: () => import("@/views/admin/AttendanceView.vue")
            },
            {
                path: 'leaves',
                component: () => import("@/views/admin/LeavesView.vue")
            },
            {
                path: 'worklogs',
                component: () => import("@/views/admin/WorkLogsView.vue")
            },
            {
                path: 'reports',
                component: () => import("@/views/admin/ReportsView.vue")
            }
        ]
    }

];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;