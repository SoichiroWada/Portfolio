<template>
  <div class="portfolio">
    <h1 id="h1p">Soichiro's Portfolio</h1>
    <h3 id="h3p">
      <span id="PC">Responsive Web ( 1700px - )</span>
      <span id="midPC">Responsive Web (1500 - 1700px)</span>
      <span id="smallerPC">Responsive Web (1200 - 1500px)</span>
      <span id="largerTablet">Responsive Web (900 - 1200px)</span>
      <span id="tablet">Responsive Web (600 - 900px)</span>
      <span id="phone">Responsive Web ( - 600px)</span>
    </h3>

    <div class="pfFlexbox">
      <div class="centerlinks">
        <div class="block">
          <h2 class="appTitle">
            <a href="https://dpzxubh0o1hze.cloudfront.net" target="_blank" class="hlink">3D Photo Viewer</a>
            <button class="source" v-on:click="redirect('PhotoViewer3D')">source code</button>
          </h2>
          <div class="mini">
            <div class="thumbnail-container">
              <div class="thumbnail">
                <img src="@/assets/3DPhotoViewer.jpg" alt="3D Photo Viewer" />
              </div>
            </div>
            <a href="https://dpzxubh0o1hze.cloudfront.net" target="_blank" rel="noopener noreferrer"
              ><div class="thumbnail-container overlay"></div
            ></a>
          </div>

          <div class="mini">
            <ul class="pftext">
              <li>Photos in chronological order, scattered throughout a 3D hallway space</li>
              <li>Users can navigate through the space using the mouse scroll wheel</li>
              <li>Switch modes to browse in a regular Grid View (portrait / landscape) as well</li>
              <li>Language: TypeScript (strict mode)</li>
              <li>Frontend: Next.js16, React19, CSS 3D Transforms/Perspective</li>
              <li>Image processing: sharp, exifr, Chokidar, Node.js crypto</li>
              <li>Cloud: AWS CloudFront, Lambda, S3, Cognito, DynamoDB</li>
            </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle">
            <a
              href="https://ninja-helpdesk-backend--ninja-helpdesk-de2ee.asia-east1.hosted.app/"
              target="_blank"
              class="hlink"
              >Dojo Helpdesk</a
            >
            <button class="source" v-on:click="redirect('DojoHelpdesk')">source code</button>
          </h2>
          <div class="mini">
            <div class="thumbnail-container">
              <div class="thumbnail">
                <iframe
                  src="https://ninja-helpdesk-backend--ninja-helpdesk-de2ee.asia-east1.hosted.app/"
                  frameborder="0"
                  onload="
                    window.scrollTo(0, 0);
                    this.style.opacity = 1;
                  "
                  scrolling="no"
                ></iframe>
              </div>
            </div>
            <a
              href="https://ninja-helpdesk-backend--ninja-helpdesk-de2ee.asia-east1.hosted.app/"
              target="_blank"
              rel="noopener noreferrer"
              ><div class="thumbnail-container overlay"></div
            ></a>
          </div>

          <div class="mini">
            <ul class="pftext">
              <li>Ticket management system for system operations (simplified version)</li>
              <li>You can log in with the DEMO account: ID: test@mobi-1.com, PWD: test%147852</li>
              <li>Language: TypeScript (strict mode)</li>
              <li>
                Frontend: Next.js16 (App Router), React19 (built an Auth Provider managing auth state with the Context API)
              </li>
              <li>Backend: Firebase Authentication, Cloud Firestore</li>
              <li>Cloud: Firebase App Hosting</li>
            </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle">
            <a href="https://reactconverter.firebaseapp.com/" target="_blank" class="hlink">React Converter</a>
            <button class="source" v-on:click="redirect('react-converter')">source code</button>
          </h2>
          <div class="mini">
            <div class="thumbnail-container">
              <div class="thumbnail">
                <iframe
                  src="https://reactconverter.firebaseapp.com/"
                  frameborder="0"
                  onload="
                    window.scrollTo(0, 0);
                    this.style.opacity = 1;
                  "
                  scrolling="no"
                ></iframe>
              </div>
            </div>
            <a href="https://reactconverter.firebaseapp.com/" target="_blank" rel="noopener noreferrer"
              ><div class="thumbnail-container overlay"></div
            ></a>
          </div>

          <div class="mini">
            <ul class="pftext">
              <li>Multi-unit simultaneous converter app taking advantage of React's features</li>
              <li>With data binding, wherever you input a value, all other units are instantly recalculated and displayed at the same time</li>
              <li>Numerical calculation with 30 significant digits by decimal.js, using round-half-to-even</li>
              <li>Language: JavaScript (ES Modules)</li>
              <li>Frontend: React19 (function components + Hooks)</li>
              <li>Backend: Firebase Authentication, Cloud Firestore</li>
              <li>Cloud: Firebase App Hosting</li>
            </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle">
            <a href="https://calculator-bf6c7.firebaseapp.com/#/" target="_blank" class="hlink">Reactive Calculator - Vue.js</a>
            <button class="source" v-on:click="redirect('Calculator')">source code</button>
          </h2>
          <div class="mini">
            <div class="thumbnail-container">
              <div class="thumbnail">
                <iframe
                  src="https://calculator-bf6c7.firebaseapp.com/#/"
                  frameborder="0"
                  onload="
                    window.scrollTo(0, 0);
                    this.style.opacity = 1;
                  "
                ></iframe>
              </div>
            </div>
            <a href="https://calculator-bf6c7.firebaseapp.com/#/" target="_blank" rel="noopener noreferrer"
              ><div class="thumbnail-container overlay"></div
            ></a>
          </div>

          <div class="mini">
            <ul class="pftext">
              <li>
                Based on a calculator made on Codepen as a freeCodeCamp trial (Javascript, jQuery, Bootstrap),
                enhanced its functionality and ported it to Vue.js
              </li>
              <li>Enabled key input from the keyboard and backspace key (with auto recalculation)</li>
              <li>Auto brackets generator; copy the formula to verify the result on Google</li>
              <li>Tech: Javascript, Node.js, Vue.js, Vue Router</li>
              <li>Hosting: Firebase</li>
            </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle">
            <a href="https://keycode-finder.firebaseapp.com/" target="_blank" class="hlink">Keycode Finder</a>
          </h2>
          <div class="mini">
            <div class="thumbnail-container">
              <div class="thumbnail">
                <iframe
                  src="https://keycode-finder.firebaseapp.com/"
                  frameborder="0"
                  onload="
                    window.scrollTo(0, 0);
                    this.style.opacity = 1;
                  "
                  scrolling="no"
                ></iframe>
              </div>
            </div>
            <a href="https://keycode-finder.firebaseapp.com/" target="_blank" rel="noopener noreferrer"
              ><div class="thumbnail-container overlay"></div
            ></a>
          </div>

          <div class="mini">
            <ul class="pftext">
              <li>Made as a development utility tool</li>
              <li>Displays 3 kinds of event.key info (keydown, keypress, keyup)</li>
              <li>Key combinations (Shift + X) can also be displayed</li>
              <li>Tech: Javascript, Vue.js</li>
              <li>Hosting: Firebase</li>
            </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle">
            <a href="https://marioplan-894e0.firebaseapp.com/" target="_blank" class="hlink">Mario Plan - React</a>
            <button class="source" v-on:click="redirect('marioplan')">source code</button>
          </h2>
          <div class="mini">
            <div class="thumbnail-container">
              <div class="thumbnail">
                <iframe
                  src="https://marioplan-894e0.firebaseapp.com/"
                  frameborder="0"
                  onload="
                    window.scrollTo(0, 0);
                    this.style.opacity = 1;
                  "
                  scrolling="no"
                ></iframe>
              </div>
            </div>
            <a href="https://marioplan-894e0.firebaseapp.com/" target="_blank" rel="noopener noreferrer"
              ><div class="thumbnail-container overlay"></div
            ></a>
          </div>

          <div class="mini">
            <ul class="pftext">
              <li>Project management app, coded in Net Ninja's tutorial.</li>
              <li>
                If a new signup or project is created, firebase functions on the server detect the event and
                automatically show a notice on the Notification window.
              </li>
              <li>
                Tech: Javascript, React, Redux, Redux-thunk, Firestore (database), Firebase Auth, Firebase Functions
              </li>
              <li>Hosting: Firebase</li>
            </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle">
            <a href="https://ranking-board.firebaseapp.com/" target="_blank" class="hlink">Ranking Board - React</a>
            <button class="source" v-on:click="redirect('ranking')">source code</button>
          </h2>
          <div class="mini">
            <div class="thumbnail-container">
              <div class="thumbnail">
                <iframe
                  src="https://ranking-board.firebaseapp.com/"
                  frameborder="0"
                  onload="
                    window.scrollTo(0, 0);
                    this.style.opacity = 1;
                  "
                  scrolling="no"
                ></iframe>
              </div>
            </div>
            <a href="https://ranking-board.firebaseapp.com/" target="_blank" rel="noopener noreferrer"
              ><div class="thumbnail-container overlay"></div
            ></a>
          </div>

          <div class="mini">
            <ul class="pftext">
              <li>Ranking board app, coded in reference to Reactjs.org sample code.</li>
              <li>
                After loading the data, click buttons to sort the ranking; toggle between ascending and descending order.
              </li>
              <li>Styled by Materialize CSS grid, responsive design.</li>
              <li>Tech: Javascript, Node.js, React, Materialize</li>
              <li>Hosting: Firebase</li>
            </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle">
            <a href="https://materialize-51af2.web.app/" target="_blank" class="hlink">Materialize</a>
            <button class="source" v-on:click="redirect('materialize')">source code</button>
          </h2>
          <div class="mini">
            <div class="thumbnail-container">
              <div class="thumbnail">
                <iframe
                  src="https://materialize-51af2.web.app/"
                  frameborder="0"
                  onload="
                    window.scrollTo(0, 0);
                    this.style.opacity = 1;
                  "
                  scrolling="no"
                ></iframe>
              </div>
            </div>
            <a href="https://materialize-51af2.web.app/" target="_blank" rel="noopener noreferrer"
              ><div class="thumbnail-container overlay"></div
            ></a>
          </div>

          <div class="mini">
            <ul class="pftext">
              <li>Coded in Net Ninja tutorial with Materialize.</li>
              <li>Responsive design.</li>
              <li>Tech: HTML, CSS, Javascript, Materialize</li>
              <li>Hosting: Domestic service provider</li>
            </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle">
            <a href="https://css-sass-40f7f.web.app/" target="_blank" class="hlink">SASS</a>
            <button class="source" v-on:click="redirect('sass')">source code</button>
          </h2>
          <div class="mini">
            <div class="thumbnail-container">
              <div class="thumbnail">
                <iframe
                  src="https://css-sass-40f7f.web.app/"
                  frameborder="0"
                  onload="
                    window.scrollTo(0, 0);
                    this.style.opacity = 1;
                  "
                  scrolling="no"
                ></iframe>
              </div>
            </div>
            <a href="https://css-sass-40f7f.web.app/" target="_blank" rel="noopener noreferrer"
              ><div class="thumbnail-container overlay"></div
            ></a>
          </div>

          <div class="mini">
            <ul class="pftext">
              <li>Coded in Net Ninja's tutorial with SASS.</li>
              <li>
                With SASS, layouts such as the header menu and the 3 service menus (recording, certificates, Skype) are set by specifying the total width in CSS and dividing it.
              </li>
              <li>Tech: HTML, CSS, Javascript, SASS</li>
              <li>Hosting: Firebase</li>
            </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle">
            <a href="https://react-test-a197a.firebaseapp.com/" target="_blank" class="hlink">Blogs - React</a>
            <button class="source" v-on:click="redirect('poketimes-redux')">source code</button>
          </h2>
          <div class="mini">
            <div class="thumbnail-container">
              <div class="thumbnail">
                <iframe
                  src="https://react-test-a197a.firebaseapp.com/"
                  frameborder="0"
                  onload="
                    window.scrollTo(0, 0);
                    this.style.opacity = 1;
                  "
                  scrolling="no"
                ></iframe>
              </div>
            </div>
            <a href="https://react-test-a197a.firebaseapp.com/" target="_blank" rel="noopener noreferrer"
              ><div class="thumbnail-container overlay"></div
            ></a>
          </div>

          <div class="mini">
            <ul class="pftext">
              <li>
                Coded in Net Ninja's tutorial. State management by action creator and reducer with React /
                Redux.
              </li>
              <li>Automatic color change of the About page by a Higher Order Component.</li>
              <li>Tech: Javascript, Node.js, React, Redux</li>
              <li>Hosting: Firebase</li>
            </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle">
            <a href="https://todo-list-21740.firebaseapp.com/#/" target="_blank" class="hlink"
              >Todo List - Vue.js</a
            >
            <button class="source" v-on:click="redirect('todoVueCLI')">source code</button>
          </h2>
          <div class="mini">
            <div class="thumbnail-container">
              <div class="thumbnail">
                <iframe
                  src="https://todo-list-21740.firebaseapp.com/#/"
                  frameborder="0"
                  onload="
                    window.scrollTo(0, 0);
                    this.style.opacity = 1;
                  "
                  scrolling="no"
                ></iframe>
              </div>
            </div>
            <a href="https://todo-list-21740.firebaseapp.com/#/" target="_blank" rel="noopener noreferrer"
              ><div class="thumbnail-container overlay"></div
            ></a>
          </div>

          <div class="mini">
            <ul class="pftext">
              <li>
                Based on an app coded in Net Ninja's tutorial on YouTube (Javascript, jQuery, Mongoose, MongoDB),
                improved and rebuilt with Vue.js & Firebase.
              </li>
              <li>Added functions to recycle completed and deleted data, and a sort function</li>
              <li>Tech: Javascript, Node.js, Vue.js, Vue Router, Firebase/Firestore (database)</li>
              <li>Hosting: Firebase</li>
            </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle">
            <a href="https://ninja-smoothies-2018.firebaseapp.com/#/" target="_blank" class="hlink"
              >Ninja Smoothies Recipe - Vue.js</a
            >
          </h2>
          <div class="mini">
            <div class="thumbnail-container">
              <div class="thumbnail">
                <iframe
                  src="https://ninja-smoothies-2018.firebaseapp.com/#/"
                  frameborder="0"
                  onload="
                    window.scrollTo(0, 0);
                    this.style.opacity = 1;
                  "
                  scrolling="no"
                ></iframe>
              </div>
            </div>
            <a href="https://ninja-smoothies-2018.firebaseapp.com/#/" target="_blank" rel="noopener noreferrer"
              ><div class="thumbnail-container overlay"></div
            ></a>
          </div>

          <div class="mini">
            <ul class="pftext">
              <li>Made as an assignment in Net Ninja's course</li>
              <li>Tech: Javascript, Node.js, Vue.js, Firebase/Firestore(database)</li>
              <li>Hosting: Firebase</li>
            </ul>
          </div>
        </div>

        <div class="block" id="simon">
          <h2 class="appTitle">
            <a href="https://simongame-c122a.firebaseapp.com/" target="_blank" class="hlink">Simon Game - Vue.js</a>
          </h2>
          <div class="mini">
            <div class="thumbnail-container">
              <div class="thumbnail">
                <iframe
                  src="https://simongame-c122a.firebaseapp.com/"
                  frameborder="0"
                  onload="
                    window.scrollTo(0, 0);
                    this.style.opacity = 1;
                  "
                  scrolling="no"
                ></iframe>
              </div>
            </div>
            <a href="https://simongame-c122a.firebaseapp.com/" target="_blank" rel="noopener noreferrer"
              ><div class="thumbnail-container overlay"></div
            ></a>
          </div>

          <div class="mini">
            <ul class="pftext">
              <li>
                Improved a game made on Codepen with Javascript, jQuery, Bootstrap as a freeCodeCamp trial and
                rebuilt it with Vue.js
              </li>
              <li>Tech: Javascript, Node.js, Vue.js</li>
              <li>Hosting: Firebase</li>
            </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle">
            <a href="https://codepen.io/SoichiroW/full/aLRmoQ/" target="_blank" class="hlink">Show the Local Weather</a>
          </h2>
          <div class="mini">
            <div class="thumbnail-container">
              <div class="thumbnail">
                <iframe
                  src="https://codepen.io/SoichiroW/full/aLRmoQ/"
                  frameborder="0"
                  onload="
                    window.scrollTo(0, 0);
                    this.style.opacity = 1;
                  "
                  scrolling="no"
                ></iframe>
              </div>
            </div>
            <a href="https://codepen.io/SoichiroW/full/aLRmoQ/" target="_blank" rel="noopener noreferrer"
              ><div class="thumbnail-container overlay"></div
            ></a>
          </div>

          <div class="mini">
            <ul class="pftext">
              <li>Made as a freeCodeCamp trial</li>
              <li>Location is detected automatically by IP address to show the current weather, temperature, humidity, etc.</li>
              <li>Background changes according to the weather</li>
              <li>Tech: Javascript, Bootstrap</li>
              <li>Hosting: Codepen</li>
            </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle">
            <a href="https://codepen.io/SoichiroW/full/xPOmvR/" target="_blank" class="hlink">Tic Tac Toe Game</a>
          </h2>
          <div class="mini">
            <div class="thumbnail-container">
              <div class="thumbnail">
                <iframe
                  src="https://codepen.io/SoichiroW/full/xPOmvR/"
                  frameborder="0"
                  onload="
                    window.scrollTo(0, 0);
                    this.style.opacity = 1;
                  "
                  scrolling="no"
                ></iframe>
              </div>
            </div>
            <a href="https://codepen.io/SoichiroW/full/xPOmvR/" target="_blank" rel="noopener noreferrer"
              ><div class="thumbnail-container overlay"></div
            ></a>
          </div>

          <div class="mini">
            <ul class="pftext">
              <li>Made as a freeCodeCamp trial</li>
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
  name: "Portfolio",
  methods: {
    scrollWin() {
      window.scrollTo(0, 0);
    },
    redirect(content) {
      switch (content) {
        case "PhotoViewer3D":
          window.open("https://github.com/SoichiroWada/PhotoViewer3D");
          break;
        case "DojoHelpdesk":
          window.open("https://github.com/SoichiroWada/J-Next13-dojo-helpdesk");
          break;
        case "react-converter":
          window.open("https://github.com/SoichiroWada/React-Converter");
          break;
        case "Calculator":
          window.open("https://github.com/SoichiroWada/calculator-vue");
          break;
        case "materialize":
          window.open("https://github.com/SoichiroWada/Materialize");
          break;
        case "sass":
          window.open("https://github.com/SoichiroWada/SASS");
          break;
        case "marioplan":
          window.open("https://github.com/SoichiroWada/MarioPlan");
          break;
        case "ranking":
          window.open("https://github.com/SoichiroWada/Ranking-Board");
          break;
        case "poketimes-redux":
          window.open("https://github.com/SoichiroWada/Poketimes-Redux");
          break;
        case "todoVueCLI":
          window.open("https://github.com/SoichiroWada/todoList-vuejs");
          break;
      }
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
.portfolio {
  margin-top: 3em;
}

.pfFlexbox {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.pftext li {
  font-size: 1em;
  margin-left: -2%;
  margin-top: 0.3em;
  padding: 0.2em;
}
.pftextjp li {
  font-size: 1em;
  margin-left: -2%;
  margin-top: 0.4em;
  padding: 0em;
}

.centerlinks {
  font-family: "Roboto", sans-serif;
  text-align: left;
  padding: 0px;
  float: left;
  width: 990px;
}

.block {
  display: inline-block;
  margin-top: 1em;
  margin-bottom: 0.5em;
  width: 100%;
  height: auto;
}

.appTitle {
  margin-left: 0em;
  margin-bottom: 0em;
  margin-top: 0em;
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
  float: right;
  width: calc(1440px * 0.25);
  height: calc(900px * 0.25);
  display: block;
  overflow: hidden;
  position: relative;
  background: #f9f9f9;
  margin-top: 0.2em;
  margin-left: 2em;
}

.thumbnail iframe {
  opacity: 0;
  transition: all 300ms ease-in-out;
}

.thumbnail img {
  display: block;
  width: 1440px;
  height: 900px;
  object-fit: cover;
}

.overlay {
  background-color: lightblue;
  margin-right: -393px;
  opacity: 0;
  z-index: 5;
}
.overlay:hover {
  opacity: 0.5;
}

#h1p {
  margin-top: 0.1em;
  margin-bottom: 0em;
}
#h3p {
  margin-top: 0.2em;
  margin-bottom: 0.1em;
  color: #afafaf;
}
#midPC,
#smallerPC,
#tablet,
#largerTablet,
#phone {
  display: none;
}
#PC {
  display: inline;
}

@media screen and (max-width: 1700px) {
  .centerlinks {
    width: 65%; /* The width is 100%, when the viewport is 800px or smaller */
  }
  .block {
    padding-left: 3%;
    padding-right: 3%;
  }
  #PC,
  #smallerPC,
  #tablet,
  #largerTablet,
  #phone {
    display: none;
  }
  #midPC {
    display: inline;
  }
}

@media screen and (max-width: 1500px) {
  .centerlinks {
    width: 75%;
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
    float: right;
    width: calc(1440px * 0.23);
    height: calc(900px * 0.23);
    display: block;
    overflow: hidden;
    position: relative;
    background: #f9f9f9;
    margin-left: 2em;
  }
  .overlay {
    background-color: lightblue;
    margin-right: -363px;
    opacity: 0;
    z-index: 5;
  }
  .block {
    padding-left: 3%;
    padding-right: 3%;
  }
  #PC,
  #midPC,
  #tablet,
  #largerTablet,
  #phone {
    display: none;
  }
  #smallerPC {
    display: inline;
  }
}

/* Use a media query to add a break point at 800px: */
@media screen and (max-width: 1200px) {
  .centerlinks {
    width: 90%;
  }
  .thumbnail {
    -ms-zoom: 0.2;
    -moz-transform: scale(0.2);
    -moz-transform-origin: 0 0;
    -o-transform: scale(0.2);
    -o-transform-origin: 0 0;
    -webkit-transform: scale(0.2);
    -webkit-transform-origin: 0 0;
  }
  .thumbnail-container {
    float: right;
    width: calc(1440px * 0.2);
    height: calc(900px * 0.2);
    display: block;
    overflow: hidden;
    position: relative;
    background: #f9f9f9;
    margin-left: 2em;
  }
  .overlay {
    background-color: lightblue;
    margin-right: -320px;
    opacity: 0;
    z-index: 5;
  }
  .block {
    padding-left: 3%;
    padding-right: 3%;
  }
  #PC,
  #smallerPC,
  #midPC,
  #phone,
  #tablet {
    display: none;
  }
  #largerTablet {
    display: inline;
  }
}
@media screen and (max-width: 900px) {
  .centerlinks {
    width: 100%; /* The width is 100%, when the viewport is 800px or smaller */
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
    float: right;
    width: calc(1440px * 0.18);
    height: calc(900px * 0.18);
    display: block;
    overflow: hidden;
    position: relative;
    background: #f9f9f9;
    margin-left: 2em;
    margin-top: 1em;
    margin-bottom: 2em;
  }
  .overlay {
    background-color: lightblue;
    margin-right: -291px;
    opacity: 0;
    z-index: 5;
  }
  .block {
    padding-left: 3%;
    padding-right: 3%;
  }
  #PC,
  #smallerPC,
  #midPC,
  #largerTablet,
  #phone {
    display: none;
  }
  #tablet {
    display: inline;
  }
}
@media screen and (max-width: 600px) {
  .centerlinks {
    width: 100%;
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
    float: right;
    width: calc(1440px * 0.17);
    height: calc(900px * 0.17);
    display: block;
    overflow: hidden;
    position: relative;
    background: #f9f9f9;
    margin-left: 1.5em;
    margin-top: 1em;
    margin-bottom: 0.5em;
  }
  .overlay {
    background-color: lightblue;
    margin-right: -269px;
    opacity: 0;
    z-index: 5;
  }
  .block {
    padding-left: 3%;
    padding-right: 3%;
  }
  .mini {
    float: left;
    display: block;
  }
  .appTitle {
    margin-left: 1em;
  }
  #PC,
  #smallerPC,
  #largerTablet,
  #midPC,
  #tablet {
    display: none;
  }
  #phone {
    display: inline;
  }
}
.source {
  font-size: 0.6em;
  margin-left: 1.5em;
}

.btn7 {
  width: auto;
  color: black;
  font-size: 20px;
  margin-bottom: 1em;
}
</style>
