fetch('students.json')
.then(function(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    // Read the response as json.
    return response.json();

})
.then(function(responseAsJson, response) {
    // Do stuff with the JSON
    //console.log(responseAsJson); 
    //create object 
    var obj = responseAsJson.students;
    console.log(obj);
    //Try to create the HTML appendages
    //console.log(obj[0].firstName);
    var table = document.getElementById('studentBody');
    obj.forEach(function(obj) {
        //console.log(obj.firstName);
        //console.log(obj.lastName);
        var row = table.insertRow(-1)
        row.innerHTML = `
            <td>${obj.firstName}</td>
            <td>${obj.lastName}</td>
            <td>${obj.subject}</td>
        `;            
    });

})
.catch(function(error) {
    console.log('Looks like there was a problem: \n', error);
});