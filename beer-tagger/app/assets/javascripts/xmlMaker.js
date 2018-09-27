var xmlList = []; //list that contains all the xml file
var xmlContent = "";

//file_path


function createXml(selectionTagArr, file_path){
	let xmlFile = "<annotation> \n";

	xmlFile.concat(`<path>${file_path}</path> \n`)
	xmlFile.concat(`<size> \n <width>${selectionTagArr[0].width}</width> \n <height>${selectionTagArr[0].height}</height> \n </size> \n`)
	let parser = newDOMParser();
	var xmlDoc;

	for (var i = 0; i < SelectionTagArr.length(); i++) {
		xmlFile.concat(createXmlObj(SelectionTagArr[i]));
	}

	xmlFile.concat("\n </annotation>");
	xmlDoc = parser.parseFromString(xmlFile, "text/xml")

	
	xmlList.push(xmlDoc);
}


function createXmlObj(selectionTag){
	let objText = "<object> \n";

	objText.concat(`<name>${selectionTag.tag}</name> \n`);
	objText.concat("<pose>Unspecified</pose> \n <truncated>0</truncated> \n <difficult>0</difficult>");
	objText.concat(`<bndBox> \n <xmin>${selectionTag.top_left.x}</xmin> \n`);
	objText.concat(`<ymin>${selectiontTag.top_left.y}</ymin> \n`);
	objText.concat(`<xmax>${selectionTag.bot_right.x}</xmax> \n`);
	objText.concat(`<ymax>${selectionTag.bot_right.y}</ymax> \n </bndBox \n`);
	objText.concat(`</object> \n`);

	return objText;

}