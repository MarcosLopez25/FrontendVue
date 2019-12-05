import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListStudent from '@/components/Student/ListStudent'
import RegisterStudent from '@/components/Student/RegisterStudent'
import EditStudent from '@/components/Student/EditStudent'
import DeleteStudent from '@/components/Student/DeleteStudent'
import LoginStudent  from '@/components/Login/LoginStudent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/students',
      name: 'ListStudent',
      component: ListStudent
    },
    {
      path: '/students/:studentId/edit',
      name: 'EditStudent',
      component: EditStudent
    },
    {
      path: '/students/:studentId/delete',
      name: 'DeleteStudent',
      component: DeleteStudent
    },
    {
      path: '/students/register',
      name: 'RegisterStudent',
      component: RegisterStudent
    },
    {
      path: '/students/login',
      name: 'LoginStudent',
      component: LoginStudent
    }
  ],
  mode: 'history'
})
