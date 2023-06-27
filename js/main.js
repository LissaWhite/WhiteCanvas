function main() {
    (function () {
        "use strict";

        // menu
        const dropDownBtn = document.querySelector(".dropdown");
        const overlay = document.querySelector(".overlay");
        const dropDownContent = document.querySelector("#myDropdown");
        const userName = document.querySelector(".dropbtn");
        const logoutBtn = document.querySelector(".logout");

        dropDownBtn.addEventListener("mouseenter", (event) => {
            dropDownContent.style.display = "block";
        });
        overlay.addEventListener("mouseenter", (event) => {
            dropDownContent.style.display = "none";
        });

        // index.html

        const registerBtn = document.querySelector(".register-btn");
        const currentUser = JSON.parse(localStorage.getItem("logged_users"));

        if (currentUser) {
            registerBtn.style.display = "none";
            registerBtn.nextElementSibling.style.display = "block";
            userName.textContent = `${currentUser.email.split("@")[0]}@`;

            logoutBtn.addEventListener("click", (event) => {
                registerBtn.style.display = "block";
                registerBtn.nextElementSibling.style.display = "none";
                localStorage.removeItem("logged_users");
                localStorage.removeItem("basket_products");
                localStorage.removeItem("basket_services");
                if (basket_list) {
                    document.querySelector("#total-price").textContent = "0р.";
                    basket_list.innerHTML = "";
                }
            });
        }

        // Product page
        const json_product_bd = [
            {
                product_id: "sdfgdfg",
                product_style: "modern",
                product_img: "img/portfolio/product-1.jpg",
                product_title: 'Торшер "Вторая Жизнь"',
                product_price: "7499",
            },
            {
                product_id: "uykjj",
                product_style: "loft",
                product_img: "img/portfolio/product-2.jpg",
                product_title: "Геометрическая ваза",
                product_price: "6800",
            },
            {
                product_id: "dxxxxyg",
                product_style: "modern",
                product_img: "img/portfolio/product-3.jpg",
                product_title: "Ваза напольная",
                product_price: "1500",
            },
            {
                product_id: "iukl",
                product_style: "modern",
                product_img: "img/portfolio/product-4.jpg",
                product_title: "Ваза каркасная",
                product_price: "3400",
            },
            {
                product_id: "sdert",
                product_style: "loft",
                product_img: "img/portfolio/product-5.jpg",
                product_title: "Подсвечник чугунный",
                product_price: "2000",
            },
            {
                product_id: "yytuk",
                product_style: "kantry",
                product_img: "img/portfolio/product-6.jpg",
                product_title: "Садовый подсвечник",
                product_price: "2600",
            },
            {
                product_id: "34g5h",
                product_style: "kantry",
                product_img: "img/portfolio/product-7.jpg",
                product_title: "Набор настенных горшков",
                product_price: "5000",
            },
            {
                product_id: "d5yhg",
                product_style: "modern",
                product_img: "img/portfolio/product-8.jpg",
                product_title: "Искусственные цветы",
                product_price: "500",
            },
            {
                product_id: "7ukyn",
                product_style: "loft",
                product_img: "img/portfolio/product-9.jpg",
                product_title: "Декоративный мох",
                product_price: "4200",
            },
        ];

        // function mapToJSON(map) {
        //     return JSON.stringify(Object.fromEntries(map));
        // }

        const product_list = document.querySelector(".product-list");
        if (product_list) {
            // Загрузить список продуктов,если есть
            let basket_products = JSON.parse(
                localStorage.getItem("basket_products")
            );
            if (basket_products === null) basket_products = [];

            json_product_bd.forEach((product) => {
                const product_templ = `<div class="col-sm-6 col-md-4 ${product.product_style} isotope-item">
                            <div class="portfolio-item ${product.product_id}">
                                <div class="hover-bg"> 
                                    <a href=${product.product_img} title="Project Title" data-lightbox-gallery="gallery1">
                                        <div class="hover-text"></div>
                                        <img src=${product.product_img} width="360px" height="240px" class="img-responsive" alt="Project Title"></a>
                                </div>
                                <div class="product-item">
                                        <h4>${product.product_title}</h4>
                                        <p><b>${product.product_price}р.</b></p>
                                </div>
                                <button class="item-btn" id=${product.product_id}><span class="link-content">Добавить</span></button>
                            </div>
                        </div>`;

                product_list.insertAdjacentHTML("beforeend", product_templ);
            });

            product_list.addEventListener("click", (event) => {
                event.preventDefault();

                if (currentUser) {
                    if (
                        event.target.tagName === "SPAN" ||
                        event.target.tagName === "BUTTON"
                    ) {
                        let target = "";
                        if (event.target.tagName === "SPAN") {
                            target = event.target.parentElement.id;
                        } else {
                            target = event.target.id;
                        }

                        if (!basket_products.includes(target)) {
                            basket_products.push(target);

                            localStorage.setItem(
                                "basket_products",
                                JSON.stringify(basket_products)
                            );
                        }
                    }
                }
            });
        }

        // Services page
        const json_service_bd = [
            {
                service_id: "2sdfgdfg",
                service_style: "modern",
                service_img: "img/portfolio/01-large.jpg",
                service_title: "Дизайн-проект",
                service_price: "3500",
            },
            {
                service_id: "7l956",
                service_style: "loft",
                service_img: "img/portfolio/02-large.jpg",
                service_title: "Айдентика",
                service_price: "18700",
            },
            {
                service_id: "234776",
                service_style: "modern",
                service_img: "img/portfolio/03-large.jpg",
                service_title: "Декорирование",
                service_price: "10500",
            },
            {
                service_id: "125784",
                service_style: "modern",
                service_img: "img/portfolio/04-large.jpg",
                service_title: "Строительство",
                service_price: "9000",
            },
            {
                service_id: "89543",
                service_style: "loft",
                service_img: "img/portfolio/05-large.jpg",
                service_title: "Концепт-проект",
                service_price: "12000",
            },
            {
                service_id: "54683",
                service_style: "kantry",
                service_img: "img/portfolio/06-large.jpg",
                service_title: "Дополнительные услуги",
                service_price: "5000",
            },
        ];

        const service_list = document.querySelector(".service_list");
        if (service_list) {
            // Загрузить список услуг,если есть
            let basket_services = JSON.parse(
                localStorage.getItem("basket_services")
            );
            if (basket_services === null) basket_services = [];

            json_service_bd.forEach((service) => {
                const service_templ = `<div class="col-sm-6 col-md-4 ${service.service_style}">
                                        <div class="portfolio-item ${service.service_id}">
                                            <div class="hover-bg"> 
                                                <a href="${service.service_img}" title="Project Title" data-lightbox-gallery="gallery1">
                                                <div class="hover-text"></div>
                                                <img src="${service.service_img}" class="img-responsive" alt="Project Title"> </a>
                                            </div>
                                            <div class="product-item">
                                                <h4>${service.service_title}</h4>
                                                <p><b>${service.service_price}р.</b></p>
                                            </div>
                                            <button class="item-btn" id=${service.service_id}><span class="link-content">Добавить</span></button>
                                        </div>
                                      </div>`;

                service_list.insertAdjacentHTML("beforeend", service_templ);
            });
            service_list.addEventListener("click", (event) => {
                event.preventDefault();

                if (currentUser) {
                    if (
                        event.target.tagName === "SPAN" ||
                        event.target.tagName === "BUTTON"
                    ) {
                        let target = "";
                        if (event.target.tagName === "SPAN") {
                            target = event.target.parentElement.id;
                        } else {
                            target = event.target.id;
                        }

                        if (!basket_services.includes(target)) {
                            basket_services.push(target);

                            localStorage.setItem(
                                "basket_services",
                                JSON.stringify(basket_services)
                            );
                        }
                    }
                }
            });
        }

        // Basket page
        const basket_list = document.querySelector(".basket-list");
        const orderBtn = document.querySelector(".order-btn");
        const closeBtn = document.querySelector(".btn-close");
        const orderPopUp = document.querySelector(".order-popUp");
        const totalSum = document.querySelector(".total-sum");
        const orderMail = document.querySelector(".user-name");
        const total_price = document.querySelector("#total-price");

        if (basket_list) {
            closeBtn.addEventListener("click", (event) => {
                event.preventDefault();

                orderPopUp.style.display = "none";
            });
            orderBtn.addEventListener("click", (event) => {
                event.preventDefault();
                if (currentUser) {
                    orderMail.textContent = currentUser.email;
                    orderPopUp.style.display = "flex";
                    totalSum.textContent = total_price.textContent;
                }
            });
        }

        function basket_render(basket_products, basket_services) {
            const avalible_services = json_service_bd.filter((item) => {
                return basket_services.includes(item.service_id);
            });

            let total_price = document.querySelector("#total-price");

            avalible_services.forEach((value, key) => {
                const basket_product_templ = `<li class="basket-item">
                                              <div class="portfolio-item ${value.service_id}">
                                              <img src="${value.service_img}" class="img-responsive" alt="Project Title">
                                              <h4 class="item-title">${value.service_title}</h4>
                                              <p class="total">${value.service_price}р.</p>
                                              <button class="delеte" id=${value.service_id}>Удалить</button>
                                          </div>
                                          </li>`;
                basket_list.insertAdjacentHTML(
                    "beforeend",
                    basket_product_templ
                );
            });

            const avalible_products = json_product_bd.filter((item) => {
                return basket_products.includes(item.product_id);
            });

            avalible_products.forEach((value, key) => {
                const basket_product_templ = `<li class="basket-item">
                                            <div class="portfolio-item ${value.product_id}
          ">
                                              <img src="${value.product_img}" class="img-responsive" alt="Project Title">
                                              <h4 class="item-title">${value.product_title}</h4>
                                              <p class="total">${value.product_price}р.</p>
                                              <button class="delеte" id=${value.product_id}>Удалить</button>
                                            </div>
                                           </li>`;
                basket_list.insertAdjacentHTML(
                    "beforeend",
                    basket_product_templ
                );
            });
            let total_price_service = avalible_services.reduce((acc, item) => {
                return (acc += parseInt(item.service_price));
            }, 0);

            let total_price_product = avalible_products.reduce((acc, item) => {
                return (acc += parseInt(item.product_price));
            }, 0);

            total_price.textContent = `${
                total_price_product + total_price_service
            }р.`;
        }

        if (basket_list) {
            // total_price.textContent = `${price_sum}р.`;
            let basket_products = JSON.parse(
                localStorage.getItem("basket_products")
            );
            if (basket_products === null) basket_products = [];

            let basket_services = JSON.parse(
                localStorage.getItem("basket_services")
            );
            if (basket_services === null) basket_services = [];

            basket_render(basket_products, basket_services);

            basket_list.addEventListener("click", (event) => {
                event.preventDefault();

                basket_products = basket_products.filter((item) => {
                    return item !== event.target.id;
                });
                basket_services = basket_services.filter((item) => {
                    return item !== event.target.id;
                });

                localStorage.setItem(
                    "basket_products",
                    JSON.stringify(basket_products)
                );

                localStorage.setItem(
                    "basket_services",
                    JSON.stringify(basket_services)
                );
                basket_list.innerHTML = "";
                basket_render(basket_products, basket_services);
            });
        }

        $("a.page-scroll").click(function () {
            if (
                location.pathname.replace(/^\//, "") ==
                    this.pathname.replace(/^\//, "") &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length
                    ? target
                    : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html,body").animate(
                        {
                            scrollTop: target.offset().top - 50,
                        },
                        900
                    );
                    return false;
                }
            }
        });

        // Show Menu on Book
        $(window).bind("scroll", function () {
            var navHeight = $(window).height() - 500;
            if ($(window).scrollTop() > navHeight) {
                $(".navbar-default").addClass("on");
            } else {
                $(".navbar-default").removeClass("on");
            }
        });

        $("body").scrollspy({
            target: ".navbar-default",
            offset: 80,
        });

        // Hide nav on click
        $(".navbar-nav li a").click(function (event) {
            // check if window is small enough so dropdown is created
            var toggle = $(".navbar-toggle").is(":visible");
            if (toggle) {
                $(".navbar-collapse").collapse("hide");
            }
        });

        // Portfolio isotope filter
        $(window).load(function () {
            var $container = $(".portfolio-items");
            $container.isotope({
                filter: "*",
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            });
            $(".cat a").click(function () {
                $(".cat .active").removeClass("active");
                $(this).addClass("active");
                var selector = $(this).attr("data-filter");
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: "linear",
                        queue: false,
                    },
                });
                return false;
            });
        });

        // Nivo Lightbox
        $(".portfolio-item a").nivoLightbox({
            effect: "slideDown",
            keyboardNav: true,
        });

        // Testimonial Slider
        $(document).ready(function () {
            $("#testimonial").owlCarousel({
                navigation: false, // Show next and prev buttons
                slideSpeed: 300,
                paginationSpeed: 400,
                singleItem: true,
            });
        });
    })();
}
main();
