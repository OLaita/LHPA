<template>
    <div class="submit-form">
      <div v-if="!submitted">
        <div class="form-group">
          <label for="title">Nombre</label>
          <input
            type="text"
            class="form-control"
            id="title"
            required
            v-model="participante.nombre"
            name="title"
          />
        </div>
  
        <button @click="saveParticipante" class="btn btn-success">Submit</button>
      </div>
  
      <div v-else>
        <h4>You submitted successfully!</h4>
        <button class="btn btn-success" @click="newParticipante">Add</button>
      </div>
    </div>
  </template>
  
  <script>
  import ParticipantesDataService from "../../services/ParticipantesDataService";
  
  export default {
    name: "add-participante",
    data() {
      return {
        participante: {
          nombre: ""
        },
        submitted: false
      };
    },
    methods: {
      saveParticipante() {
        var data = {
          title: this.participante.nombre
        };
  
        ParticipantesDataService.create(data)
          .then(response => {
            console.log(response.data);
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
      },
      
      newParticipante() {
        this.submitted = false;
        this.participante = {};
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