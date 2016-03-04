'use strict';

app.home = kendo.observable({
    onShow: function() {
        $('#fondoinicio').css({"height" : screen.height+"px"});
        $('#inicio').css({"height" : (screen.height/3)+"px","margin-top":((screen.height*2)/3)+"px"})
    },
    afterShow: function() {}
});

// START_CUSTOM_CODE_home
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_home

console.log(screen.width + " x " + screen.height) 
