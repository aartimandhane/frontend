function handlesignup(event){
    event.preventDefault();
    
	
    var Password = document.getElementById("password").value;
    var ConfirmPassword = document.getElementById("confirmPassword").value;
	
    
    if (Password !== ConfirmPassword) {
        alert("Passwords do not match.");
		return;
        
    }

   if (Password.length < 8 && !/[a-z]/.test(Password) && !/[A-Z]/.test(Password)) {
        alert("Password must be at least 8 characters long and contain both uppercase and lowercase letters.");
		return;
       
    }
    alert("Signup successful! Redirecting to login page.");

    window.location.href = "Login.html";

}

document.getElementById("signupform").addEventListener("submit", handlesignup);



document.getElementById("loginlink1").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "Login.html";
});

