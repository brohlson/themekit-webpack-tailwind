// Global
import "babel-polyfill";
import jquery from "jquery";
window.$ = window.jQuery = jquery;

// Style
import "../styles/index.scss";

// Modules
import search from "./modules/search";

$(function () {
  search.init();
  console.log("eggs");
});
