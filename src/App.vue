<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation v-if="!navigationData" />
      <router-view />
      <Footer v-if="!navigationData" />
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "app",
  components: {
    Navigation,
    Footer,
  },
  data() {
    return {
      navigationData: null,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user)=>{
      this.$store.commit("updateUser",user);
      if (user){
        this.$store.dispatch("getCurrentUser");
      }
    })
    this.checkRoute();
    console.log(firebase.auth().currentUser);},
  mounted() {
  },
  methods: {
    checkRoute() {
      console.log("this.$route.name", this.$route.name)
      if (
        this.$route.name === "Login" ||
        this.$route.name === "Register" ||
        this.$route.name === "ForgetPassword"
      ) {
        this.navigationData = true;
        return;
      }
      this.navigationData = false;
    },
  },
  watch: {
    $route(){
      this.checkRoute()
    }
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}
.arrow {
  margin-left: 8px;
  width: 12px;
  path {
    fill: #000;
  }
}
.arrow-light {
  path {
    fill: #fff;
  }
}
.blog-card-wrap {
  position: relative;
  padding: 80px 16px;
  background-color: #ffff;
  @media (min-width: 500px) {
    padding: 100px 16px;
  }
  .blog-cards {
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr;
    @media (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
.error {
  text-align: center;
  font-size: 12px;
  color:red;
}
</style>
