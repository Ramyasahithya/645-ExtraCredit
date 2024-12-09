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