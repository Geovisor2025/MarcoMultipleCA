var size = 0;
var placement = 'point';

var style_PerimetrosAGS_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "15.600000000000001px \'Open Sans\', sans-serif";
    var labelFill = "#1a00f3";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.5;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("COD_AG1") !== null) {
        labelText = String(feature.get("COD_AG1"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(37,48,223,1.0)', lineDash: [20.139999999999997,4.028], lineCap: 'butt', lineJoin: 'miter', width: 4.028}),fill: new ol.style.Fill({color: 'rgba(133,182,111,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
