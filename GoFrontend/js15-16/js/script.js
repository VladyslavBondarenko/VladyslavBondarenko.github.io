function GoogleCallback(jqueryObj, data){
	console.log('data',data);
}

$(function(){
		
	$.ajax({
		url:
		'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q=test&callback=GoogleCallback&context=?',
		dataType: 'jsonp',
		success: function() {
			console.log('success');
		},
		error: function() {
			console.log('error');
		}
	});
	

});   

//function GoogleCallback (func, data) {
//    window[func](data);
//}
//
//$.getJSON("http://ajax.googleapis.com/ajax/services/search/web?v=1.0?key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q=PHP&callback=GoogleCallback&context=?",
//function(data){
//    var ul = document.createElement("ul");
//    $.each(data.results, function(i, val){
//            var li = document.createElement("li");
//            var inner = '&lt;a href="'+val.url+'" title="'+val.url+'" target="_blank"&gt;'+val.title+"&lt;/a&gt; - "+val.content;                         
//            ul.appendChild(li);
//    });
//    $('body').html(ul);
//});



