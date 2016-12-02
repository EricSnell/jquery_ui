$((() => {

  // DRAGGABLE

  $('.box').draggable();
  // Content draggable anywhere; container will scroll with fixed height/width
  $('#box1').draggable({ scroll: true });
  // Content only draggable vertically
  $('#box2').draggable({ axis: 'x' });
  // Content only draggable horizontally
  $('#box3').draggable({ axis: 'y'});
  // Content draggable within certain area ('parent' or specific element)
  $('#box4').draggable({ containment: '.container' });

  // DROPPABLE
  



}));
