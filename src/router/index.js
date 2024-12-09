import { createRouter, createWebHistory } from 'vue-router'
import SurveyForm from '../components/SurveyForm.vue'
import SurveyList from '../components/SurveyList.vue'

/*
Athiksha Venkannagari - G01461169
Arsitha Sathu - G01445215
Ramyasahithya Magani - G01425752
Prasad Reddy Mandha - G01454689
SaichinmayeeYanamadala - G01459318
LikhithNattuva - G0144733
Priya Dharshini Allapuram - G01457911
Sreshta Kosaraju - G01460468
*/
/*
The file contains the different routes that the application supports.
Each route is configured with the corresponding component
*/
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
