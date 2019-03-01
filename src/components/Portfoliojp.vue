<template>
  <div class="portfolio">
    <h1 id="h1p">Soichiro's Portfolio</h1>
    <h3 id="h3p"><span id="PC">Responsive Web ( 1700px - )</span>
    <span id="midPC">Responsive Web (1500 - 1700px)</span>
    <span id="smallerPC">Responsive Web (1200 - 1500px)</span>
    <span id="largerTablet">Responsive Web (900 - 1200px)</span>
    <span id="tablet">Responsive Web (600 - 900px)</span>
    <span id="phone">Responsive Web ( - 600px)</span></h3>
    <div class="leftlinks">
    </div>

    <div class="centerlinks">

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
        <ul class="pftextjp">
        <li>ネット忍者チュートリアルに沿ってコーディング、プロジェクト管理アプリ。</li>
        <li>新たなサインアップ、プロジェクトが発生すると、サーバーサイドのfirebase functionsがイベントを検知して自動的にNotificationウィンドウ上に表示。</li>
        <li>使用技術: Javascript, React, Redux, Redux-thunk, Firestore (database), Firebase Auth, Firebase Functions</li>
        <li>ホスティング: Firebase</li>
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
        <ul class="pftextjp">
        <li>ネット忍者チュートリアルに沿いコーディング。React / Reduxを使用したaction creatorとreducerによるグローバルステート管理。</li>
        <li>Higher Order ComponentによるAboutページの自動カラー変換。</li>
        <li>使用技術: Javascript, React, Redux</li>
        <li>ホスティング: Firebase</li>
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
          <li>React / Reduxチュートリアルにおいて説明用に出てくるコードを使い、Materializeを利用して作成。</li>
          <li>Materializeのボタン、チェックボックス等を使用、3種類のフィルターによってリスト表示を制御。</li>
          <li>Tech: Javascript, React, Redux, Materialize</li>
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
        <ul class="pftextjp">
        <li>ネット忍者チュートリアルに沿ってコーディング。action creatorを修正してRedux-thunkを使いmiddlewareによるasync処理を導入。</li>
        <li>何かワードを入力すると、自動的にasyncでJSONPlaceholder（リモートサーバ）からtodoをランダムで読みだし、入力したワードと結合して出力</li>
        <li>使用技術: Javascript, React, Redux, Redux-thunk</li>
        <li>ホスティング: Firebase</li>
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
        <ul class="pftextjp">
        <li>ネット忍者(youtube)チュートリアルに沿ってコーディング、チャット、サインアップ、ログイン、ログアウト、プロファイルページなどを改良</li>
        <li>テスト環境：id:test@mail.com, password:test123でログインして、ブラウザ上で位置情報の利用を許可すると、自分の位置が地図上に表示されます。 </li>
        <li>使用技術: Javascript, Vue CLI, Vue Router, Firebase/Firestore (database), Firebase Auth</li>
        <li>ホスティング: Firebase</li>
        </ul>
        </div>
      </div>

      <div class="block">
        <h2 class="appTitle"><a href="https://todo-list-21740.firebaseapp.com/#/" class="hlink">やることリスト - Vue CLI</a>
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
        <ul class="pftextjp">
        <li>ネット忍者（youtube上のプログラミング教室）の内容に沿ってコーディング(Javascript, jQuery, Mongoose, MongoDB)したものをベースとして改良しVue CLI & Firebaseにより再作成。</li>
        <li>実施済み、および削除データを再利用する機能を追加、ソート機能を追加</li>
        <li>使用技術: Javascript, Vue CLI, Vue Router, Firebase/Firestore (database)</li>
        <li>ホスティング: Firebase</li>
        </ul>
        </div>
      </div>

      <div class="block">
        <h2 class="appTitle"><a href="https://calculator-bf6c7.firebaseapp.com/#/" class="hlink">リアクティブ電卓 - Vue CLI</a>
        <button class="source" v-on:click="redirect('Calculator')">source code</button></h2>
        <div class="mini">
        <div class="thumbnail-container">
          <div class="thumbnail">
            <iframe src="https://calculator-bf6c7.firebaseapp.com/#/" frameborder="0" 
            onload="window.scrollTo(0,0); this.style.opacity = 1"></iframe>
          </div>
        </div>
        <a href="https://calculator-bf6c7.firebaseapp.com/#/"><div class="thumbnail-container overlay"></div></a>
        </div>

        <div class="mini">
        <ul class="pftextjp">
        <li>freeCodeCampの課題としてCodepen上で作成(Javascript, jQuery, Bootstrap) したものをベースとして、機能を強化してVue CLIに移植</li>
        <li>キーボードからの入力、及びバックスペース利用可能（自動再計算）</li>
        <li>自動的に括弧を付与、計算式をコピーしてgoogleで検算可能</li>
        <li>使用技術: Javascript, Vue CLI, Vue Router</li>
        <li>ホスティング: Firebase</li>
        </ul>
        </div>
      </div>

      <div class="block">
        <h2 class="appTitle"><a href="https://ninja-smoothies-2018.firebaseapp.com/#/" class="hlink">忍者スムージーレシピ - Vue CLI</a></h2>
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
        <ul class="pftextjp">
        <li>ネット忍者のコース課題として作成</li>
        <li>使用技術: Javascript, Vue CLI, Firebase/Firestore(database)</li>
        <li>ホスティング: Firebase</li>
        </ul>
        </div>
      </div>

      <div class="block" id="simon">
        <h2 class="appTitle"><a href="https://simongame-c122a.firebaseapp.com/" class="hlink">サイモンゲーム - Vue CLI</a></h2>
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
        <ul class="pftextjp">
        <li>freeCodeCampのトライアルとして、Codepen上でJavascript, jQuery, Bootstrapにより作成したものを改良してVue CLIで作成</li>
        <li>使用技術: Javascript, Vue CLI</li>
        <li>ホスティング: Firebase</li>
        </ul>
        </div>
      </div>

      <div class="block">
        <h2 class="appTitle"><a href="https://codepen.io/SoichiroW/full/aLRmoQ/" class="hlink">ローカル天気予報</a></h2>
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
        <ul class="pftextjp">
        <li>freeCodeCampの課題として作成</li>
        <li>IPアドレスから自動的におおよそのロケーションを割り出して、現在の天気、温度、湿度などの情報を表示</li>
        <li>背景が天気の情報によって変化</li>
        <li>使用技術: Javascript, Bootstrap</li>
        <li>ホスティング: Codepen</li>
        </ul>
        </div>
      </div>

      <div class="block">
        <h2 class="appTitle"><a href="https://codepen.io/SoichiroW/full/yPerQe/" class="hlink">ポモドーロ時計（逆算タイマー）</a></h2>
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
        <ul class="pftextjp">
        <li>freeCodeCampのコーディングトライアルにおいて作成</li>
        <li>ロケット発射音を使用したカウントダウンタイマー</li>
        <li>使用技術: Javascript, Bootstrap</li>
        <li>ホスティング: Codepen</li>
        </ul>
        </div>
      </div>

      <div class="block">
        <h2 class="appTitle"><a href="https://keycode-finder.firebaseapp.com/" class="hlink">keycodeを表示するアプリ</a></h2>
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
        <ul class="pftextjp">
        <li>開発用のツールとして作成</li>
        <li>2種類のevent.key情報を表示します。（そのうち一つは、コンソールログとして表示）</li>
        <li>使用技術: Javascript, Vue CLI</li>
        <li>ホスティング: Firebase</li>
        </ul>
        </div>
      </div>

      <div class="block">
        <h2 class="appTitle"><a href="https://codepen.io/SoichiroW/full/xPOmvR/" class="hlink">三目並べ</a></h2>
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
        <ul class="pftextjp">
        <li>freeCodeCampのトライアルで作成</li>
        <li>使用技術: Javascript, Bootstrap</li>
        <li>ホスティング: Codepen</li>
        </ul>
        </div>
      </div>
      <button class="btn7" v-on:click="this.scrollWin">Top</button>
    </div>
    <div class="rightlinks">
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
        case 'marioplan':
          window.open("https://github.com/SoichiroWada/MarioPlan");
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

.leftlinks {
  background-color:white;
  padding:2px;
  margin-bottom:1.0em;
  float:left;
  width:25%;
}
.centerlinks {
  font-family: 'Roboto', sans-serif;
  text-align: left;
  padding: 0px;
  float:left;
  width:55%;
}
.rightlinks {
  background-color:white;
  padding:2px;
  float:left;
  width:20%;
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
  margin-top: 0.5em;
  margin-bottom: 0em;
}
#h3p{
  margin-top: 0.2em;
  margin-bottom: 1.0em;
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
  .leftlinks{
    width:18%;
    background-color: white;
  }
  .rightlinks{
    width:17%;
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
    width:70%;
  }
  .leftlinks{
    width:15%;
    background-color: white;
  }
  .rightlinks{
    width:15%;
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
  .leftlinks{
    width:5%;
    background-color: white;
  }
  .rightlinks{
    width:5%;
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
  .leftlinks, .centerlinks, .rightlinks {
    width:100%; /* The width is 100%, when the viewport is 800px or smaller */
  }
  .leftlinks{
    background-color: deeppink;
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
  .leftlinks, .centerlinks, .rightlinks {
    width:100%;
  }
  .leftlinks{
    background-color: red;
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

</style>
