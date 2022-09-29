<template>

    <div class="flex justify-center">

        <h1 class="text-7xl">{{count}}</h1>

        <button @click="sumarNumero">Mas</button><br/>

        
        <div class="bg-yellow-200">
            <input type="text" v-model="texto"/>
            <p>{{texto}}</p>
        </div>

    </div>

</template>


<script>
import { defineComponent } from 'vue'


export default defineComponent({
  name: 'testPatata',
  data: () => ({
      count: 1,
      texto: ''
    }),
    methods: {

        sumarNumero(){
            this.count++;
        }
    
    },
    mounted() {
      
    }
});
</script>