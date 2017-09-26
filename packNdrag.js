var pckry = new Packery( '.grid', {
  itemSelector: '.tile',
});

pckry.getItemElements().forEach( function( itemElem ) {
  var draggie = new Draggabilly( itemElem );
  pckry.bindDraggabillyEvents( draggie );
});
