/*document.getElementById('caja').onclick = function(e) {
    alert('click');
    return true;
}
*/




$('#caja')
    .effect('highlight', {}, 500)
    .hide('explode', { pieces: 250 }, 2000)
    .show('explode', { pieces: 250 }, 2000)
    .effect('highlight', {}, 500)