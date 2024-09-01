'use strict'

// xml http request


let request = new XMLHttpRequest ();
request.open ('GET', 'https://reqres.in/api/unknown');

request.addEventListener ('load', function () {
    console.log(this.response);
    let response = this.response;
    let responseJs = JSON.parse(response);
    console.log(responseJs);

    let ulEl = document.createElement('ul');
    responseJs.data.forEach( item => {
        let li = document.createElement('li');
        li.textContent = item.name + item.color;

        ulEl.appendChild(li);
    })
    document.getElementById('api-users').appendChild(ulEl);
});

request.send();


request.addEventListener('error', function () {
    let pD = document.createElement('p');
    pD.textContent = 'Server Error';

    document.getElementById('api-users').appendChild(pD);

    
});



// fetch


fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET'
})
.then(function (response){
    return response.json();
})
.then(function (responseData) {
    console.log(responseData);
    let ul = document.createElement('ul');
    responseData.data.forEach ( item => {
        let li = document.createElement('li');
        li.textContent = `${item.company.name}`;
        ul.appendChild('li');

    });
    document.getElementById('api-second').appendChild(ul);
})
.catch(function(error) {
    console.log(error);
    
});