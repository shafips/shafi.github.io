$('document').ready(function() {
    $("#counter1").countMe(40,200);
    $("#counter2").countMe(40,200);
    $("#counter3").countMe(40,200);

    const d = new Date();
    const year = d.getFullYear();
    $("#current_year").text(year)
});