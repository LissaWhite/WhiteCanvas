$(document).ready(function () {
    $(".reg-button").click(function () {
        // задаем функцию при нажатиии на элемент <button>
        $(".form").submit(); // вызываем событие submit на элементе <form>
    });
    $("#register-form").submit(function (event) {
        // задаем функцию при срабатывании события "submit" на элементе <form>
        event.preventDefault(); // действие события по умолчанию не будет срабатывать

        // Код для базы данных
        console.log("register");
    });

    $(".log-button").click(function () {
        // задаем функцию при нажатиии на элемент <button>
        $(".form").submit(); // вызываем событие submit на элементе <form>
    });
    $("#login-form").submit(function (event) {
        // задаем функцию при срабатывании события "submit" на элементе <form>
        event.preventDefault(); // действие события по умолчанию не будет срабатывать

        // Код для базы данных
        console.log("login");
    });

    $(".form")
        .find("input, textarea")
        .on("keyup blur focus", function (e) {
            var $this = $(this),
                label = $this.prev("label");

            if (e.type === "keyup") {
                if ($this.val() === "") {
                    label.removeClass("active highlight");
                } else {
                    label.addClass("active highlight");
                }
            } else if (e.type === "blur") {
                if ($this.val() === "") {
                    label.removeClass("active highlight");
                } else {
                    label.removeClass("highlight");
                }
            } else if (e.type === "focus") {
                if ($this.val() === "") {
                    label.removeClass("highlight");
                } else if ($this.val() !== "") {
                    label.addClass("highlight");
                }
            }
        });

    $(".tab a").on("click", function (e) {
        e.preventDefault();

        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");

        target = $(this).attr("href");

        $(".tab-content > div").not(target).hide();

        $(target).fadeIn(600);
    });
});
