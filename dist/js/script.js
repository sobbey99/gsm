window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header-navphoneversion'),
    menuItem = document.querySelectorAll('.header-navitem'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header-navphoneversion_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header-navphoneversion_active');
        })
    })
    menu.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header-navphoneversion_active');
    })
});

        $('.form').validate ( {
            rules: {
                username: "required",
                usermessage: "required",
                useremail: {
                    required: true,
                    email: true
                }
            },
            messages: {
                username: "Introduceți numele și prenumele",
                useremail: {
                    required: "Introduceți adresa de e-mail",
                    email: "Introduceți adresă de e-mail validă"
                },
                usermessage: "Lipsește textul mesajului!"
            }
        } );



        $('.modal-thankyou__close').on('click', function() {
            $('#thankyou').fadeOut()
        })

        $('.form').submit( function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "form.php",
            data: $(this).serialize()
        }).done( function() {
                $(this).find("input").val("");
                $('#thankyou').fadeIn('slow');
                $('form.form').trigger("reset");
            })
        

        return false
        });

        new WOW().init();

