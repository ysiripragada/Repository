$( init );

var total = 0;
var sa = [];
var sb = [];

function init() {

  $('.img_svg').draggable({
      cursor: 'move',
      revert: true
  });

  $('.js-circuit-connection').droppable( {
    accept: '.img_svg',
    hoverClass: 'hovered',
    drop: handleCardDrop
  } );
}

function handleCardDrop( event, ui ) {
    var draggable = ui.draggable;

    var str1 = draggable.attr('id');
    var str2 = $(this).attr('id');

    var s11 = str1.slice(1,2);
    var s12 = str2.slice(1,2);

    var s21 = str1.slice(2,3);
    var s22 = str2.slice(0,1);

    sa.push(s21);
    sb.push(s22);

    console.log(s21);
    console.log(s22);
    if ( s11 == s12 ) {
        ui.draggable.addClass( 'correct' );
        ui.draggable.draggable( 'disable' );
        $(this).droppable( 'disable' );
        ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
        ui.draggable.draggable( 'option', 'revert', false );
        total++;
    }
}

function onBtnClick () {
    if (total == 6) {
        ftotal = 0;
        for (i in sa) {
            if (sa[i] == sb[i]) {
                ftotal++;
            }
        }
        if (ftotal == 6) {
            if(!alert('Congratulations!')){window.location.reload();}
        }
        else {
            if(!alert('Please check the arrangement and try again!')){window.location.reload();}
        }
    } 
    else {
        alert('Please place all the components!');
    }
}

function handleDropEvent( event, ui ) {
    var draggable = ui.draggable;
    alert( 'The circuit with ID "' + draggable.attr('id') + '" was dropped onto me!' );
}