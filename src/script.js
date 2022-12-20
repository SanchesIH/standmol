const electron = require("electron");
const ipc = electron.ipcRenderer;

// listener for min button
const togmin = document.getElementById("min-btn");
togmin.addEventListener("click", function() {
    ipc.send("min");
});

// listener for close button
const togclose = document.getElementById("close-btn");
togclose.addEventListener("click", function() {
    ipc.send("close");
});

// listener for know-more button
const togknwmr = document.getElementById("know-more-btn");
togknwmr.addEventListener("click", function() {
    ipc.send("know-more-btn-click");
});

const togknwmrtxt = document.getElementById("know-more-txt");
togknwmrtxt.addEventListener("click", function() {
    ipc.send("know-more-btn-click");
});