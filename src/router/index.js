import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const Category = () => import('../views/Category');
const LoginView = () => import('../views/Login');
const ManagementCenter = () => import('../views/ManagementCenter');
const UserList = () => import('../views/ManagementCenter/UserList');
const AdminList = () => import('../views/ManagementCenter/AdminList');
const ShopsList = () => import('../views/ManagementCenter/ShopsList');
const CategoryParam = () => import('../views/ManagementCenter/CategoryParam');
const ShopCategory = () => import('../views/ManagementCenter/ShopCategory');
const OrderList = () => import('../views/ManagementCenter/OrderList');
const DataTable = () => import('../views/ManagementCenter/DataTable');
const RoleList = () => import('../views/ManagementCenter/RoleList');

//解决重复点击同一个路由报错  避免了到当前位置“/role”的冗余导航 的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
//解决重复点击同一个路由报错  避免了到当前位置“/role”的冗余导航 的问题


Vue.use(VueRouter)
const routes = [
    //  首页
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    //  个人中心
    {
        path: '/profile',
        name: 'Profile',
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
        component: () => import('../views/Profile.vue')
    },
    //  登录页面
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    },
    //  分类页
    {
        path: '/category',
        name: 'Category',
        component: Category
    },
    //  管理中心
    {
        path: '/center',
        name: 'Center',
        component: ManagementCenter,
        redirect:'/userList',
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
        children: [
            //  用户列表
            {
                path: '/userList',
                name: 'UserList',
                component: UserList
            },
            //  角色列表
            {
                path: '/role',
                name: 'Role',
                component: RoleList
            },
            //  权限列表
            {
                path: '/adminList',
                name: 'AdminList',
                component: AdminList
            },
            //  商品列表
            {
                path: '/shopsList',
                name: 'ShopsList',
                component: ShopsList
            },
            //  分类参数
            {
                path: '/categoryParam',
                name: 'CategoryParam',
                component: CategoryParam
            },
            //  商品分类
            {
                path: '/shopCategory',
                name: 'ShopCategory',
                component: ShopCategory
            },
            //  订单列表
            {
                path: '/orderList',
                name: 'OrderList',
                component: OrderList
            },
            //  数据报表
            {
                path: '/dataTable',
                name: 'DataTable',
                component: DataTable
            },
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
