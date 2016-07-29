const {BrowserWindow, dialog} = require('electron');
const fs = require('fs');
const path = require('path');

function openDir() {
  return new Promise((done) => {
    const focused = BrowserWindow.getFocusedWindow();
    dialog.showOpenDialog(focused, {
      properties: ['openDirectory']
    }, (args) => {
      done(args);
    });
  });
}

function openFile() {
  return new Promise((done) => {
    const focused = BrowserWindow.getFocusedWindow();
    dialog.showOpenDialog(focused, {
      properties: ['openFile'],
      filters: [
        {name: 'Movies', extensions: ['flv']},
      ]
    }, (args) => {
      done(args);
    });
  });
}

function extract(src, out) {
  const fs = require('fs');
  const path = require('path');
  const flv = require('flv');
  return new Promise((done) => {
    const file = fs.createReadStream(src);
    const decoder = new flv.Decoder();
    const name = src.substring(src.lastIndexOf('/'), src.lastIndexOf('.')) + 'mp3';
    decoder.on('audio', (audio) => {
      audio.pipe(fs.createWriteStream(path.join(out, name)));
      audio.on('end', done);
    })
    file.pipe(decoder);
  });
}

module.exports = {
  openDir: openDir,
  openFile: openFile,
  extract: extract
};