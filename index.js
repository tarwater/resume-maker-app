var remote = require('electron').remote;
var fs = require('fs');

function save() {
    remote.getCurrentWindow().webContents.printToPDF({
        pageSize: "A4", // was "A3"
        printBackground: true,
        marginsType: 1
    }, function (err, data) {
        fs.writeFile('holt_resume.pdf', data, function (err) {
            if (err) {
                alert("err");
            }
            else {
                alert("pdf saved");
            }
        })
    })
}
window.addEventListener('keydown', function (e) {
    if (e.keyCode === 80) {
        save();
    }
})
