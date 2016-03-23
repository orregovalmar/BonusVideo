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
            VideoPlayer.play(
                "file:///android_asset/www/video.mp4", {
                    volume: 0.5,
                    scalingMode: VideoPlayer.SCALING_MODE.SCALE_TO_FIT_WITH_CROPPING
                },
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
