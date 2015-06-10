$(document).ready(function(){
	
document.body.onmousedown = function() { return false; } //so page is unselectable

	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	var w = $("#canvas").width();
	var h = $("#canvas").height();
	var mx, my;

	//var picture = new Image();

	var myArray = [];
	
	var num = Math.floor(Math.random()*3);
	
	////////////////////////////////
	// What is an Array?	     //
	//////////////////////////////
	/*
	An ARRAY is a variable that can hold more than 1 value

	It is like a list of regular variables, where all the value are of the same type.

	Example: Storing 36 grade marks, or storing a list of Facebook contacts

	The name of the list is the array variable's name, ex friendList



	Each individual value (in this case contact name) is refered to using the:

	- Array name (like variables you can have more than 1 array)

	AND

	- An index number to get a single value from the list.


	Using the array and an index lets you work with each value on the list the same
	way we always did with regular single value variables.

	*/



	////////////////////////////////
	// Array Variable Declaration //
	///////////////////////////////

	//var myArray = [];

	
	

	//	OR

	//var myOtherArray = new Array();

	//Both declarations do the same thing

	////////////
	//  NOTE  //
	////////////
	/*
		You can access each individual value using the [] brackets.
			Example:
		
			myArray[3] = "Cookie Monster";
			ctx.fillText(myArray[3], 100, 100);

		It works just like any other variable (pic1, pic2, etc)
		It is just very good at handling lists of information.

		Javascript has a small quirk that other languages don't have.

		You don't have to specify how many elements you want in your array
		You can just keep adding values and it will be alright
			Example: 
		
			myArray = new Array();
			myArray[9] = "Stevie";  <-- thats the 10th value, but what 
							about the first 9?

			How does it know to have room for 10 values?
			-> When you put in [9] it went ahead and made room for the 
				previous values.  Room in memory it didn't have 
				before.

		Arrays in Javascript can rebuild themselves on the go, this lets us
		manipulate data on a more general level.  We let Javascript do the
		detail work.

	*/


	/////////////////////////////////
	////////////////////////////////
	////////	GAME INIT
	///////	Runs this code right away, as soon as the page loads.
	//////	Use this code to get everything in order before your game starts 
	//////////////////////////////
	/////////////////////////////
	function init()
	{
	
	//////////
	///STATE VARIABLES
	
	//picture.src ="Pamplemousse.png";

	
	//Arrays
	
	
	window.alert ("Can you think of 10 verbs? Enter one in each box then!"); //first prompt - ask for 10 verbs
	
	myArray[0] = prompt ("One." + "");
	myArray[1] = prompt ("Two." + "");
	myArray[2] = prompt ("Three." + "");
	myArray[3] = prompt ("Four." + "");
	myArray[4] = prompt ("Five." + "");
	myArray[5] = prompt ("Six." + "");
	myArray[6] = prompt ("Seven." + "");
	myArray[7] = prompt ("Eight." + "");
	myArray[8] = prompt ("Nine." + "");
	myArray[9] = prompt ("Ten." + "");
	
	window.alert ("You are done!"); //last prompt
	
	
	
	
	//Another way to prompt
	
	//Prompt - Ask for 10 verbs
	//for (var i=0; i< 10; i++) {
	//	myArray[i] = prompt ("Verbs", "");	
	//	}
	//	alert (myArray[Math.floor(Math.random()*myArray.length)]);

	//Class Notes - Loop
	// myStuff.length
	//	for(var 1 = 0; 1 < 6; i++){
	//		alert (myStuff[1]);
	
	
	
	//myArray[0] = 16;		//The first value in the list
	//myArray[1] = 25;		//The 
	//myArray.push(31);		//What did this do?


	//Example #2
/*
	myArray[0] = 12;	//The first value in the array.
	myArray[1] = -6;	//The second value in the array.
	myArray[4] = 5;		//You can even skip a row, its value would just be 
						//undefined.
*/
	

	//////////////////////////////////
	///	To add Elements	///
	/////////////////////////////////

//Example # 3
/*
	myArray.push(12);

	myArray.push(5);

	myArray.push(3);

	myArray.push(-8);
*/
	//////////////////////////////////
	///	To use different Types	///
	/////////////////////////////////
	//Example # 4
/*
	myArray.push("Steve");

	myArray.push("Guzy");

	myArray.push("Bilbo");

	myArray.push("Zombie Face");

*/



	//////////////////////
	///GAME ENGINE START
	//	This starts your game/program
	//	"paint is the piece of code that runs over and over again, so put all the stuff you want to draw in here
	//	"60" sets how fast things should go
	//	Once you choose a good speed for your program, you will never need to update this file ever again.

	if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(paint, 60);
	}

	init();	
		for(var i=0;i<anArray.length;i++){ //fill an array with random numbers
			anArray[i] = randomFill();
		}
		
		
		
		function rand5(){ //generate random
			return 1 + Math.random() * 4;
		}

		function rand7(){
			return 5 + rand5() / 5 * 2;
		}

	
	
	///////////////////////////////////////////////////////
	//////////////////////////////////////////////////////
	////////	Main Game Engine
	////////////////////////////////////////////////////
	///////////////////////////////////////////////////
	function paint()
	{
		
		ctx.fillStyle='black';
		ctx.fillRect(0,0,w,h);
		
		ctx.fillStyle='white';
		
		ctx.font = "20pt Stencil";
		ctx.fillText("SENTENCE BUILDER", 200, 40);
		
		//Verbs Display
		ctx.font = "15pt Stencil";
		ctx.fillText("Your Verbs", 50, 70);
		ctx.fillText(myArray[0], 200, 70); //1
		ctx.fillText(myArray[1], 200, 90); //2
		ctx.fillText(myArray[2], 200, 110); //3
		ctx.fillText(myArray[3], 200, 130); //4
		ctx.fillText(myArray[4], 200, 150); //5
		ctx.fillText(myArray[5], 200, 170); //6
		ctx.fillText(myArray[6], 200, 190); //7
		ctx.fillText(myArray[7], 200, 210); //8
		ctx.fillText(myArray[8], 200, 230); //9
		ctx.fillText(myArray[9], 200, 250); //10
		
		//Madlib Stories
		if (num == 0) {
			ctx.font = "10pt Stencil";
			ctx.fillText("To " + myArray[0] + " or not to " + myArray[0] + ": that is the question:", 50,300);
			ctx.fillText("Whether 'tis nobler in the mind to " + myArray[8], 50,315);
			ctx.fillText("The slings and arrows of outrageous fortune", 50,330);
			ctx.fillText("Or to " + myArray[4] + " arms against a sea of trouble,", 50,345);
			ctx.fillText("And by opposing " + myArray[5] + " them. To " + myArray[2] + "- to " + myArray[6] + "-", 50,360);
			ctx.fillText("-excerpt from William Shakespeare's Hamlet (Act 3 Scene 1)", 50,375);
				
		}else if (num == 1) {
			ctx.font = "10pt Stencil";
			ctx.fillText("[The unicorn] stays on a shelf with some horses", 50,300);
			ctx.fillText("that don't " + myArray[1] + " horns and all of them seem", 50,320);
			ctx.fillText("to " + myArray[2] + " nicely together.", 50,340);
			ctx.fillText("-excerpt from Tennessee Williams's The Glass Menagerie (Scene 7)", 50,360);
		
		}else if (num == 2) {
			ctx.font = "10pt Stencil";
			ctx.fillText("One day, I " + myArray[4] + " on becoming a coquelicot because it " + myArray[9], 50,300);
		
		}
		
		

		if(myArray.length == 1){
			ctx.fillText("index", 10, 70);
			ctx.fillText("value", 180, 70);
			
			
			
		}
		

		//////////////////////////////////////////////////////////////////////////
		//Using a FOR loop to go through the entire array in one piece of code
		/////////////////////////////////////////////////////////////////////////
		//Example # 5


		for (var i = 0; i < myArray.length; i++){

			ctx.drawImage(box, 70, 50 + 75 * i, 30, 30);
			ctx.font = "12pt Stencil";
			ctx.fillText(i, 80,70 + 75 * i);
			ctx.drawImage(box, 100,50 + 75 * i, 75, 75);

			ctx.font = "18pt Stencil";
			ctx.fillText(myArray[i], 110,80 + 75 * i);

		}

			

		
	}////////////////////////////////////////////////////////////////////////////////END PAINT/ GAME ENGINE
	

	
	
	////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////
	/////	MOUSE LISTENER 
	//////////////////////////////////////////////////////
	/////////////////////////////////////////////////////
	





	/////////////////
	// Mouse Click
	///////////////
	canvas.addEventListener('click', function (evt){
		
		
	      
	}, false);

	
	

	canvas.addEventListener ('mouseout', function(){pause = true;}, false);
	canvas.addEventListener ('mouseover', function(){pause = false;}, false);

      	canvas.addEventListener('mousemove', function(evt) {
        	var mousePos = getMousePos(canvas, evt);

		mx = mousePos.x;
		my = mousePos.y;

      	}, false);


	function getMousePos(canvas, evt) 
	{
	        var rect = canvas.getBoundingClientRect();
        	return {
          		x: evt.clientX - rect.left,
          		y: evt.clientY - rect.top
        		};
      	}
      

	///////////////////////////////////
	//////////////////////////////////
	////////	KEY BOARD INPUT
	////////////////////////////////


	

	window.addEventListener('keydown', function(evt){
		var key = evt.keyCode;
		
	//p 80
	//r 82
	//1 49
	//2 50
	//3 51
	
		
	}, false);




})

/*
//Class Notes - Loop (April 20, 2015)

	var name1, name2, name3 = 0;
	var skit = 20000;
	
	while (skit>0){
		skit -= 1 //Eat a skittle
		
		r = Math.flooor(Math.random()*3); //0 1 2 3
		handing = Math.flooor(Math.random()*10);
		
		if(r == 0){
			name1 = 1;
		}else if(r == 1){
			name2 = 1;
		}else if(r == 2){
			name3 = 1;
	}skit += handing
	
	}

	 var password = "OBAMA";
	 var input = prompt("", 100,100);

	while(input !=password)
		input = prompt("")

//or

	do{
		input = prompt("", 100,100);
	}while(input !=password)

*/




























