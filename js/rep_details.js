var converter = new showdown.Converter();
// text = '#hello, markdown!',
// html = converter.makeHtml(text);

$(document).ready(function () {
    var octo = new Octokat({
        token: localStorage.token
    })
    var repo = octo.repos('philschatz', 'octokat.js')
    repo.contents('README.md').read() // Use `.read` to get the raw file.
        .then((contents) => { // `.fetch` is used for getting JSON
            // console.log(lognts);
            // var convertedHTML = markdown.toHTML(contents);
            var convertedHTML = converter.makeHtml(contents);
            $('.readme-content').html(
                convertedHTML
            );
        })
        .catch (function (e) {
            console.log(e); // "oh, no!"
            $('.readme-content').html(
                'This repository doesn\'t have a README.md file'
            );
        });

    octo.repos('philschatz', 'octokat.js').issues.fetch()
        .then((someIssues) => {
            // console.log(someIssues)
            for(i=0;i < someIssues.items.length; i++){
            console.log(someIssues.items[i].title + "\n" + someIssues.items[i].htmlUrl);
            var issue_title = someIssues.items[i].title;
            var issue_url = someIssues.items[i].htmlUrl;
                $('.issues-list').append(`
                    <div align="left" class="panel panel-default" style="width: 90%">
                        <div class="panel-heading">
                            <h3 class="panel-title .issue">${issue_title}</h3>
                        </div>
                        <div class="panel-body">
                            <a href="${issue_url}">${issue_url}</a>
                        </div>
                    </div>
                `)
            }

            someIssues.nextPage()
                .then((moreIssues) => {
                    for (i = 0; i < moreIssues.items.length; i++) {
                        console.log(moreIssues.items[i].title + "\n" + moreIssues.items[i].htmlUrl);
                        var issue_title = moreIssues.items[i].title;
                        var issue_url = moreIssues.items[i].htmlUrl;
                        $('.issues-list').append(`
                            <div align="left" class="panel panel-default" style="width: 80%">
                                <div class="panel-heading">
                                    <h3 class="panel-title .issue">${issue_title}</h3>
                                </div>
                                <div class="panel-body">
                                    <a href="${issue_url}">${issue_url}</a>
                                </div>
                            </div>
                        `)
                    }
                })
        })
});