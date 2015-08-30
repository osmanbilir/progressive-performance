    /** @jsx React.DOM */

var React = require('react/addons');
var ReactApp = require('./components/index');

var mountNode = document.getElementById("react-main-mount");

React.render(new ReactApp({}), mountNode);


/**
 * FONT LOADING
 */

console.log('fonts before', document.fonts);

var f = new FontFace("open_sansbold", "url(/fonts/opensans-bold-webfont.woff)", {});

f.load().then(function (loadedFace) {
  document.fonts.add(loadedFace);
  document.body.style.fontFamily = "open_sansbold, serif";
  console.log('font face loaded', loadedFace);
  console.log('loaded fonts', document.fonts);
});

