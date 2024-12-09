import { createRouter, createWebHistory } from 'vue-router'
import SurveyForm from '../components/SurveyForm.vue'
import SurveyList from '../components/SurveyList.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/surveyForm',
    },
    {
      path: '/surveyForm',
      name: 'surveyForm',
      component: SurveyForm,
    },
    {
      path: '/surveyList',
      name: 'surveyList',
      component: SurveyList,
    },
  ],
})

export default router
