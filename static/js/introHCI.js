'use strict';
var buttonclicked_twice=false; 

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
*/



function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").addClass("active");
	});

	$("a.thumbnail").click(projectClick);
	$("button.btn btn-primary btn-lg").click(projectClick2)

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}

function projectClick(e){
	e.preventDefault();
	var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
	
	if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
	   console.log("if");
	 
	} 
	/*
	else {
       description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
	   buttonclicked_twice=true;
	   console.log("else");
	}*/

	else{
		console.log("hihihi");
		description.hide();

	}
	
	
}


function projectClick2(){

	var containTestJavaScript = document.getElementById("testjs");
	
	containTestJavaScript.innerHTML="You clicked!";

}