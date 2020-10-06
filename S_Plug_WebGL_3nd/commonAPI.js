function iframe_autoresize(arg){

		

		console.log( "<p>screen.width : " + screen.width + "</p>" );
		console.log( "<p>screen.height : " + screen.height + "</p>" );
		console.log( "<p>screen.availWidth : " + screen.availWidth + "</p>" );
		console.log( "<p>screen.availHeight : " + screen.availHeight + "</p>" );
		console.log( "<p>screen.colorDepth : " + screen.colorDepth + "</p>" );
		console.log( "<p>screen.pixelDepth : " + screen.pixelDepth + "</p>" );
		//arg.height = screen.height;

		console.log("!!!!scrollHeight  " + eval(arg.name+".document.body.scrollHeight"));
		console.log("!!!!offsetHeight " + eval(arg.name+".document.body.offsetHeight"));
		console.log("!!!!clientHeight " + eval(arg.name+".document.body.clientHeight"));

		console.log("!!!!scrollHeight  " + eval(arg.name+".document.documentElement.scrollHeight"));
		console.log("!!!!offsetHeight " + eval(arg.name+".document.documentElement.offsetHeight"));
		console.log("!!!!clientHeight " + eval(arg.name+".document.documentElement.clientHeight"));
		arg.height = 0;
		arg.height = eval(arg.name+".document.body.scrollHeight");




	}
