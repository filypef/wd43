/*$('.paines__novidades button').click(() =>{
    /*if($('.paines__novidades').hasClass('paines__painel--aberto')){
        $('.paines__novidades').removeClass('paines__painel--aberto');
    }else{
        $('.paines__novidades').addClass('paines__painel--aberto');
    }

    $('.paines__novidades').toggleClass('paines__painel--aberto');
});*/

$('.paines__painel button').click(function (){
    $(this).parent().toggleClass('paines__painel--aberto');

    if($(this).parent().hasClass('paines__painel--aberto')){
        $(this).text('Mostar menos');
    }else{
        $(this).text('Mostar mais');
    }
})