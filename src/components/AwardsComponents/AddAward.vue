<template>
    <div class="submit-form">
      <div v-if="!submitted">
        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            class="form-control"
            id="title"
            required
            v-model="award.title"
            name="title"
          />
        </div>
  
        <div class="form-group">
          <label for="description">Description</label>
          <input
            class="form-control"
            id="description"
            required
            v-model="award.description"
            name="description"
          />
        </div>
  
        <button @click="saveTutorial" class="btn btn-success">Submit</button>
      </div>
  
      <div v-else>
        <h4>You submitted successfully!</h4>
        <button class="btn btn-success" @click="newTutorial">Add</button>
      </div>
    </div>
  </template>
  
  <script>
  import AwardDataService from "../../services/AwardDataService";
  
  export default {
    name: "add-award",
    data() {
      return {
        award: {
          title: "",
          description: ""
        },
        submitted: false
      };
    },
    methods: {
      saveTutorial() {
        var data = {
          title: this.award.title,
          description: this.award.description
        };
  
        AwardDataService.create(data)
          .then(response => {
            console.log(response.data);
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
      },
      
      newTutorial() {
        this.submitted = false;
        this.award = {};
      }
    }
  };
  </script>
  
  <style>
  .submit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>