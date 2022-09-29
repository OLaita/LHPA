<template>
    <div v-if="currentParticipante" class="edit-form">
      <h4>Participante</h4>
      <form>
        <div class="form-group">
          <label for="title">Nombre</label>
          <input type="text" class="form-control" id="title"
            v-model="currentParticipante.nombre"
          />
        </div>
      </form>
    
      <button class="badge badge-danger mr-2"
        @click="deleteParticipante"
      >
        Delete
      </button>
  
      <button type="submit" class="badge badge-success"
        @click="updateParticipante"
      >
        Update
      </button>
      <p>{{ message }}</p>
    </div>
  
    <div v-else>
      <br />
      <p>Please click on a Participante...</p>
    </div>
  </template>
  
  <script>
  import ParticipantesDataService from "../../services/ParticipantesDataService";
  
  export default {
    name: "participante-detail",
    data() {
      return {
        currentParticipante: null,
        message: ''
      };
    },
    methods: {
      getParticipante(id) {
        ParticipantesDataService.get(id)
          .then(response => {
            this.currentParticipante = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      updateParticipante() {
        ParticipantesDataService.update(this.currentParticipante.id, this.currentParticipante)
          .then(response => {
            console.log(response.data);
            this.message = 'The participante was updated successfully!';
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      deleteParticipante() {
        ParticipantesDataService.delete(this.currentParticipante.id)
          .then(response => {
            console.log(response.data);
            this.$router.push({ name: "participantes" });
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    mounted() {
      this.message = '';
      this.getParticipante(this.$route.params.id);
    }
  };
  </script>
  
  <style>
  .edit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>