/* ------------------------------------------------------------------------------ */
/* initDatepicker */
/* ------------------------------------------------------------------------------ */
function initDatepicker(){
	//vars
	var $datepickers = $('.datepicker'),
		datepickerObj = { count:0 },
		format = 'dd-mm-yy';
	
	//exit if no instance
	if ( !$datepickers.length || typeof($.fn.datepicker) != 'function' ) return false;
	
	//process instances
	$.each($datepickers, function(idx,ele){
		
		//cache elems
		var $ele = $(ele),
			$btnTrigger = $ele.next('.btnDatepicker');
		
		//init jqui
		$ele.attr('readonly', 'true');
		datepickerObj['datepicker' + (idx+1)] = $ele.datepicker({
			dateFormat: 	format,
			numberOfMonths: 1,
			onSelect: 		function( selectedDate ) {},
			beforeShow: 	function(input, inst) {}
		});
		
		//add to window obj
		datepickerObj.count++;
		
		//bind trigger btn
		$btnTrigger.on('click', function(e){
			e.preventDefault();
			$ele.datepicker('show').focus();
		});
		
		//bind window resize
		$(window).on('resize', function(e){
			$ele.datepicker('hide').blur();
		});
		
	});	
	
	return datepickerObj;
}
