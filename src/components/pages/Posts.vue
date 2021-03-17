<template>
<div>
  <base-post :posts="allPosts"></base-post>
</div>
  
</template>

<script>
import axios from 'axios';
import BasePost from '../ui/BasePost.vue';

export default {
  components: { BasePost },
  name: 'Posts',
  created() {
    this.getAllPosts();
  },
  data() {
    return {
      allPosts: [],
    }
  },
  methods: {
    getAllPosts() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
          this.allPosts = res.data;
        })
        .catch(error => console.log(error));
    },
  }
}
</script>
