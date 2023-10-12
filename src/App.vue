<script setup>
import { ref } from 'vue'

import { getCountry } from './api/weather.js'
const Api = ref()
const location = ref('')
const temperatura = ref(0)
const local = ref('None')
const condicao = ref('None')
const countryFlag = ref('')
//const vento, chuvaPorcentagem
async function  buscarClima(){
  if(location.value == null || location.value == ''){
    console.log('A localização está vazia')
    return
  }
  Api.value = await getCountry(location.value)
  temperatura.value = Api.value['main']['temp']
  local.value = Api.value['name']
  condicao.value = Api.value['weather'][0]['description']
  countryFlag.value = `https://flagsapi.com/${Api.value['sys']['country']}/shiny/48.png`
}


</script>

<template> 
<div class="bgDay d-flex h-100">
    <v-card
    class="ma-auto flex-grow-1"
      max-width="380"
    >

    <v-card-item>
      <v-card-title>{{ local }}</v-card-title>
      
      <v-row class="d-flex" no-gutters>
        <v-col
          cols="6"
          class="d-flex align-center"
        >
          <v-card-subtitle>
            <v-icon
              icon="mdi-weather-cloudy"
              size="18"
              class="me-1 pb-1"
            ></v-icon>
            
            {{ condicao }}
          </v-card-subtitle>
          </v-col>
          
          <v-col cols="6" class="text-right">

            <img :src="countryFlag">
          </v-col>
      </v-row>
      </v-card-item>

    <v-card-text class="py-0">
      <v-row align="center" no-gutters>
        <v-col
          class="text-h3"
          cols="6"
        >
          {{ temperatura }}&deg;F
        </v-col>
        <v-col cols="6" class="text-right">
          <v-icon
            color="error"
            icon="mdi-weather-hurricane"
            size="88"
          ></v-icon>
        </v-col>
      </v-row>
    </v-card-text>

    <div class="d-flex py-3 justify-space-between">
      <v-list-item
        density="compact"
        prepend-icon="mdi-weather-windy"
      >
        <v-list-item-subtitle>123 km/h</v-list-item-subtitle>
      </v-list-item>

      <v-list-item
        density="compact"
        prepend-icon="mdi-weather-pouring"
      >
        <v-list-item-subtitle>48%</v-list-item-subtitle>
      </v-list-item>
    </div>

    <v-divider></v-divider>

    <v-card-actions>
      <div class="d-flex align-items-center flex-grow-1 m-0">
        <v-text-field hide-details density="compact" placeholder="Digite Cidade/Estado/Pais" v-model="location" clearable variant="outlined"></v-text-field>
        <v-btn icon="mdi-magnify" @click="buscarClima()"></v-btn>
      </div>
    </v-card-actions>
  </v-card>
  </div>
</template>
