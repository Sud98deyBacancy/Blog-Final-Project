<template>
  <div>
    <b-card
      v-for="post in posts"
      :key="post.id"
      :style="{ backgroundColor: background(post.id) }"
      class="post"
    >
      <b-row class="row1">
        <p class="title">
          <router-link :to="'/posts/' + post.id">{{ post.title }}</router-link>
        </p>
        <p class="body" :title="post.body">
          {{ post.body.slice(0, 70) + "..." }}
        </p>
      </b-row>
      <b-row class="row2" align-h="end">
        <b-col cols="5" class="userName">
          <router-link :to="'/userDetails/' + post.userId">
            <post-user-info
              :userId="post.userId"
              :users="allUsers"
            ></post-user-info>
          </router-link>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
import PostUserInfo from "./PostUserInfo.vue";

export default {
  name: "basePost",
  components: {
    PostUserInfo,
  },
  props: ["posts"],
  mounted() {
    setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          this.allUsers = res.data;
        })
        .catch((error) => console.log("error in users: ", error));
    }, 2000);
  },
  data() {
    return {
      allUsers: [],
    };
  },
  methods: {
    imgSource: function(postId) {
      return postId % 2 == 0
        ? "https://cdn.pixabay.com/photo/2021/02/08/16/03/dinosaur-5995333_1280.png"
        : "https://cdn.pixabay.com/photo/2017/04/19/10/24/vinyl-2241789_1280.png";
    },
    background: function(postId) {
      return postId % 2 == 0 ? "#A3C3B0" : "#DEA7A1";
    },
  },
};
</script>

<style scoped>
body > .title {
  margin: 0;
}

.post {
  width: 80%;
  margin: 2% auto;
  box-shadow: 2px 2px 7px grey;
}

p {
  width: 100%;
}

.body {
  align-content: center;
}

.row1 {
  height: 80%;
}

.row2 {
  height: 20%;
}

.title {
  font-size: 150%;
  font-weight: 600;
  margin-bottom: 2%;
}

.title > a {
  color: black;
}

.button {
  background-color: white;
  box-shadow: 1px 1px 3px darkslategrey;
  border-radius: 5px;
  border: none;
}

.button > a {
  color: black;
}

.button:hover {
  background-color: lightgray;
  font-size: 120%;
}

.userName {
  float: right;
}

.userName > a {
  color: black;
}

.userName > a:hover {
  font-size: 110%;
}
</style>
