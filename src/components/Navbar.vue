<template>
  <div id="navbar">
    <div class="navigation">
      <div class="wrapper" id="nav1" v-bind:style="this.displayChange1">
          <div class="nav English">
            <router-link to="/">Portfolio</router-link> |
            <router-link to="/resume">Resume</router-link> |
            <router-link to="/about">About</router-link> |
            <a v-on:click="changer" id="Ja">日本語</a>
          </div>
      </div>
      <div class="wrapper" id="nav2" v-bind:style="this.displayChange2">
          <div class="nav Japanese">
            <router-link to="/portfoliojp">Portfolio</router-link> |
            <router-link to="/resumejp">Resume</router-link> |
            <router-link to="/aboutjp">About</router-link> |
            <a v-on:click="changer" id="En">English</a>
          </div>
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
    scrollWin() {
      window.scrollTo(0, 0);
    },
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
    display:none;
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
