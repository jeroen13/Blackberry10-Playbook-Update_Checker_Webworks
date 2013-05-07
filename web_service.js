//* Copyright Jeroen Kemna.
//*
//* Licensed under the Apache License, Version 2.0 (the "License");
//* you may not use this file except in compliance with the License.
//* You may obtain a copy of the License at
//*
//* http://www.apache.org/licenses/LICENSE-2.0
//*
//* Unless required by applicable law or agreed to in writing, software
//* distributed under the License is distributed on an "AS IS" BASIS,
//* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//* See the License for the specific language governing permissions and
//* limitations under the License.




//*** THIS FILE SHOULD BE UPLOADED ON A WEBSERVER ***\\
// when uploaded on a webserver, change the path of the 'web_service.js' to 'http://yourdomain.com/folder/web_service.js'

var data = '1.0.0.1' ; // new app version


var notify = "yes" ; // 'yes' = NOTIFICATIONS ON, 'no' = NOTIFICATIONS OFF
//dont write 'YES', but 'yes' WITHOUT THE CAPITAL LETTERS
var notification_message = "notify \n" ; // here your message

//changelog settings
var change_log_check = "no" ; // yes = changelog on
var change_log = "* Improved Stability \n * Bug fixes" ; // changelog message
// the \n is used the create an 'enter'


//********* CODES TO BE USED IN THE MESSAGE ***********\\
//														\\
// 		DON'T USE " " OR ' '							\\
//		FOR AN 'ENTER' USE \n LIKE:                     \\
// 		"mymessage\nsecondline"							\\
// 		YOU ONLY CAN USE THE '\n'						\\ 
//		ONCE IN THE WHOLE MESSAGE 						\\
//														\\
//******************************************************\\
