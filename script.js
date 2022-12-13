
var TRange = null;
function findString(str) {
	if (parseInt(navigator.appVersion) < 4) return;
	var strFound;
	if (window.find) {


		strFound = self.find(str);
		if (strFound && self.getSelection && !self.getSelection().anchorNode) {
			strFound = self.find(str)
		}
		if (!strFound) {
			strFound = self.find(str, 0, 1)
			while (self.find(str, 0, 1)) continue
		}
	}
	else if (navigator.appName.indexOf("Microsoft") != -1) {



		if (TRange != null) {
			TRange.collapse(false)
			strFound = TRange.findText(str)
			if (strFound) TRange.select()
		}
		if (TRange == null || strFound == 0) {
			TRange = self.document.body.createTextRange()
			strFound = TRange.findText(str)
			if (strFound) TRange.select()
		}
	}
	else if (navigator.appName == "Opera") {
		alert("Opera browsers not supported, sorry...")
		return;
	}
	if (!strFound) alert("This word '" + str + "' not found!")
	return;
}







$(".change").on("click", function () {
	if ($("body").hasClass("dark")) {
		$("body").removeClass("dark");
		$(".change").text("🌙");
	} else {
		$("body").addClass("dark");
		$(".change").text("☀️");
	}
});



function openNav() {
	document.getElementById("mySidebar").style.width = "200px";
	document.getElementById("main").style.marginLeft = "200px";
  }
  
 
  function closeNav() {
	document.getElementById("mySidebar").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
  }
