'use strict';

app.registro = kendo.observable({
    onShow: function() {
        $( ".formulario .km-list li" ).addClass( "col-xs-8 col-xs-offset-2" );
    },
    afterShow: function() {}
});

// START_CUSTOM_CODE_registro
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_registro
(function(parent) {
    var registroModel = kendo.observable({
        fields: {
            firma: '',
            condiciones: '',
            recibo: '',
            tarjeta: '',
            referencia: '',
            distrito: '',
            provincia: '',
            departamento: '',
            direccion: '',
            genero: '',
            numero: '',
            documento: '',
            correo: '',
            celular: '',
            telefono: '',
            nacimiento: '',
            apellidos: '',
            nombres: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('registroModel', registroModel);
})(app.registro);

// START_CUSTOM_CODE_registroModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_registroModel