<template>
  <div class=" header container-fluid">
    <nav class="navbar navbar-inverse">
      <div class="logo">
        <router-link tag="li" to="/" exact
          ><a class="navbar-brand text-left" href="#">OUR SITE</a></router-link
        >
      </div>

      <ul class="nav navbar-nav navbar-right">
        <ul class="nav navbar-nav links">
          <router-link tag="li" :to="{ name: 'home' }" exact
            ><a>Home</a></router-link
          >
          <router-link tag="li" :to="{ name: 'About' }"
            ><a> About </a></router-link
          >
          <router-link tag="li" :to="{ name: 'courses' }"
            ><a> Courses</a></router-link
          >
          <router-link tag="li" :to="{ name: 'prices' }"
            ><a> Prices</a></router-link
          >
        </ul>
        <router-link tag="button" :to="{ name: 'login' }">Login</router-link>
        <router-link tag="button" :to="{ name: 'SignUp' }">SignUp</router-link>
        <router-link tag="button" :to="{ name: 'Profile' }">Profile</router-link>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "appheader"
};
</script>
<style scoped>
.container-fluid {
  background-color: rgba(146, 139, 139, 0.637);
  padding-right: 0px;
  padding-left: 0px;
  margin-bottom: 0px;
}
.navbar {
  color: cornsilk;
}
.header ul {
  color: cornsilk;
  list-style: none;
  display: inline-block;
}
.header li {
  display: inline-block;
  margin: 5px;
  font-size: 18px;
  list-style: none;
}
.header a {
  text-decoration: none;
}
.header .navbar-right li {
  margin: 5px;
  font-size: 18px;
  padding: 15px;
  border-radius: 5px;
}
.navbar {
  margin-bottom: 0;
  background-color: #f4511e;
  z-index: 9999;
  border: 0;
  font-size: 12px !important;
  line-height: 20px;
  letter-spacing: 4px;
  border-radius: 0;
  font-family: Montserrat, sans-serif;
}
.navbar li a,
.navbar .navbar-brand {
  color: #fff !important;
}
.navbar-nav:not(.navbar-right) li a:hover,
.navbar-nav:not(.navbar-right) li.active a {
  color: #f4511e !important;
  background-color: rgba(224, 185, 175, 0.932) !important;
  margin: 5px;
  font-size: 18px;
  padding: 15px;
  border-radius: 5px;
}
.navbar-nav button {
  color: #fff !important;
  background-color: rgba(224, 185, 175, 0.932) !important;
  margin: 5px;
  font-size: 18px;
  padding: 15px;
  border-radius: 5px;
  border: none;
}
.navbar-default .navbar-toggle {
  border-color: transparent;
  color: #fff !important;
}
</style>
