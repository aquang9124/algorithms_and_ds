let allCardsForm = document.getElementById('get-one-form');

allCardsForm.addEventListener("submit", handleGetAllCards);

function handleGetAllCards(evt) {
    evt.preventDefault();
    let cardName = $('#card-name').val();

    let config = {
        method: "GET",
        url: "api/card/" + cardName,
        success: function (res) {
            res = JSON.parse(res)[0];
            $('#target').attr('src', res.img);
        }
    }

    $.ajax(config);
}