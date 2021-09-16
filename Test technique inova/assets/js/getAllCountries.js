
    let urlCountries =  "https://restcountries.eu/rest/v2/all";
    let html ='';

    function getCountries() {

        fetch(urlCountries).then(resp => resp.json()).then(function(data){
            let countries = data.results;
            return countries.map(function(country) {

                let tab = `<a class="list-group-item list-group-item-action active" id="${country.name}" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">
                             <p>${country.alpha3Code}</p>
                             <p>${country.name}</p>
                        </a>`;

                 html += tab;

        })
        }); 
    }
   

    let groupList = document.querySelector('.list-group');
    groupList.innerHTML = html;
    
    getCountries();
   



   
   

