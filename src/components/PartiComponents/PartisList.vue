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
        <h4>Participantes List</h4>
        <ul class="list-group">
          <li class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(parti, index) in partis"
            :key="index"
            @click="setActiveParticipante(parti, index)"
          >
            {{ parti.nombre }}
          </li>
        </ul>
  
        <button class="m-3 btn btn-sm btn-danger" @click="removeAllParticipantes">
          Remove All
        </button>
      </div>
      <div class="col-md-6">
        <div v-if="currentParticipante">
          <h4>Participante</h4>
          <div>
            <label><strong>Nombre:</strong></label> {{ currentParticipante.nombre }}
          </div>
  
          <router-link :to="'/partis/' + currentParticipante.id" class="badge badge-warning">Edit</router-link>
        </div>
        <div v-else>
          <br />
          <p>Please click on a Participante...</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ParticipantesDataService from "../../services/ParticipantesDataService";
  
  export default {
    name: "partis-list",
    data() {
      return {
        partis: [],
        currentParticipante: null,
        currentIndex: -1,
        title: ""
      };
    },
    methods: {
      retrieveParticipantes() {
        ParticipantesDataService.getAll()
          .then(response => {
            this.partis = response.data;
            // console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      refreshList() {
        this.retrieveParticipantes();
        this.currentParticipante = null;
        this.currentIndex = -1;
      },
  
      setActiveParticipante(parti, index) {
        this.currentParticipante = parti;
        this.currentIndex = parti ? index : -1;
      },
  
      removeAllParticipantes() {
        ParticipantesDataService.deleteAll()
          .then(response => {
            console.log(response.data);
            this.refreshList();
          })
          .catch(e => {
            console.log(e);
          });
      },
      
      searchTitle() {
        ParticipantesDataService.findByTitle(this.title)
          .then(response => {
            this.partis = response.data;
            this.setActiveParticipante(null);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    mounted() {
      this.retrieveParticipantes();
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