function tampilkanSemuaMenu() {
    $.getJSON("data/pizza.json", function(result) {
        let menu = result.menu;
        $.each(menu, function(i, data) {
            $('#daftar-menu').append('<div class="col mb-3"><div class="card" style="width: 18rem;"><img src="img/menu/'+ data.gambar +'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>');
        })
    });
}


tampilkanSemuaMenu();


$('.nav-link').on('click', function() {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
    
    let kategori = $(this).html();
    $('#judul').html(kategori);

    if (kategori == 'All Menu') {
        tampilkanSemuaMenu();
        return;
    }

    $.getJSON("data/pizza.json", function(result){
        let menu = result.menu;
        let content = '';

        $.each(menu, function(i, data){
            if (data.kategori == kategori.toLowerCase()) {
                content += '<div class="col mb-3"><div class="card" style="width: 18rem;"><img src="img/menu/'+ data.gambar +'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>'
            }
        });
        $('#daftar-menu').html(content);
    });
});