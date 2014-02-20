$(function() {
	$('textarea').bind("keypress keyup keydown", editorShortcutHandler) 

	function editorShortcutHandler(event) {
		if (editorShortcutHandler.pause) return
		
		if (!event.shiftKey || !event.altKey) return
		//console.log("in handler "+event.which+' '+(new Date))
		// pause from keydown to skip keyup 
		function pause() {
			editorShortcutHandler.pause = true
			
			setTimeout(function() { editorShortcutHandler.pause = false }, 2000)
		}
		
		var chr = String.fromCharCode(event.which)
		
		var button = $(this).prevAll('.editor-container').find('input[accesskey='+chr+']')
		if (button[0]) {
			pause()				
			//console.log(button.length)
			button.click()	
			
			event.stopPropagation()
			event.preventDefault()
		}
		
	}
})
