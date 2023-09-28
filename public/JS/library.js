$(".read").on("click", function(){
    $(".modal_container").removeClass("hidden");
    $(".modal_container").addClass("shown");
});

$("#close_modal").on("click", function(){
    if($(".modal_container").hasClass("shown")){
        $(".modal_container").removeClass("shown");
        $(".modal_container").addClass("hidden");
    }else{

    }
})
document.onload = vasd();

var vasd = function(){
if($(".main_body").hasClass("overflown")){
    $(".read_more").removeClass("hidden_button");
}
}