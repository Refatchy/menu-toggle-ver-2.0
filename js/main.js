function toggleSidebar()
{
	
	
	var font = document.querySelectorAll('span.font');
	var removeTitle = document.querySelectorAll('span.title');

	removeTitle.forEach(function(x){

		var result = x.classList.toggle('active');
		// x.removeChild(x);
		

	});
	
}
