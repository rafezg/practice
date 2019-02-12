function validate_form()

{
	if(hasblanks())
	{
		alert('one or more compulsory fields are blank/gitpractice');
		return false;
	}
	var given_data = document.getElementById("given");
	var family_data = document.getElementById("family");
	var phone_data = document.getElementById("phone");
	var email_data = document.getElementById("email");
	var postcode_data = document.getElementById("postcode");
	
	if(!all_alphabets(given_data) && !all_alphabets(family_data))
	{
		alert('Given and family name must have alphabet characters only');
		return false;
	}
	
	if(!correct_number(phone_data))
	{
		alert('Phone should contain only numeric numbers');
		return false;
	}
	
	if(!correct_email(email_data))
	{
		alert("You have entered an invalid email address!");
		return false;
	}
	
	if(!correct_postcode(postcode_data))
	{
		alert("You have entered an invalid postcode!");
		return false;
	}
	return true;
}

function hasblanks()
{
	var compulsory_fields = new Array("given","family","phone","email","postcode");
	for(i=0; i< compulsory_fields.length; i++)
	{
		var form_field = document.getElementById(compulsory_fields[i]);
		if(form_field.value == "")
			return true;
	}
	return false;
}

function all_alphabets(userInput)  
{   
	var letters = /^[A-Za-z]+$/;  
	if(userInput.value.match(letters))  
	{  
		return true;  
	}  
	else  
	{	  
		  return false;  
	}  
}

function correct_number(userInput)  
{   
	var numbers = /^[0-9]{10}$/;  
	if(userInput.value.match(numbers))  
	{  
		return true;  
	}  
	else  
	{   
		return false;  
	}  
} 

function correct_email(userInput)  
{  
	var format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
	if(userInput.value.match(format))  
	{  
		return true;  
	}  
	else  
	{   
		return false;  
	}  
} 

function correct_postcode(userInput)  
{  
	var format = /^[0-9]{4}$/;  
	if(userInput.value.match(format))  
	{  
		return true;  
	}  
	else  
	{   
		return false;  
	}  
} 
