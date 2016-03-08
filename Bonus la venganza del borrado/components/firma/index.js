'use strict';

app.firma = kendo.observable({
    onShow: function () {
        cargarFirma();
    },
    afterShow: function () {
        
    }
});

 
// START_CUSTOM_CODE_firma
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_firma

function cargarFirma() {
    // $("#sig").remove();
    // var div = $("<div id='sig' style='background-color:white;'></div>").text("");
    // $("#divContenedor").html(div);


    // $("#sig").css("width");
    $("#sig").css("width", "500px");
    $("#sig").css("height", "500px");
    // console.log($(window).width());
    $('#sig').signature();

    $('#clear').click(function () {
        $('#sig').signature('clear');
    });
    $('#json').click(function () {
        alert($('#sig').signature('toJSON'));
    });
    $('#svg').click(function () {
        alert($('#sig').signature('toSVG'));
    });
}

function confirmarFirma() {
    parent.history.back();
	$("#inputFirma").val($('#sig').signature('toJSON'));
    return false;
    
}