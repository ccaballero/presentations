

$(function() {

	var waitingSecond = false
			
	$(document).keypress(function(evt) {
		
		if ( evt.altKey) {		
			if (evt.which == 101 || evt.which == 1091) { // alt-e ENG + RUS
				var editLink = $('a[href$="/edit"][href^="/node"]')
				if (!editLink[0]) return
				document.location.href = editLink.attr('href')					
				return false
			}
			else if (evt.which == 115 || evt.which == 1099) { // alt-s
				var submitLink = $('#edit-submit')
				if (!submitLink[0]) return
				submitLink.click()
				return false
			}
			else if (evt.which == 98 || evt.which == 1080) {   // alt-b	, double press to scroll to bottom
				
				var textarea = document.getElementById('edit-body')
				if (!textarea) return
				
				
				if (!waitingSecond) {
					textarea.style.height = window.innerHeight-30+'px'
					textarea.scrollIntoView(false)
					waitingSecond = true
				} else {
					textarea.scrollTop = textarea.scrollHeight								
				}
				textarea.focus()
				
				setTimeout(function() { waitingSecond = false }, 500)
				return false
								
			} 
			
		
		} else if (evt.ctrlKey) {
			var link = null
			if (evt.keyCode == 39) {
				link = document.getElementById("page-next")
			} else if (evt.keyCode == 37) {
				link = document.getElementById("page-previous")
			} else if (evt.keyCode == 38) {
				link = document.getElementById("page-up")
			}
			if (!link) return
			link = link.getAttribute('href')
			document.location.href = link 
			//return false
		}
		
		

	})

})

