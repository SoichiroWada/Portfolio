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
        <li>Frontend: JavaScript/TypeScript, React, Vue.js, HTML, CSS</li>
        <li>Backend: Node.js, Express, MongoDB, Mongoose, Firebase, AWS</li>
        <li>Linux: basic skills for operation on Ubuntu 18.04 LTS Server (running at home 2017 - )</li>
        <li>Internet (IP network): TCP/IP, CIDR, DNS, etc, have basic skills as Software Engineer</li>
        <li>AWS: API Gateway, Lambda, DynamoDB, S3, Cognito, IoT Core, EC2 enables quick launch mini system</li>
        <li>GCP: Firebase(Hosting, Database, Functions, Authentication), Google Maps</li>
      </ul>
      <h2 class="reh2">PERSONAL PROJECTS</h2><hr>
      <ul class="retext">
        <h3 class="reh3">freeCodeCamp’s Front End Projects (Mar2017 - Nov 2017)</h3>
          <li>Completed Free Code Camp’s Front End Development Program at Nov 2017</li>
        <h3 class="reh3">Node School (2018)</h3>
          <li>Learnyounode, How to npm.</li>
        <h3 class="reh3">Node.js Design Patterns second edition (2018)</h3>
          <li>Understanding of technical elements, Non-blocking IO, Asynchronous control flow, Streams, and others</li>
        <h3 class="reh3">The Net Ninja’s coding tutorials (2016 - 2022)</h3>
          <li>	Completed 25 courses of Node.js, TypeScript, React, Next, Flutter, Git/GitHub, MongoDB, REST API, Graph QL, Webpack, WebSockets, OAuth, Vue.js, and Firebase/Firestore and others.</li>
        <h3 class="reh3">HackerRank (Feb 2019 - )</h3>
          <li>Continue trying programming challenge by Node.js (JavaScript)</li>
      </ul>
      <h2 class="reh2">WORK EXPERIENCE</h2><hr>
      <ul class="retext">
        <h3 class="reh3">KDDI Corporation (May 2019 - May 2022, 3 years)</h3>
          <li>Provided technical proposal to KDDI enterprise customers for accelerating customer’s DX activities</li>
          <li>Developed small applications to clarify new business idea</li>
        <h3 class="reh3">Freelance Software Engineer (Sep 2016 - Apr 2019, 2.5 years)</h3>
          <li>Developed web system for employment agency, EC site of livingware manufacturer</li>
          <li>Provided ICT solutions to small companies such as GSuite configuration, WordPress editing, updating Website</li>
        <h3 class="reh3">Network Value Components Ltd (Mar 2016 – Aug 2016, 6 months)</h3>
          <li>Provided sales and marketing activities for security products such as FortiGate, vARMOUR and ThreatSTOP</li>
        <h3 class="reh3">Tamago-DB Corp (Apr 2015 – Oct 2015, 6 months)</h3>
          <li>Developed marketing Website having linkage with MailChimp for selling cloud-based software service</li>
        <h3 class="reh3">Mobilitysupport LLC (Jun 2011 – Mar 2015, 3.7 years)</h3>
          <li>Developed EC site (front end) for selling care equipment to care service providers (2011 ~ 2014)</li>
          <li>Provided IT consulting activities for small companies using cloud services including Google Apps, AWS.</li>
        <h3 class="reh3">AIU insurance company (Aug 2009 - April 2011, 1.8 years)</h3>
          <li>Provided consulting activities for liability insurance, accident insurance to small - medium sized companies</li>
        <h3 class="reh3">Verizon Enterprise (Mar 2000 - Oct 2008, total 8.5 years, including UUNET Japan, MCI Worldcom Japan, MCI Japan)</h3>
          <li>Provided technical sales activities for Internet connectivity, Datacenter and Private IP service.</li>
        <h3 class="reh3">ImageONE Co., Ltd (Oct 1998 - Feb 2000, 1.5 years, Trading company for satellite data receiving system)</h3>
          <li>Provided sales and marketing activities for Data Receiving System of NOAA Satellite, ASD Spectroradiometers.</li>
        <h3 class="reh3">Fuji Xerox Co., Ltd (Apr 1988 - Sep 1998, total 10.5 years)</h3>
          <li>Provided marketing activities for Multifunction Laser Printers (4.5 years)</li>
          <li>Provided business planning activities in HQ(3 years)</li> 
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
