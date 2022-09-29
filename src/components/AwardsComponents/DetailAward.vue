<template>
    <div v-if="currentTutorial" class="edit-form">
      <h4>Tutorial</h4>
      <form>
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control" id="title"
            v-model="currentTutorial.title"
          />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <input type="text" class="form-control" id="description"
            v-model="currentTutorial.description"
          />
        </div>
  
        <div class="form-group">
          <label><strong>Votos:</strong></label>
          {{ currentTutorial.votos}}
        </div>
      </form>
    
      <button class="badge badge-danger mr-2"
        @click="deleteTutorial"
      >
        Delete
      </button>
  
      <button type="submit" class="badge badge-success"
        @click="updateTutorial"
      >
        Update
      </button>
      <p>{{ message }}</p>
    </div>
  
    <div v-else>
      <br />
      <p>Please click on a Tutorial...</p>
    </div>
  </template>
  
  <script>
  import AwardDataService from "../../services/AwardDataService";
  
  export default {
    name: "award-detail",
    data() {
      return {
        currentTutorial: null,
        message: ''
      };
    },
    methods: {
      getTutorial(id) {
        AwardDataService.get(id)
          .then(response => {
            this.currentTutorial = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      updateTutorial() {
        AwardDataService.update(this.currentTutorial.id, this.currentTutorial)
          .then(response => {
            console.log(response.data);
            this.message = 'The award was updated successfully!';
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      deleteTutorial() {
        AwardDataService.delete(this.currentTutorial.id)
          .then(response => {
            console.log(response.data);
            this.$router.push({ name: "awards" });
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    mounted() {
      this.message = '';
      this.getTutorial(this.$route.params.id);
    }
  };
  </script>
  
  <style>
  .edit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>