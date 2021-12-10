function draw_table(){
    $("#results").empty();
    $.getHTMLuncached = function(url) {
        return $.ajax({
            url: url,
            type: 'GET',
            cache: false,
            success: function(html) {
                $("#results").append(html);
            }
        });

    };
    $.getHTMLuncached("/get/html");
}

function append(){
    
    $ajax({
        type: "POST",
        url: "/post/json",
        datatype: 'json',
        contentType: 'application/json',
        data: 
        {
            "sec_n": $("#section").val(),
            "item": $("#item").val(),
            "price": $("#price").val()
        },
        async: false,
        success: draw_table()
    })
        // alert($("#section").val());
};

$(document).ready(function(){
    draw_table();
})
