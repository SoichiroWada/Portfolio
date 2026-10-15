

.block li {
  font-size: 17px;
}

.appTitle{
  margin-top:0px;
  margin-bottom:15px
}
.thumbnail iframe {
  width: 1440px;
  height: 900px;
}
.block{
  width:1000px;
  height:300px
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
  margin-left: 20px;
}
.thumbnail iframe {
  opacity: 0;
  transition: all 300ms ease-in-out;
}

.links {
  font-family: 'Roboto', sans-serif;
  text-align: left;
  margin-top:10px;
  margin-left:25%;
  margin-right:20%;
  padding: 5px;
}
.overlay{
  background-color:lightblue;
  margin-right:-380px;
  opacity:0;
  z-index:5;
}
.overlay:hover {
  opacity:0.5;
}

#h1p{
  margin-bottom: 1.0em;
}