function checkPassword() {
  var password1 = document.getElementById("password1").value;
  var password2 = document.getElementById("password2").value;

  if (password1 === password2) {
    alert("Mật khẩu khớp nhau!");
  } else {
    alert("Mật khẩu không khớp!");
  }
}
$(document).ready(function() {
  $("#gototop").hide()
  $(window).scroll(function(){
          // de xem kich thuoc man hinh
          //vao console
          //$(window).scrollTop()
    if($(this).scrollTop()>=100)
      $("#gototop").show("slow")
    else
      $("#gototop").hide("slow")
  })
        //truot ve dau
  $("#gototop").click(function(){
    $("html, body").animate({
      scrollTop:0
    },500);
  })
});
$(document).ready(function(){
  $('#toggle').click(function(){
    $('#main-menu').slideToggle();
  });
});
$(document).ready(function(){
  $('.sub-menu').parent('li').addClass('has-child');
});
window.addEventListener("DOMContentLoader", ()=> {
  const starRating = new starRating("form");
});
class starRating {
  constructor(qs) {
    this.ratings = [
      {id: 1, name: "Terrible"},
      {id: 2, name: "Bad"},
      {id: 3, name: "Ok"},
      {id: 4, name: "Good"},
      {id: 5, name: "Excellent"}
      ];
    this.rating = null;
    this.el = document.querySelector(qs);
    this.init();
  }
}