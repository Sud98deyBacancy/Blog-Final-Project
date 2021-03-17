<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <h1>{{ postDetails.title }}</h1>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="10">
        <p>{{ postDetails.body }}</p>
      </b-col>
    </b-row>
    <b-row align-h="end">
      <b-col cols="4">
        <router-link :to="'/userDetails/' + this.postDetails.userId"
          >@{{ userDetails.username }} ({{ userDetails.name }})</router-link
        >
        <!-- <p>@{{ userDetails.username }} ({{ userDetails.name }})</p> -->
      </b-col>
    </b-row>
    <hr />
    <b-row>
      <b-col cols="12" class="commentTitle">  
        <h2>Comments</h2>
      </b-col>
      <hr class="commentHr">
      <base-comment :comments="allComments"></base-comment>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
import baseComment from "../ui/BaseComment.vue";

export default {
  name: "PostDetails",
  components: {
    baseComment,
  },
  // props: ['postId'],
  mounted() {
    this.getPostDetails(this.postId);
    this.getComments(this.postId);
    // this.getUserDetails(this.postDetails.userId);
  },
  data() {
    return {
      // userId: this.$route.params.id,
      // userDetails: {},
      postId: this.$route.params.id,
      postDetails: {},
      userDetails: {
        username: "",
        name: "",
      },
      allComments: [],
    };
  },
  methods: {
    getPostDetails(id) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/" + id)
        .then((res) => {
          this.postDetails = {
            ...res.data,
          };
          console.log("post details");
          console.log(this.postDetails);
          // console.log(this.postDetails.body);
          this.getUserDetails(this.postDetails.userId);
        })
        .catch((error) => console.log(error));
      this.getComments(id);
    },
    getComments(id) {
      axios
        .get("https://jsonplaceholder.typicode.com/comments?postId=" + id)
        .then((res) => {
          this.allComments = res.data;
          // console.log(this.comments);
        });
    },
    getUserDetails(id) {
      console.log("inside userdetails func");
      axios
        .get("https://jsonplaceholder.typicode.com/users/" + id)
        .then((res) => {
          this.userDetails.username = res.data.username;
          this.userDetails.name = res.data.name;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style scoped>

.container {
  box-shadow: 2px 2px 4px gray;
  border: 1px solid rgb(228, 220, 220);
  border-radius: 4px;
  padding: 10px;
}

.row {
  margin: 2% 0;
  margin-bottom: 4%;
}

h1 {
  font-weight: bolder;
  font-size: 2.5rem;
}

hr {
  width: 90%;
}

.commentTitle {
  font-size: 200%;
  font-weight: bold;
}

.commentHr {
  width: 30%;
  /* background-color: darkslategrey; */
  margin: 0 auto;
  margin-bottom: 2%;
}
</style>
