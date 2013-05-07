/*
* Copyright 2010-2011 Research In Motion Limited.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

function dataOnTheFly_initialLoad(element) {
	// I'm just doing a setTimeout to mimic processing some data
	// in a background worker thread
	  if (!blackberry.system.hasDataCoverage()) {
	setTimeout(no_connection,500);
  } else {
	setTimeout(dataOnTheFly_loadAfterTimeout,2000);
}
}
function no_connection(){
	var message = "No Data Connection found\n";
		var buttons = new Array("Close");
		var ops = { title : "Data Connection",	size : blackberry.ui.dialog.SIZE_SMALL, position : blackberry.ui.dialog.LOC_CENTER };
		blackberry.ui.dialog.customAskAsync(message, buttons, ops);
		bb.popScreen();
}
function dataOnTheFly_loadAfterTimeout() {
	document.getElementById('waiting').style.display = 'none';
	document.getElementById('update_tab').style.display = 'block';
	dataOnTheFly_addListItem();
}

function dataOnTheFly_addListItem() {
	//var listItem, container, dataList = document.getElementById('dataList');
	// Create our list item
	//listItem = document.createElement('div');
	//listItem.setAttribute('data-bb-type', 'item');
	//listItem.setAttribute('data-bb-img', 'images/icons/icon11.png');
	//listItem.setAttribute('data-bb-title', 'Title ');
	//listItem.innerHTML = 'My description';
	// Create a dummy container
	//container = document.createElement('div');
	//container.appendChild(listItem);
	// Apply the styling
	//bb.imageList.apply([container]);
	// Append the item
	//dataList.appendChild(container.firstChild);
	// re-compute the scrolling area

		var listItem, container, dataList = document.getElementById('dataList');
	// Create our list item
	listItem = document.createElement('div');
	listItem.setAttribute('id', 'updates2');
	listItem.setAttribute('data-bb-type', 'item');
	listItem.setAttribute('data-bb-img', 'images/custom/ic_update.png');
	listItem.setAttribute('data-bb-title', 'Update Available');
	//listItem.setAttribute('onclick', 'alert("open browser")');
	listItem.innerHTML = data;
	// Create a dummy container
	container = document.createElement('div');
	container.appendChild(listItem);
	// Apply the styling
	bb.imageList.apply([container]);
	// Append the item
	dataList.appendChild(container.firstChild);
	// re-compute the scrolling area


	if (bb.scroller) {
		bb.scroller.refresh();
	}
}
