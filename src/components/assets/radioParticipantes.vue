<template>
    <div class="w-full px-4 py-16">
      <div class="mx-auto w-52 max-w-md">
        <RadioGroup>
          <RadioGroupLabel class="sr-only">Participantes</RadioGroupLabel>
          <div class="space-y-2">
            <RadioGroupOption
                as="template"
              v-for="part in participantes"
              :key="part.id"
              :value="part.id"
              v-slot="{ active, checked }"
              @click="test(part)"
            >
              <div
                :class="[
                  active
                    ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                    : '',
                  checked ? 'bg-sky-900 bg-opacity-75 text-white ' : 'bg-white ',
                ]"
                class="relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none"
              >
                <div class="flex w-full items-center justify-between">
                  <div class="flex items-center">
                    <div class="text-sm">
                      <RadioGroupLabel
                        as="p"
                        :class="checked ? 'text-white' : 'text-gray-900'"
                        class="font-medium"
                      >
                      {{ part.nombre }}
                      </RadioGroupLabel>
                      <RadioGroupDescription
                        as="span"
                        :class="checked ? 'text-sky-100' : 'text-gray-500'"
                        class="inline"
                      >
                      </RadioGroupDescription>
                    </div>
                  </div>
                  <div v-show="checked" class="shrink-0 text-white">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                      <circle
                        cx="12"
                        cy="12"
                        r="12"
                        fill="#fff"
                        fill-opacity="0.2"
                      />
                      <path
                        d="M7 13l3 3 7-7"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </RadioGroupOption>
          </div>
        </RadioGroup>
      </div>
    </div>
  </template>
  
  <script setup>
    
  import {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupDescription,
    RadioGroupOption,
  } from '@headlessui/vue'


  </script>

  <script module>

    import ParticipantesDataService from "../../services/ParticipantesDataService";

    export default {
        data(){
          return {
            participantes: []
          }
        },
        methods: {
          test(algo){
            // this.premio.votado = algo.id
            console.log(algo)
          },
          retrieveParticipantes() {
            ParticipantesDataService.getAll()
              .then(response => {
                this.participantes = response.data;
                // console.log(response.data);
              })
              .catch(e => {
                console.log(e);
              });
          }
        },
      mounted() {
        this.retrieveParticipantes();
      }
    }

  </script>
  