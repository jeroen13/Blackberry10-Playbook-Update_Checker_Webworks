function update(index) // execute this after the user selected an option: 'yes' or 'no'
{
   if (index === 0) {
   	if (change_log_check = "yes"){
   	//things to do when the user presses 'YES', like opening the appworld ->
 	blackberry.invoke.invoke(blackberry.invoke.APP_APPWORLD, 'your_app_id');
	//show changelog if available. the changelog variable is specified in the web_service.js
		var log = change_log ; //change_log variable
		var ok = new Array("Ok");
		var options = { title : "Changelog",	size : blackberry.ui.dialog.SIZE_MEDIUM, position : blackberry.ui.dialog.LOC_CENTER };
		blackberry.ui.dialog.customAskAsync(log, ok, popup, options); 
   }
}
   if (index === 1) {
   	//this to do when the user clicks 'no'
   	//like saving the user selected no: Localstorage.setItem('Update', 'No');
   	   	setTimeout(notify, 1000); // notify popup
   }
}
function popup(show){
	if (show === 0){
		   	setTimeout(notify, 1000);
	}
}
function check() {

	   if (data > blackberry.app.version) // the blackberry.app.version is the version="1.0.0.0" specified in the config.xml
	   {                
		var message = "A newer version is available.\n"; //message
		message += "Would you like to upgrade?"; // message part 2
		var buttons = new Array("Yes", "No");
		var ops = { title : "Update Available",	size : blackberry.ui.dialog.SIZE_SMALL, position : blackberry.ui.dialog.LOC_CENTER };
		blackberry.ui.dialog.customAskAsync(message, buttons, update, ops);
	   }
	   else {
	   	setTimeout(notify, 1000); // no updates found ? check for notifications
	   	// 1000 = 1 sec || 2000 = 2 secs etc.
	   }
}
function notify(){
	if (notify = 'yes') //if notify is 'yes', execute the codes below. 
	   {                
		var message = notification_message ; //notification_message is displayed and can be modified in the updates.js
		var buttons = new Array("Ok"); //button
		var ops = { title : "Notification",	size : blackberry.ui.dialog.SIZE_SMALL, position : blackberry.ui.dialog.LOC_CENTER }; // button title, size and position
		blackberry.ui.dialog.customAskAsync(message, buttons, ops); //Dialog box
	   } 
}

function no_updates(){
	document.getElementById('no_updates').style.display = 'block';
}
function update_yes(){
	document.getElementById('no_updates').style.display = 'none';
}
function no_updates_remove(){
	document.getElementById('updates2').style.display = 'none';
}

function update_screen(){

	if (data > blackberry.app.version) // the blackberry.app.version is the version="1.0.0.0" specified in the config.xml
	   {                
		//alert('update!')
		setTimeout(function(){
			var message = "A newer version is available.\n"; //message
		message += "Would you like to upgrade?"; // message part 2
		var buttons = new Array("Yes", "No");
		var ops = { title : "Update Available",	size : blackberry.ui.dialog.SIZE_SMALL, position : blackberry.ui.dialog.LOC_CENTER };
		blackberry.ui.dialog.customAskAsync(message, buttons, update, ops);
	},7000)
		setTimeout(update_yes, 505);
	   }


	   	else if (data = blackberry.app.version) // the blackberry.app.version is the version="1.0.0.0" specified in the config.xml
	   {                
		setTimeout(no_updates, 500);
		setTimeout(no_updates_remove, 2005);
	   }
	   	else if (data < blackberry.app.version) // the blackberry.app.version is the version="1.0.0.0" specified in the config.xml
	   {                
		setTimeout(no_updates, 500);
		setTimeout(no_updates_remove, 2005);
	   }
}

	if (!blackberry.system.hasDataCoverage()){
	if (data = null){
		var data = 0 ;
		document.getElementById('no_updates').style.display = 'none';
	}
	else { document.getElementById('no_updates').style.display = 'none';}
	}