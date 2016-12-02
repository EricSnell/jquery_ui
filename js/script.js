$((() => {

  // DRAGGABLE

  $('.box').draggable();
  // Content draggable anywhere; container will scroll with fixed height/width
  $('#box1').draggable({ scroll: true, revert: 'invalid' });
  // Content only draggable vertically
  $('#box2').draggable({ axis: 'x' });
  // Content only draggable horizontally
  $('#box3').draggable({ axis: 'y'});
  // Content draggable within certain area ('parent' or specific element)
  $('#box4').draggable({ containment: '.container' });

  // DROPPABLE

  $('#droppable').droppable({
    // Only accepts box1
    accept: '#box1',
    drop: function() {
      $(this).text('when a box got a attitude, drop it like it\'s hot');
    }
  });



}));
