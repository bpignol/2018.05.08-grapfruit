function slice(x,y,w,h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;

  // we need the radius for the cos and sin
  var rad = h * 0.4
  var amplitude = 0.5;
  var ampInc = 0;

  // update function is called every 60 time per seconds (as often as the function draw)
  this.update = function(){
    amplitude = (cos(radians(ampInc))*0.08) + 0.4;
    ampInc++;
  }


  this.show = function(){
   
   // apply angles only on the shape not on the all canvas
    push();

      // change the origin (0,0) from the top left to the center of the canvas
      translate(this.x, this.y);

      // start the half circle (by default it is center right due to cos and sin)
      var s1 = 90;
      var s2 = 270;

      // colors
      fill(255,192,203);
      noStroke();


      beginShape();
        // create a vertex at every degree around the circle
        // rad 2 for cos (oscilloscop) in order to have a losange
        for (var i=s1; i<s1+180; i++){
          var ix = cos(radians(i)) * rad * amplitude;
          var iy = sin(radians(i)) * rad;
          vertex(ix, iy);
        }
      endShape();


      beginShape();
        // create a vertex at every degree around the circle
        // rad 2 for cos (oscilloscop) in order to have a losange
        for (var i=s2; i<s2+180; i++){
          var ix = cos(radians(i)) * rad * amplitude;
          var iy = sin(radians(i)) * rad;
          vertex(ix, iy);
        }
      endShape();

    // stop changing angles
    pop();


    //  center point for check
    fill(255,0,0);
    ellipse(this.x, this.y, 10);

  };
}