//Freeboard.io Widget to create a simple button which fires a REST POST Event to control a sensor

(function()
{	
	var buttonWidget = function (settings) {
		var self = this;
		var currentSettings = settings;
		
		var p=currentSettings.rest_path+'?'+currentSettings.rest_path.substring(1)+"=";
		var id=currentSettings.text_id;
		
		var myButton =$("<input type='button' style='width:75%;' onclick='getFunction()' value='"+currentSettings.button_name+"'/>");
		var myInput = $("<input type='number' style='width:70%;' id='"+id+"'/><br><br>")
		var myScript = $("<script>function getFunction() {var x='"+p+"'+$('#" +id+ "').val(); var xhttp = new XMLHttpRequest(); xhttp.open('GET',x, true); xhttp.send();}</script>");
		//TODO: implement payload

		function updateState() {
			//TODO: implement changes and re-render button

		}

		this.render = function (containerElement) {
			$(containerElement).append(myInput);
			$(containerElement).append(myButton);
			$(containerElement).append(myScript);
		}
				
		this.getHeight = function()
		{
			if(currentSettings.size == "big")
			{
				return 2;
			}
			else
			{
				return 1;
			}
		}
		
		this.onSettingsChanged = function (newSettings) {
			currentSettings = newSettings;
			updateState();	
		}

		this.onCalculatedValueChanged = function (settingName, newValue) {
         // no input so no change ever :-)
     }

     this.onDispose = function () {
     }

     /*this.getHeight = function () {    
     	return 1;
     }*/

     this.onSettingsChanged(settings);
 };

 freeboard.loadWidgetPlugin({
 	type_name: "inputNumber_widget",
 	display_name: "Input Number Widget",
 	settings: [
 	{
 		name: "button_name",
 		display_name: "Button Name",
 		type: "text"
 	},{
 		name: "rest_path",
 		display_name: "Path",
 		type: "text"
 	},
 	{
 		name: "text_id",
 		display_name: "Input id",
 		type: "text"
 	},
 	{
		name       : "size",
		display_name: "Size",
		type        : "option",
		options     : [
					{
						name : "Regular",
						value: "regular"
					},
					{
						name : "Big",
						value: "big"
					}
				]
			}
 	],
 	newInstance: function (settings, newInstanceCallback) {
 		newInstanceCallback(new buttonWidget(settings));
 	}
 });
}());	
