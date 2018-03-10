var converter = new showdown.Converter();
// text = '#hello, markdown!',
// html = converter.makeHtml(text);

$(document).ready(function () {
    var octo = new Octokat()
    var repo = octo.repos('philschatz', 'octokat.js')
    repo.contents('README.md').read() // Use `.read` to get the raw file.
        .then((contents) => { // `.fetch` is used for getting JSON
            console.log(contents);
            // var convertedHTML = markdown.toHTML(contents);
            var convertedHTML = converter.makeHtml(contents);
            $('#markdown').html(
                convertedHTML
            );
        })
        .catch (function (e) {
            console.log(e); // "oh, no!"
            $('.readme-content').html(
                'This repository doesn\'t have a README.md file'
            );
        });
});