<template>
  <div class="about">
    <h1 id="nameE">Soichiro Wada</h1>
    <div class="flexbox">
      <div class="aboutCenter">
        <ul class="aboutInfo">
          <li>mail: soichirowada@ipmulticast.net</li>
          <li>address: Shibamata, Katsushika-ku, Tokyo</li>
          <li>GitHub: https://github.com/SoichiroWada</li>
          <li>education: B.A. in Economics 1988, Keio University</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'About'
}
</script>

<style>
* {
  box-sizing:border-box;
}

.aboutjp{
  margin-top:3.0em;
}
.about{
  margin-top:3.0em;
}

.flexbox{
  display:flex;
  flex-flow:row wrap;
  justify-content: center;
}

.flexbox > .aboutCenter {
  width: 650px;
  background-color:#f5f5f5;
  padding:1.0em;
  box-shadow: 10px 10px 5px grey;
}

.aboutInfo li {
  margin: 5px;
  padding: 3px;
}
.aboutInfoJ li {
  margin: 5px;
  padding: 3px;
}

#nameE{
  font-family: 'Trebuchet MS', sans-serif;
  font-family:'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color:#1d2833;
}
#nameJ{
  font-family: 'HGP行書体','HG正楷書体-PRO', 'Noto Serif JP', sans-serif;
  text-align: center;
  font-size:2.3em;
  color:#1d2833;
}
.aboutInfo{
  font-family:'Avenir', Helvetica, Arial, sans-serif;
  text-align: left;
  margin-left:19%;
  font-size: 1.2em;
  padding: 0.4em;
}
.aboutInfoJ{
  text-align: left;
  margin-left:22%;
  font-size: 1.2em;
  padding:0.4em;
} 
#fname{
  margin-left:0.3em;
}

/* Use a media query to add a break point at 800px: */

@media screen and (max-width:1500px) {
  #nameE, #nameJ {
    color:rgb(48, 79, 85);
  }
  .aboutCenter {
    width:50%;
  }
  .aboutInfoJ, .aboutInfo{
    margin-left:18%;
  }
}
@media screen and (max-width:1200px) {
  #nameE, #nameJ {
    color:#27303a;
  }
  .aboutCenter {
    width:70%; /* The width is 100%, when the viewport is 800px or smaller */
  }
  .aboutInfoJ, .aboutInfo{
    margin-left:15%;
  }
}
@media screen and (max-width:800px) {
  #nameE, #nameJ {
    color:#273642;
  }
  .aboutCenter {
    width:90%; /* The width is 100%, when the viewport is 800px or smaller */
  }
  .aboutInfoJ, .aboutInfo{
    margin-left:7%;
    font-size: 1.2em;
  }
  #nameJ{
  font-size:2.2em;
  }
}
@media screen and (max-width:600px) {
  #nameE, #nameJ {
    color:#3c444d;
  }
  .aboutCenter {
    width:100%; /* The width is 100%, when the viewport is 800px or smaller */
  }
  .aboutInfoJ, .aboutInfo{
    margin-left:2%;
    font-size: 1.0em;
  }
  #nameJ{
  font-size:2.0em;
  }
} 

</style>
