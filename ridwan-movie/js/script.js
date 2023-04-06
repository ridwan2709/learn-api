const apikey = '1d718e52';
const list = $('#movie-list');

function viewMovies() {
    let title = $('#search-input').val();
    list.html('');
    $('#judul').html(title);
    $.ajax({
        type: "get",
        url: "http://omdbapi.com",
        data: {
            'apikey' : apikey,
            's' : title
        },
        dataType: "json",
        success: function (response) {
            let movies = response.Search;
            if (response.Response == 'False') {
                list.append(`<h1 class="text-center"> Film tidak ditemukan </h1>`);
            } else {
                $.each(movies, function (i, data) { 
                    list.append(`
                        <div class="card m-3" style="width: 18rem;">
                            <img src="`+data.Poster+`" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">`+data.Title+`</h5>
                                <p class="card-text">`+data.Year+`</p>
                                <a href="#" class="card-link">See Detail</a>
                            </div>
                        </div>
                    `);
                });

            $('#search-input').val('');
            }
        }
    });
}

$('#search-button').on('click', function () {
    viewMovies();
});

$('#search-input').on('keyup', function (e) {
    if (e.which === 13) {
        viewMovies();
    }
});