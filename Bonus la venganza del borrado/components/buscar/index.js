'use strict';

app.buscar = kendo.observable({
    onShow: function() {
        $( ".formulario .km-list li" ).addClass( "col-xs-8 col-xs-offset-2" );
    },
    afterShow: function() {}
});

// START_CUSTOM_CODE_buscar
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_buscar
(function(parent) {
    var buscarModel = kendo.observable({
        fields: {
            busnumero: '',
            busdocumento: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('buscarModel', buscarModel);
})(app.buscar);

// START_CUSTOM_CODE_buscarModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_buscarModel