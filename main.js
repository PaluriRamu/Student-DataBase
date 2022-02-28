function addStudent()
{
    var name= document.sample.name.value;
    var surname = document.sample.surname.value;
    var phone= document.sample.phone.value;
    var email= document.sample.email.value;
    var village= document.sample.village.value;
    var gender= document.sample.gender.value; 
    var check_values =''
    var checkboxes = document.querySelectorAll('input[name="language"]:checked')
    for (var checkbox of checkboxes){
        check_values +=  (checkbox.value + ',')
    }
    var date= document.sample.date.value;

    if(!name  || !surname || !phone || !email || !village || !gender || !check_values || !date ) {
        alert("Please fill all the boxes");
        return;
    }
    
    
    var tr= document.createElement('tr');
    

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));
    var td7 = tr.appendChild(document.createElement('td'));
    var td8 = tr.appendChild(document.createElement('td'));
    
    td1.innerHTML= name;
    td2.innerHTML= surname;
    td3.innerHTML= phone;
    td4.innerHTML= email;
    td5.innerHTML= village;
    td6.innerHTML= gender;
    td7.innerHTML=check_values;
    td8.innerHTML= date;
   

    document.getElementById("tbl").appendChild(tr);        
}

