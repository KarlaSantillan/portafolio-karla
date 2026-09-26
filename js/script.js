const navbar =
    document.querySelector(".navbar");

const menuButton =
    document.querySelector(
        ".navbar__toggle"
    );

const menuLinks =
    document.querySelectorAll(
        ".navbar__menu a"
    );


menuButton.addEventListener(
    "click",
    () => {

        const menuIsOpen =
            navbar.classList.toggle(
                "is-open"
            );


        menuButton.setAttribute(
            "aria-expanded",
            menuIsOpen
        );

    }
);


menuLinks.forEach((link) => {

    link.addEventListener(
        "click",
        () => {

            navbar.classList.remove(
                "is-open"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }
    );

});


document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            navbar.classList.remove(
                "is-open"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }
);





const filterButtons =
    document.querySelectorAll(
        ".project-filters button"
    );

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );



const defaultFilter =
    document.querySelector(
        '[data-filter="todos"]'
    );


if (defaultFilter) {

    defaultFilter.classList.add(
        "is-active"
    );

}


filterButtons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            const selectedFilter =
                button.dataset.filter;



            filterButtons.forEach(
                (item) => {

                    item.classList.remove(
                        "is-active"
                    );

                }
            );


            button.classList.add(
                "is-active"
            );



            projectCards.forEach(
                (project) => {

                    const categories =
                        project.dataset.category
                            .split(" ");


                    const shouldShow =
                        selectedFilter ===
                            "todos" ||
                        categories.includes(
                            selectedFilter
                        );


                    project.hidden =
                        !shouldShow;

                }
            );

        }
    );

});




const backToTopButton =
    document.querySelector(
        ".back-to-top"
    );



window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 450) {

            backToTopButton.classList.add(
                "is-visible"
            );

        } else {

            backToTopButton.classList.remove(
                "is-visible"
            );

        }

    },
    { passive: true }
);



backToTopButton.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


const contactForm =
    document.querySelector(".contact-form");

const nameInput =
    document.querySelector("#nombre");

const emailInput =
    document.querySelector("#correo");

const subjectInput =
    document.querySelector("#asunto");

const messageInput =
    document.querySelector("#mensaje");

function showError(input, message) {

    const errorElement =
        document.querySelector(
            `#error-${input.id}`
        );

    input.classList.add("is-invalid");

    input.setAttribute(
        "aria-invalid",
        "true"
    );

    errorElement.textContent = message;
}

function clearError(input) {

    const errorElement =
        document.querySelector(
            `#error-${input.id}`
        );

    input.classList.remove(
        "is-invalid"
    );

    input.removeAttribute(
        "aria-invalid"
    );

    errorElement.textContent = "";
}

function isValidEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
}

contactForm.addEventListener(
    "submit",
    (event) => {

        let formIsValid = true;



        clearError(nameInput);
        clearError(emailInput);
        clearError(subjectInput);
        clearError(messageInput);



        const name =
            nameInput.value.trim();

        if (name === "") {

            showError(
                nameInput,
                "Ingresa tu nombre."
            );

            formIsValid = false;

        } else if (name.length < 2) {

            showError(
                nameInput,
                "El nombre debe tener al menos 2 caracteres."
            );

            formIsValid = false;
        }



        const email =
            emailInput.value.trim();

        if (email === "") {

            showError(
                emailInput,
                "Ingresa tu correo electrónico."
            );

            formIsValid = false;

        } else if (!isValidEmail(email)) {

            showError(
                emailInput,
                "Ingresa un correo electrónico válido."
            );

            formIsValid = false;
        }



        const subject =
            subjectInput.value.trim();

        if (subject === "") {

            showError(
                subjectInput,
                "Ingresa el asunto del mensaje."
            );

            formIsValid = false;

        } else if (subject.length < 3) {

            showError(
                subjectInput,
                "El asunto debe tener al menos 3 caracteres."
            );

            formIsValid = false;
        }



        const message =
            messageInput.value.trim();

        if (message === "") {

            showError(
                messageInput,
                "Escribe un mensaje."
            );

            formIsValid = false;

        } else if (message.length < 10) {

            showError(
                messageInput,
                "El mensaje debe tener al menos 10 caracteres."
            );

            formIsValid = false;
        }



        if (!formIsValid) {

            event.preventDefault();

        }

    }
);

const formFields = [
    nameInput,
    emailInput,
    subjectInput,
    messageInput
];


formFields.forEach((field) => {

    field.addEventListener(
        "input",
        () => {

            if (
                field.classList.contains(
                    "is-invalid"
                )
            ) {

                clearError(field);

            }

        }
    );

});

