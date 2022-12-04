/*!
* Start Bootstrap - Clean Blog v6.0.8 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {

    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function () {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if (currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });


    // fetch a random article
    const randomId = Math.round(Math.random() * (22 - 1) + 1);
    const apiUrl = "http://localhost:3000/poem";
    fetch(`${apiUrl}/${randomId}`)
        .then((response) => response.json())
        .then((incoming) => {

            // render artcile
            console.log(incoming);
            document.getElementById('masthead').setAttribute('style', `background-image: url('${incoming.headerImage}')`);
            document.getElementById('title').innerHTML = `${randomId}: ${incoming?.title}`;
            document.getElementById('author').innerHTML = incoming?.author;
            document.getElementById('content').innerHTML = incoming?.content;

        })
        .catch((err) => console.error(err));

})
