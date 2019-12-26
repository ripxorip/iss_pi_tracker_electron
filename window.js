$(document).ready(function (){
    $("#tester").text("Jennifer")
    document.body.style.cursor = "none";
});

const { ipcRenderer } = require('electron');
ipcRenderer.on('report', function(event, message) {
    distStr = message.distStr
    issLatStr = message.issLatStr
    issLonStr = message.issLonStr
    nextStr = message.nextStr
    hdgLetter = message.hdgLetter
    altHdgStr = message.altHdgStr
    time_to = message.time_to

    $("#distStr").text(distStr)
    $("#issLatStr").text(issLatStr)
    $("#issLonStr").text(issLonStr)
    $("#nextStr").text(nextStr)
    $("#altHdgStr").text(altHdgStr)
    $("#time_to").text(time_to)
});
