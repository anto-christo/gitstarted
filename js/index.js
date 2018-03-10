$(document).ready(function(){

	$("#submit").click(function(){

		var username = $("#username").val();
		var password = $("#password").val();

		var languages = []; // All langs of user
		var sizes = []; // All lang sizes of user

		$.ajax({
			type:'POST',
			url:'/submit',
			data:{username:username,password:password},
			dataType:'json',
			success: function(data){

				console.log(data.res);

				for(var k in data.res){
					$.ajax({
						type:'GET',
						url:data.res[k].languages_url,
						dataType:'json',
						async:false,
						success: function(langinfo){
							console.log(data.res[k].name);
							
							var langs = Object.keys(langinfo);
							//console.log(langs);
	
							var langsize = Object.values(langinfo);
							//console.log(langsize);
	
							for(var i=0;i<langs.length;i++){

								console.log(langs[i]);

								if(languages.indexOf(langs[i]) == -1){

									languages.push(langs[i]);
									sizes.push(langsize[i]);
								}

								else{
									var pos = languages.indexOf(langs[i]);
									console.log("curr-size="+langsize[i])
									console.log("b="+sizes[pos]);
									sizes[pos]+=langsize[i];
									console.log("a="+sizes[pos]);
								}

								console.log(languages);
								console.log(sizes);

							}
						}
					});
				}
			}
		});
	});
});