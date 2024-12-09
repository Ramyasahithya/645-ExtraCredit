<!--
Athiksha Venkannagari - G01461169
Arsitha Sathu - G01445215
Ramyasahithya Magani - G01425752
Prasad Reddy Mandha - G01454689
SaichinmayeeYanamadala - G01459318
LikhithNattuva - G0144733
Priya Dharshini Allapuram - G01457911
Sreshta Kosaraju - G01460468
-->
<!--
The student survey form has a variety of input fields, including text fields, checkboxes, radio buttons, and dropdown menus. 
Some fields are marked as needed to ensure that necessary information is delivered.
The form also has Submit and Cancel buttons at the bottom for form activities. 
Two-way data binding is used to capture user input and then send the survey form data it to a Spring Boot application for processing.
It also contains the corresponding css for the form and javascript code that basically 
makes a request to the Spring Boot application using the service defined

-->

<template>
  <div class="form-container">
    <form @submit.prevent="saveSurveyData">
      <div class="form-group">
        <label for="firstName">FIRST NAME <span class="sp">*</span></label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          placeholder="Enter your First Name"
          required
          v-model="model.studentSurveyData.firstName"
          name="firstName"
        />
      </div>
      <div class="form-group">
        <label for="lastName">LAST NAME <span class="sp">*</span></label>
        <input
          type="text"
          class="form-control"
          id="lastName"
          placeholder="Enter your Last Name"
          required
          v-model="model.studentSurveyData.lastName"
          name="lastName"
        />
      </div>
      <div class="form-group">
        <label for="telephone">TELEPHONE NUMBER <span class="sp">*</span></label>
        <input
          type="text"
          class="form-control"
          id="telephone"
          required
          placeholder="+1 (123) 4567891"
          v-model="model.studentSurveyData.telephone"
          name="telephone"
        />
      </div>
      <div class="form-group">
        <label for="email">EMAIL <span class="sp">*</span></label>
        <input
          type="text"
          class="form-control"
          id="email"
          required
          placeholder="test@gmail.com"
          v-model="model.studentSurveyData.email"
          name="email"
        />
      </div>
      <div class="form-group">
        <label for="streetAddress">STREET ADDRESS <span class="sp">*</span></label>
        <input
          type="text"
          class="form-control"
          id="streetAddress"
          required
          placeholder="21 Ramona Drive"
          v-model="model.studentSurveyData.streetAddress"
          name="streetAddress"
        />
      </div>
      <div class="form-group">
        <label for="zip">ZIP <span class="sp">*</span></label>
        <input
          type="text"
          class="form-control"
          id="zip"
          required
          placeholder="Enter the zip code"
          v-model="model.studentSurveyData.zip"
          name="zip"
        />
      </div>
      <div class="form-group">
        <label for="city">CITY<span class="sp">*</span></label>
        <input
          type="text"
          class="form-control"
          id="city"
          required
          placeholder="Enter the city name"
          v-model="model.studentSurveyData.city"
          name="city"
        />
      </div>
      <div class="form-group">
        <label for="state">STATE<span class="sp">*</span></label>
        <input
          type="text"
          class="form-control"
          id="state"
          required
          placeholder="Enter the city name"
          v-model="model.studentSurveyData.state"
          name="state"
        />
      </div>
      <div class="form-group">
        <label for="surveyDate">DATE OF SURVEY <span class="sp">*</span></label>
        <input
          type="date"
          class="form-control"
          id="date"
          required
          placeholder="mm/dd/yyyy"
          v-model="model.studentSurveyData.surveyDate"
          name="surveyDate"
        />
      </div>
      <div class="form-group">
        <p>WHAT IS MOST LIKED ABOUT THE CAMPUS?</p>
        <div class="checkbox-item" v-for="feature in campusFeatures" :key="feature.value">
          <input
            type="checkbox"
            :id="feature.value"
            :name="feature.name"
            :value="feature.value"
            v-model="selectedFeatures"
          />
          <label :for="feature.value">{{ feature.label }}</label>
        </div>
      </div>
      <div class="form-group" id="interest">
        <p>HOW DID THE STUDENTS BECOME INTERESTED IN UNIVERSITY?</p>
        <div class="radiobtn">
          <input
            type="radio"
            id="friends"
            name="campusInterest"
            value="Friends"
            v-model="model.studentSurveyData.campusInterest"
          />
          <label for="friends">Friends</label>
        </div>
        <div class="radiobtn">
          <input
            type="radio"
            id="television"
            name="campusInterest"
            value="Television"
            v-model="model.studentSurveyData.campusInterest"
          />
          <label for="television">Television</label>
        </div>
        <div class="radiobtn">
          <input
            type="radio"
            id="Internet"
            name="campusInterest"
            value="Internet"
            v-model="model.studentSurveyData.campusInterest"
          />
          <label for="Internet">Internet</label>
        </div>
        <div class="radiobtn">
          <input
            type="radio"
            id="other"
            name="campusInterest"
            value="other"
            v-model="model.studentSurveyData.campusInterest"
          />
          <label for="other">Other</label>
        </div>
      </div>
      <div class="form-group">
        <p>LIKELIHOOD TO RECOMMEND GMU TO OTHERS ?</p>
        <select
          id="like"
          name="universityRecommendation"
          v-model="model.studentSurveyData.universityRecommendation"
        >
          <option value=""></option>
          <option value="VeryLikely">Very Likely</option>
          <option value="Likely">Likely</option>
          <option value="Unlikely">UnLikely</option>
        </select>
      </div>
      <div class="form-group">
        <label for="additionalComments">Additional Comments</label>
        <textarea
          id="additionalComments"
          v-model="model.studentSurveyData.additionalComments"
          name="additionalComments"
          placeholder="Write something.."
        ></textarea>
      </div>
      <div class="btn-container">
        <button class="btn btn-success" type="submit">Submit</button>
        <button class="btn btn-cancel" type="button" @click="resetForm">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
import SurveyFormService from '../services/SurveyFormService'
export default {
  name: 'SurveyForm',
  data() {
    return {
      campusFeatures: [
        { label: 'Students', value: 'Students', name: 'campusFeatures' },
        { label: 'Location', value: 'Location', name: 'campusFeatures' },
        { label: 'Campus', value: 'Campus', name: 'campusFeatures' },
        { label: 'Atmosphere', value: 'Atmosphere', name: 'liking' },
        { label: 'Dorm Rooms', value: 'DormRooms', name: 'campusFeatures' },
        { label: 'Sports', value: 'Sports', name: 'campusFeatures' },
      ],
      selectedFeatures: [],
      model: {
        studentSurveyData: {
          firstName: '',
          lastName: '',
          streetAddress: '',
          city: '',
          state: '',
          zip: '',
          telephone: '',
          email: '',
          surveyDate: this.getFormattedDate(new Date()),
          campusFeatures: '',
          campusInterest: '',
          universityRecommendation: '',
          additionalComments: '',
        },
      },
    }
  },
  methods: {
    getFormattedDate(date) {
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const day = String(date.getDate()).padStart(2, '0')
      return `${year}-${month}-${day}`
    },
    saveSurveyData() {
      this.model.studentSurveyData.campusFeatures = this.selectedFeatures.join(', ')
      console.log('Submitting survey data:', this.model.studentSurveyData)
      SurveyFormService.postSurveyFormsData(this.model.studentSurveyData).then((res) => {
          console.log(res.data)
          console.log('form data successfully submitted');
          alert('Survey data has been submitted successfully');
          this.resetForm();
          
        })
        .catch((error) => {
          console.error('Error submitting form:', error);
          alert('Error submitting form:', error);
        });
      
    },
    resetForm(){
      this.model.studentSurveyData = {
          firstName: '',
          lastName: '',
          streetAddress: '',
          city: '',
          state: '',
          zip: '',
          telephone: '',
          email: '',
          surveyDate: this.getFormattedDate(new Date()),
          campusFeatures: '',
          campusInterest: '',
          universityRecommendation: '',
          additionalComments: '',
        },
        this.selectedFeatures = [];
    }
  }
}
</script>
<style scoped>
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
}
.border {
  max-width: 600px;
  text-align: center;
  margin: auto;
}

.form-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.form-group {
  margin: 10px;
}
.form-group label,
p {
  display: block;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}
.form-control,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
textarea {
  resize: vertical;
}
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.checkbox-item,
.radio-btn {
  display: flex;
  align-items: center;
}
input[type="checkbox"],
input[type="radio"] {
  margin: 10px;
  vertical-align: middle;
}

.checkbox-item label,
.radiobtn label {
  display: inline-flex;
  align-items: center;
  margin-bottom: 0;
}
input[type="submit"] {
  background-color: green;
  color: yellow;
  border: none;
}

input[type="cancel"] {
  background-color: #fec734;
  color: black;
  border: none;
}

input[type="text"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 16px;
}

.btn-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  min-width: 120px;
}

.btn-cancel {
  background-color: #fec734; 
  color: black;
}

.btn-cancel:hover {
  background-color: #fec734; 
  color: black;
}

.sp {
  color: #f44336;
  margin-left: 4px;
}

@media (max-width: 600px) {
  .form-container {
    padding: 1rem;
    margin: 1rem;
  }

  .btn-container {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    margin-bottom: 0.5rem;
  }

  .btn-cancel {
    width: 100%;
    margin-bottom: 0.5rem;
  }
  
}

</style>