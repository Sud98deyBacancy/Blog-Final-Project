<template>
<span>@sdfsd{{ username }} - {{ name }}</span>
</template>

<script>
// import axios from 'axios';
export default {
  name: 'PostUserInfo',
  props: ['userId', 'users'],
  created() {
    // this.getUsers();
  },
  data() {
    return {
    // allUsers: []
    }
  },
  computed: {
    username: function() {
      var user1 = this.users.find(user => user.id === this.userId);
      return user1.username;
    },
    name: function() {
      var user2 = this.users.find(user => user.id === this.userId);
      return user2.name;
    }
  },
  methods: {
    // getUsers() {
    //   axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then(res => {
    //       this.allUsers = res.data;
    //     })
    //     .catch(error => console.log(error)
    //     );
    // },
  }
}
</script>