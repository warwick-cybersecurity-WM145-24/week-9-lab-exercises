
window.addEventListener('DOMContentLoaded', () => {

  // fetch all poems
  const apiUrl = "/poems";
  fetch(`${apiUrl}`)
    .then((response) => response.json())
    .then((incoming) => {

      // render artcile
      console.log(incoming);
      document.getElementById('masthead').setAttribute('style', `background-image: url('${incoming.headerImage}')`);
      document.getElementById('title').innerHTML = incoming?.title;
      document.getElementById('author').innerHTML = incoming?.author;
      document.getElementById('content').innerHTML = incoming?.content;

    })
    .catch((err) => console.error(err));

})
