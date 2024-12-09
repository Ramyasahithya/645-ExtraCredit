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
The service basically makes the api calls to the spring boot application deployed in the rancher.
We are using the axios module for sending the request to the backend application
*/

import axios from 'axios'

const SURVEYFORM_API_BASE_URL='http://ec2-44-213-187-95.compute-1.amazonaws.com:31711/api/surveyData'

class SurveyFormService{
    getSurveyFormsData(){
        return axios.get(SURVEYFORM_API_BASE_URL);
    }

    postSurveyFormsData(studentSurveyData){
        return axios.post(SURVEYFORM_API_BASE_URL,studentSurveyData)
    }
    deleteSurveyFormData(id) {
        return axios.delete(`${SURVEYFORM_API_BASE_URL}/${id}`);
    }
    UpdateSurveyFormData(id,selectedSurveyData) {
        return axios.put(`${SURVEYFORM_API_BASE_URL}/${id}`,selectedSurveyData);
    }
}
export default new SurveyFormService();