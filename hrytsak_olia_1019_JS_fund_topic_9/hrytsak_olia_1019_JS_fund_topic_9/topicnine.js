$(function(){
//task - 1

let head = $("h2.head").css("background-color", "green");
head.find(".inner").css("font-size", "35px");

//task - 2
//функція, що змінює посилання додаючи атрибут target="_blank", що автоматично призводить до відкривання його в новій вкладці
$("a").each(function() {
  let $attr = $(this).attr('href');
  if ($attr.match(/^https:\/\//)) {
    $(this).attr('target', '_blank');
  }
});

//task - 3

$("h3").each(function() {
  let $header = $(this);
  let $nextDiv = $header.next("div");
  console.log($nextDiv.html());
  $header.before($nextDiv);
});

//task - 4

$("input").on("change", function() {
  let checkedInput = $("input:checked").length; //підрахунок кількості вибраних чекбоксів
  //умова input:not(:checked) - всі селектори, що не вибрані
  if (checkedInput === 3) {
      $("input:not(:checked)").prop("disabled", true);
  } else {
      $("input:not(:checked)").prop("disabled", false);
  }
});


})









