<template>
<div>
  <!-- <h1>Posts</h1>
  <router-link to="/posts/1" exact>agesrfes</router-link> -->
  <!-- <router-link to="/posts/notFound" exact>Not Found</router-link> -->
  <!-- <router-view></router-view> -->
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
    // this.getAllUsers();
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
          // console.log(this.allPosts);
        })
        .catch(error => console.log(error));
    },
    // getAllUsers: async function() {
      // await axios.get('https://jsonplaceholder.typicode.com/users')
      //   .then(res => {
      //     this.allUsers = res.data;
      //   })
      //   .catch(error => console.log(error)
      //   );
    // }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
