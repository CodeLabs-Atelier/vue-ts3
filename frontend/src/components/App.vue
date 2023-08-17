<template>
  <h1>Welcome</h1>
  <Profile
    :user-data="userData"
    :update-profile="updateProfile"
    :serial="serial"
  ></Profile>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ProfileData, } from '../assets/functions'
import Profile from './Profile.vue'

export default defineComponent({
  name: 'App',
  components: {
    Profile
  },
  data() {
    return {
      serial: 0,
      userData: {
        first_name: "",
        last_name: "",
        age: 0,
        account_number: 0
      }
    }
  },
  methods: {
    updateProfile(data: ProfileData) {
      this.userData = {...data} as ProfileData;
    }
  },
  created() {
  },
  emits: {
    methodOne({first_name, last_name}) {
      if(!first_name) { return false; }
      if(!last_name) { return false; }
    },
    methodTwo({age}) {
      if(!age) { return false; }
    }
  }
});
</script>

<style>

</style>
