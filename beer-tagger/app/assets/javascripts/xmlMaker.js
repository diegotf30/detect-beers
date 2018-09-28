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
	xmlFile.concat(`<size> \n <width>${selections[0].width}</width> \n <height>${selections[0].height}</height> \n </size> \n`)

	for (var i = 0; i < selections.length; i++) {
		xmlFile.concat(createXmlObj(selections[i]));
	}

	xmlFile = xmlFile.concat("\n </annotation>");

	download(xmlFile);
}


function createXmlObj(selectionTag){
	let objText = "<object> \n";

	objText= objText.concat(`<name>${selectionTag.tag}</name> \n`);
	objText= objText.concat("<pose>Unspecified</pose> \n <truncated>0</truncated> \n <difficult>0</difficult>");
	objText= objText.concat(`<bndBox> \n <xmin>${selectionTag.top_left.x}</xmin> \n`);
	objText= objText.concat(`<ymin>${selectionTag.top_left.y}</ymin> \n`);
	objText= objText.concat(`<xmax>${selectionTag.bot_right.x}</xmax> \n`);
	objText= objText.concat(`<ymax>${selectionTag.bot_right.y}</ymax> \n </bndBox \n`);
	objText= objText.concat(`</object> \n`);

	return objText;

}