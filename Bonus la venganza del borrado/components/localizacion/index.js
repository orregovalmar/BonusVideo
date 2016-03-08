'use strict';

app.localizacion = kendo.observable({
    onShow: function () {
        // $( ".formulario .km-list li" ).addClass( "col-xs-8 col-xs-offset-2" );
        cargarMapa();
    },
    afterShow: function () {}
});

// START_CUSTOM_CODE_buscar
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_buscar


// START_CUSTOM_CODE_buscarModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_buscarModel

function cargarMapa() {
    $("#map").remove();
    var div = $("<div id='map'></div>").text("");
    $("#registrosLocalizacion").after(div);

	
    $("#map").css("width", $(window).width());
    $("#map").css("height", $(window).height());
    $("#map").kendoMap({
        center: [-12.11391, -77.03933],
        zoom: 10,
        layers: [{
            type: "tile",
            urlTemplate: "http://a.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png",
            attribution: "&copy; OpenStreetMap"
                    }]
    });

    var map = $("#map").data("kendoMap");
    $("#map").click(function (e) {
        $(".k-marker.k-marker-pin-target").hide();;
        var loc = map.eventToLocation(e);
        map.markers.add({
            location: loc,
            tooltip: {
                content: "Ubicación"
            }
        });
        $("#registrosLocalizacion").html("<h3>" + loc + "<h3>");
        console.log(loc);
        // $(".k-marker.k-marker-pin-target").css("border", "13px solid red");
    });
    $("#registrosLocalizacion").html("");
}

function confirmarLocalizacion() {
    parent.history.back();
    $("#referenciaLocalizacion").val($("#registrosLocalizacion").text());
    return false;
    

}