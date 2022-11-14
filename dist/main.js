/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/button.js */ \"./src/scripts/button.js\");\n/* harmony import */ var _scripts_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/map.js */ \"./src/scripts/map.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const data = document.getElementById(\"my_dataviz\");\n  const map = new _scripts_map_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](data);\n  const data1 = document.getElementById(\"tuberculosis\");\n  new _scripts_button_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data1, map, \"tuberculosis\");\n  const data2 = document.getElementById(\"malaria\");\n  new _scripts_button_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data2, map, \"malaria\");\n  const data3 = document.getElementById(\"HIV\");\n  new _scripts_button_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data3, map, \"HIV\");\n  const data4 = document.getElementById(\"guineaWorm\");\n  new _scripts_button_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data4, map, \"guinea_worm\");\n  const data5 = document.getElementById(\"polio\");\n  new _scripts_button_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data5, map, \"polio\");\n  const data6 = document.getElementById(\"leprosy\");\n  new _scripts_button_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data6, map, \"leprosy\");\n});\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXlDO0FBQ047QUFHbkNFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLFlBQVksQ0FBQztFQUNsRCxNQUFNQyxHQUFHLEdBQUcsSUFBSUwsdURBQUcsQ0FBQ0csSUFBSSxDQUFDO0VBQ3pCLE1BQU1HLEtBQUssR0FBR0wsUUFBUSxDQUFDRyxjQUFjLENBQUMsY0FBYyxDQUFDO0VBQ3JELElBQUlMLDBEQUFNLENBQUNPLEtBQUssRUFBQ0QsR0FBRyxFQUFDLGNBQWMsQ0FBQztFQUNwQyxNQUFNRSxLQUFLLEdBQUdOLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLFNBQVMsQ0FBQztFQUNoRCxJQUFJTCwwREFBTSxDQUFDUSxLQUFLLEVBQUNGLEdBQUcsRUFBQyxTQUFTLENBQUM7RUFDL0IsTUFBTUcsS0FBSyxHQUFHUCxRQUFRLENBQUNHLGNBQWMsQ0FBQyxLQUFLLENBQUM7RUFDNUMsSUFBSUwsMERBQU0sQ0FBQ1MsS0FBSyxFQUFDSCxHQUFHLEVBQUMsS0FBSyxDQUFDO0VBQzNCLE1BQU1JLEtBQUssR0FBR1IsUUFBUSxDQUFDRyxjQUFjLENBQUMsWUFBWSxDQUFDO0VBQ25ELElBQUlMLDBEQUFNLENBQUNVLEtBQUssRUFBQ0osR0FBRyxFQUFDLGFBQWEsQ0FBQztFQUNuQyxNQUFNSyxLQUFLLEdBQUdULFFBQVEsQ0FBQ0csY0FBYyxDQUFDLE9BQU8sQ0FBQztFQUM5QyxJQUFJTCwwREFBTSxDQUFDVyxLQUFLLEVBQUNMLEdBQUcsRUFBQyxPQUFPLENBQUM7RUFDN0IsTUFBTU0sS0FBSyxHQUFHVixRQUFRLENBQUNHLGNBQWMsQ0FBQyxTQUFTLENBQUM7RUFDaEQsSUFBSUwsMERBQU0sQ0FBQ1ksS0FBSyxFQUFDTixHQUFHLEVBQUMsU0FBUyxDQUFDO0FBQ25DLENBQUMsQ0FBQzs7QUFHRjs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRfZ2xvYmFsX2hlYWx0aC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSBcIi4vc2NyaXB0cy9idXR0b24uanNcIjtcbmltcG9ydCBNYXAgZnJvbSBcIi4vc2NyaXB0cy9tYXAuanNcIjtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlfZGF0YXZpelwiKTtcbiAgICBjb25zdCBtYXAgPSBuZXcgTWFwKGRhdGEpO1xuICAgIGNvbnN0IGRhdGExID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0dWJlcmN1bG9zaXNcIik7XG4gICAgbmV3IEJ1dHRvbihkYXRhMSxtYXAsXCJ0dWJlcmN1bG9zaXNcIik7XG4gICAgY29uc3QgZGF0YTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hbGFyaWFcIik7XG4gICAgbmV3IEJ1dHRvbihkYXRhMixtYXAsXCJtYWxhcmlhXCIpO1xuICAgIGNvbnN0IGRhdGEzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJISVZcIik7XG4gICAgbmV3IEJ1dHRvbihkYXRhMyxtYXAsXCJISVZcIik7XG4gICAgY29uc3QgZGF0YTQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImd1aW5lYVdvcm1cIik7XG4gICAgbmV3IEJ1dHRvbihkYXRhNCxtYXAsXCJndWluZWFfd29ybVwiKTtcbiAgICBjb25zdCBkYXRhNSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9saW9cIik7XG4gICAgbmV3IEJ1dHRvbihkYXRhNSxtYXAsXCJwb2xpb1wiKTtcbiAgICBjb25zdCBkYXRhNiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVwcm9zeVwiKTtcbiAgICBuZXcgQnV0dG9uKGRhdGE2LG1hcCxcImxlcHJvc3lcIik7XG59KTtcblxuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cbi8vIH0pO1xuXG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiTWFwIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZGF0YSIsImdldEVsZW1lbnRCeUlkIiwibWFwIiwiZGF0YTEiLCJkYXRhMiIsImRhdGEzIiwiZGF0YTQiLCJkYXRhNSIsImRhdGE2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/button.js":
/*!*******************************!*\
  !*** ./src/scripts/button.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.js */ \"./src/scripts/map.js\");\n\nclass Button {\n  constructor(ele, map, disease) {\n    this.ele = ele;\n    this.map = map;\n    this.disease = disease;\n    this.ele.addEventListener(\"click\", this.handleClick.bind(this));\n  }\n  handleClick() {\n    console.log(\"other\");\n    this.map.resetMap(this.disease, 2020);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9idXR0b24uanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBMkI7QUFFM0IsTUFBTUMsTUFBTSxDQUFDO0VBQ1RDLFdBQVcsQ0FBQ0MsR0FBRyxFQUFDQyxHQUFHLEVBQUNDLE9BQU8sRUFBQztJQUN4QixJQUFJLENBQUNGLEdBQUcsR0FBR0EsR0FBRztJQUNkLElBQUksQ0FBQ0MsR0FBRyxHQUFHQSxHQUFHO0lBQ2QsSUFBSSxDQUFDQyxPQUFPLEdBQUdBLE9BQU87SUFDdEIsSUFBSSxDQUFDRixHQUFHLENBQUNHLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUNDLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBRW5FO0VBRUFELFdBQVcsR0FBRTtJQUNURSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDcEIsSUFBSSxDQUFDTixHQUFHLENBQUNPLFFBQVEsQ0FBQyxJQUFJLENBQUNOLE9BQU8sRUFBQyxJQUFJLENBQUM7RUFDeEM7QUFDSjtBQUVBLCtEQUFlSixNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9nbG9iYWxfaGVhbHRoLy4vc3JjL3NjcmlwdHMvYnV0dG9uLmpzP2JjOGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hcCBmcm9tIFwiLi9tYXAuanNcIjtcblxuY2xhc3MgQnV0dG9uIHtcbiAgICBjb25zdHJ1Y3RvcihlbGUsbWFwLGRpc2Vhc2Upe1xuICAgICAgICB0aGlzLmVsZSA9IGVsZTtcbiAgICAgICAgdGhpcy5tYXAgPSBtYXBcbiAgICAgICAgdGhpcy5kaXNlYXNlID0gZGlzZWFzZTtcbiAgICAgICAgdGhpcy5lbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSk7XG5cbiAgICB9XG5cbiAgICBoYW5kbGVDbGljaygpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIm90aGVyXCIpXG4gICAgICAgIHRoaXMubWFwLnJlc2V0TWFwKHRoaXMuZGlzZWFzZSwyMDIwKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiJdLCJuYW1lcyI6WyJNYXAiLCJCdXR0b24iLCJjb25zdHJ1Y3RvciIsImVsZSIsIm1hcCIsImRpc2Vhc2UiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiY29uc29sZSIsImxvZyIsInJlc2V0TWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/button.js\n");

/***/ }),

/***/ "./src/scripts/map.js":
/*!****************************!*\
  !*** ./src/scripts/map.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction htmlString() {\n  return `<svg id=\"my_dataviz\" width=\"850\" height=\"450\">\n<script>\n  const svg = d3.select(\"svg\"),\n    width = svg.attr(\"width\"),\n    height = svg.attr(\"height\");\n  \n  const path = d3.geoPath();\n  const projection = d3.geoNaturalEarth1()\n    .scale(120)\n    .center([0,0])\n  \n  const data = d3.map();\n  const colorScale = d3.scaleThreshold()\n    .domain([-1,0,1,10,100,1000,10000,100000,100000])\n    .range(['#FFFFFF','#BBBBBB','#FFFFFF','#FFDDDD','#FCBBA1','#FC9272','#FB6A4A','#DE2D26','#A50F15','#750000']);\n\n  d3.queue()\n    .defer(d3.json, \"https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson\")\n    .defer(d3.csv, \\`./src/scripts/data/malaria.csv\\`, function(d) { if (d.year==2020) {data.set(d.name, +d.cases)}; })\n    .await(ready);\n  \n  function ready(error, topo) {\n  \n    let mouseOver = function(d) {\n      d3.selectAll(\".Country\")\n        .transition()\n        .duration(200)\n        .style(\"opacity\", .5)\n      d3.select(this)\n        .transition()\n        .duration(200)\n        .style(\"opacity\", 1)\n        .style(\"stroke\", \"black\")\n    }\n  \n    let mouseLeave = function(d) {\n      d3.selectAll(\".Country\")\n        .transition()\n        .duration(200)\n        .style(\"opacity\", .8)\n      d3.select(this)\n        .transition()\n        .duration(200)\n        .style(\"stroke\", \"transparent\")\n    }\n  \n    svg.append(\"g\")\n      .selectAll(\"path\")\n      .data(topo.features)\n      .enter()\n      .append(\"path\")\n        // draw each country\n        .attr(\"d\", d3.geoPath()\n          .projection(projection)\n        )\n        // set the color of each country\n        .attr(\"fill\", function (d) {\n          d.total = data.get(d.id);\n          if (d.total === undefined) d.total = -1;\n          return colorScale(d.total);\n        })\n        .style(\"stroke\", \"transparent\")\n        .attr(\"class\", function(d){ return \"Country\" } )\n        .style(\"opacity\", .8)\n        .on(\"mouseover\", mouseOver )\n        .on(\"mouseleave\", mouseLeave )\n      }\n\n      \n  </script>\n\n</svg>`;\n}\nfunction htmlString2(chosenDisease, chosenYear) {\n  return `<svg id=\"my_dataviz\" width=\"850\" height=\"450\">\n<script>\n  \n  d3.queue()\n    .defer(d3.json, \"https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson\")\n    .defer(d3.csv, \\`./src/scripts/data/${chosenDisease}.csv\\`, function(d) { if (d.year==\\`${chosenYear}\\`) {data.set(d.name, +d.cases)}; })\n    .await(ready);\n  \n  function ready(error, topo) {\n  \n    let mouseOver = function(d) {\n      d3.selectAll(\".Country\")\n        .transition()\n        .duration(200)\n        .style(\"opacity\", .5)\n      d3.select(this)\n        .transition()\n        .duration(200)\n        .style(\"opacity\", 1)\n        .style(\"stroke\", \"black\")\n    }\n  \n    let mouseLeave = function(d) {\n      d3.selectAll(\".Country\")\n        .transition()\n        .duration(200)\n        .style(\"opacity\", .8)\n      d3.select(this)\n        .transition()\n        .duration(200)\n        .style(\"stroke\", \"transparent\")\n    }\n  \n    svg.append(\"g\")\n      .selectAll(\"path\")\n      .data(topo.features)\n      .enter()\n      .append(\"path\")\n        // draw each country\n        .attr(\"d\", d3.geoPath()\n          .projection(projection)\n        )\n        // set the color of each country\n        .attr(\"fill\", function (d) {\n          d.total = data.get(d.id);\n          if (d.total === undefined) d.total = -1;\n          return colorScale(d.total);\n        })\n        .style(\"stroke\", \"transparent\")\n        .attr(\"class\", function(d){ return \"Country\" } )\n        .style(\"opacity\", .8)\n        .on(\"mouseover\", mouseOver )\n        .on(\"mouseleave\", mouseLeave )\n      }\n\n      \n  </script>\n\n</svg>`;\n}\nvar setInnerHTML = function (elm, html) {\n  elm.innerHTML = html;\n  Array.from(elm.querySelectorAll(\"script\")).forEach(oldScript => {\n    const newScript = document.createElement(\"script\");\n    Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));\n    newScript.appendChild(document.createTextNode(oldScript.innerHTML));\n    oldScript.parentNode.replaceChild(newScript, oldScript);\n  });\n};\nclass Map {\n  constructor(ele) {\n    this.ele = ele;\n    this.year = 2020;\n    this.disease = 'malaria';\n    setInnerHTML(this.ele, htmlString());\n    // console.log(this.ele)\n    // this.ele.addEventListener(\"click\", this.handleClick.bind(this));\n  }\n\n  resetMap(disease, year) {\n    console.log(\"generic string\");\n    setInnerHTML(this.ele, htmlString2(disease, year));\n  }\n\n  // onkeydown = function() {\n  //     switch (window.event.keyCode) {\n  //         case 37:\n  //         setInnerHTML(this.ele, htmlString2(\"malaria\",2000)) \n  //          break;\n  //         case 39:\n  //         setInnerHTML(this.ele, htmlString2(\"malaria\",2000))\n  //          break;\n  //     }\n  // };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7RUFDQTtFQUNBO0FBQ0o7O0FBR0EsK0RBQWVILEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2dsb2JhbF9oZWFsdGgvLi9zcmMvc2NyaXB0cy9tYXAuanM/ZjU2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBodG1sU3RyaW5nKCkge3JldHVybiBgPHN2ZyBpZD1cIm15X2RhdGF2aXpcIiB3aWR0aD1cIjg1MFwiIGhlaWdodD1cIjQ1MFwiPlxuPHNjcmlwdD5cbiAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KFwic3ZnXCIpLFxuICAgIHdpZHRoID0gc3ZnLmF0dHIoXCJ3aWR0aFwiKSxcbiAgICBoZWlnaHQgPSBzdmcuYXR0cihcImhlaWdodFwiKTtcbiAgXG4gIGNvbnN0IHBhdGggPSBkMy5nZW9QYXRoKCk7XG4gIGNvbnN0IHByb2plY3Rpb24gPSBkMy5nZW9OYXR1cmFsRWFydGgxKClcbiAgICAuc2NhbGUoMTIwKVxuICAgIC5jZW50ZXIoWzAsMF0pXG4gIFxuICBjb25zdCBkYXRhID0gZDMubWFwKCk7XG4gIGNvbnN0IGNvbG9yU2NhbGUgPSBkMy5zY2FsZVRocmVzaG9sZCgpXG4gICAgLmRvbWFpbihbLTEsMCwxLDEwLDEwMCwxMDAwLDEwMDAwLDEwMDAwMCwxMDAwMDBdKVxuICAgIC5yYW5nZShbJyNGRkZGRkYnLCcjQkJCQkJCJywnI0ZGRkZGRicsJyNGRkREREQnLCcjRkNCQkExJywnI0ZDOTI3MicsJyNGQjZBNEEnLCcjREUyRDI2JywnI0E1MEYxNScsJyM3NTAwMDAnXSk7XG5cbiAgZDMucXVldWUoKVxuICAgIC5kZWZlcihkMy5qc29uLCBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9ob2x0enkvRDMtZ3JhcGgtZ2FsbGVyeS9tYXN0ZXIvREFUQS93b3JsZC5nZW9qc29uXCIpXG4gICAgLmRlZmVyKGQzLmNzdiwgXFxgLi9zcmMvc2NyaXB0cy9kYXRhL21hbGFyaWEuY3N2XFxgLCBmdW5jdGlvbihkKSB7IGlmIChkLnllYXI9PTIwMjApIHtkYXRhLnNldChkLm5hbWUsICtkLmNhc2VzKX07IH0pXG4gICAgLmF3YWl0KHJlYWR5KTtcbiAgXG4gIGZ1bmN0aW9uIHJlYWR5KGVycm9yLCB0b3BvKSB7XG4gIFxuICAgIGxldCBtb3VzZU92ZXIgPSBmdW5jdGlvbihkKSB7XG4gICAgICBkMy5zZWxlY3RBbGwoXCIuQ291bnRyeVwiKVxuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbigyMDApXG4gICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgLjUpXG4gICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oMjAwKVxuICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDEpXG4gICAgICAgIC5zdHlsZShcInN0cm9rZVwiLCBcImJsYWNrXCIpXG4gICAgfVxuICBcbiAgICBsZXQgbW91c2VMZWF2ZSA9IGZ1bmN0aW9uKGQpIHtcbiAgICAgIGQzLnNlbGVjdEFsbChcIi5Db3VudHJ5XCIpXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDIwMClcbiAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAuOClcbiAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbigyMDApXG4gICAgICAgIC5zdHlsZShcInN0cm9rZVwiLCBcInRyYW5zcGFyZW50XCIpXG4gICAgfVxuICBcbiAgICBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgLnNlbGVjdEFsbChcInBhdGhcIilcbiAgICAgIC5kYXRhKHRvcG8uZmVhdHVyZXMpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgLy8gZHJhdyBlYWNoIGNvdW50cnlcbiAgICAgICAgLmF0dHIoXCJkXCIsIGQzLmdlb1BhdGgoKVxuICAgICAgICAgIC5wcm9qZWN0aW9uKHByb2plY3Rpb24pXG4gICAgICAgIClcbiAgICAgICAgLy8gc2V0IHRoZSBjb2xvciBvZiBlYWNoIGNvdW50cnlcbiAgICAgICAgLmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgZC50b3RhbCA9IGRhdGEuZ2V0KGQuaWQpO1xuICAgICAgICAgIGlmIChkLnRvdGFsID09PSB1bmRlZmluZWQpIGQudG90YWwgPSAtMTtcbiAgICAgICAgICByZXR1cm4gY29sb3JTY2FsZShkLnRvdGFsKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnN0eWxlKFwic3Ryb2tlXCIsIFwidHJhbnNwYXJlbnRcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbihkKXsgcmV0dXJuIFwiQ291bnRyeVwiIH0gKVxuICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIC44KVxuICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgbW91c2VPdmVyIClcbiAgICAgICAgLm9uKFwibW91c2VsZWF2ZVwiLCBtb3VzZUxlYXZlIClcbiAgICAgIH1cblxuICAgICAgXG4gIDwvc2NyaXB0PlxuXG48L3N2Zz5gfVxuXG5mdW5jdGlvbiBodG1sU3RyaW5nMihjaG9zZW5EaXNlYXNlLGNob3NlblllYXIpIHtyZXR1cm4gYDxzdmcgaWQ9XCJteV9kYXRhdml6XCIgd2lkdGg9XCI4NTBcIiBoZWlnaHQ9XCI0NTBcIj5cbjxzY3JpcHQ+XG4gIFxuICBkMy5xdWV1ZSgpXG4gICAgLmRlZmVyKGQzLmpzb24sIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2hvbHR6eS9EMy1ncmFwaC1nYWxsZXJ5L21hc3Rlci9EQVRBL3dvcmxkLmdlb2pzb25cIilcbiAgICAuZGVmZXIoZDMuY3N2LCBcXGAuL3NyYy9zY3JpcHRzL2RhdGEvJHtjaG9zZW5EaXNlYXNlfS5jc3ZcXGAsIGZ1bmN0aW9uKGQpIHsgaWYgKGQueWVhcj09XFxgJHtjaG9zZW5ZZWFyfVxcYCkge2RhdGEuc2V0KGQubmFtZSwgK2QuY2FzZXMpfTsgfSlcbiAgICAuYXdhaXQocmVhZHkpO1xuICBcbiAgZnVuY3Rpb24gcmVhZHkoZXJyb3IsIHRvcG8pIHtcbiAgXG4gICAgbGV0IG1vdXNlT3ZlciA9IGZ1bmN0aW9uKGQpIHtcbiAgICAgIGQzLnNlbGVjdEFsbChcIi5Db3VudHJ5XCIpXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDIwMClcbiAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAuNSlcbiAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbigyMDApXG4gICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMSlcbiAgICAgICAgLnN0eWxlKFwic3Ryb2tlXCIsIFwiYmxhY2tcIilcbiAgICB9XG4gIFxuICAgIGxldCBtb3VzZUxlYXZlID0gZnVuY3Rpb24oZCkge1xuICAgICAgZDMuc2VsZWN0QWxsKFwiLkNvdW50cnlcIilcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oMjAwKVxuICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIC44KVxuICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDIwMClcbiAgICAgICAgLnN0eWxlKFwic3Ryb2tlXCIsIFwidHJhbnNwYXJlbnRcIilcbiAgICB9XG4gIFxuICAgIHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAuc2VsZWN0QWxsKFwicGF0aFwiKVxuICAgICAgLmRhdGEodG9wby5mZWF0dXJlcylcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAvLyBkcmF3IGVhY2ggY291bnRyeVxuICAgICAgICAuYXR0cihcImRcIiwgZDMuZ2VvUGF0aCgpXG4gICAgICAgICAgLnByb2plY3Rpb24ocHJvamVjdGlvbilcbiAgICAgICAgKVxuICAgICAgICAvLyBzZXQgdGhlIGNvbG9yIG9mIGVhY2ggY291bnRyeVxuICAgICAgICAuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICBkLnRvdGFsID0gZGF0YS5nZXQoZC5pZCk7XG4gICAgICAgICAgaWYgKGQudG90YWwgPT09IHVuZGVmaW5lZCkgZC50b3RhbCA9IC0xO1xuICAgICAgICAgIHJldHVybiBjb2xvclNjYWxlKGQudG90YWwpO1xuICAgICAgICB9KVxuICAgICAgICAuc3R5bGUoXCJzdHJva2VcIiwgXCJ0cmFuc3BhcmVudFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uKGQpeyByZXR1cm4gXCJDb3VudHJ5XCIgfSApXG4gICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgLjgpXG4gICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBtb3VzZU92ZXIgKVxuICAgICAgICAub24oXCJtb3VzZWxlYXZlXCIsIG1vdXNlTGVhdmUgKVxuICAgICAgfVxuXG4gICAgICBcbiAgPC9zY3JpcHQ+XG5cbjwvc3ZnPmB9XG5cblxudmFyIHNldElubmVySFRNTCA9IGZ1bmN0aW9uKGVsbSwgaHRtbCkge1xuICAgIGVsbS5pbm5lckhUTUwgPSBodG1sO1xuICAgIEFycmF5LmZyb20oZWxtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzY3JpcHRcIikpLmZvckVhY2goIG9sZFNjcmlwdCA9PiB7XG4gICAgICBjb25zdCBuZXdTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgQXJyYXkuZnJvbShvbGRTY3JpcHQuYXR0cmlidXRlcylcbiAgICAgICAgLmZvckVhY2goIGF0dHIgPT4gbmV3U2NyaXB0LnNldEF0dHJpYnV0ZShhdHRyLm5hbWUsIGF0dHIudmFsdWUpICk7XG4gICAgICBuZXdTY3JpcHQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUob2xkU2NyaXB0LmlubmVySFRNTCkpO1xuICAgICAgb2xkU2NyaXB0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld1NjcmlwdCwgb2xkU2NyaXB0KTtcbiAgICB9KTtcbiAgfVxuXG5jbGFzcyBNYXAge1xuICAgICAgICBjb25zdHJ1Y3RvcihlbGUpe1xuICAgICAgICAgICAgdGhpcy5lbGUgPSBlbGU7XG4gICAgICAgICAgICB0aGlzLnllYXIgPSAyMDIwO1xuICAgICAgICAgICAgdGhpcy5kaXNlYXNlID0gJ21hbGFyaWEnXG4gICAgICAgICAgICBzZXRJbm5lckhUTUwodGhpcy5lbGUsIGh0bWxTdHJpbmcoKSlcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZWxlKVxuICAgICAgICAgICAgLy8gdGhpcy5lbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcmVzZXRNYXAoZGlzZWFzZSx5ZWFyKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2VuZXJpYyBzdHJpbmdcIilcbiAgICAgICAgICAgIHNldElubmVySFRNTCh0aGlzLmVsZSwgaHRtbFN0cmluZzIoZGlzZWFzZSx5ZWFyKSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG9ua2V5ZG93biA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyAgICAgc3dpdGNoICh3aW5kb3cuZXZlbnQua2V5Q29kZSkge1xuICAgICAgICAvLyAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgIC8vICAgICAgICAgc2V0SW5uZXJIVE1MKHRoaXMuZWxlLCBodG1sU3RyaW5nMihcIm1hbGFyaWFcIiwyMDAwKSkgXG4gICAgICAgIC8vICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgIC8vICAgICAgICAgc2V0SW5uZXJIVE1MKHRoaXMuZWxlLCBodG1sU3RyaW5nMihcIm1hbGFyaWFcIiwyMDAwKSlcbiAgICAgICAgLy8gICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH07XG4gICAgfVxuXG5cbiAgICBleHBvcnQgZGVmYXVsdCBNYXA7XG5cbiJdLCJuYW1lcyI6WyJodG1sU3RyaW5nIiwiaHRtbFN0cmluZzIiLCJjaG9zZW5EaXNlYXNlIiwiY2hvc2VuWWVhciIsInNldElubmVySFRNTCIsImVsbSIsImh0bWwiLCJpbm5lckhUTUwiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIm9sZFNjcmlwdCIsIm5ld1NjcmlwdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImF0dHJpYnV0ZXMiLCJhdHRyIiwic2V0QXR0cmlidXRlIiwibmFtZSIsInZhbHVlIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsInBhcmVudE5vZGUiLCJyZXBsYWNlQ2hpbGQiLCJNYXAiLCJjb25zdHJ1Y3RvciIsImVsZSIsInllYXIiLCJkaXNlYXNlIiwicmVzZXRNYXAiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/map.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2dsb2JhbF9oZWFsdGgvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;