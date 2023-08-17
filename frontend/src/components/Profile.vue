<template>
    <div>
        <input type="text" v-model="currentAccount">
        <button 
            id="profileButton"
            @click.prevent="getProfile"
        >Enter</button>

        <h1>User Profile</h1>
        <p><b>Name</b> {{ `${userData.first_name} ${userData.last_name}` }}</p>
        <p><b>Age</b> {{ `${userData.age}` }}</p>
        <p><b>Account Number</b> {{ `${userData.account_number}` }}</p>
    </div>
</template>
<script lang="ts">
import { defineComponent, } from 'vue';
import {ProfileData, getProfileData, } from '../assets/functions'
export default defineComponent({
    name: "Profile",
    props: ['userData', 'updateProfile'],
    data() {
        return {
            currentAccount: 0
        }
    },
    created() {
        
    },
    methods: {
        getProfile() {
            getProfileData(this.currentAccount).then(data => {
                //console.log(userData)
                this.updateProfile(data as ProfileData);
            });
        }
    },
})
</script>
<style></style>