var u=Object.defineProperty,w=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var m=(o,t,s)=>t in o?u(o,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[t]=s,a=(o,t)=>{for(var s in t||(t={}))p.call(t,s)&&m(o,s,t[s]);if(f)for(var s of f(t))b.call(t,s)&&m(o,s,t[s]);return o},d=(o,t)=>w(o,g(t));import{x as h,a as l,b as y}from"./vendor.98f255d4.js";const F=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}};F();function c(o,t){t?o.options.theme=d(a({},h.exports.MaterialDark),{background:"#00000000"}):o.options.theme=d(a({},h.exports.Material),{background:"#FFFFFF00"})}class L{constructor(){this.bytesLeft=0,this.codePoint=0,this.lowerBound=0,this.decode=this.decode.bind(this)}decode(t){for(var s="",i=0;i<t.length;i++){var e=t.charCodeAt(i);if(this.bytesLeft==0)e<=127?s+=t.charAt(i):192<=e&&e<=223?(this.codePoint=e-192,this.bytesLeft=1,this.lowerBound=128):224<=e&&e<=239?(this.codePoint=e-224,this.bytesLeft=2,this.lowerBound=2048):240<=e&&e<=247?(this.codePoint=e-240,this.bytesLeft=3,this.lowerBound=65536):248<=e&&e<=251?(this.codePoint=e-248,this.bytesLeft=4,this.lowerBound=2097152):252<=e&&e<=253?(this.codePoint=e-252,this.bytesLeft=5,this.lowerBound=67108864):s+="\uFFFD";else if(128<=e&&e<=191){if(this.bytesLeft--,this.codePoint=(this.codePoint<<6)+(e-128),this.bytesLeft==0){var r=this.codePoint;r<this.lowerBound||55296<=r&&r<=57343||r>1114111?s+="\uFFFD":r<65536?s+=String.fromCharCode(r):(r-=65536,s+=String.fromCharCode(55296+(r>>>10&1023),56320+(r&1023)))}}else s+="\uFFFD",this.bytesLeft=0,i--}return s}}function k(){const o=document.getElementById("terminal"),t=new l.exports.Terminal({allowTransparency:!0,theme:{background:"transparent"},rendererType:"dom"}),s=new y.exports.FitAddon;t.loadAddon(s),t.open(o),s.fit(),new ResizeObserver(()=>{s.fit()}).observe(o),t.focus(),t.onTitleChange(e=>{var n;const r={magic:"title",msg:e};(n=window.webkit)==null||n.messageHandlers.callbackHandler.postMessage(r)}),t.onData(e=>{var n;const r={magic:"data",msg:e};(n=window.webkit)==null||n.messageHandlers.callbackHandler.postMessage(r)});const i=t.write;return t.write=function(){const[e,r]=Array.prototype.slice.call(arguments);console.log("data: ",t.decodeUTF8(e)),i.call(this,t.decodeUTF8(e),r)},t}l.exports.Terminal.prototype.writeUTF8=function(o){this.write(o)};l.exports.Terminal.prototype.decodeUTF8=o=>new L().decode(o);function T(){const o=k();window.fit=()=>{},window.term=o,window.terminal=o,window.send=t=>{var i;const s={magic:"command",msg:t};(i=window.webkit)==null||i.messageHandlers.callbackHandler.postMessage(s)},c(o,window.matchMedia("(prefers-color-scheme: dark)").matches),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{t.matches?c(o,!0):c(o,!1)}),setTimeout(function(){var s;const t={magic:"bell",msg:"null"};(s=window.webkit)==null||s.messageHandlers.callbackHandler.postMessage(t)},1e3)}T();
