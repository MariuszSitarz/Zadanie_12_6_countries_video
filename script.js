/**
 * Created by Kuba9000 on 21.10.2017.
 */

$( document ).ready(function() {

    $('.main').fadeIn(500);

    $('input').on('keypress', function(e) {
        var code = e.keyCode;
        if(code == 13){
            searchCountries();
        }
    });

    $('#search').click(searchCountries);

    var url = 'https://restcountries.eu/rest/v1/name/';
    var countriesList = $('#countries');


    function searchCountries() {

        var countryName = $('#country-name').val();
        if(!countryName.length) countryName = 'Poland';
        $.ajax({
            url: url + countryName,
            method: 'GET',
            success: showCountriesList
        });

    }

    function showCountriesList(resp) {
        countriesList.empty();
        resp.forEach(function(item) {
            $('<li>').text('Country: ' + item.name).appendTo(countriesList).fadeIn(500);
            $('<li>').text('Capital: ' + item.capital).appendTo(countriesList).fadeIn(1000);
            $('<li>').text('Population: ' + item.population ).appendTo(countriesList).fadeIn(1500);
        });
    }


});