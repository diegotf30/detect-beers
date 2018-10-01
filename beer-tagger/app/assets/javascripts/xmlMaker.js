var xmlContent = "";

function download(text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', 'export.xml');

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function createXml(){
	let xmlFile = "<annotation> \n";

	xmlFile = xmlFile.concat(`<path>${file_path}</path> \n`)
	xmlFile = xmlFile.concat(`<size> \n\t<width>${selections[0].width}</width> \n\t<height>${selections[0].height}</height>\n</size> \n`)
	console.log(selections);
	for (var i = 0; i < selections.length; i++) {
		xmlFile = xmlFile.concat(createXmlObj(selections[i]));
	}

	xmlFile = xmlFile.concat("\n </annotation>");

	download(xmlFile);
}


function createXmlObj(selectionTag){
	let objText = "<object> \n";

	objText= objText.concat(`\t<name>${selectionTag.tag}</name>\n`);
	objText= objText.concat("\t<pose>Unspecified</pose>\n\t<truncated>0</truncated>\n\t<difficult>0</difficult>\n");
	objText= objText.concat(`\t<bndBox>\n\t\t<xmin>${selectionTag.top_left.x}</xmin>\n`);
	objText= objText.concat(`\t\t<ymin>${selectionTag.top_left.y}</ymin> \n`);
	objText= objText.concat(`\t\t<xmax>${selectionTag.bot_right.x}</xmax> \n`);
	objText= objText.concat(`\t\t<ymax>${selectionTag.bot_right.y}</ymax> \n\t</bndBox> \n`);
	objText= objText.concat(`</object> \n\n`);

	return objText;

}