<template>
  <div class="home">
    <blogPost v-if="!user" :post="welcomeScreen" />
    <blogPost
      :post="post"
      v-for="(post, index) in sampleBlogPost"
      :key="index"
    />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <blogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />
        </div>
      </div>
    </div>
    <div v-if="!user" class="updates">
      <div class="container">
        <h2>
          never miss a post. Registor for your free acount today!
        </h2>
        <router-link class="router-button" to="#">Registor for Zignuts Blogs<Arrow class="arrow arrow-light"/></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import blogPost from "@/components/blogPost.vue";
import blogCard from "@/components/blogCard.vue"
import Arrow from "../assets/Icons/arrow-right-light.svg"
export default {
  name: "Home",
  components: {
    blogPost,
    blogCard,
    Arrow
  },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome",
        blogPost: "Welcome in Blogger*World social media platform to provide facilities to create post talk to others and like other posts.",
        welcomeScreen: "true",
        photos: "abcd",
      },
      sampleBlogPost: [
        {
          title: "Real Time Applications",
          blogHTML: "Real Time Applications, Markets are on Boom now they know how to grow",
          blogCoverPhoto: "abcd",
        },
        {
          title: "FOOdy_Moody",
          blogHTML: "Food is more Delicious when it will take more time to cook",
          blogCoverPhoto: "blogphoto",
        },
      ],
    };
  },
  computed:{
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards
    },
    user (){
      return this.$store.state.user;
    }
  }
};
</script>
<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
.updates{
  .container {
    padding:100px 25px;
    display: flex;
    flex-direction:column;
    align-items: center;
    @media (min-width:800px){
      padding:125px 25px;
      flex-direction: row;
    }
  }
  .router-button {
    display: flex;
    font-size:14px;
    text-decoration:none;
    @media (min-width:800px){
      margin-left: auto;
    }
  }
  h2 {
    font-weight: 300;
    font-size: 32px;
    max-width: 425px;
    width:100%;
    text-align: center;
    text-transform: uppercase;
    @media(min-width:800px){
      text-align: initial;
      font-size: 40px;
    }
  }
}
</style>
