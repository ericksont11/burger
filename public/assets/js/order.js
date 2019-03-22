$(function() {

    $(".order-form").on("submit", function(event) {

        event.preventDefault();

        const order = {
        name: $("#dish").val().trim(),
        devoured: $("[name=status]:checked").val().trim()
        };


        $.ajax("/api/orders", {
        type: "POST",
        data: order
        }).then(() => {

        location.reload();
        });
    });

});
