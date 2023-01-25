function ReplaceData(id, newText) {
    document.getElementById(id).innerHTML = newText;
}

$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function (data) {
        console.log(data);

        document.getElementById("pic").src = data.results[0].picture.large;

        //reemplazo de valores por los datos aleatorios
        const fullName = data.results[0].name.first + " " + data.results[0].name.last;
        ReplaceData("nombre-txt", fullName);
        ReplaceData("phone", (`<i class="fa-solid fa-phone"></i> ` + data.results[0].cell));
        ReplaceData("mail", (`<i class="fa-solid fa-envelope"></i> ` + data.results[0].email));
        const location = data.results[0].location.street.name + " " + data.results[0].location.street.number + ", " + data.results[0].location.state + ", " + data.results[0].location.country;
        ReplaceData("address", (`<i class="fa-solid fa-location-pin"></i> ` + location));


    }
});

function popUp() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }