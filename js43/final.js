$(document).ready(function(){
    $(".stb").click(function(){
      $(".input").width('200px')
    });
  });
  let closePopup = document.getElementById("popupclose");
	let overlay = document.getElementById("overlay");
	let popup = document.getElementById("popup");
	let button = document.getElementById("button");
  let bntsubmit = document.getElementById("bntsubmit")
  
  bntsubmit.onclick = function() {
	  overlay.style.display = 'none';
	  popup.style.display = 'none';
	}; 
  
	closePopup.onclick = function() {
	  overlay.style.display = 'none';
	  popup.style.display = 'none';
	}; 
/*setTimeout(open, (2000));

	function open() {
	  overlay.style.display = 'block';
	  popup.style.display = 'block';
	};*/
  let closesighnupfild = document.getElementById("popupclosesighn");
  let overlaysighn = document.getElementById("overlaysign");
  let popupsighn = document.getElementById("sighn-up-fild");
  let sighnbutton = document.getElementById("sighn-up-nav");

  popupclosesighn.onclick = function() {
	  overlaysighn.style.display = 'none';
	  popupsighn.style.display = 'none';
	};

	sighnbutton.onclick = function() {
	  overlaysighn.style.display = 'block';
	  popupsighn.style.display = 'block';
	}
  let popupclosecard = document.getElementById("popupclosecard");
  let overlaysigncrad1 = document.getElementById("overlaysigncrad1");
  let cardsighn = document.getElementById("card-sighn");
  let membership = document.getElementById("membership");

  popupclosecard.onclick = function() {
	  overlaysigncrad1.style.display = 'none';
	  cardsighn.style.display = 'none';
	};

	membership.onclick = function() {
    overlaysigncrad1.style.display = 'block';
	  cardsighn.style.display = 'block';
	}

  let count = 0;
 
  function result(){
    if(count != 0){
      document.getElementById('result').innerHTML = 
      "<h4>Rating: <label class='text-primary'>" + count + "</label></h4>"
      + "<h4>Review</h4>"
      + "<p>"+document.getElementById("review").value+"</p>";
    }else{
   
    }
  }
   
  function startRating(item){
    count=item.id[0];
    sessionStorage.star = count;
    for(var i=0;i<5;i++){
      if(i < count){
        document.getElementById((i+1)).style.Color="yellow";
      }
      else{
        document.getElementById((i+1)).style.color="yellow";
      }
    }
  };
  function openCity(evt, cityName) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  };


let accordion = document.getElementsByClassName('container');
let i;
for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}