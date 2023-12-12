<template>
  <div class="success" v-if="successPresent" v-html="successMessage"/>
  <div class="error" v-if="errorPresent" v-html="errorMessage"/>
  <div class="pageContents" v-if="!errorPresent">
    <span class="page-block">
      <ul class="competitor-list" id="array-rendering">
        <li v-for="(item, index) in competitorList" :key="index">
          <Button color="lightgreen" v-text="item.firstName + ' ' + item.lastName" @btn-click="loadCompetitor(item.memberId)" />
        </li>
        <li>
          <Button color="red" text="FINALIZE" @btn-click="finalizeCompetition" />
        </li>
      </ul>
    </span>
    <span class="page-block">
      <div class="form-group container">
        <div class="input-group">
          <label for="cnjAttempt1" class="label">CNJ Attempt 1</label>
          <input type="number"
                 id="cnjAttempt1"
                 class="form-control"
                 v-model="compResults.results.cnjAttempt1">
        </div>
        <div class="input-group">
          <label for="cnjAttempt2" class="label">CNJ Attempt 2</label>
          <input type="number"
                 id="cnjAttempt2"
                 class="form-control"
                 v-model="compResults.results.cnjAttempt2">
        </div>
        <div class="input-group">
          <label for="cnjAttempt3" class="label">CNJ Attempt 3</label>
          <input type="number"
                 id="cnjAttempt3"
                 class="form-control"
                 v-model="compResults.results.cnjAttempt3">
        </div>
        <div class="input-group">
          <label for="snatchAttempt1" class="label">Snatch Attempt 1</label>
          <input type="number"
                 id="snatchAttempt1"
                 class="form-control"
                 v-model="compResults.results.snatchAttempt1">
        </div>
        <div class="input-group">
          <label for="snatchAttempt2" class="label">Snatch Attempt 2</label>
          <input type="number"
                 id="snatchAttempt2"
                 class="form-control"
                 v-model="compResults.results.snatchAttempt2">
        </div>
        <div class="input-group">
          <label for="snatchAttempt3" class="label">Snatch Attempt 3</label>
          <input type="number"
                 id="snatchAttempt3"
                 class="form-control"
                 v-model="compResults.results.snatchAttempt3">
        </div>
      </div>
    </span>
  </div>

</template>

<script>
import axios from 'axios';
import Button from "@/components/Button";

export default {
  data() {
    return {
      errorPresent: false,
      errorMessage: '',
      successPresent: false,
      successMessage: '',
      competitorList: [],
      currentCompetitor: '',
      compResults: {
        results: {
          cnjAttempt1: '',
          cnjAttempt2: '',
          cnjAttempt3: '',
          snatchAttempt1: '',
          snatchAttempt2: '',
          snatchAttempt3: ''
        },
        memberId: '',
        competitionId: ''
      }
    }
  },
  props: ['compId'],
  mounted() {
    axios.get('https://csci-602-app.herokuapp.com/competitor/competition/' + this.compId)
    .then(
        response => {
          this.competitorList = response.data;
          this.compResults.competitionId = this.compId;
          console.log(this.competitorList);
          if (this.competitorList.length === 0){
            this.errorMessage = 'Invalid Competition Specified'
            this.errorPresent = true;
          }
        });
    axios.get('https://csci-602-app.herokuapp.com/competitor/competition/' + this.compId)
        .then(
            response => {
              this.competitorList = response.data;
              this.compResults.competitionId = this.compId;
              console.log(this.competitorList);
              if (this.competitorList.length === 0){
                this.errorMessage = 'Invalid Competition Specified'
                this.errorPresent = true;
              }
            })

  },
  components: {
    Button
  },
  methods:{
    loadCompetitor(competitorId){
      if (this.currentCompetitor !== ''){
        this.compResults.memberId = this.currentCompetitor;
        const configHeaders = {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
        axios({
          url: 'https://csci-602-app.herokuapp.com/results/update',
          method: 'post',
          data: this.compResults,
          headers: configHeaders
        })
      }
      this.currentCompetitor = competitorId;
      axios.get('https://csci-602-app.herokuapp.com/results/' + competitorId + '/' + this.compId)
          .then(
              response => {
                console.log(response);
                this.compResults.results = response.data;
              })

    },
    finalizeCompetition(){
      axios.get('https://csci-602-app.herokuapp.com/Competition/finalize/' + this.compId);
      this.$router.push({path: '/'});
    }
  },

}
</script>

<style scoped>
.page-block {
  display: inline-block;
  width: 50%;
}
.competitor-list {
  list-style-type: none;
}

.form-group {
  padding: 30px;
  border-radius: 20px;
  border: black 1px solid;
  background-color: gray;
  box-shadow: 5px 5px 5px black;
}
.input-group {
  padding: 10px;
  margin: 10px;
  border: black 1px solid;
  border-radius: 10px;
  background-color: lightgray;
  box-shadow: 5px 5px 5px black;
}

</style>
