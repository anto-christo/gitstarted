function sum(a){
    sum_res = 0;
    for (i = 0; i < a.length; i++) {
       sum_res = sum_res + a[i]
    }
    return(sum_res);
}

var converter = new showdown.Converter();
// text = '#hello, markdown!',
// html = converter.makeHtml(text);

$(document).ready(function () {
    var octo = new Octokat({
        token: localStorage.token
    })
    // alert(localStorage.clicked_rep_owner + "   " + localStorage.clicked_rep_name);
    var repo = octo.repos(localStorage.clicked_rep_owner, localStorage.clicked_rep_name)
    repo.contents('README.md').read() // Use `.read` to get the raw file.
        .then((contents) => { // `.fetch` is used for getting JSON
            // console.log(lognts);
            // var convertedHTML = markdown.toHTML(contents);
            var convertedHTML = converter.makeHtml(contents);
            $('.readme-content').html(
                convertedHTML
            );
        })
        .catch(function (e) {
            console.log(e); // "oh, no!"
            $('.readme-content').html(
                'This repository doesn\'t have a README.md file'
            );
        });

    octo.repos(localStorage.clicked_rep_owner, localStorage.clicked_rep_name).issues.fetch()
        .then((someIssues) => {
            // console.log(someIssues)
            for (i = 0; i < someIssues.items.length; i++) {
                // console.log(someIssues.items[i].title + "\n" + someIssues.items[i].htmlUrl);
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
                        // console.log(moreIssues.items[i].title + "\n" + moreIssues.items[i].htmlUrl);
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

    $(".repository_name").html(localStorage.clicked_rep_name);

    octo.repos(localStorage.clicked_rep_owner, localStorage.clicked_rep_name).fetch()
        .then((repo) => {
            console.log(repo);
            console.log(repo.description);
            console.log(repo.forksCount);
            console.log(repo.stargazersCount);
            github_url = repo.cloneUrl;

            console.log(repo.cloneUrl);
            $(".repository_desc").html(repo.description);
            $(".forks_count").html(repo.forksCount);
            $(".stars_count").html(repo.stargazersCount);
            $.ajax({
                type: 'GET',
                url: repo.languagesUrl,
                dataType: 'json',
                async: false,
                success: function (langinfo) {
                    console.log(langinfo);
                    langs = Object.keys(langinfo);
                    langs_perc = Object.values(langinfo);

                    console.log(langs);
                    console.log(langs_perc);
                    console.log(sum(langs_perc));
                    langs_perc_n =[]
                    slang_perc = sum(langs_perc)
                    for(i=0;i<langs_perc.length;i++){
                        langs_perc_n.push(
                            Math.floor((langs_perc[i]/slang_perc)*10000)/100
                        )
                    }
                    console.log(langs_perc_n);
                    chart = new Chart("#chart", { // or DOM element
                        data: {
                            labels: langs,

                            datasets: [
                                {
                                    values: langs_perc_n
                                }
                            ],

                            // yMarkers: [{ label: "Marker", value: 70 }],
                            // yRegions: [{ label: "Region", start: -10, end: 50 }]
                        },
                        // lineOptions: {
                        //     dotSize: 6,          // default: 4
                        //     regionFill: 5        // default: 0
                        // },
                        title: "Languages Used",
                        type: 'bar', // or 'bar', 'line', 'pie', 'percentage'
                        height: 200,
                        colors: ['purple', '#ffa3ef', 'red']
                    });

                }

            });
            // Do fancy stuff
        }).then(null, (err) => console.error(err))

    $('.github_link').click(function () {
        alert('clicked link')
        window.open(github_url);
    })
});