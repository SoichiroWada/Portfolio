<template>
  <div id="navbar">

    <div id="nav">
        <div class="bar" id="nav1" v-bind:style="this.displayChange1">
            <router-link to="/">Portfolio</router-link> |
            <router-link to="/resume">Resume</router-link> |
            <router-link to="/about">About</router-link> |
            <a v-on:click="changer" id="Ja">日本語</a>
        </div>

        <div class="bar" id="nav2" v-bind:style="this.displayChange2">
            <router-link to="/portfoliojp">Portfolio</router-link> |
            <router-link to="/resumejp">Resume</router-link> |
            <router-link to="/aboutjp">About</router-link> |
            <a v-on:click="changer" id="En">English</a>
        </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data: function() {
    return {
        url: null,
        language: "日本語",
        displayChange1:[],
        displayChange2:[]
    }
  },
  methods: {
    urlFinder(){
          this.url = document.URL
        //   console.log('this.url in method:', this.url)
      },
    changer(){
        this.url = document.URL
        var regex1 = /\/#\/portfoliojp/i;
        var regex2 = /\/#\/resumejp/i;
        var regex3 = /\/#\/aboutjp/i;
        var regex4 = /\/#\/resume/i;
        var regex5 = /\/#\/about/i;
        var regex6 = /\/#\//i;

        if (this.url.match(regex1)){
            this.$router.push({name:'Portfolio'});
            this.displayChange1.push({display:"inline"});
            this.displayChange2.push({display:"none"});
        }
        else if (this.url.match(regex2)){
            this.$router.push({name:'Resume'});
            this.displayChange1.push({display:"inline"});
            this.displayChange2.push({display:"none"});
        }
        else if (this.url.match(regex3)){
            this.$router.push({name:'About'});
            this.displayChange1.push({display:"inline"});
            this.displayChange2.push({display:"none"});
        }
        else if (this.url.match(regex4)){
            this.$router.push({name:'Resumejp'});
            this.displayChange1.push({display:"none"});
            this.displayChange2.push({display:"inline"});
        }
        else if (this.url.match(regex5)){
            this.$router.push({name:'Aboutjp'});
            this.displayChange1.push({display:"none"});
            this.displayChange2.push({display:"inline"});
        }
        else if (this.url.match(regex6)){
            this.$router.push({name:'Portfoliojp'});
            this.displayChange1.push({display:"none"});
            this.displayChange2.push({display:"inline"});
        }
    },
    langPresetJapanese(){
        this.displayChange1.push({display:"none"});
        this.displayChange2.push({display:"inline"});
    },
    langPresetEnglish(){
        this.displayChange1.push({display:"inline"});
        this.displayChange2.push({display:"none"});
    }
  },
  created(){
    this.url = document.URL
    // console.log('this.url in created:', this.url)
    var regex1 = /\/#\/portfoliojp/i;
    var regex2 = /\/#\/resumejp/i;
    var regex3 = /\/#\/aboutjp/i;
    var regex4 = /\/#\/resume/i;
    var regex5 = /\/#\/about/i;
    var regex6 = /\/#\//i;
    this.url.match(regex1) ? this.langPresetJapanese() :
    this.url.match(regex2) ? this.langPresetJapanese() :
    this.url.match(regex3) ? this.langPresetJapanese() :
    this.url.match(regex4) ? this.langPresetEnglish() :
    this.url.match(regex5) ? this.langPresetEnglish() :
    this.url.match(regex6) ? this.langPresetEnglish() :
    undefined;
  }
}
</script>

<style>
#nav {
  margin-top: 2em;;
  margin-bottom: 2em;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* mouse over link */
#nav a:hover {
  color: deeppink;
}

#nav1{
    display:inline;
}
#nav2{
    display:none;
}
#En{
    cursor: pointer;
}
#Ja{
    cursor: pointer;
}

</style>
