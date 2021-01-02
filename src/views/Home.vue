<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    {{books}}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import gql from 'graphql-tag'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  apollo: {
    // Simple query that will update the 'hello' vue property
    books: gql`{books {
        id
        name
    }}`,
  },
}
</script>
