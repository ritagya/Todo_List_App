function makeList(){
	var item = document.getElementById('item').value;
	var list = document.getElementById('list');
	var listItem = document.createElement('li');
	list.appendChild(listItem);
	var text = document.createTextNode(item);
	listItem.appendChild(text);
}