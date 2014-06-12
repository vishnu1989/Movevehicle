/**
 * Main !
 */
Ext.define("MoveVehicle.controller.Main", {
    extend: 'Ext.app.Controller',
	requires: ['Ext.Anim'],
	config: {
		control: {
			'#move_vehicle': {
				tap: 'onmovevehicleTap'
			},
			'#try_again':{
				tap: 'ontry_againTap'
			}
		}
	},
	
	init: function() {},
	
	launch: function() {},

	onmovevehicleTap: function() {
		var move_vehicle_formcmp = Ext.getCmp('move_vehicle_form');
		var stock_number_val_tmp = move_vehicle_formcmp.getValues()['stock_number'];
		var location_val_tmp = move_vehicle_formcmp.getValues()['location'];
                var stock_number_val = stock_number_val_tmp.toUpperCase();
                var location_val = location_val_tmp.toUpperCase();
		
		var xmlString = '<?xml version="1.0" encoding="ISO-8859-1" ?>' +
							'<inventory>' +
								'<product>pdaInventory</product>' +
								' <vstockno>' + escape(stock_number_val) + '</vstockno>' +
								' <vehicleDetails>' +
									' <location>' + escape(location_val) + '</location>' +
									' <costs/>' +
								'</vehicleDetails>' +
							'</inventory>';
		var url ="./API/link.php?url=http://pinpro:8080/pinnaclepro-web/inventory/updateVehiclePartInputServlet";		
                
		var xmlhttp = new XMLHttpRequest(); 
		var res = '';
		xmlhttp.onreadystatechange=function(){
			if (xmlhttp.readyState==4 && xmlhttp.status==200){
					//Get The Response XML
					var response = xmlhttp.responseXML;
					//Fetch the Root Node
					x=response.getElementsByTagName("responses");
					//Loop though root Node
                    for (i=0;i<x.length;i++)
					{
					  //Fertch the Response And Error- Response	
					  rxx=x[i].getElementsByTagName("response");
					  erxx=x[i].getElementsByTagName("error-responses");
					  //If Success for Stock Number And Location
					  if(rxx[0] && !erxx[0])
					  {
						  fstNm = rxx[0].childNodes[0];
						  if(fstNm.nodeValue == 'OK Message Processed Successfully!')
						  {
								res = "success";
						  }
					  }
					  else //If Fails for Stock Number And Location
					  {
							res = "failure";
					  }
					}
			}
		}
		// Open a connection to the server
		xmlhttp.open("POST",url,false);
		
		// Tell the server you're sending it XML
		xmlhttp.setRequestHeader("Content-Type", "text/xml");
			
		xmlhttp.send(xmlString);
						  
		//If Fails for Stock Number And Location
//		
//		
//		
//		if(res=='failure')
//		{
//			var move_failure_view_id = Ext.getCmp('move_failure_view');
//			Ext.getCmp('Start_View_id').animateTo('','pop',300);
//			if(move_failure_view_id) {
//			    Ext.getCmp('Start_View_id').setActiveItem(move_failure_view_id);
//			}
//			else
//			{
//				var move_failure_view_cmp = Ext.create('MoveVehicle.view.Failure'); 
//				move_failure_view_id = Ext.getCmp('move_failure_view');
//				Ext.getCmp('Start_View_id').setActiveItem(move_failure_view_cmp);
//			}
//			var audio_failure_cmp_id = Ext.getCmp('audio_failure_cmp');
//			audio_failure_cmp_id.play();
//		}

		if(res=='failure')					  //If Success for Stock Number And Location
		{
			var start_move_main_view_id = Ext.getCmp('start_move_main_view');
			Ext.getCmp('Start_View_id').animateTo('','pop',300);
			if(start_move_main_view_id) {
				Ext.getCmp('msgpanel').setStyle('background-color:#FF6633'); 				//Set the BackGround Color to Green
				//Set the Html of Message Panel
				Ext.getCmp('msgpanelitems').setHtml('<div align="center">There was a problem moving the vehicle</div>');
				
			    Ext.getCmp('Start_View_id').setActiveItem(start_move_main_view_id);
				Ext.Anim.run(Ext.getCmp('Start_View_id'), 'pop', {
												out: false,
												autoClear: true
											});
			}
			else
			{
				var move_vehicle_view_maincmp = Ext.create('MoveVehicle.view.Main'); 
				start_move_main_view_id = Ext.getCmp('start_move_main_view');
				Ext.getCmp('Start_View_id').setActiveItem(start_move_main_view_id);
				Ext.Anim.run(Ext.getCmp('Start_View_id'), 'pop', {
												out: false,
												autoClear: true
											});
			}
			var audio_failure_cmp_id = Ext.getCmp('audio_failure_cmp');
			audio_failure_cmp_id.play();		
		}
		else if(res=='success')					  //If Success for Stock Number And Location
		{
                        move_vehicle_form.elements['stock_number'].value = '';
                        move_vehicle_form.elements['location'].value = '';
			var start_move_main_view_id = Ext.getCmp('start_move_main_view');
			Ext.getCmp('Start_View_id').animateTo('','pop',300);
			if(start_move_main_view_id) {
				Ext.getCmp('msgpanel').setStyle('background-color:#00CC33'); 				//Set the BackGround Color to Green
				//Set the Html of Message Panel
				Ext.getCmp('msgpanelitems').setHtml('<div align="center">'+stock_number_val+' Moved to '+location_val+'</div>');
				
			    Ext.getCmp('Start_View_id').setActiveItem(start_move_main_view_id);
				Ext.Anim.run(Ext.getCmp('Start_View_id'), 'pop', {
												out: false,
												autoClear: true
											});
			}
			else
			{
				var move_vehicle_view_maincmp = Ext.create('MoveVehicle.view.Main'); 
				start_move_main_view_id = Ext.getCmp('start_move_main_view');
				Ext.getCmp('Start_View_id').setActiveItem(start_move_main_view_id);
				Ext.Anim.run(Ext.getCmp('Start_View_id'), 'pop', {
												out: false,
												autoClear: true
											});
			}
			var audio_success_cmp_id = Ext.getCmp('audio_success_cmp');
			audio_success_cmp_id.play();			
		}
    },
	
	ontry_againTap: function() {
			Ext.getCmp('Start_View_id').animateTo('','pop',300);
			var start_move_main_viewcmp = Ext.getCmp('start_move_main_view');
			if(start_move_main_viewcmp) {
			    Ext.getCmp('Start_View_id').setActiveItem(Ext.getCmp('start_move_main_view'));
			}
			else
			{
				var move_vehicle_view_maincmp = Ext.create('MoveVehicle.view.Main'); 
				start_move_main_view_id = Ext.getCmp('start_move_main_view');
				Ext.getCmp('Start_View_id').setActiveItem(start_move_main_view_id);
			}
    }
});