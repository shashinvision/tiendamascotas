<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Aside></Aside>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Aside from "../components/Aside.vue";
export default {
  name: "Home",
  components: {
    // HelloWorld,
    Aside,
  },
};
</script>
