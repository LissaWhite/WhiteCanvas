$(document).ready(function () {
    let users = JSON.parse(localStorage.getItem("registered_users"));
    if (users === null) {
        users = [
            {
                firstName: "Олег",
                lastName: "Игнатьев",
                email: "oleg@domen.ru",
                password: "123",
            },
            {
                firstName: "Александр",
                lastName: "Парамонов",
                email: "alex@domen.ru",
                password: "321",
            },
            {
                firstName: "Иван",
                lastName: "Микаев",
                email: "ivan@domen.ru",
                password: "456",
            },
        ];
    }

    $(".reg-button").click(function () {
        // задаем функцию при нажатиии на элемент <button>
        $(".form").submit(); // вызываем событие submit на элементе <form>
    });
    $("#register-form").submit(function (event) {
        // задаем функцию при срабатывании события "submit" на элементе <form>
        event.preventDefault(); // действие события по умолчанию не будет срабатывать

        // Код для базы данных

        // window.console.log(event.currentTarget[0].value);
        // window.console.log(event.currentTarget[1].value);
        // window.console.log(event.currentTarget[2].value);
        // window.console.log(event.currentTarget[3].value);

        let newUser = {
            firstName: event.currentTarget[0].value,
            lastName: event.currentTarget[1].value,
            email: event.currentTarget[2].value,
            password: event.currentTarget[3].value,
        };

        console.log(newUser);

        const user_exsist = users.find((item, index, arr) => {
            return newUser.email == item.email;
        });
        console.log(user_exsist);

        if (user_exsist === undefined) {
            console.log(user_exsist);

            users.push(newUser);
            localStorage.setItem("registered_users", JSON.stringify(users));

            const current_user = {
                email: newUser.email,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
            };
            localStorage.setItem("logged_users", JSON.stringify(current_user));
            window.location = "index.html";
        } else {
            alert("Пользователь уже зарегистрирован!");
        }
    });

    $(".log-button").click(function () {
        // задаем функцию при нажатиии на элемент <button>
        $(".form").submit(); // вызываем событие submit на элементе <form>
    });
    $("#login-form").submit(function (event) {
        // задаем функцию при срабатывании события "submit" на элементе <form>
        event.preventDefault(); // действие события по умолчанию не будет срабатывать

        // Код для базы данных
        let logUser = {
            email: event.currentTarget[0].value,
            password: event.currentTarget[1].value,
        };

        const user_exsist = users.find((item, index, arr) => {
            return logUser.email == item.email;
        });
        console.log(user_exsist);

        if (user_exsist) {
            if (logUser.password == user_exsist.password) {
                const current_user = {
                    email: user_exsist.email,
                    firstName: user_exsist.firstName,
                    lastName: user_exsist.lastName,
                };
                localStorage.setItem(
                    "logged_users",
                    JSON.stringify(current_user)
                );
                window.location = "index.html";
            } else {
                alert("Не верный пароль!");
            }
        } else {
            alert("Пользователь не существует!");
        }
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
