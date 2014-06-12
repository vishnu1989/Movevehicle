/**
 * Start View
 */
Ext.define("MoveVehicle.view.Start_View", {
    extend: 'Ext.Container',//extend Container
    requires: [],
	id:'Start_View_id',
	fullscreen: true,
//	scrollable: true,
    config: {
        layout: {
            type: 'card'
        },
        items: [{	 xclass: 'MoveVehicle.view.Main'  }]
    },
    animateTo: function(dir,anims,duration) {
        Ext.getCmp('Start_View_id').getLayout().setAnimation({
            duration: duration,
            easing: 'ease-in-out',
            type: anims,
            direction: dir
        });
    }
});