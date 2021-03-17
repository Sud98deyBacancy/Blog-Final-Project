<template>
<!-- <p>{{ comments }}</p> -->
<!-- <p>sdsavfsdvfsd</p> -->
  <b-col cols="12">
    <b-col cols="10" v-for="comment in comments" :key="comment.id" class="comment">
      {{ comment.body }}
      <hr>
    </b-col>
  </b-col>
</template>

<script>
export default {
  name: "baseComment",
  props: ["comments"],
};
</script>

<style scoped>
.comment {
  margin: 0 auto;
}

hr {
  width: 60%;
  color: gray;
}
</style>
