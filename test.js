$.ajax({
		type:'GET',
		url:'/https://api.github.com/search/repositories?q=language:html&sort=stars&order=desc',
		data:{token:token},
		dataType:'json',
		success: function(data){
			console.log(data)
		}
	});