<template>
  <div class="resume">
    <h1 class="h1name">Soichiro Wada</h1>
    <div class="resumeFlexbox">
      <div class="resumeCenter">
      <h2 class="reh2">PROFESSIONAL SUMMARY</h2><hr>
      <ul id="resumeText" class="retext">
        <li>For the last 3 years, provided DX sales activities as SE for large retailers, manufacturers and security companies.</li>
        <li>Software development experience: 10 years for HTML, CSS, JavaScript, 6 years for React/Vue.js.</li>
        <li>Core skills are in JavaScript/TypeScript, Node.js, React, Vue.js, MongoDB, Firebase and AWS.</li>
      </ul>
      <h2 class="reh2">SKILLS</h2><hr>
      <ul class="retext">
        <li>Frontend: JavaScript (React/Redux, Vue.js, jQuery, ES6), CSS(Flexbox, Grid, SASS), HTML</li>
        <li>Backend: Node.js, Express, MongoDB, Mongoose, Firebase</li>
        <li>Linux (or BSD): Node.js, Express and MongoDB are running on Ubuntu 18.04 LTS server at home. 
          Test programming on Node.js and basic operations are made everyday on this server. (May 2017 - )</li>
        <li>Internet (IP network): have basic knowledge owing to the working experience in Verizon Enterprise for 8.5 years</li>
        <li>Others: Capable of consulting security products, Google G Suite with private domain and email.</li>
      </ul>
      <h2 class="reh2">PERSONAL PROJECTS</h2><hr>
      <ul class="retext">
        <h3 class="reh3">freeCodeCamp’s Front End Projects (March - Nov 2017)</h3>
          <li>Completed Free Code Camp’s Front End Development Program at Nov 2017</li>
          <li>Created Game, Chat, Pomodoro Clock and Calculator app by JavaScript.</li>
        <h3 class="reh3">Node School (2018)</h3>
          <li>Learnyounode, How to npm.</li>
        <h3 class="reh3">Node.js Design Patterns second edition (2018)</h3>
          <li>Understanding of technical elements, Non-blocking IO, Asynchronous control flow, Streams, and others</li>
        <h3 class="reh3">The Net Ninja’s coding tutorials (2017 - 2019)</h3>
          <li>Total 17 courses completed --- React & Redux, React Redux & Firebase App, Node.js, MongoDB, REST API, React, Webpack, WebSockets, OAuth, Vue.js</li>
          <li>Created Todo List, Ninja Recipe, Chat, Ninja Map and other apps by React/Redux or VUE CLI and Firebase.</li>
        <h3 class="reh3">HackerRank (Feb 2019 - )</h3>
          <li>Started and continue trying programming challenge by Node.js (JavaScript)</li>
      </ul>
      <h2 class="reh2">WORK EXPERIENCE</h2><hr>
      <ul class="retext">
        <h3 class="reh3">Freelance Software Engineer (Sep 2016 - present, 2.5 years)</h3>
          <li>Provided ICT solutions to small companies such as GSuite configuration, WordPress editing, updating / modifying Website</li>
        <h3 class="reh3">Network Value Components Ltd (March 2016 – August 2016, 6 months)</h3>
          <li>Provided sales and marketing activities for security products such as FortiGate, vARMOUR and ThreatSTOP</li>
        <h3 class="reh3">Tamago-DB Corp (April 2015 – Oct 2015, 6 months)</h3>
          <li>Provided building marketing Website for selling cloud-based software service to recruiting agencies</li>
        <h3 class="reh3">Mobilitysupport LLC (June 2011 – March 2015, 3.7 years, owned by myself)</h3>
          <li>Provided business proposal and built Website for selling care equipments to care service providers (2011 ~ 2014).</li>
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
    </div>
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

.resume{
  margin-top:2.9em;
}
.resumeFlexbox{
  display:flex;
  flex-flow:row wrap;
  justify-content: center;
}

.resumeCenter {
  background-color:#f5f5f5;
  padding:1.0em;
  float:left;
  width:900px; /* The width is 60%, by default */
  box-shadow: 10px 10px 5px grey;
}

.reh2{
  color:black;
  text-align: left;
  margin-left:0.3em;
  margin-top:0.5em;
  margin-bottom:0px;
}
.h1namej{
  text-align: center;
  font-family: 'HGP行書体','HG正楷書体-PRO','Noto Serif JP', sans-serif;
  font-size:2.1em;
  margin-top:1.2em;
  margin-bottom:0.3em;
}
.h1name{
  text-align: center;
  font-size:1.8em;
  margin-top:1.6em;
  margin-bottom:0.3em;
}
.reh3{
  margin-top:0.7em;
  margin-bottom:0.2em;
  margin-left:-1.1em;
}
.retext{
  font-size: 1.0em;
  text-align: left;
}
.retextjp{
  font-size: 1.0em;
  text-align: left;
}
.retext li{
  margin-bottom:0.5em;
}
.retextjp li{
  margin-bottom:0.2em;
}

/* Use a media query to add a break point at 800px: */
@media screen and (max-width:1500px) {
  .resumeCenter {
    width:900px;
  }
}
@media screen and (max-width:1200px) {
  .resumeCenter {
    width:90%;
  }

}
@media screen and (max-width:800px) {
  .resumeCenter {
    width:100%;
  }
}
@media screen and (max-width:600px) {
  .resumeCenter {
    width:100%;
  }
}

</style>
