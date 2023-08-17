<template>
  <h1>Welcome</h1>
  <p>{{ `Result: ${result}` }}</p>
  <p>{{ `Variable: ${sum}` }}</p>
  <p>{{ `Object - Name: ${obj.f_name} ${obj.l_name} Age: ${obj.age}` }}</p>
  <p>{{ `Names: ${names_map[0].firstName} - ${names_map[3].lastName}` }}</p>
  <p>API Call <br> Profile Data: <br>{{ `Name: ${userFirstName} ${userLastName} Age: ${userAge}` }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { sum, obj, add, getData, ProfileData } from '../assets/functions'
import { Name, names_map } from '../assets/maps'

export default defineComponent({
  name: 'App',
  components: {
  },
  data() {
    return {
      numbers: [1,2] as number[],
      result: 0 as number,
      sum: sum as number,
      obj: obj,
      names_map: names_map as Name[],
      userFirstName: "",
      userLastName: "",
      userAge: 0
    }
  },
  methods: {

  },
  created() {
    this.result = add(1,2)

    // This is how you will have to handle an async function, you have to await or .then the result
    // I have added it within an interval so that I can see the component update after (2) seconds
    setTimeout(() => {
      getData().then(data => {
        console.log(`Type: ${typeof data}`);
        const userData = data as ProfileData;

        this.userFirstName = userData.firstName;
        this.userLastName = userData.lastName;
        this.userAge = userData.age;
      });
    }, 2000); // 2000 milliseconds = 2 seconds
  }
});
</script>

<style>

</style>
