// ==UserScript==
// @name        OC Enhancer Script
// @author      -L0Lock-
// @namespace   artstation.com/dautryloic
// @description Enhance OC for my use.
// @include     *openclassrooms.com/*
// @version     0.1
// @grant       GM_xmlhttpRequest
// @grant       GM_getValue
// @grant       GM_setValue
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// ==/UserScript==

var pElt = document.querySelector("p");
pElt.style.color = "red";
pElt.style.margin = "50px";

var styleNotifs = document.getElementByClassName("notificationsList__list").style.minWidht = "500px";
