<template>
  <div>
    <b-row>
      <b-col>
        <h1>User Details</h1>
      </b-col>
    </b-row>
    <b-card>
      <b-row v-if="userDetails">
        <b-col cols="12">
          <p class="username">@{{ userDetails.username }}</p>
        </b-col>
        <b-col cols="12">
          <p class="username">{{ userDetails.name }}</p>
        </b-col>
        <hr />
        <b-col cols="12">
          <p>{{ userDetails.email }}</p>
        </b-col>
        <b-col cols="12" v-if="userDetails.address">
          <p>
            {{ userDetails.address.street }}, {{ userDetails.address.suite }},
            {{ userDetails.address.city }}, {{ userDetails.address.zipcode }}.
          </p>
        </b-col>
        <b-col cols="12">
          <p>{{ userDetails.phone }}</p>
        </b-col>
        <hr />
        <b-col cols="12">
          <p>{{ userDetails.website }}</p>
        </b-col>
        <b-col cols="12" >
          <p>{{ userDetails.company ? userDetails.company.name : '' }}</p>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created() {
    this.getUserDetails();
  },
  data() {
    return {
      userId: this.$route.params.id,
      userDetails: null,
    };
  },
  methods: {
    getUserDetails() {
      axios
        .get("https://jsonplaceholder.typicode.com/users/" + this.userId)
        .then((res) => {
          this.userDetails = {
            ...res.data,
          };
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style scoped>
h1 {
  margin: 2% auto;
  font-weight: bolder;
}

.card {
  width: 80%;
  margin: 0 auto;
  box-shadow: 2px 2px 4px gray;
  font-size: 120%;
}

.username {
  font-weight: 600;
  font-size: 130%;
}

hr {
  color: slategray;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 2%;
}
</style>
