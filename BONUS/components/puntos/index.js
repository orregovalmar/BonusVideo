'use strict';

app.puntos = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_puntos
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_puntos
(function(parent) {
    var puntosModel = kendo.observable({
        fields: {
            pundocumento: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('puntosModel', puntosModel);
})(app.puntos);

// START_CUSTOM_CODE_puntosModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_puntosModel