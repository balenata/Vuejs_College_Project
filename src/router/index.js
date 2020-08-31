import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import EngAdminApp from '../components/EngAdmin/EngAdminApp.vue'
import InfoAdminApp from '../components/InfoAdmin/InfoAdminApp.vue'
import MedAdminApp from '../components/MedAdmin/MedAdminApp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: Login
  },
  // children: [
  {
    path: '/eng-admin',
    name: 'eng-admin',
    component: EngAdminApp,
    children: [
      {
        path: 'add-administrator-eng',
        name: 'add-administrator-eng',
        component: () => import('@/components/EngAdmin/AddAdmin.vue')
      },
      {
        path: 'generate-password-eng',
        name: 'generate-password-eng',
        component: () => import('@/components/EngAdmin/GeneratePassword.vue')
      },
      // This is For Communication Engineering
      {
        path: 'communication-eng-showStudents1',
        name: 'communication-eng-showStudents1',
        component: () =>
          import('@/components/EngAdmin/CommunicationEng/ShowStudents1.vue')
      },
      {
        path: 'communication-eng-showStudents2',
        name: 'communication-eng-showStudents2',
        component: () =>
          import('@/components/EngAdmin/CommunicationEng/ShowStudents2.vue')
      },
      {
        path: 'communication-eng-showStudents3',
        name: 'communication-eng-showStudents3',
        component: () =>
          import('@/components/EngAdmin/CommunicationEng/ShowStudents3.vue')
      },
      {
        path: 'communication-eng-showStudents4',
        name: 'communication-eng-showStudents4',
        component: () =>
          import('@/components/EngAdmin/CommunicationEng/ShowStudents4.vue')
      },
      // This Is For Mechanical Engineering
      {
        path: 'mechanical-eng-showStudents1',
        name: 'mechanical-eng-showStudents1',
        component: () =>
          import('@/components/EngAdmin/MechanicalEng/ShowStudents1.vue')
      },
      {
        path: 'mechanical-eng-showStudents2',
        name: 'mechanical-eng-showStudents2',
        component: () =>
          import('@/components/EngAdmin/MechanicalEng/ShowStudents2.vue')
      },
      {
        path: 'mechanical-eng-showStudents3',
        name: 'mechanical-eng-showStudents3',
        component: () =>
          import('@/components/EngAdmin/MechanicalEng/ShowStudents3.vue')
      },
      {
        path: 'mechanical-eng-showStudents4',
        name: 'mechanical-eng-showStudents4',
        component: () =>
          import('@/components/EngAdmin/MechanicalEng/ShowStudents4.vue')
      },
      // This Is For Oil And Energy
      {
        path: 'oil-and-energy-eng-showStudents1',
        name: 'oil-and-energy-eng-showStudents1',
        component: () =>
          import('@/components/EngAdmin/Oil-and-Energy/ShowStudents1.vue')
      },
      {
        path: 'oil-and-energy-eng-showStudents2',
        name: 'oil-and-energy-eng-showStudents2',
        component: () =>
          import('@/components/EngAdmin/Oil-and-Energy/ShowStudents2.vue')
      },
      {
        path: 'oil-and-energy-eng-showStudents3',
        name: 'oil-and-energy-eng-showStudents3',
        component: () =>
          import('@/components/EngAdmin/Oil-and-Energy/ShowStudents3.vue')
      },
      {
        path: 'oil-and-energy-eng-showStudents4',
        name: 'oil-and-energy-eng-showStudents4',
        component: () =>
          import('@/components/EngAdmin/Oil-and-Energy/ShowStudents4.vue')
      },
      // This Is For Electrical
      {
        path: 'electrical-showStudents1',
        name: 'electrical-showStudents1',
        component: () =>
          import('@/components/EngAdmin/ElectricalEng/ShowStudents1.vue')
      },
      {
        path: 'electrical-showStudents2',
        name: 'electrical-showStudents2',
        component: () =>
          import('@/components/EngAdmin/ElectricalEng/ShowStudents2.vue')
      },
      {
        path: 'electrical-showStudents3',
        name: 'electrical-showStudents3',
        component: () =>
          import('@/components/EngAdmin/ElectricalEng/ShowStudents3.vue')
      },
      {
        path: 'electrical-showStudents4',
        name: 'electrical-showStudents4',
        component: () =>
          import('@/components/EngAdmin/ElectricalEng/ShowStudents4.vue')
      },
      // This Is For City Planning
      {
        path: 'city-planning-showStudents1',
        name: 'city-planning-showStudents1',
        component: () =>
          import('@/components/EngAdmin/CityPlanningEng/ShowStudents1.vue')
      },
      {
        path: 'city-planning-showStudents2',
        name: 'city-planning-showStudents2',
        component: () =>
          import('@/components/EngAdmin/CityPlanningEng/ShowStudents2.vue')
      },
      {
        path: 'city-planning-showStudents3',
        name: 'city-planning-showStudents3',
        component: () =>
          import('@/components/EngAdmin/CityPlanningEng/ShowStudents3.vue')
      },
      {
        path: 'city-planning-showStudents4',
        name: 'city-planning-showStudents4',
        component: () =>
          import('@/components/EngAdmin/CityPlanningEng/ShowStudents4.vue')
      }
    ],
    beforeEnter: (to, from, next) => {
      if (JSON.parse(localStorage.getItem('loggedInForEng')) === false) {
        next({ name: 'Home' })
      } else {
        next()
      }
    }
  },
  {
    path: '/med-admin',
    name: 'med-admin',
    component: MedAdminApp,
    beforeEnter: (to, form, next) => {
      if (JSON.parse(localStorage.getItem('loggedInForMed')) === false) {
        next({ name: 'Home' })
      } else {
        next()
      }
    }
  },
  {
    path: '/info-admin',
    name: 'info-admin',
    component: InfoAdminApp,
    children: [
      {
        path: 'add-administrator-info',
        name: 'add-administrator-info',
        component: () => import('@/components/InfoAdmin/AddAdmin.vue')
      },
      {
        path: 'generate-password-info',
        name: 'generate-password-info',
        component: () => import('@/components/InfoAdmin/GeneratePassword.vue')
      },
      // This Is For Network
      {
        path: 'network-showStudents1',
        name: 'network-showStudents1',
        component: () =>
          import('@/components/InfoAdmin/NetworkInfo/ShowStudents1.vue')
      },
      {
        path: 'network-showStudents2',
        name: 'network-showStudents2',
        component: () =>
          import('@/components/InfoAdmin/NetworkInfo/ShowStudents2.vue')
      },
      {
        path: 'network-showStudents3',
        name: 'network-showStudents3',
        component: () =>
          import('@/components/InfoAdmin/NetworkInfo/ShowStudents3.vue')
      },
      {
        path: 'network-showStudents4',
        name: 'network-showStudents4',
        component: () =>
          import('@/components/InfoAdmin/NetworkInfo/ShowStudents4.vue')
      },
      // This Is For Database
      {
        path: 'database-showStudents1',
        name: 'database-showStudents1',
        component: () =>
          import('@/components/InfoAdmin/DatabaseInfo/ShowStudents1.vue')
      },
      {
        path: 'database-showStudents2',
        name: 'database-showStudents2',
        component: () =>
          import('@/components/InfoAdmin/DatabaseInfo/ShowStudents2.vue')
      },
      {
        path: 'database-showStudents3',
        name: 'database-showStudents3',
        component: () =>
          import('@/components/InfoAdmin/DatabaseInfo/ShowStudents3.vue')
      },
      {
        path: 'database-showStudents4',
        name: 'database-showStudents4',
        component: () =>
          import('@/components/InfoAdmin/DatabaseInfo/ShowStudents4.vue')
      },
      // This Is For Information
      {
        path: 'information-showStudents1',
        name: 'information-showStudents1',
        component: () =>
          import('@/components/InfoAdmin/InformationInfo/ShowStudents1.vue')
      },
      {
        path: 'information-showStudents2',
        name: 'information-showStudents2',
        component: () =>
          import('@/components/InfoAdmin/InformationInfo/ShowStudents2.vue')
      },
      {
        path: 'information-showStudents3',
        name: 'information-showStudents3',
        component: () =>
          import('@/components/InfoAdmin/InformationInfo/ShowStudents3.vue')
      },
      {
        path: 'information-showStudents4',
        name: 'information-showStudents4',
        component: () =>
          import('@/components/InfoAdmin/InformationInfo/ShowStudents4.vue')
      }
    ],
    beforeEnter: (to, from, next) => {
      if (JSON.parse(localStorage.getItem('loggedInForInfo')) === false) {
        next({ name: 'Home' })
      } else {
        next()
      }
    }
  }
  // ]
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes: routes,
  mode: 'history'
})

export default router
