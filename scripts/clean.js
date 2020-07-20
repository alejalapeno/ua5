const fse = require('fs-extra');

let toClean = ['./.next/'];

toClean.forEach((fileOrDirectory) => {
	fse.remove(fileOrDirectory);
});
