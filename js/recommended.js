$( document ).ready(function() {
    $('#show_to_logged_in').hide();
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
                <div class="col-md-4" style="display:inline-block">\
                	<svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>\
            		'+stars+'\
                </div>\
                <div class="col-md-4">\
                	<svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>\
            		'+forks+'\
                </div>\
                <div class="col-md-4">\
                	<svg aria-hidden="true" class="octicon octicon-organization" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1 0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3-.229.59 0 1 0 1s3.005 1.366 3.005 4"></path></svg>\
            		'+contributors+'\
                </div>\
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
});


function login()
{
    $('#show_to_general').hide();
    $('#show_to_logged_in').show();
}