var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Watercolor',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'watercolor'
    })
})
]
});
var format_Uistsaints_0 = new ol.format.GeoJSON();
var features_Uistsaints_0 = format_Uistsaints_0.readFeatures(json_Uistsaints_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Uistsaints_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Uistsaints_0.addFeatures(features_Uistsaints_0);var lyr_Uistsaints_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Uistsaints_0, maxResolution:28004.4661523,

                style: style_Uistsaints_0,
                title: '<img src="styles/legend/Uistsaints_0.png" /> Uist saints'
            });

lyr_Uistsaints_0.setVisible(true);
var layersList = [baseLayer,lyr_Uistsaints_0];
lyr_Uistsaints_0.set('fieldAliases', {'name': 'name', 'grid': 'grid', 'field_3': 'field_3', 'field_4': 'field_4', 'Lat': 'Lat', 'Long': 'Long', 'field_7': 'field_7', 'field_8': 'field_8', });
lyr_Uistsaints_0.set('fieldImages', {'name': 'TextEdit', 'grid': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'field_7': 'TextEdit', 'field_8': 'TextEdit', });
lyr_Uistsaints_0.set('fieldLabels', {'name': 'no label', 'grid': 'no label', 'field_3': 'no label', 'field_4': 'no label', 'Lat': 'no label', 'Long': 'no label', 'field_7': 'no label', 'field_8': 'no label', });
lyr_Uistsaints_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});