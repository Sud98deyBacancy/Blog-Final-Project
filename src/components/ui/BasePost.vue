<template>
  <div>
    <b-card
      v-for="post in posts"
      :key="post.id"
      img-left
      :img-src="imgSource(post.id)"
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

      <!-- <p title="aldneoifgeoriuhgqp3woihgpiuwehrgiweriuhgi;ergislrheiglheorighpuier">
        hello
      </p> -->
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
  computed: {
    // userName: () => {
    //   this.users.find(user => post)
    //   return 
    // }
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
      console.log(postId);
      return postId % 2 == 0
        ? "https://cdn.pixabay.com/photo/2021/02/08/16/03/dinosaur-5995333_1280.png"
        : "https://cdn.pixabay.com/photo/2017/04/19/10/24/vinyl-2241789_1280.png";
    },
    background: function(postId) {
      return postId % 2 == 0 ? '#A3C3B0' : '#DEA7A1';
    },
    userName(userId) {
      console.log('userId of posts: ' + userId);
      
      var currentUser = this.allUsers[userId-1];
      
      this.userDetails.username = currentUser.username;
      this.userDetails.name = currentUser.name;

      // var currentUser = this.allUsers.find(user => user.id === userId);
      // console.log('current User: ');
      // console.log(currentUser);
      return this.userDetails.username;
    },
    // userName(userId) {
    //   console.log('inside username func');
    //   // var user1 = {};
 
    //   axios.get('https://jsonplaceholder.typicode.com/users/' + userId)
    //     .then(res => {
    //       console.log(res);
    //       this.userDetails.username = res.data.username;
    //       this.userDetails.name = res.data.name;
          
    //       // return res.username;
    //       // user1 = {
    //       //   ...res
    //       // }
    //     })
    //     .catch(error => error);

    //     return this.userDetails.username;

    //   // this.userDetails.username = user1.username;
    //   // this.userDetails.name = user1.name;
    //   // return this.userDetails.username;
    // },
    name() {
      // console.log('inside name func');
      // axios.get('https://jsonplaceholder.typicode.com/users/' + userId)
      //   .then(res => {
      //     return res.data.name;
      //     //
      //   })
      //   .catch(error => error);
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
  /* position: relative; */
  /* display: flex; */
  /* flex-direction: column; */
  /* align-content: space-between; */
  /* justify-content: space-between; */

}

.post > img {
  width: 350px;
  margin-right: 1%;
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
  /* align-self: flex-start; */
  /* display: flex;
  flex-direction: column; */
}

.row2 {
  height: 20%;
  /* display: flex; */
  /* align-self: flex-end; */
  /* align-self: baseline;
  justify-content: end; */

}

.title {
  font-size: 200%;
  font-weight: 600;
  /* color: black; */
}

.title > a {
  color: black;
}

.button {
  background-color: white;
  box-shadow: 1px 1px 3px darkslategrey;
  border-radius: 5px;
  border: none;
  /* color: black; */
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
