<template>
  <div class="portfolio">
    <h1 id="h1p">Soichiro's Portfolio</h1>
    <h3 id="h3p"><span id="PC">Responsive Web ( 1700px - )</span>
    <span id="midPC">Responsive Web (1500 - 1700px)</span>
    <span id="smallerPC">Responsive Web (1200 - 1500px)</span>
    <span id="largerTablet">Responsive Web (900 - 1200px)</span>
    <span id="tablet">Responsive Web (600 - 900px)</span>
    <span id="phone">Responsive Web ( - 600px)</span></h3>

    <div class="pfFlexbox">
      <div class="centerlinks">

        <div class="block">
          <h2 class="appTitle"><a href="https://materialize-51af2.web.app/" class="hlink">Materialize</a>
          <button class="source" v-on:click="redirect('materialize')">source code</button></h2>
          <div class="mini">
            <div class="thumbnail-container">
              <div class="thumbnail">
                <iframe src="https://materialize-51af2.web.app/"
                frameborder="0" onload="window.scrollTo(0,0); this.style.opacity = 1" scrolling="no"></iframe>
              </div>
            </div>
            <a href="https://materialize-51af2.web.app/"><div class="thumbnail-container overlay"></div></a>
          </div>

          <div class="mini">
          <ul class="pftextjp">
          <li>Coded in Net Ninja tutorial with Materialize.</li>
          <li>Responsive design.</li>
          <li>Tech: HTML, CSS, Javascript, Materialize</li>
          <li>Hosting: Domestic service provider</li>
          </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle"><a href="https://reactconverter.firebaseapp.com/" class="hlink">React Converter</a>
          <button class="source" v-on:click="redirect('react-converter')">source code</button></h2>
          <div class="mini">
            <div class="thumbnail-container">
              <div class="thumbnail">
                <iframe src="https://reactconverter.firebaseapp.com/"
                frameborder="0" onload="window.scrollTo(0,0); this.style.opacity = 1" scrolling="no"></iframe>
              </div>
            </div>
            <a href="https://reactconverter.firebaseapp.com/"><div class="thumbnail-container overlay"></div></a>
          </div>

          <div class="mini">
          <ul class="pftextjp">
          <li>Coded in reference to Reactjs.org sample code.</li>
          <li>You input a number to whichever cell, by controlled input and data binding, the app recalculate and update all the value in real time.</li>
          <li>Tech: Javascript, Node.js, React</li>
          <li>Hosting: Firebase</li>
          </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle"><a href="https://marioplan-894e0.firebaseapp.com/" class="hlink">Mario Plan - React</a>
          <button class="source" v-on:click="redirect('marioplan')">source code</button></h2>
          <div class="mini">
          <div class="thumbnail-container">
            <div class="thumbnail">
              <iframe src="https://marioplan-894e0.firebaseapp.com/"
              frameborder="0" onload="window.scrollTo(0,0); this.style.opacity = 1" scrolling="no"></iframe>
            </div>
          </div>
          <a href="https://marioplan-894e0.firebaseapp.com/"><div class="thumbnail-container overlay"></div></a>
          </div>

          <div class="mini">
          <ul class="pftext">
            <li>Project management app, coded in Net Ninja's tutorial.</li>
            <li>If new signup or new project registration is created, firebase functions on server automatically detect it and make a notice appear on Notification window.</li>
            <li>Added functionality of Update and Delete with Firestore.</li>
            <li>Tech: Javascript, Node.js, React, Redux, Redux-thunk, Firestore, Firebase Auth, Firebase Functions</li>
            <li>Hosting: Firebase</li>
          </ul>
          </div>
        </div>

        
        <div class="block">
          <h2 class="appTitle"><a href="https://ranking-board.firebaseapp.com/" class="hlink">Ranking Board - React</a>
          <button class="source" v-on:click="redirect('ranking')">source code</button></h2>
          <div class="mini">
            <div class="thumbnail-container">
              <div class="thumbnail">
                <iframe src="https://ranking-board.firebaseapp.com/"
                frameborder="0" onload="window.scrollTo(0,0); this.style.opacity = 1" scrolling="no"></iframe>
              </div>
            </div>
            <a href="https://ranking-board.firebaseapp.com/"><div class="thumbnail-container overlay"></div></a>
          </div>

        <div class="mini">
          <ul class="pftextjp">
          <li>Ranking board app, coded in reference to Reactjs.org</li>
          <li>Enabled clicking button to sort users for each item, toggling to reverse the order.</li>
          <li>Styled by Materialize CSS grid, respoinsive.</li>
          <li>Tech: Javascript, Node.js, React</li>
          <li>Hosting: Firebase</li>
          </ul>
          </div>
        </div>



        <div class="block">
          <h2 class="appTitle"><a href="https://css-sass-40f7f.web.app/" class="hlink">SASS</a>
          <button class="source" v-on:click="redirect('sass')">source code</button></h2>
          <div class="mini">
            <div class="thumbnail-container">
              <div class="thumbnail">
                <iframe src="https://css-sass-40f7f.web.app/"
                frameborder="0" onload="window.scrollTo(0,0); this.style.opacity = 1" scrolling="no"></iframe>
              </div>
            </div>
            <a href="https://css-sass-40f7f.web.app/"><div class="thumbnail-container overlay"></div></a>
          </div>

          <div class="mini">
          <ul class="pftextjp">
          <li>Coded in Net Ninja tutorial with SASS.</li>
          <li>Very easy to set proportional value in CSS (able to use division).</li>
          <li>Tech: HTML, CSS, Javascript, SASS</li>
          <li>Hosting: Domestic service provider</li>
          </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle"><a href="https://react-test-a197a.firebaseapp.com/" class="hlink">Blogs - React</a>
          <button class="source" v-on:click="redirect('poketimes-redux')">source code</button></h2>
          <div class="mini">
          <div class="thumbnail-container">
            <div class="thumbnail">
              <iframe src="https://react-test-a197a.firebaseapp.com/"
              frameborder="0" onload="window.scrollTo(0,0); this.style.opacity = 1" scrolling="no"></iframe>
            </div>
          </div>
          <a href="https://react-test-a197a.firebaseapp.com/"><div class="thumbnail-container overlay"></div></a>
          </div>

          <div class="mini">
          <ul class="pftext">
            <li>Coded in Net Ninja's tutorial with React and Redux.</li>
            <li>Basic model of React and Redux, a standard pattern of global state management by action creator and reducer.</li>
            <li>Tech: Javascript, Node.js, React, Redux</li>
            <li>Hosting: Firebase</li>
          </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle"><a href="https://reactredux-todo.firebaseapp.com/" class="hlink">Todo app - React/Redux</a>
          <button class="source" v-on:click="redirect('todoRedux')">source code</button></h2>
          <div class="mini">
          <div class="thumbnail-container">
            <div class="thumbnail">
              <iframe src="https://reactredux-todo.firebaseapp.com/"
              frameborder="0" onload="window.scrollTo(0,0); this.style.opacity = 1" scrolling="no"></iframe>
            </div>
          </div>
          <a href="https://reactredux-todo.firebaseapp.com/"><div class="thumbnail-container overlay"></div></a>
          </div>

          <div class="mini">
          <ul class="pftext">
            <li>Trial coding with React / Redux tutorial</li>
            <li>Using Materialize buttons and checkboxes, controlled list view by 3 kinds of filter.</li>
            <li>Tech: Javascript, Node.js, React, Redux, Materialize</li>
            <li>Hosting: Firebase</li>
          </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle"><a href="https://addtodo-redux.firebaseapp.com/" class="hlink">Todo List - React Async</a>
          <button class="source" v-on:click="redirect('todoAsync')">source code</button></h2>
          <div class="mini">
          <div class="thumbnail-container">
            <div class="thumbnail">
              <iframe src="https://addtodo-redux.firebaseapp.com/"
              frameborder="0" onload="window.scrollTo(0,0); this.style.opacity = 1" scrolling="no"></iframe>
            </div>
          </div>
          <a href="https://addtodo-redux.firebaseapp.com/"><div class="thumbnail-container overlay"></div></a>
          </div>

          <div class="mini">
          <ul class="pftext">
            <li>Coded in Net Ninja's tutorial and I modified action creator to test asynchronous operation by Redux-thunk middleware</li>
            <li>Input some words and push Enter button, program automatically access JSONPlaceholder (remote server) to pick one todo at random asynchronously</li>
            <li>Finally program concatenate the selected phrase and your input</li>
            <li>Tech: Javascript, Node.js, React, Redux, Redux-thunk</li>
            <li>Hosting: Firebase</li>
          </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle"><a href="https://geo-ninja-3efcf.firebaseapp.com/#/" class="hlink">Geo Ninja - Vue CLI</a>
          <button class="source" v-on:click="redirect('GeoNinja')">source code</button></h2>
          <div class="mini">
          <div class="thumbnail-container">
            <div class="thumbnail">
              <iframe src="https://geo-ninja-3efcf.firebaseapp.com/#/"
              frameborder="0" onload="window.scrollTo(0,0); this.style.opacity = 1" scrolling="no"></iframe>
            </div>
          </div>
          <a href="https://geo-ninja-3efcf.firebaseapp.com/#/"><div class="thumbnail-container overlay"></div></a>
          </div>

          <div class="mini">
          <ul class="pftext">
            <li>Coded with Net Ninja's tutorial (youtube) by Vue CLI and Firebase</li>
            <li>Group chat function is added, profile-page, login, logout are revised</li>
            <li>You can test this site by login with id:test@mail.com, password:test123 and your geo-location acceptance</li>
            <li>Tech: Javascript, Node.js, Vue CLI, Vue Router, Firebase/Firestore (database), Firebase Auth</li>
            <li>Hosting: Firebase</li>
          </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle"><a href="https://todo-list-21740.firebaseapp.com/#/" class="hlink">Todo List - Vue CLI</a>
          <button class="source" v-on:click="redirect('todoVueCLI')">source code</button></h2>
          <div class="mini">
          <div class="thumbnail-container">
            <div class="thumbnail">
              <iframe src="https://todo-list-21740.firebaseapp.com/#/"
              frameborder="0" onload="window.scrollTo(0,0); this.style.opacity = 1" scrolling="no"></iframe>
            </div>
          </div>
          <a href="https://todo-list-21740.firebaseapp.com/#/"><div class="thumbnail-container overlay"></div></a>
          </div>

          <div class="mini">
          <ul class="pftext">
            <li>Once coded with Net Ninja's tutorial (Javascript, jQuery, Mongoose, MongoDB) and converted it with Vue CLI and Firebase</li>
            <li>You can recycle the data in "completed" or "deleted" list</li>
            <li>Tech: Javascript, Node.js, Vue CLI, Vue Router, Firebase/Firestore (database)</li>
            <li>Hosting: Firebase</li>
          </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle"><a href="https://calculator-bf6c7.firebaseapp.com/#/" class="hlink">Reactive Calculator - Vue CLI</a>
          <button class="source" v-on:click="redirect('Calculator')">source code</button></h2>
          <div class="mini">
          <div class="thumbnail-container">
            <div class="thumbnail">
              <iframe src="https://calculator-bf6c7.firebaseapp.com/#/" frameborder="0" 
              onload="window.scrollTo(0,0); this.style.opacity = 1" scrolling="no"></iframe>
            </div>
          </div>
          <a href="https://calculator-bf6c7.firebaseapp.com/#/"><div class="thumbnail-container overlay"></div></a>
          </div>

          <div class="mini">
          <ul class="pftext">
            <li>Once coded calculator in freeCodeCamp's trial (Javascript, jQuery, Bootstrap) and converted it into Vue CLI</li>
            <li>Enabled key input with keyboard, backspace key with auto recalculation</li>
            <li>Functioned auto brackets generator</li>
            <li>Tech: Javascript, Node.js, Vue CLI, Vue Router</li>
            <li>Hosting: Firebase</li>
          </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle"><a href="https://ninja-smoothies-2018.firebaseapp.com/#/" class="hlink">Ninja Smoothies Recipe - Vue CLI</a></h2>
          <div class="mini">
          <div class="thumbnail-container">
            <div class="thumbnail">
              <iframe src="https://ninja-smoothies-2018.firebaseapp.com/#/" frameborder="0"
              onload="window.scrollTo(0,0); this.style.opacity = 1"  scrolling="no"></iframe>
            </div>
          </div>
          <a href="https://ninja-smoothies-2018.firebaseapp.com/#/"><div class="thumbnail-container overlay"></div></a>
          </div>

          <div class="mini">
          <ul class="pftext">
          <li>Trial app in Net Ninja (youtube) coding tutorial</li>
          <li>Tech: Javascript, Node.js, Vue CLI, Firebase/Firestore(database)</li>
          <li>Hosting: Firebase</li>
          </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle"><a href="https://simongame-c122a.firebaseapp.com/" class="hlink">Simon Game - Vue CLI</a></h2>
          <div class="mini">
          <div class="thumbnail-container">
            <div class="thumbnail">
              <iframe src="https://simongame-c122a.firebaseapp.com/" frameborder="0"
              onload="window.scrollTo(0,0); this.style.opacity = 1"  scrolling="no"></iframe>
            </div>
          </div>
          <a href="https://simongame-c122a.firebaseapp.com/"><div class="thumbnail-container overlay"></div></a>
          </div>

          <div class="mini">
          <ul class="pftext">
            <li>Once made Simon Game in freeCodeCamp's trial (Javascript, jQuery, Bootstrap) and converted it into Vue CLI</li>
            <li>Tech: Javascript, Node.js, Vue CLI</li>
            <li>Hosting: Firebase</li>
          </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle"><a href="https://codepen.io/SoichiroW/full/aLRmoQ/" class="hlink">Show the Local Weather</a></h2>
          <div class="mini">
          <div class="thumbnail-container">
            <div class="thumbnail">
              <iframe src="https://codepen.io/SoichiroW/full/aLRmoQ/" frameborder="0"
              onload="window.scrollTo(0,0); this.style.opacity = 1"  scrolling="no"></iframe>
            </div>
          </div>
          <a href="https://codepen.io/SoichiroW/full/aLRmoQ/"><div class="thumbnail-container overlay"></div></a>
          </div>

          <div class="mini">
          <ul class="pftext">
            <li>Coding trial in freeCodeCamp</li>
            <li>Location is detected by IP address and show the current weather, humidity and temperature</li>
            <li>Background is changed automatically by the weather</li>
            <li>Tech: Javascript, Bootstrap</li>
            <li>Hosting: Codepen</li>
          </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle"><a href="https://codepen.io/SoichiroW/full/yPerQe/" class="hlink">Pomodoro Clock - Rocket Sound</a></h2>
          <div class="mini">
          <div class="thumbnail-container">
            <div class="thumbnail">
              <iframe src="https://codepen.io/SoichiroW/full/yPerQe/" frameborder="0"
              onload="window.scrollTo(0,0); this.style.opacity = 1"  scrolling="no"></iframe>
            </div>
          </div>
          <a href="https://codepen.io/SoichiroW/full/yPerQe/"><div class="thumbnail-container overlay"></div></a>
          </div>

          <div class="mini">
          <ul class="pftext">
            <li>Coding trial in freeCodeCamp</li>
            <li>Please examine by Countdown Timer: 8 seconds and Breaking Timer:8 seconds</li>
            <li>Tech: Javascript, Bootstrap</li>
            <li>Hosting: Codepen</li>
          </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle"><a href="https://keycode-finder.firebaseapp.com/" class="hlink">Keycode Finder</a></h2>
          <div class="mini">
          <div class="thumbnail-container">
            <div class="thumbnail">
              <iframe src="https://keycode-finder.firebaseapp.com/" frameborder="0"
              onload="window.scrollTo(0,0); this.style.opacity = 1"  scrolling="no"></iframe>
            </div>
          </div>
          <a href="https://keycode-finder.firebaseapp.com/"><div class="thumbnail-container overlay"></div></a>
          </div>

          <div class="mini">
          <ul class="pftext">
            <li>This site is for development utility purpose</li>
            <li>This site provides 2 way of event.key info and you can see the other keycode at console in browser</li>
            <li>Tech: Javascript, Vue CLI</li>
            <li>Hosting: Firebase</li>
          </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle"><a href="https://codepen.io/SoichiroW/full/xPOmvR/" class="hlink">Tic Tac Toe Game</a></h2>
          <div class="mini">
          <div class="thumbnail-container">
            <div class="thumbnail">
              <iframe src="https://codepen.io/SoichiroW/full/xPOmvR/" frameborder="0"
              onload="window.scrollTo(0,0); this.style.opacity = 1"  scrolling="no"></iframe>
            </div>
          </div>
          <a href="https://codepen.io/SoichiroW/full/xPOmvR/"><div class="thumbnail-container overlay"></div></a>
          </div>

          <div class="mini">
          <ul class="pftext">
            <li>Coding trial in freeCodeCamp</li>
            <li>Tech: Javascript, Bootstrap</li>
            <li>Hosting: Codepen</li>
          </ul>
          </div>
        </div>
        <button class="btn7" v-on:click="this.scrollWin">Top</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  methods:{
    scrollWin() {
      window.scrollTo(0, 0);
    },
    redirect(content){
      switch (content) {
        case 'materialize':
          window.open("https://github.com/SoichiroWada/Materialize");
          break;
        case 'sass':
          window.open("https://github.com/SoichiroWada/SASS");
          break;
        case 'marioplan':
          window.open("https://github.com/SoichiroWada/MarioPlan");
          break;
        case 'ranking':
          window.open("https://github.com/SoichiroWada/Ranking-Board");
          break;
        case 'react-converter':
          window.open("https://github.com/SoichiroWada/React-Converter");
          break;
        case 'poketimes-redux':
          window.open("https://github.com/SoichiroWada/Poketimes-Redux");
          break;
        case 'todoRedux':
          window.open("https://github.com/SoichiroWada/todoRedux");
          break;
        case 'todoAsync':
          window.open("https://github.com/SoichiroWada/todoAsync");
          break;
        case 'GeoNinja':
          window.open("https://github.com/SoichiroWada/GeoNinja");
          break;
        case 'todoVueCLI':
          window.open("https://github.com/SoichiroWada/todoList-vuejs");
          break;
        case 'Calculator':
          window.open("https://github.com/SoichiroWada/calculator-vue");
          break;
      }
    }
  }
}

</script>

<style>

* {
  box-sizing:border-box;
}
.portfolio{
  margin-top:3.0em;
}

.pfFlexbox{
  display:flex;
  flex-flow:row wrap;
  justify-content: center;
}
.pftext li{
  font-size: 1.0em;
  margin-left: -2%;
  margin-top:0.3em;
  padding:0.2em;
}
.pftextjp li{
  font-size: 1.0em;
  margin-left: -2%;
  margin-top:0.4em;
  padding:0em;
}

.centerlinks {
  font-family: 'Roboto', sans-serif;
  text-align: left;
  padding: 0px;
  float:left;
  width:990px;
}

.block{
  display:inline-block;
  margin-top:1.0em;
  margin-bottom: 0.5em;
  width:100%;
  height:auto;
}

.appTitle{
  margin-left:0em;
  margin-bottom:0em;
  margin-top:0em;
}
.thumbnail iframe {
  width: 1440px;
  height: 900px;
}

.thumbnail {
  -ms-zoom: 0.25;
  -moz-transform: scale(0.25);
  -moz-transform-origin: 0 0;
  -o-transform: scale(0.25);
  -o-transform-origin: 0 0;
  -webkit-transform: scale(0.25);
  -webkit-transform-origin: 0 0;
}

.thumbnail:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.thumbnail-container {
  float:right;
  width: calc(1440px * 0.25);
  height: calc(900px * 0.25);
  display: block;
  overflow: hidden;
  position: relative;
  background: #f9f9f9;
  margin-top:0.2em;
  margin-left: 2.0em;
}

.thumbnail iframe {
  opacity: 0;
  transition: all 300ms ease-in-out;
}

.overlay{
  background-color:lightblue;
  margin-right:-393px;
  opacity:0;
  z-index:5;
}
.overlay:hover {
  opacity:0.5;
}

#h1p{
  margin-top: 0.1em;
  margin-bottom: 0em;
}
#h3p{
  margin-top: 0.2em;
  margin-bottom: 0.1em;
  color:#afafaf;
}
#midPC, #smallerPC, #tablet, #largerTablet, #phone{
  display:none;
}
#PC{
  display:inline;
}

@media screen and (max-width:1700px) {
  .centerlinks{
    width:65%; /* The width is 100%, when the viewport is 800px or smaller */
  }
  .block{
    padding-left:3%;
    padding-right:3%
  }
  #PC, #smallerPC, #tablet, #largerTablet, #phone{
    display:none;
  }
  #midPC{
    display:inline;
  }
}

@media screen and (max-width:1500px) {
  .centerlinks{
    width:75%;
  }
  .thumbnail {
    -ms-zoom: 0.23;
    -moz-transform: scale(0.23);
    -moz-transform-origin: 0 0;
    -o-transform: scale(0.23);
    -o-transform-origin: 0 0;
    -webkit-transform: scale(0.23);
    -webkit-transform-origin: 0 0;
  }
  .thumbnail-container {
    float:right;
    width: calc(1440px * 0.23);
    height: calc(900px * 0.23);
    display: block;
    overflow: hidden;
    position: relative;
    background: #f9f9f9;
    margin-left: 2.0em;
  }
  .overlay{
    background-color:lightblue;
    margin-right:-363px;
    opacity:0;
    z-index:5;
  }
  .block{
    padding-left:3%;
    padding-right:3%
  }
  #PC, #midPC, #tablet, #largerTablet, #phone{
    display:none;
  }
  #smallerPC{
    display:inline;
  }
}

/* Use a media query to add a break point at 800px: */
@media screen and (max-width:1200px) {
  .centerlinks {
    width:90%;
  }
  .thumbnail {
    -ms-zoom: 0.20;
    -moz-transform: scale(0.20);
    -moz-transform-origin: 0 0;
    -o-transform: scale(0.20);
    -o-transform-origin: 0 0;
    -webkit-transform: scale(0.20);
    -webkit-transform-origin: 0 0;
  }
  .thumbnail-container {
    float:right;
    width: calc(1440px * 0.2);
    height: calc(900px * 0.2);
    display: block;
    overflow: hidden;
    position: relative;
    background: #f9f9f9;
    margin-left: 2.0em;
  }
  .overlay{
    background-color:lightblue;
    margin-right:-320px;
    opacity:0;
    z-index:5;
  }
  .block{
    padding-left:3%;
    padding-right:3%;
  }
  #PC, #smallerPC, #midPC, #phone, #tablet{
    display:none;
  }
  #largerTablet{
    display:inline;
  }
}
@media screen and (max-width:900px) {
  .centerlinks {
    width:100%; /* The width is 100%, when the viewport is 800px or smaller */
  }
  .thumbnail {
    -ms-zoom: 0.18;
    -moz-transform: scale(0.18);
    -moz-transform-origin: 0 0;
    -o-transform: scale(0.18);
    -o-transform-origin: 0 0;
    -webkit-transform: scale(0.18);
    -webkit-transform-origin: 0 0;
  }
  .thumbnail-container {
    float:right;
    width: calc(1440px * 0.18);
    height: calc(900px * 0.18);
    display: block;
    overflow: hidden;
    position: relative;
    background: #f9f9f9;
    margin-left: 2.0em;
    margin-top:1.0em;
    margin-bottom:2.0em;
  }
  .overlay{
    background-color:lightblue;
    margin-right:-291px;
    opacity:0;
    z-index:5;
  }
  .block{
    padding-left:3%;
    padding-right:3%
  }
  #PC, #smallerPC, #midPC, #largerTablet, #phone{
    display:none;
  }
  #tablet{
    display:inline;
  }
}
@media screen and (max-width:600px) {
  .centerlinks {
    width:100%;
  }
  .thumbnail {
    -ms-zoom: 0.17;
    -moz-transform: scale(0.17);
    -moz-transform-origin: 0 0;
    -o-transform: scale(0.17);
    -o-transform-origin: 0 0;
    -webkit-transform: scale(0.17);
    -webkit-transform-origin: 0 0;
  }
  .thumbnail-container {
    float:right;
    width: calc(1440px * 0.17);
    height: calc(900px * 0.17);
    display: block;
    overflow: hidden;
    position: relative;
    background: #f9f9f9;
    margin-left: 1.5em;
    margin-top:1.0em;
    margin-bottom:0.5em;
  }
  .overlay{
    background-color:lightblue;
    margin-right:-269px;
    opacity:0;
    z-index:5;
  }
  .block{
    padding-left:3%;
    padding-right:3%;
  }
  .mini{
    float:left;
    display: block;
  }
  .appTitle{
    margin-left:1.0em;
  }
  #PC, #smallerPC, #largerTablet, #midPC, #tablet{
    display:none;
  }
  #phone{
    display:inline;
  }
}
.source{
  font-size:0.6em;
  margin-left: 1.5em;
}

.btn7{
  width:auto;
  color:black;
  font-size:20px;
  margin-bottom:1.0em;
}

</style>
