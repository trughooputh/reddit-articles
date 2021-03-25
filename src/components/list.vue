<template>
  <div class="list">
    <ul>
      <li v-for="article in articles" :key="article.data.id">
        {{ article.data.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "List",
  props: {
    msg: String,
  },
  computed: {
    ...mapState(["articles"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
