/**
 * Failure View !
 */
Ext.define("MoveVehicle.view.Failure", {
    extend: 'Ext.Container', //extend Container
    requires: [
        'Ext.TitleBar',
		'Ext.form.Panel',
		'Ext.form.FieldSet',
		'Ext.Audio'
    ],
    config: {
		fullscreen: true,
		id:'move_failure_view',
		layout: {
            type: 'card',
            animation: {
                duration: 9000,
				type:'pop',
                easing: 'ease-in-out'
            }
        },
        items: [{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Move a Vehicle'
            	},
	            {
				 	layout:'vbox',
//					scrollable:false,
					items: [{
								xtype: 'panel',
								//align:'center',
								style:'background-color:#FF6633',
								items: [{
														// xtype: 'panel',
														 html: '<div align="center">There was a problem moving the vehicle</div>',
														 centered:true
													}],
								height:70
								//flex: 0.7,
							},
							{
								xtype: 'formpanel',
		//						scrollable:false,
								flex: 1,
								layout:'vbox',
								items: [{
											flex: 1,	
											items: [{
														 xtype: 'button',
														 centered:true,
														 id:'try_again',
												         text: 'Try Again',
														 ui: 'action'
													}]
										},
										{
											flex: 1,
											items: [{
														 xtype: 'button',
			 											 centered:true,
														 id:'place_in_queue',
												         text: 'Place in Queue',
														 ui: 'action'
													}]
										}]
							},
							{
								xtype: 'audio',
								id:'audio_failure_cmp',
								hidden: true,
								url  : "Failure-Beep.wav"
							}]
				}]
    },
    animateTo: function(dir,anims,duration) {
        Ext.getCmp('move_failure_view').getLayout().setAnimation({
            duration: duration,
            easing: 'ease-in-out',
            type: anims,
            direction: dir
        });
    }
});