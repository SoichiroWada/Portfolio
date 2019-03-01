<template>
  <div class="about">
    <h1 id="nameE">Soichiro Wada</h1>
    <div class="aboutleft"></div>
    <div class="aboutcenter">
    <ul class="aboutInfo">
      <li>mail: soichirowada@ipmulticast.net</li>
      <li>address: Shibamata, Katsushika-ku, Tokyo</li>
      <li>GitHub: https://github.com/SoichiroWada</li>
      <li>education: B.A. in Economics 1988, Keio University</li>
    </ul>
    </div>
    <div class="aboutright"></div>
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

.aboutleft {
  background-color:white;
  padding:1.0em;
  float:left;
  width:30%; /* The width is 20%, by default */
}

.aboutcenter {
  background-color:#f5f5f5;
  padding:1.0em;
  float:left;
  width:40%; /* The width is 60%, by default */
  box-shadow: 10px 10px 5px grey;
}

.aboutright {
  background-color:white;
  padding:1.0em;
  float:left;
  width:30%; /* The width is 20%, by default */
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
  text-align: left;
  margin-left:19%;
  font-size: 1.4em;
  padding: 0.4em;
}
.aboutInfoJ{
  text-align: left;
  margin-left:22%;
  font-size: 1.4em;
  padding:0.4em;
}
#fname{
  margin-left:0.3em;
}
/* Use a media query to add a break point at 800px: */
@media screen and (max-width:1500px) {
  #nameE, #nameJ {
    color:#31404f;
  }
  .aboutcenter {
    width:50%;
  }
  .aboutleft, .aboutright{
    width:25%;
  }
  .aboutInfoJ, .aboutInfo{
    margin-left:15%;
  }
}
@media screen and (max-width:1200px) {
  #nameE, #nameJ {
    color:#686d72;
  }
  .aboutcenter {
    width:70%; /* The width is 100%, when the viewport is 800px or smaller */
  }
  .aboutleft, .aboutright{
    width:15%;
  }
  .aboutInfoJ, .aboutInfo{
    margin-left:12%;
  }
}
@media screen and (max-width:800px) {
  #nameE, #nameJ {
    color:#4a5259;
  }
  .aboutcenter {
    width:90%; /* The width is 100%, when the viewport is 800px or smaller */
  }
  .aboutleft, .aboutright{
    width:5%;
  }
  .aboutInfoJ, .aboutInfo{
    margin-left:7%;
    font-size: 1.2em;
  }
}
@media screen and (max-width:600px) {
  #nameE, #nameJ {
    color:#49525b;
  }
  .aboutcenter {
    width:100%; /* The width is 100%, when the viewport is 800px or smaller */
  }
  .aboutleft, .aboutright{
    width:0%;
    display:none;
  }
  .aboutInfoJ, .aboutInfo{
    margin-left:2%;
    font-size: 1.0em;
  }
}

</style>
