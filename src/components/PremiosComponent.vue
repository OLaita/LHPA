

<template>
<div class="h-full bg-cyan-200 flex justify-between items-center">
    <!-- <h2 class="text-3xl font-bold underline">Hola desde Premios Componente</h2> -->
    <div class="w-1/6 text-center">
        <button class="" @click="prev">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 carousel_icon">
                <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clip-rule="evenodd" />
            </svg>  
        </button>
    </div>
    <Carousel ref="carousel" class="h-full w-4/6 text-center" v-model="currentSlide">
        
        <slide 
            v-for="(award, index) in awards"
            :key="index"
        >
            
            <div class="carousel__item min-h-full flex justify-around items-center">
                
                <div class="w-1/2">
                    <h1 class="text-xl">{{ award.title }}</h1>
                </div>
                <div class="w-1/2">
                    <!-- <h2>Participantes</h2>
                    <p v-for="part in $store.state.participantes" :key="part.id">{{part.nombre}}</p> -->
                    <radioParticipantes/>
                </div>
                
            </div>
            
        </slide>
        

    <template #addons>
      <!-- <navigation /> -->
      <!-- <pagination /> -->
    </template>
  </Carousel>
  <div class="w-1/6 text-center">
        <button class="" @click="next">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 carousel_icon">
                <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
            </svg>
        </button>
    </div>
</div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide, /* Pagination, Navigation */ } from 'vue3-carousel';

import AwardDataService from "../services/AwardDataService";

import 'vue3-carousel/dist/carousel.css';
import radioParticipantes from './assets/radioParticipantes.vue'

export default defineComponent({
  name: 'premios-carousel',
  components: {
    Carousel,
    Slide,
    radioParticipantes,
    // Pagination,
    // Navigation,
  },
  data: () => ({
      currentSlide: 0,
      awards: []
    }),
    methods: {
      next() {
        this.$refs.carousel.next()
      },
      prev() {
        this.$refs.carousel.prev()
      },
      retrieveAwards() {
        AwardDataService.getAll()
          .then(response => {
            this.awards = response.data;
            // console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    mounted() {
      this.retrieveAwards();
    }
});


</script>

<style>
    .carousel__viewport, .carousel__track{
        height: 100%;
    }

    .carousel__item{
        width: 100%;
    }
</style>