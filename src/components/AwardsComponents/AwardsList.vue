<template>
    <div class="list row">
      <div class="col-md-8">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Search by title"
            v-model="title"/>
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button"
              @click="searchTitle"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <h4>Tutorials List</h4>
        <ul class="list-group">
          <li class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(award, index) in awards"
            :key="index"
            @click="setActiveTutorial(award, index)"
          >
            {{ award.title }}
          </li>
        </ul>
  
        <button class="m-3 btn btn-sm btn-danger" @click="removeAllTutorials">
          Remove All
        </button>
      </div>
      <div class="col-md-6">
        <div v-if="currentTutorial">
          <h4>Tutorial</h4>
          <div>
            <label><strong>Title:</strong></label> {{ currentTutorial.title }}
          </div>
          <div>
            <label><strong>Description:</strong></label> {{ currentTutorial.description }}
          </div>
          <div>
            <label><strong>Status:</strong></label> {{ currentTutorial.published ? "Published" : "Pending" }}
          </div>
  
          <router-link :to="'/awards/' + currentTutorial.id" class="badge badge-warning">Edit</router-link>
        </div>
        <div v-else>
          <br />
          <p>Please click on a Tutorial...</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import AwardDataService from "../../services/AwardDataService";
  
  export default {
    name: "awards-list",
    data() {
      return {
        awards: [],
        currentTutorial: null,
        currentIndex: -1,
        title: ""
      };
    },
    methods: {
      retrieveTutorials() {
        AwardDataService.getAll()
          .then(response => {
            this.awards = response.data;
            // console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      refreshList() {
        this.retrieveTutorials();
        this.currentTutorial = null;
        this.currentIndex = -1;
      },
  
      setActiveTutorial(award, index) {
        this.currentTutorial = award;
        this.currentIndex = award ? index : -1;
      },
  
      removeAllTutorials() {
        AwardDataService.deleteAll()
          .then(response => {
            console.log(response.data);
            this.refreshList();
          })
          .catch(e => {
            console.log(e);
          });
      },
      
      searchTitle() {
        AwardDataService.findByTitle(this.title)
          .then(response => {
            this.awards = response.data;
            this.setActiveTutorial(null);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    mounted() {
      this.retrieveTutorials();
    }
  };
  </script>
  
  <style>
  .list {
    text-align: left;
    max-width: 750px;
    margin: auto;
  }
  </style>