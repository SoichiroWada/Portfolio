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
            <a href="https://dpzxubh0o1hze.cloudfront.net" class="hlink">3D Photo Viewer</a>
            <button class="source" v-on:click="redirect('PhotoViewer3D')">source code</button>
          </h2>
          <div class="mini">
            <div class="thumbnail-container">
              <div class="thumbnail">
                <iframe
                  src="https://dpzxubh0o1hze.cloudfront.net"
                  frameborder="0"
                  onload="
                    window.scrollTo(0, 0);
                    this.style.opacity = 1;
                  "
                  scrolling="no"
                ></iframe>
              </div>
            </div>
            <a href="https://dpzxubh0o1hze.cloudfront.net" target="_blank" rel="noopener noreferrer"
              ><div class="thumbnail-container overlay"></div
            ></a>
          </div>

          <div class="mini">
            <ul class="pftextjp">
              <li>写真画像を時系列でソートして廊下の空間内にばらして設置したイメージ</li>
              <li>モード切替で、通常のGrid View閲覧（縦横表示）も可能</li>
              <li>言語: TypeScript</li>
              <li>フロントエンド: Next.js16, React19, CSS 3D Transforms/Perspective</li>
              <li>画像処理: sharp, exifr, Chokidar, Node.js crypto</li>
              <li>クラウド: AWS CloudFront, Lambda, S3, Cognito, DynamoDB</li>
            </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle">
            <a href="https://reactconverter.firebaseapp.com/" class="hlink">Ninja Helpdesk</a>
            <button class="source" v-on:click="redirect('NinjaHelpdesk')">source code</button>
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
            <ul class="pftextjp">
              <li>Reactjs.orgのサンプルコードを参考にしてコーディング、単位同時変換アプリ。</li>
              <li>
                Controlled input及びData
                bindingにより、入力可能な箇所のどこに入力しても、瞬時に他のすべての単位を再計算して同時に表示。
              </li>
              <li>使用技術: Javascript, Node.js, React</li>
              <li>ホスティング: Firebase</li>
            </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle">
            <a href="https://reactconverter.firebaseapp.com/" class="hlink">React Converter</a>
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
            <ul class="pftextjp">
              <li>Reactjs.orgのサンプルコードを参考にしてコーディング、単位同時変換アプリ。</li>
              <li>
                Controlled input及びData
                bindingにより、入力可能な箇所のどこに入力しても、瞬時に他のすべての単位を再計算して同時に表示。
              </li>
              <li>使用技術: Javascript, Node.js, React</li>
              <li>ホスティング: Firebase</li>
            </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle">
            <a href="https://calculator-bf6c7.firebaseapp.com/#/" class="hlink">リアクティブ電卓 - Vue CLI</a>
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
            <ul class="pftextjp">
              <li>
                freeCodeCampの課題としてCodepen上で作成(Javascript, jQuery, Bootstrap)
                したものをベースとして、機能を強化してVue CLIに移植
              </li>
              <li>キーボードからの入力、及びバックスペース利用可能（自動再計算）</li>
              <li>自動的に括弧を付与、計算式をコピーしてgoogleで検算可能</li>
              <li>使用技術: Javascript, Node.js, Vue CLI, Vue Router</li>
              <li>ホスティング: Firebase</li>
            </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle">
            <a href="https://materialize-51af2.web.app/" class="hlink">Materialize</a>
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
            <ul class="pftextjp">
              <li>ネット忍者チュートリアル（Materialize）に沿ってコーディング。</li>
              <li>レスポンシブデザイン</li>
              <li>使用技術: HTML, CSS, Javascript, Materialize</li>
              <li>ホスティング: Firebase</li>
            </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle">
            <a href="https://marioplan-894e0.firebaseapp.com/" class="hlink">Mario Plan - React</a>
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
            <ul class="pftextjp">
              <li>ネット忍者チュートリアルに沿ってコーディング、プロジェクト管理アプリ。</li>
              <li>
                新たなサインアップ、プロジェクトが発生すると、サーバーサイドのfirebase
                functionsがイベントを検知して自動的にNotificationウィンドウ上に表示。
              </li>
              <li>
                使用技術: Javascript, React, Redux, Redux-thunk, Firestore (database), Firebase Auth, Firebase Functions
              </li>
              <li>ホスティング: Firebase</li>
            </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle">
            <a href="https://ranking-board.firebaseapp.com/" class="hlink">Ranking Board - React</a>
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
            <ul class="pftextjp">
              <li>Reactjs.orgのサンプルコードを参考にしてコーディング、ランキング表示アプリ。</li>
              <li>
                データを読み込んだ後、ボタン操作によりランキングをソート。トグル機能により、順配列、逆配列の切り替えが可能。
              </li>
              <li>MaterializeのCSSグリッドによるスタイルを使用、レスポンシブデザイン。</li>
              <li>使用技術: Javascript, Node.js, React, Materialize</li>
              <li>ホスティング: Firebase</li>
            </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle">
            <a href="https://materialize-51af2.web.app/" class="hlink">Materialize</a>
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
            <ul class="pftextjp">
              <li>Coded in Net Ninja tutorial with Materialize.</li>
              <li>Responsive design.</li>
              <li>Tech: HTML, CSS, Javascript, Materialize</li>
              <li>Hosting: Domestic service provider</li>
            </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle">
            <a href="https://css-sass-40f7f.web.app/" class="hlink">SASS</a>
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
            <ul class="pftextjp">
              <li>ネット忍者チュートリアル（SASS）に沿ってコーディング。</li>
              <li>
                SASSにより、ヘッダー部分のメニューの配置、サービスの3つのメニュー（レコーディング、証明書、スカイプ）など、CSSにおいて全体の幅を指定し、あとは割り算で指定。
              </li>
              <li>使用技術: HTML, CSS, Javascript, SASS</li>
              <li>ホスティング: Firebase</li>
            </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle">
            <a href="https://react-test-a197a.firebaseapp.com/" class="hlink">Blogs - React</a>
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
            <ul class="pftextjp">
              <li>
                ネット忍者チュートリアルに沿いコーディング。React / Reduxを使用したaction
                creatorとreducerによるステート管理。
              </li>
              <li>Higher Order ComponentによるAboutページの自動カラー変換。</li>
              <li>使用技術: Javascript, Node.js, React, Redux</li>
              <li>ホスティング: Firebase</li>
            </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle">
            <a href="https://todo-list-21740.firebaseapp.com/#/" class="hlink">やることリスト - Vue CLI</a>
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
            <ul class="pftextjp">
              <li>
                ネット忍者（youtube上のプログラミング教室）の内容に沿ってコーディング(Javascript, jQuery, Mongoose,
                MongoDB)したものをベースとして改良しVue CLI & Firebaseにより再作成。
              </li>
              <li>実施済み、および削除データを再利用する機能を追加、ソート機能を追加</li>
              <li>使用技術: Javascript, Node.js, Vue CLI, Vue Router, Firebase/Firestore (database)</li>
              <li>ホスティング: Firebase</li>
            </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle">
            <a href="https://ninja-smoothies-2018.firebaseapp.com/#/" class="hlink">忍者スムージーレシピ - Vue CLI</a>
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
            <ul class="pftextjp">
              <li>ネット忍者のコース課題として作成</li>
              <li>使用技術: Javascript, Node.js, Vue CLI, Firebase/Firestore(database)</li>
              <li>ホスティング: Firebase</li>
            </ul>
          </div>
        </div>

        <div class="block" id="simon">
          <h2 class="appTitle">
            <a href="https://simongame-c122a.firebaseapp.com/" class="hlink">サイモンゲーム - Vue CLI</a>
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
            <ul class="pftextjp">
              <li>
                freeCodeCampのトライアルとして、Codepen上でJavascript, jQuery, Bootstrapにより作成したものを改良してVue
                CLIで作成
              </li>
              <li>使用技術: Javascript, Node.js, Vue CLI</li>
              <li>ホスティング: Firebase</li>
            </ul>
          </div>
        </div>

        <div class="block">
          <h2 class="appTitle">
            <a href="https://codepen.io/SoichiroW/full/aLRmoQ/" class="hlink">ローカル天気予報</a>
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
          <h2 class="appTitle">
            <a href="https://codepen.io/SoichiroW/full/yPerQe/" class="hlink">ポモドーロ時計（逆算タイマー）</a>
          </h2>
          <div class="mini">
            <div class="thumbnail-container">
              <div class="thumbnail">
                <iframe
                  src="https://codepen.io/SoichiroW/full/yPerQe/"
                  frameborder="0"
                  onload="
                    window.scrollTo(0, 0);
                    this.style.opacity = 1;
                  "
                  scrolling="no"
                ></iframe>
              </div>
            </div>
            <a href="https://codepen.io/SoichiroW/full/yPerQe/" target="_blank" rel="noopener noreferrer"
              ><div class="thumbnail-container overlay"></div
            ></a>
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
          <h2 class="appTitle">
            <a href="https://keycode-finder.firebaseapp.com/" class="hlink">keycodeを表示するアプリ</a>
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
            <ul class="pftextjp">
              <li>freeCodeCampのトライアルで作成</li>
              <li>使用技術: Javascript, Bootstrap</li>
              <li>ホスティング: Codepen</li>
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
        case "NinjaHelpdesk":
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

<style></style>
