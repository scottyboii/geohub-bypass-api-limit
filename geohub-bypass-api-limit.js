// ==UserScript==
// @name         GeoHub Bypass API Limit
// @version      v1.0.0
// @description  Bypass GeoHub Google Maps API Limit
// @author       ScottB
// @match        https://www.geohub.gg/game/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geohub.gg
// @require      https://cdn.jsdelivr.net/gh/CoeJoder/waitForKeyElements.js@v1.2/waitForKeyElements.js
// @require      https://code.jquery.com/jquery-3.7.1.min.js
// @grant        GM_addStyle
// ==/UserScript==
/*- The @grant directive is needed to work around a major design
    change introduced in GM 1.0. It restores the sandbox.

    If in Tampermonkey, use "// @unwrap" to enable sandbox instead.
*/
/* globals jQuery, $, waitForKeyElements */

waitForKeyElements(".dwVGLo", createSwitch, true);

var clicked = false;
var firstRun = true;

function createSwitch() {
    var outerDiv = document.createElement("div");
    outerDiv.className = "infoSection";
    var labelDiv = document.createElement("div");
    labelDiv.className = "label";
    labelDiv.innerHTML = "<span> Inverter </span>"
    var valueDiv = document.createElement("div");
    valueDiv.className = "value";
    var invertButton = document.createElement("button");
    invertButton.textContent = "Invert!";
    invertButton.addEventListener('click', () => {
        if (clicked) {
            clicked = false;
            document.getElementsByClassName("gm-style")[1].childNodes[1].childNodes[0].childNodes[8].style.webkitFilter = "invert(0%)";
        } else {
            clicked = true;
            document.getElementsByClassName("gm-style")[1].childNodes[1].childNodes[0].childNodes[8].style.webkitFilter = "invert(100%)";
            if (firstRun) {
                document.getElementsByClassName("dismissButton")[0].click();
                document.getElementsByClassName("dismissButton")[0].click();
                document.getElementsByClassName("gm-style")[1].childNodes[1].childNodes[0].childNodes[8].childNodes[0].innerHTML = ""
            }
        }
    });
    valueDiv.appendChild(invertButton);
    outerDiv.appendChild(labelDiv);
    outerDiv.appendChild(valueDiv);
    document.getElementsByClassName("dwVGLo")[0].appendChild(outerDiv);
};
