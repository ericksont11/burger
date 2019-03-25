$(function() {
    
    $(".order-form").on("submit", function(event) {

        event.preventDefault();
        if($("#dish").val() !== ""){
            const order = {
                name: $("#dish").val(),
                delivered: $("[name=status]:checked").val().trim()
            };

            $.ajax("/api/orders", {
                type: "POST",
                data: order
            }).then(() => {
                location.reload();
                check()
            });
        }
        else {
            console.log("yes")
        }
    });

    $(".add").on("click", function() {
        let id = parseInt($(this).attr("data-type"))
        var dishArray = $("#dish-name"+id).text().trim().split(",")
        if ($("#another-dish"+id).val() !== "" && dishArray.length < 5) {
            let name = $("#dish-name"+id).text().trim()
            let name2 = $("#another-dish"+id).val()
            var name3 = "'"+name + "," + name2+"'"
            console.log(name3)
            const order = {
                dish: name3
            };
            console.log(order)
            $.ajax("/api/multiple/" + id, {
                type: "PUT",
                data: order
            }).then(() => {
                location.reload();
            });
        }
        else {
            console.log("no")
        }
    });

    $(".clicked").click(function () {
        var name;
        var ButtonText = $(this).text()
        let id = parseInt($(this).attr("id"))
        console.log(ButtonText)
        if (ButtonText === "Ordering...") {
            $(this).css("background-color", "green");
            $(this).text("Order Placed!");
            name = 1
        }
        else {
            $(this).css("background-color", "orange");
            $(this).text("Ordering...");
            name = 0
        }

        const newName = {
            delivered: name,
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
    for (x = 1; x < 100; x++) {
        var dishArray = $("#dish-name"+x).text().trim().split(",")
        for (y=0; y<5; y++){
            if (dishArray[y] === "Hamburger") {
                $('#dish-name'+x).prepend('<img src="/assets/img/hamburger.png" class="icon"/>')
            }
            else if (dishArray[y] === "Coffee") {
                $('#dish-name'+x).prepend('<img src="/assets/img/coffee.png" class="icon"/>')
            }
            else if (dishArray[y] === "Salad") {
                $('#dish-name'+x).prepend('<img src="/assets/img/salad.png" class="icon"/>')
            }
            else if (dishArray[y] === "Fries") {
                $('#dish-name'+x).prepend('<img src="/assets/img/fries.png" class="icon"/>')
            }
            else if (dishArray[y] === "Kebab") {
                $('#dish-name'+x).prepend('<img src="/assets/img/kebab.png" class="icon"/>')
            }
            if ($("#"+x).text() ==="Preparing: 0") {
                $("#"+x).css("background-color", "orange");
                $("#"+x).text("Ordering...");
            }
            else if ($("#"+x).text() ==="Preparing: 1") {
                $("#"+x).css("background-color", "green");
                $("#"+x).text("Order Placed!");
            }
        }
       
    }
}
