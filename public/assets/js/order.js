$(function() {

    $(".order-form").on("submit", function(event) {

        event.preventDefault();

        const order = {
        name: $("#dish").val().trim(),
        delivered: $("[name=status]:checked").val().trim()
        };

        $.ajax("/api/orders", {
        type: "POST",
        data: order
        }).then(() => {

        location.reload();
        check()
        });
    });

    $(".clicked").click(function () {

        var name;
        var ButtonText = $(this).text()
        let id = parseInt($(this).attr("id"))
        console.log(ButtonText)
        if (ButtonText === "Preparing") {
            $(this).css("background-color", "green");
            $(this).text("Delivered");
            name = 1
        }
        else {
            $(this).css("background-color", "orange");
            $(this).text("Preparing");
            name = 0
        }
        console.log(name)
        const newName = {
            delivered: name
        }
        $.ajax("/api/orders/" + id, {
            type: "PUT",
            data: newName
        }).then(() => {
            location.reload();
        });
    });


    $(".delete").on("click", function(event) {

        const id = parseInt($(this).attr("id"))
        console.log(id)
        $.ajax("/api/orders/" + id, {
            type: "DELETE"
        }).then(() => {

            location.reload();
        });
    });

    $(".btn").css("background-color", "red")
    check()

});

function check() {
    for (x = 0; x < 100; x++) {
        if ($("#"+x).text() ==="Preparing: 0") {
            $("#"+x).css("background-color", "orange");
            $("#"+x).text("Preparing");
        }
        else if ($("#"+x).text() ==="Preparing: 1") {
            $("#"+x).css("background-color", "green");
            $("#"+x).text("Delivered");
        }
    }
}
