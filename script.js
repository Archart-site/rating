var myVal = 0;
var i = 0;
var q = 0;
function myFunction(event) {
  var rating = document.getElementsByTagName("button");
  myVal = myVal + Number(event.target.value);
  i = myVal + i;
  q++;
  var sum = myVal/q;
  // console.log(myVal);
  console.log("v" + myVal/q);
  // console.log(q);
  var v = 5 - Math.floor(sum);
  console.log(v);
  if( v == 1 ){
    rating[4].classList.remove("active");
  } else if( v == 2){
    rating[3].classList.remove("active");
    rating[4].classList.remove("active");
  } else if( v == 3){
    rating[2].classList.remove("active");
    rating[3].classList.remove("active");
    rating[4].classList.remove("active");
  } else if( v == 4){
    rating[1].classList.remove("active");
    rating[2].classList.remove("active");
    rating[3].classList.remove("active");
    rating[4].classList.remove("active");
  }
  for(var x = 0; x < sum; x++){
    rating[x].classList.add("active");
    // console.log(x);
  }
}
