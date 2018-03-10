function show_recommendations()
{   
    $('#filters').append(
        `<div class="container">
        
            <div class="row" style="font-size:20px">
            <div class="col-md-1"></div>
            <div class="col-md-2"><input id="1" onchange="clicked(1)" style="margin-top: -1px" type="checkbox" class="checkbox-inline" value="">Language</div>
            <div class="col-md-2"><input id="2" onchange="clicked(2)" style="margin-top: -1px" type="checkbox" class="checkbox-inline" value="">Stars</div>
            <div class="col-md-2"><input id="3" onchange="clicked(3)" style="margin-top: -1px" type="checkbox" class="checkbox-inline" value="">Contributors</div>
            <div class="col-md-2"><input id="4" onchange="clicked(4)" style="margin-top: -1px" type="checkbox" class="checkbox-inline" value="">Forks</div>
            <div class="col-md-2"><input id="5" onchange="clicked(5)" style="margin-top: -1px" type="checkbox" class="checkbox-inline" value="">Topic</div>
            <div class="col-md-1"></div>
            </div>
        </div>`
        )

    console.log("in")
    for (var i = 0; i < 12; i ++) {
    	var rep_name = 'rep_name'
    	var main_language = 'main_language'
    	var owner = 'owner'
    	var stars = 57
    	var forks = 5
    	var contributors = 12

    	if (i%3==0) 
    	{
    		$('#cards').append(
    			'<div id="blog-homepage" class="row">'
    		)
    	}
    	$('#cards').append(
    		'<div class="col-sm-3 card">\
    		 <div class="post">\
            <h4><center>'+rep_name+'</center></h4>\
            <center>\
            <div>\
            	<center class="badge" style="padding:5px;background-color: #3e78dd;padding-left:10px;padding-right:10px;margin:5px">'+main_language+'</center>\
            </div>\
            </center>\
            <div class="author-category">\
            	<center>'+owner+'</center>\
            </div>\
            <hr>\
            <p class="intro">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean\
                ultricies mi vitae est. Mauris placerat eleifend leo.</p>\
            </p>\
            <div class="row">\
                <div class="col-md-4" style="display:inline">\
                <center>\
                	<svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>\
            		'+stars+'\
                </center></div>\
                <div class="col-md-4">\
                <center>\
                	<svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>\
            		'+forks+'\
                </center></div>\
                <div class="col-md-4">\
                <center>\
                	<svg aria-hidden="true" class="octicon octicon-organization" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1 0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3-.229.59 0 1 0 1s3.005 1.366 3.005 4"></path></svg>\
            		'+contributors+'\
                </center></div>\
            </div>\
          </div>\
        </div>'
    	); // end of append
    	if (i%3==0) 
    	{
    		$('#cards').append(
    			'</div>'
    		)
    	}
    }
}   

var arr = [false,false,false,false,false]
var labels = ['Languages','Stars','Contributors','Forks','Topics']
function clicked(id)
{
    if (!arr[id-1]) 
    {
        // invisible to visible
        arr[id-1] = !arr[id-1]
        if (id==1||id==5) 
        {
           $('#s'+id).html(
                `<br><div class="row" style="display:inline-block">
                    <div class="col-md-3"></div>
                    <div class="col-md-2" style="margin-top: 5px">
                        <center style="font-size: 18px">
                            `+labels[id-1]+`
                        </center>
                    </div>
                    <div class="col-md-7">
                        <div style="width: 50%">
                            <div class="input-group">
                              <input id="`+labels[id-1]+`" type="text" class="form-control" placeholder="Search for...">
                              <span class="input-group-btn">
                                <button class="btn btn-default" type="button">Go!</button>
                              </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2"></div>
                </div>`
            ) 
        }
        else
        {
            $('#s'+id).html(
            `<br><div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-2" style="margin-top: 5px">
                    <center style="font-size: 18px">
                       `+labels[id-1]+`
                    </center>
                </div>
                <div class="col-md-7">
                    <div style="width: 50%">
                        <div class="input-group">
                          <input id="`+labels[id-1]+`" type="number" min="0" class="form-control" placeholder="Search for...">
                          <span class="input-group-btn">
                            <button class="btn btn-default" type="button">Go!</button>
                          </span>
                        </div>
                    </div>
                </div>
                <div class="col-md-2"></div>
            </div>`
        )
        }
        
    }
    else
    {
        // visible to invisible
        arr[id-1] = !arr[id-1]
        $('#s'+id).html('')
    }

}


function show_function()
{
    $('#show').html(
                `<div class="box text-center" data-animate="fadeInUp">
                <div class="container">
                    <div class="col-md-12">
                        <h3 style="font-style:italic;" >Recommended...</h3>
                        <p class="lead">Checkout these awesome repos we picked just for you !!</p>
                    </div>
                </div>
            </div>
            <div>
                <center>
                    <h2>Apply filters</h2>
                </center>
                <br>
            </div>
            <div class="container">
            <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
            <center>
                <div class="slidecontainer" style="width:100%;">
                  <input type="range" min="1" max="5" value="3" class="slider" id="slider_input" onchange="slider_change()">
                </div>
            </center>
            <br>
            <div class="col-md-1">Beginner</div>
            <div class="col-md-1"></div>
            <div class="col-md-1">Advanced beginner</div>
            <div class="col-md-2"></div>
            <div class="col-md-1">Intermediate</div>
            <div class="col-md-2"></div>
            <div class="col-md-1">Advanced intermediate</div>
            <div class="col-md-2"></div>
            <div class="col-md-1">Expert</div>

            </div>
            <div class="col-md-3"></div>
            </div>
               
            </div>
            <br><br>
            <div id="filters"></div><br>
            <div class="container">
                <div id="s1"></div>
                <div id="s2"></div>
                <div id="s3"></div>
                <div id="s4"></div>
                <div id="s5"></div>
            </div>
            <div class="container" id="cards">
                <div class="col-md-12" data-animate="fadeInUp"></div>
            </div>
            <br>
            <center>
                <button type="button" class="btn btn-success refresh_button" onclick="refresh()">
                    Show me something else!
                </button>
            </center>
            <br>
            <br>`
                )
}