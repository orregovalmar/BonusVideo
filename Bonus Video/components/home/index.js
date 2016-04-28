'use strict';

app.home = kendo.observable({
    onShow: function () {

    },
    afterShow: function () {}
});

// START_CUSTOM_CODE_home
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_home

(function (parent) {
    var homeModel = kendo.observable({
        fields: {
            usuario: '',
            contrasena: '',
        },
        submit: function () {
            //console.log(buscarModel.fields.busdocumento+"-"+buscarModel.fields.busnumero);

        },
        sesion: function () {
            playvideocordova.play("cuponing de ingreso.mp4",
                function () {
                    console.log("video completed");
                },
                function (err) {
                    console.log(err);
                }
            );

        }
    });

    parent.set('homeModel', homeModel);
})(app.home);
