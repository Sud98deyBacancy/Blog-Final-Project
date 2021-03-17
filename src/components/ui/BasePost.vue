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
        <p class="body" :title="post.body">{{ post.body.slice(0,70) + '...'}}</p>
      </b-row>
      <b-row class="row2">
        <b-col cols="3">
          <b-button class="button"
            ><router-link :to="'/posts/' + post.id"
              >Details</router-link
            ></b-button
          >
        </b-col>
        <b-col cols="9" class="userName">
          <router-link :to="'/userDetails/' + post.userId">@ {{ userName(post.userId) }} ( {{ name() }} )</router-link>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "basePost",
  props: ["posts"],
  created() {
    this.getUsers();
  },
  data() {
    return {
      allUsers: [],
      userDetails: {
        username: '',
        name: ''
      }
    };
  },
  methods: {
    getUsers() {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
          this.allUsers = res.data;
        })
        .catch(error => console.log(error)
        );
    },
    imgSource: function(postId) {
      return postId % 2 == 0
        ? "https://cdn.pixabay.com/photo/2021/02/08/16/03/dinosaur-5995333_1280.png"
        : "https://cdn.pixabay.com/photo/2017/04/19/10/24/vinyl-2241789_1280.png";
    },
    background: function(postId) {
      return postId % 2 == 0 ? '#A3C3B0' : '#DEA7A1';
    },
    userName(userId) {
      var currentUser = this.allUsers[userId-1];
      
      this.userDetails.username = currentUser.username;
      this.userDetails.name = currentUser.name;

      return this.userDetails.username;
    },
    name() {
      return this.userDetails.name;
    }
  },
};
</script>

<style scoped>
.post {
  height: 300px;
  width: 80%;
  margin: 2% auto;
  box-shadow: 2px 2px 7px grey;
}

.post > .row {
  margin: 5%;
  margin-top: 7%;
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
  font-size: 200%;
  font-weight: 600;
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
  text-align: end;
}

.userName > a {
  color: black;
}

.userName > a:hover {
  font-size: 110%;
}
</style>
