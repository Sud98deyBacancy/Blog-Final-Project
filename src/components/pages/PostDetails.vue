<template>
  <h1>posts details</h1>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PostDetails',
  // props: ['postId'],
  created() {
    this.getPostDetails(this.postId);
  },
  data() {
    return {
      postId: 1,
      postDetails: {},
      comments: []
    }
  },
  methods: {
    getPostDetails(id) {
      axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(res => {
          this.postDetails = {
            ...res.data
          }
          console.log(this.postDetails);
          console.log(this.postDetails.body);
        })
        .catch(error => console.log(error));
        this.getComments(id);
    },
    getComments(id) {
      axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + id)
        .then(res => {
          this.comments = res.data;
          console.log(this.comments);
        });
    }
  }
  
}
</script>