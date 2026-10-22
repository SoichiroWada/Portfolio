<template>
  <div id="navbar">
    <div class="navigation">
      <div class="wrapper" id="nav1" v-show="!isJapanese">
          <div class="nav English">
            <router-link to="/portfolio">Portfolio</router-link> |
            <router-link to="/resume">Resume</router-link> |
            <router-link to="/about">About</router-link> |
            <a v-on:click="changer" id="Ja">日本語</a>
          </div>
      </div>
      <div class="wrapper" id="nav2" v-show="isJapanese">
          <div class="nav Japanese">
            <router-link to="/">Portfolio</router-link> |
            <router-link to="/resumejp">Resume</router-link> |
            <router-link to="/aboutjp">About</router-link> |
            <a v-on:click="changer" id="En">English</a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
const languagePairs = {
  Portfolio: 'Portfoliojp',
  Resume: 'Resumejp',
  About: 'Aboutjp',
  Portfoliojp: 'Portfolio',
  Resumejp: 'Resume',
  Aboutjp: 'About',
}

export default {
  name: 'Navbar',
  computed: {
    isJapanese() {
      return String(this.$route.name).endsWith('jp')
    },
  },
  watch: {
    isJapanese: {
      immediate: true,
      handler(value) {
        document.documentElement.lang = value ? 'ja' : 'en'
      },
    },
  },
  methods: {
    changer() {
      this.$router.push({ name: languagePairs[this.$route.name] || 'Portfolio' })
    },
  },
}
</script>

<style>
.wrapper{
  background-color:white;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  text-align: center;
  z-index:9;
}
.wrapper .Japanese{
  padding-top: 14px;
  padding-bottom: 6px;
}
.wrapper .English{
  padding-top: 11px;
  padding-bottom: 5px;
}

.wrapper a {
  font-weight: bold;
  color: #2c3e50;
}

.wrapper a.router-link-exact-active {
  color: #42b983;
}

/* mouse over link */
.wrapper a:hover {
  color: deeppink;
}

#nav1{
    display:inline;
}
#nav2{
    display:inline;
}
#En{
    cursor: pointer;
}
#Ja{
    cursor: pointer;
}
#navTop{
    cursor: pointer;
}

/* .wrapper .nav:after{
    content:"";
    display:block;
    clear:both;
} */

</style>
