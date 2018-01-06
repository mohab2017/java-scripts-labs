function verify_form(event)
{
    var sub=document.getElementById("verify_Form");
    var email=document.getElementById("element_2").value;
    var emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var password=document.getElementById("element_3").value;
    var radio1=document.getElementById("element_4_1").checked;
    var radio2=document.getElementById("element_4_2").checked;
    var checkedBox=document.getElementsByClassName("element checkbox");
    var checkedcounter=0;
    for(var i=0;i<checkedBox.length;i++) {
        if (checkedBox[i].checked == true) {
            checkedcounter++;
        }
    }
    var selectCountry=document.getElementById("element_6").value;
    var name=document.getElementById("element_1").value;
    var footer=document.getElementById("footer");
    footer.textContent=""
    footer.style.color='red'
    var submit=1;
        if (name == "") {
            footer.textContent += "name is required, "
            submit=0;
        }
        if (emailRegex.test(email) == false) {
            footer.textContent += "Unvalid Email, "
            submit=0;
        }
        if (password.length < 8) {
            footer.textContent += " Password must be 8 chars at least, "
            submit=0;
        }
        if (!(radio1 || radio2)) {
            footer.textContent += " Please select your gender, "
            submit=0;
        }
        if (checkedcounter < 2) {
            footer.textContent += " Select at least two sports, "
            submit=0;
        }
        if (selectCountry == "") {
            footer.textContent += "Select your country"
            submit=0;
        }
        if(submit==0){
            event.preventDefault();
        }


}
var btn=document.getElementById("verify_Form");
btn.addEventListener('click',verify_Form)
}