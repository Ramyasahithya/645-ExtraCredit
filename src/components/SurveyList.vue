<template>
  <div class="container">
    <h2 class="text-center">Survey List</h2>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>ZipCode</th>
            <th>SurveyDate</th>
            <th>Most Liked In University</th>
            <th>Interest Source in University</th>
            <th>University Likelihood</th>
            <th>Additional Comments</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(surveydata) in surveyLists" v-bind:key="surveydata.id">
            <td>{{ surveydata.id }}</td>
            <td>{{ surveydata.firstName }}</td>
            <td>{{ surveydata.lastName }}</td>
            <td>{{ surveydata.telephone }}</td>
            <td>{{ surveydata.email }}</td>
            <td>{{ surveydata.streetAddress }}</td>
            <td>{{ surveydata.city }}</td>
            <td>{{ surveydata.state }}</td>
            <td>{{ surveydata.zip }}</td>
            <td>{{ surveydata.surveyDate }}</td>
            <td>{{ surveydata.campusFeatures }}</td>
            <td>{{ surveydata.campusInterest }}</td>
            <td>{{ surveydata.universityRecommendation }}</td>
            <td>{{ surveydata.additionalComments }}</td>
            <td>
              <button @click="OpenAndUpdateSurveyData(surveydata)" class="btn btn-info">Update</button>
            </td>
            <td>
              <button @click="deleteSurveyData(surveydata.id)" class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  <div
    class="modal"
    tabindex="-1"
    v-if="isModalOpen"
    :class="{show:isModalOpen}"
    style="display: block"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5>Update Survey</h5>
          <button
            type="button"
            class="btn-close"
            @click="closeModal()"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="(updateSurveyFormData())" class="form-container">
            <div class="form-group">
              <label for="Id" class="form-label">Id</label>
              <input
                type="text"
                id="Id"
                v-model="selectedSurveyData.id"
                name="Id"
                class="form-control"
                readonly
              />
            </div>
            <div class="form-group">
              <label for="firstName" class="form-label"
                >FIRST NAME<span class="sp">*</span></label
              >
              <input
                type="text"
                id="firstName"
                v-model="selectedSurveyData.firstName"
                name="firstName"
                class="form-control"
                required
              />
            </div>
            <div class="form-group">
              <label for="lastName" class="form-label"
                >LAST NAME<span class="sp">*</span></label
              >
              <input
                type="text"
                id="lastName"
                v-model="selectedSurveyData.lastName"
                name="lastName"
                class="form-control"
                required
              />
            </div>
            <div class="form-group">
              <label for="telephone" class="form-label"
                >TELEPHONE<span class="sp">*</span></label
              >
              <input
                type="text"
                id="telephone"
                v-model="selectedSurveyData.telephone"
                name="telephone"
                class="form-control"
                required
              />
            </div>
            <div class="form-group">
              <label for="email" class="form-label"
                >EMAIL<span class="sp">*</span>
              </label>
              <input
                type="text"
                class="form-control"
                id="email"
                v-model="selectedSurveyData.email"
                name="email"
                required
              />
            </div>
            <div class="form-group">
              <label for="streetAddress" class="form-label"
                >STREET ADDRESS<span class="sp">*</span>
              </label>
              <input
                type="text"
                class="form-control"
                id="streetAddress"
                v-model="selectedSurveyData.streetAddress"
                name="streetAddress"
                required
              />
            </div>
            <div class="form-group">
              <label for="city" class="form-label"
                >CITY <span class="sp">*</span></label
              >
              <input
                type="text"
                class="form-control"
                id="city"
                v-model="selectedSurveyData.city"
                name="city"
                required
                
              />
            </div>
            <div class="form-group">
              <label for="state" class="form-label"
                >STATE<span class="sp">*</span>
              </label>
              <input
                type="text"
                class="form-control"
                id="state"
                v-model="selectedSurveyData.state"
                name="state"
                required
                
              />
              
            </div>
            <div class="form-group">
              <label for="surveyDate" class="form-label"
                >SURVEY DATE <span class="sp">*</span></label
              >
              <input
                type="date"
                class="form-control"
                id="surveyDate"
                v-model="selectedSurveyData.surveyDate"
                name="surveyDate"
                required
                
              />
              
            </div>
            <div class="form-group">
              <p>WHAT IS MOST LIKED ABOUT THE CAMPUS?</p>
              <div v-for="feature in campusFeatures" :key="feature">
                <input
                  type="checkbox"
                  :id="'feature-' + feature"
                  name="campusFeature"
                  :checked="isFeatureSelected(feature)"
                  @change="onCheckboxChange($event, feature)"
                />
                <label :for="'feature-' + feature">{{ feature }}</label>
              </div>
            </div>
            <div class="form-group">
              <p>HOW DID THE STUDENTS BECOME INTERESTED IN UNIVERSITY?</p>
              <div v-for="interest in campusInterestOptions" :key="interest">
                <input
                  type="radio"
                  :id="interest"
                  name="campusInterest"
                  :value="interest"
                  v-model="selectedSurveyData.campusInterest"
                />
                <label :for="interest">{{ interest }}</label>
              </div>
            </div>
            <div class="form-group">
              <p>LIKELIHOOD TO RECOMMEND GMU TO OTHERS?</p>
              <select
                id="like"
                name="universityRecommendation"
                v-model="selectedSurveyData.universityRecommendation"
                class="form-select"
              >
                <option value="">Select an option</option>
                <option value="VeryLikely">Very Likely</option>
                <option value="Likely">Likely</option>
                <option value="Unlikely">UnLikely</option>
              </select>
            </div>
            <div class="form-group">
              <label for="additionalComments" class="form-label"
                >ADDITIONAL COMMENTS</label
              >
              <textarea
                class="form-control"
                id="additionalComments"
                v-model="selectedSurveyData.additionalComments"
                name="additionalComments"
                rows="3"
              ></textarea>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                @click="closeModal()"
              >
                Close
              </button>
              <button
                type="submit"
                class="btn btn-primary"
                @click="updateSurveyFormData()"
              >
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import SurveyFormService from '../services/SurveyFormService'
export default{
    name:'SurveyList',
    data(){
      return{
        surveyLists:[],
        isModalOpen:false,
        campusInterestOptions : ['Friends', 'Television', 'Internet', 'Other'],
        campusFeatures : [
                'Students',
                'Location',
                'Campus',
                'Atmosphere',
                'DormRooms',
                'Sports',
              ],
        selectedSurveyData:null,
      }
    },
    methods:{
        getSurveyFormData(){
            SurveyFormService.getSurveyFormsData().then((response)=>{
                this.surveyLists = response.data;
            });
        },
        deleteSurveyData(id){
          if(confirm(`Do you want to delete this survey data for ID ${id}?`)){
              console.log("triggering delete");
              SurveyFormService.deleteSurveyFormData(id).then((response)=>{
              console.log(response.data)
              console.log('form data deleted successfully');
              alert('Survey data has been submitted successfully');
              this.getSurveyFormData()
              }).catch((error) => {
              console.error('Error deleting the survey form:', error)
            });
          }
        },
        getLikedFeaturesArray() {
          return this.selectedSurveyData.campusFeatures ? 
            this.selectedSurveyData.campusFeatures.split(',')
              .map((feature) => feature.trim())
              .filter((feature) => feature.length > 0) : 
            [];
        },
        isFeatureSelected(feature){
            return this.getLikedFeaturesArray().includes(feature);
        },
        onCheckboxChange(event, feature) {
          const checked = event.target.checked;
          let currentFeatures = this.getLikedFeaturesArray();

          if (checked && !currentFeatures.includes(feature)) {
            currentFeatures.push(feature);
          } else if (!checked) {
            currentFeatures = currentFeatures.filter(item => item !== feature);
          }

          this.selectedSurveyData.campusFeatures = currentFeatures.join(',');
        },
        closeModal(){
          this.isModalOpen=false;
        },
        OpenAndUpdateSurveyData(surveydata){
          this.selectedSurveyData = {...surveydata};
          this.isModalOpen=true;
          console.log('Selected Survey Data:',this.selectedSurveyData);
          console.log(this.isModalOpen);
        },
        updateSurveyFormData(){
          console.log(this.selectedSurveyData);
          SurveyFormService.UpdateSurveyFormData(this.selectedSurveyData.id,this.selectedSurveyData).then((response)=>{
              console.log(response.data)
              console.log('form data has been updated successfully');
              this.closeModal();
              this.getSurveyFormData();
              }).catch((error) => {
              console.error('Error updating the survey form:', error)
            });

        }
    },
    created(){
        this.getSurveyFormData()
    }
}
</script>

<style>
.form-label,
p {
  font-weight: bold;
}

.modal-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.modal-footer .btn {
  margin: 0;
}

.table-responsive {
  overflow-x: auto;
  margin: 20px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  min-width: 100%;
  padding: 0 20px;
}

.table {
  width: 150%;
  border-collapse: collapse;
  background-color: white;
  font-size: 14px;
  color:black;
}

.table thead {
  background-color: #2e7d32;
}

.table th {
  padding: 12px 15px;
  text-align: left;
  font-weight: 600;
  color: black;
  border-bottom: 2px solid #dee2e6;
  white-space: nowrap;
}

.table td {
  padding: 12px 15px;
  border-bottom: 1px solid #dee2e6;
  vertical-align: middle;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.table-striped tbody tr:nth-child(odd) {
  background-color: #f8f9fa;
}

.table tbody tr:hover {
  background-color: #f2f2f2;
  transition: background-color 0.2s ease;
}

.btn {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  margin: 0 4px;
  transition: all 0.2s ease;
}

.btn-info {
  background-color: #17a2b8;
  color: white;
}

.btn-info:hover {
  background-color: #138496;
}

.btn-danger {
  background-color: #dc3545;
  color: white;
}

.btn-danger:hover {
  background-color: #c82333;
}

@media (max-width: 768px) {
  .table {
    font-size: 13px;
  }

  .table th,
  .table td {
    padding: 8px 10px;
  }

  .btn {
    padding: 4px 8px;
    font-size: 12px;
  }
}

.sp {
  color: #f44336;
  margin-left: 4px;
}

@media (max-width: 576px) {
  .table-responsive {
    margin: 10px -15px;
    width: calc(100% + 30px);
    border-radius: 0;
  }
}

</style>