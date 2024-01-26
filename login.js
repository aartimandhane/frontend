function handlelogin(event){
	event.preventDefault();
	
	var username = document.getElementById("user").value;
	
	var password = document.getElementById("pass").value;
	
	if(username !== "admin" ){
		
		alert("Invalid Username");
		return;
    }
	if (password.length < 8 && !/[a-z]/.test(password) && !/[A-Z]/.test(password)) {
		
        alert("Password must be at least 8 characters long and contain both uppercase and lowercase letters.");
		return;
       
    }
	   alert("Login Successful !");

    window.location.href = "Dash.html";
	
}
document.getElementById("loginform").addEventListener("submit",handlelogin);

