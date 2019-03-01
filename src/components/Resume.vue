<template>
  <div class="resume">
    <h1>Soichiro Wada</h1>
    <div class="releft"></div>
    <div class="recenter">
    <h2 class="reh2">PROFESSIONAL SUMMARY</h2><hr>
    <ul id="resumeText" class="rtext">
      <li>Web development engineer with the latest technology skill set.</li>
      <li>Software development experience: 5.5 years for HTML, CSS, Javascript, 2 years for React/Redux.</li>
      <li>Core skills are in JavaScript (node.js), React/Redux, Vue.js, Express, MongoDB and Firebase.</li>
      <li>Currently I am focusing on getting job as a Javascript / React centric web development engineer.</li>
      <li>The recruiting company can hire me with a limited term or multiple years. (e.g. 3 months, 1 year)</li>
    </ul>
    <h2 class="reh2">SKILLS</h2><hr>
    <ul class="rtext">
      <li>Frontend: JavaScript (React/Redux, Vue.js, jQuery, ES6), CSS, HTML</li>
      <li>Backend: Node.js, Express, MongoDB, Mongoose, Firebase</li>
      <li>Linux (or BSD): Node.js, Express and MongoDB were installed and running on Ubuntu 18.04 LTS server at home. 
        Test programming on Node.js and basic operations are made everyday on this server. (May 2017 - )</li>
      <li>Internet (IP network): have basic knowledge because of working experience in Verizon Enterprise for 8.5 years</li>
      <li>Others: installed ESXi on 2nd server (DELL) / managing Google Apps with private domains.</li>
    </ul>
    <h2 class="reh2">PERSONAL PROJECTS</h2><hr>
    <ul class="rtext">
      <h3 class="reh3">freeCodeCamp’s Front End Projects (March - Nov 2017)</h3>
        <li>Completed Free Code Camp’s Front End Development Program at Nov 2017</li>
        <li>Created Game, Chat, Pomodoro Clock and Calculator app by Javascript.</li>
      <h3 class="reh3">Node School (2018)</h3>
        <li>Learnyounode, How to npm.</li>
      <h3 class="reh3">Node.js Design Patterns second edition (2018)</h3>
        <li>Have read almost 1/3 but gave up reading through. (currently being used as a dictionary)</li>
      <h3 class="reh3">The Net Ninja’s coding tutorials (2017 - 2019)</h3>
        <li>Total 16 courses completed --- React & Redux, React Redux & Firebase App, Node.js, MongoDB, REST API, React, Webpack, WebSockets, OAuth, Vue.js</li>
        <li>Created Todo List, Ninja Recipe, Chat, Ninja Map and other apps by React/Redux or VUE CLI and Firebase.</li>
      <h3 class="reh3">HackerRank (Feb 2019 - )</h3>
        <li>Started and continue trying programming challenge by Node.js (Javascript)</li>
    </ul>
    <h2 class="reh2">WORK EXPERIENCE</h2><hr>
    <ul class="rtext">
      <h3 class="reh3">Network Value Components Ltd (March 2016 – August 2016, 6 months)</h3>
        <li>Provided sales and marketing activities for security products such as FortiGate, vARMOUR and ThreatSTOP</li>
      <h3 class="reh3">Tamago-DB Corp (April 2015 – Oct 2015, 6 months)</h3>
        <li>Provided sales and web marketing activities for cloud-based software service to Japanese recruiting agencies</li>
      <h3 class="reh3">Mobilitysupport LLC (June 2011 – March 2015, 3.7 years, owned by myself)</h3>
        <li>Provided Web building and marketing activities for care equipment seller (2011 ~ 2014).</li>
        <li>Provided IT consulting activities for small companies using cloud services including Google Apps, AWS.</li>
      <h3 class="reh3">AIU insurance company (Aug 2009 - April 2011, 1.8 years)</h3>
        <li>Provided consulting activities for liability insurance, accident insurance to small - medium sized companies</li>
      <h3 class="reh3">Verizon Enterprise (Mar 2000 - Oct 2008, total 8.5 years, including UUNET Japan, MCI Worldcom Japan, MCI Japan)</h3>
        <li>Provided technical sales activities for Internet connectivity, Datacenter and Private IP service.</li>
      <h3 class="reh3">ImageONE Co., Ltd (Oct 1998 - Feb 2000, 1.5 years, Trading company for satellite data receiving system)</h3>
        <li>Provided sales and marketing activities for Data Receiving System of NOAA Satellite, ASD Spectroradiometers.</li>
      <h3 class="reh3">Fuji Xerox Co., Ltd (Apr 1988 - Sep 1998, total 10.5 years)</h3>
        <li>Provided marketing activities for Multifunction Laser Printer (4.5 years)</li>
        <li>Provided business planning activities for corporate 5 year-mid-term business plan (3 years)</li> 
        <li>Provided marketing activities for AI Software (Smalltalk-80 and Interlisp-D) and UNIX Workstations (3 years)</li> 
    </ul>
    </div>
    <div class="reright"></div>
  </div>
</template>

<script>
export default {
  name: 'Resume'
}
</script>

<style>
* {
  box-sizing:border-box;
}
.releft {
  background-color:white;
  padding:20px;
  float:left;
  width:25%; /* The width is 20%, by default */
}

.recenter {
  background-color:#f5f5f5;
  padding:1.0em;
  float:left;
  width:50%; /* The width is 60%, by default */
  box-shadow: 10px 10px 5px grey;
}

.reright {
  background-color:white;
  padding:20px;
  float:left;
  width:25%; /* The width is 20%, by default */
}

.reh2{
  color:black;
  text-align: left;
  margin-left:0.3em;
  margin-top:0.9em;
  margin-bottom:0px;
}
.h1name{
  text-align: center;
  font-family: 'HGP行書体','HG正楷書体-PRO','Noto Serif JP', sans-serif;
  font-size:2.1em;

}
.reh3{
  margin-top:0.7em;
  margin-bottom:0.2em;
  margin-left:-1.1em;
}
.rtext{
  font-size: 1.0em;
  text-align: left;
}
.rtextjp{
  font-size: 1.0em;
  text-align: left;
}
.rtext li{
  margin-bottom:0.5em;
}
.rtextjp li{
  margin-bottom:0.2em;
}

/* Use a media query to add a break point at 800px: */
@media screen and (max-width:1500px) {
  .recenter {
    width:70%;
  }
  .releft, .reright{
    width:15%;
  }
}
@media screen and (max-width:1200px) {
  .recenter {
    width:80%;
  }
  .releft, .reright{
    width:10%;
  }
}
@media screen and (max-width:800px) {
  .recenter {
    width:100%;
  }
  .releft, .reright {
    width:100%;
    display:none;
  }
}
@media screen and (max-width:600px) {
  .recenter {
    width:100%;
  }
  .releft, .reright {
    width:100%;
    display:none;
  }
}

</style>
