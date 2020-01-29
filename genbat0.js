var fs = require('fs');
var path = require('path')

var repos = [
"https://github.com/mrdiep/popcorntime-aria2-downloader.git",
"https://github.com/mrdiep/samsung-tv-amlich.git",
"https://github.com/mrdiep/CmdExtensions.git",
"https://github.com/mrdiep/DualSubsenceDownloader.git",
"https://github.com/mrdiep/hotel-management-app.git",
"https://github.com/mrdiep/excel-reader.git",
"https://github.com/mrdiep/PopcornTimeGetAll.git",
"https://github.com/mrdiep/my-algorithm.git",
"https://github.com/mrdiep/ExpressJs-DynamicMongoDb.git",
"https://github.com/mrdiep/peerjs-server.git",
"https://github.com/mrdiep/FirstStage.git",
"https://github.com/mrdiep/upload-nodejs.git",
"https://github.com/mrdiep/c-app.git"
]
var code = '';

for (var repo of repos) {
	var folder = path.basename(repo).split('.')[0];

	code += ("\r\n git clone " + repo);
	code += ("\r\n cd " + folder);
	code += ('\r\n RMDIR /Q/S .git')
	code += ('\r\n git init')
	code += ('\r\n git add .')
	code += ('\r\n git commit -m "Override transaction history for ' + folder)
	code += ('\r\n git remote add origin ' + repo)
	code += ('\r\n git push --set-upstream origin master -f')
	code += ('\r\n cd..\r\n')
	code += ("\r\n .......................................");
} 

fs.writeFileSync('C:\\Users\\Diep\\Desktop\\GitHUb\\run.bat', code)
console.log(code)