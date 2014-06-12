/**
 * Main View !
 */
Ext.define("MoveVehicle.view.Main", {
    extend: 'Ext.Container', //extend Container
    requires: [
        'Ext.TitleBar',
		'Ext.form.Panel',
		'Ext.form.FieldSet'
    ],
    config: {
		id:'start_move_main_view',
		fullscreen: true,
		//scrollable:true,
		layout: {
            type: 'card'
        },
        items: [{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Move a Vehicle'
            	},
	            {
				 	layout:'vbox',
					id:'bottom_container',
					items: [{
								xtype: 'panel',
								//align:'center',
								id:'msgpanel',
								items: [{
														// xtype: 'panel',
														id:'msgpanelitems',
														 html: '<div align="center"></div>',
														 centered:true
													}],
								height:70
								//flex: 0.7,
							},
							{
								xtype: 'formpanel',
								id:'move_vehicle_form',
								flex: 1,
								items: [{
											xtype: 'fieldset',
											items: [{
														xtype: 'textfield',
														name: 'stock_number',
														placeHolder: 'Stock Number'
													}]
										},
										{
											xtype: 'fieldset',
											items: [{
														xtype: 'textfield',
														name: 'location',
														placeHolder: 'Location'
													}]
										},
										{
											layout: {
													type: 'vbox',
													align: 'center'
													},
											items: [{
														 xtype: 'button',
														 align: 'center',
														 id:'move_vehicle',
												         text: 'Move Vehicle',
														 ui: 'action'
													}]
										}]
							},
                                                        {
								xtype : 'audio',
								id:'audio_success_cmp',
								hidden: true,
								url   : "Success-Bleep.wav"
							},
                                                        // Need to comment out or eliminate this section when the queue is implemented
							{
								xtype: 'audio',
								id:'audio_failure_cmp',
								hidden: true,
								url  : "Failure-Beep.wav"
							}]
				}]
    }
});