var fs = require("fs");

var ws = fs.createWriteStream("2pac.txt");
ws.write("It Ain't Easy: A lyric by 2Pac \n\n");
ws.write("To my homies on the other side\n");
ws.end();
