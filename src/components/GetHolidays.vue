<script setup lang="ts">
import { HolidaysTypes } from 'date-holidays';
import { ref } from 'vue'
import { getHolidays } from '../utils/holidays';

defineProps<{ msg: string }>()

const year = ref(new Date().getFullYear());
const country = ref("US");
const state = ref("la");
const region = ref("no");

const holidays = ref([] as HolidaysTypes.Holiday[]);

const setHolidays = () => {
  holidays.value = getHolidays(year.value, country.value, state.value, region.value);
}

</script>

<template>
  <h1>{{ msg }}</h1>
  <label>year</label>
  <input v-model="year" />
  <label>country</label>
  <input v-model="country" />
  <label>state</label>
  <input v-model="state" />
  <label>region</label>
  <input v-model="region" />
  <button @click="setHolidays">Click me</button>
  <pre>
    <code>{{holidays}}</code>
  </pre>
</template>

<style scoped>label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
