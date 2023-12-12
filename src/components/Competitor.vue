<template>
  <div class="page-wrapper">
    <div class="error" v-if="errorPresent" v-html="errorMessage"/>
    <div class="success" v-if="successPresent" v-html="successMessage"/>
    <div class="form-group container" v-if="startingCompetition">
        <div class="input-group">
          <label for="facilityName" class="label">Facility Name</label>
          <input type="text"
                 id="facilityName"
                 class="form-control"
                 v-model="compData.facilityName">
        </div>
        <div class="input-group">
          <label for="compDate" class="label">Competition Date</label>
          <input type="date"
                 id="compDate"
                 class="form-control"
                 v-model="compData.compDate">
        </div>
        <div class="input-group">
          <label for="addressOne" class="label">Address One</label>
          <input type="text"
                 id="addressOne"
                 class="form-control"
                 v-model="compData.addressOne">
        </div>
        <div class="input-group">
          <label for="addressTwo" class="label">Address Two</label>
          <input type="text"
                 id="addressTwo"
                 class="form-control"
                 v-model="compData.addressTwo">
        </div>
        <div class="input-group">
          <label for="city" class="label">City</label>
          <input type="text"
                 id="city"
                 class="form-control"
                 v-model="compData.city">
        </div>
        <div class="input-group">
          <label for="state" class="label">State</label>
          <input type="text"
                 id="state"
                 class="form-control"
                 v-model="compData.state">
        </div>
        <div class="input-group">
          <label for="zip" class="label">Zip</label>
          <input type="number"
                 id="zip"
                 class="form-control"
                 v-model="compData.zip">
        </div>
      <Button text="Submit" color="lightgreen" @btn-click="submitCompetitionForm" />
    </div>
    <div class="add-competitor" v-if="addingCompetitors">
      <div class="input-group">
        <label for="memberId" class="label">Member Number</label>
        <input type="number"
               id="memberId"
               class="form-control"
               v-model="competitorData.memberId">
      </div>
      <Button text="Submit Competitor" color="green" @btn-click="submitCompetitorForm" />
      <Button class="begin-button" text="Begin Competition" color="aqua" @btn-click="initializeCompetition"/>
    </div>
    <div class="form-group container" v-if="addingNewCompetitor">
      <div class="input-group">
        <label for="newMemberId" class="label">Member ID</label>
        <input type="text"
               id="newMemberId"
               class="form-control"
               v-model="newCompetitor.memberId">
      </div>
      <div class="input-group">
        <label for="firstName" class="label">First Name</label>
        <input type="text"
               id="firstName"
               class="form-control"
               v-model="newCompetitor.firstName">
      </div>
      <div class="input-group">
        <label for="lastName" class="label">Last Name</label>
        <input type="text"
               id="lastName"
               class="form-control"
               v-model="newCompetitor.lastName">
      </div>
      <div class="input-group radio-group">
        <input type="radio" id="male" value="male" v-model="newCompetitor.gender">
        <label for="male">Male</label><br>
        <input type="radio" id="female" value="female" v-model="newCompetitor.gender">
        <label for="female">Female</label><br>
      </div>
      <div class="input-group">
        <label for="weight" class="label">Weight</label>
        <input type="text"
               id="weight"
               class="form-control"
               v-model="newCompetitor.weight">
      </div>
      <div class="input-group">
        <label for="birthDate" class="label">Birth Date</label>
        <input type="date"
               id="birthDate"
               class="form-control"
               v-model="newCompetitor.birthDate">
      </div>

      <Button text="Submit" color="green" @btn-click="submitNewCompetitor" />
      <Button text="Cancel" color="red" @btn-click="resetToRegister" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Button from "@/components/Button";

export default {
  data() {
    return {
      addingCompetitors: false,
      startingCompetition: true,
      addingNewCompetitor: false,
      errorPresent: false,
      errorMessage: '',
      successPresent: false,
      successMessage: '',
      compData: {
        facilityName: '',
        compDate: '',
        addressOne: '',
        addressTwo: '',
        city: '',
        state: '',
        zip: ''
      },
      compResponse: '',
      competitorData: {
        memberId: '',
        competitionId: ''
      },
      newCompetitor: {
        memberId: '',
        birthDate: '',
        firstName: '',
        lastName: '',
        gender: '',
        weight: ''
      }
    }
  },
  components: {
    Button
  },
  methods:{
    submitCompetitionForm() {
      const configHeaders = {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
      axios({
        url: 'https://csci-602-app.herokuapp.com/Competition',
        method: 'post',
        data: this.compData,
        headers: configHeaders
      })
      .then(
          response => {this.compResponse = response.data}
      ).then(
          this.successCompetition
      ).catch(
          this.errorCompetition
      );
    },
    submitCompetitorForm() {
      const configHeaders = {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
      axios({
        url: 'https://csci-602-app.herokuapp.com/Competition/register',
        method: 'post',
        data: this.competitorData,
        headers: configHeaders
      }).then(
          response => {this.compResponse = response.data}
      ).then(
          this.successCompetitor
      ).catch(
          this.errorMissingCompetitor
      );
    },
    submitNewCompetitor() {
      const configHeaders = {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
      axios({
        url: 'https://csci-602-app.herokuapp.com/competitor',
        method: 'post',
        data: this.newCompetitor,
        headers: configHeaders
      }).then(
          response => {this.compResponse = response.data}
      ).then(
          this.submitCompetitorForm
      ).catch(

      );
    },
    successCompetition() {
      this.addingCompetitors = true;
      this.startingCompetition = false;
      this.errorPresent = false;
      this.competitorData.competitionId = this.compResponse.competitionId;
    },
    errorCompetition() {
      // Handle this
    },
    errorMissingCompetitor() {
      this.newCompetitor.firstName = '';
      this.newCompetitor.lastName = '';
      this.newCompetitor.weight = '';
      this.newCompetitor.gender = '';
      this.newCompetitor.birthDate = '';
      this.newCompetitor.memberId = this.competitorData.memberId;
      this.errorPresent = true;
      this.successPresent = false;
      this.errorMessage = "Missing Competitor:  Add new competitor"
      this.addingCompetitors = false;
      this.addingNewCompetitor = true;
    },
    successCompetitor() {
      this.successMessage = "Competitor Successfully Registered!";
      this.successPresent = true;
      this.errorPresent = false;
      this.newCompetitor.memberId = '';
      this.newCompetitor.first_name = '';
      this.newCompetitor.last_name = '';
      this.newCompetitor.gender = '';
      this.newCompetitor.weight = '';
      this.newCompetitor.birth_date = '';
      this.competitorData.memberId = '';
      this.addingNewCompetitor = false;
      this.addingCompetitors = true;
    },
    resetToRegister() {
      this.successPresent = false;
      this.errorPresent = false;
      this.addingCompetitors = true;
      this.addingNewCompetitor = false;
      this.competitorData.memberId = '';
    },
    initializeCompetition(){
      var compId = this.competitorData.competitionId;
      this.$router.push({path: `/competition/${compId}`});
    }
  }
}
</script>

<style scoped>
.container {
  background-color: gray;
  display: block;
  margin: 0 auto;
  border-radius: 30px;
  padding: 30px;
  border: black 1px solid;
  width: fit-content;
}

.begin-button {
  margin-left:20px;
}

.label {
  padding-right: 10px;
}

.input-group {
  background-color: white;
  width: max-content;
  display: grid;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: lightgray;
  padding: 10px;
  border: black 1px solid;
  box-shadow: 5px 5px 5px black;
}

.page-wrapper{
  display: block;
}

.success {
  width: max-content;
  padding:15px;
  margin: 0 auto 20px;
  background-color: lightgreen;
  border: black 1px solid;
  box-shadow: 5px 5px 5px black;
}

.error {
  width: max-content;
  padding:15px;
  margin: 0 auto 20px;
  background-color: lightcoral;
  border: black 1px solid;
  box-shadow: 5px 5px 5px black;
}

.radio-group {
  display: flex;
}
</style>
