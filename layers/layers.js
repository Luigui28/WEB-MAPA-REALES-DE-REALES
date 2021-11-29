var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_sanmartin_limite_provincia_1 = new ol.format.GeoJSON();
var features_sanmartin_limite_provincia_1 = format_sanmartin_limite_provincia_1.readFeatures(json_sanmartin_limite_provincia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sanmartin_limite_provincia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sanmartin_limite_provincia_1.addFeatures(features_sanmartin_limite_provincia_1);
var lyr_sanmartin_limite_provincia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sanmartin_limite_provincia_1, 
                style: style_sanmartin_limite_provincia_1,
                interactive: true,
    title: 'sanmartin_limite_provincia<br />\
    <img src="styles/legend/sanmartin_limite_provincia_1_0.png" /> BELLAVISTA<br />\
    <img src="styles/legend/sanmartin_limite_provincia_1_1.png" /> EL DORADO<br />\
    <img src="styles/legend/sanmartin_limite_provincia_1_2.png" /> HUALLAGA<br />\
    <img src="styles/legend/sanmartin_limite_provincia_1_3.png" /> LAMAS<br />\
    <img src="styles/legend/sanmartin_limite_provincia_1_4.png" /> MARISCAL CACERES<br />\
    <img src="styles/legend/sanmartin_limite_provincia_1_5.png" /> MOYOBAMBA<br />\
    <img src="styles/legend/sanmartin_limite_provincia_1_6.png" /> PICOTA<br />\
    <img src="styles/legend/sanmartin_limite_provincia_1_7.png" /> RIOJA<br />\
    <img src="styles/legend/sanmartin_limite_provincia_1_8.png" /> SAN MARTIN<br />\
    <img src="styles/legend/sanmartin_limite_provincia_1_9.png" /> TOCACHE<br />\
    <img src="styles/legend/sanmartin_limite_provincia_1_10.png" /> <br />'
        });
var format_sitios_arquelogicos_guardada_2 = new ol.format.GeoJSON();
var features_sitios_arquelogicos_guardada_2 = format_sitios_arquelogicos_guardada_2.readFeatures(json_sitios_arquelogicos_guardada_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sitios_arquelogicos_guardada_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sitios_arquelogicos_guardada_2.addFeatures(features_sitios_arquelogicos_guardada_2);
var lyr_sitios_arquelogicos_guardada_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sitios_arquelogicos_guardada_2, 
                style: style_sitios_arquelogicos_guardada_2,
                interactive: true,
                title: '<img src="styles/legend/sitios_arquelogicos_guardada_2.png" /> sitios_arquelogicos_guardada'
            });

lyr_OSMStandard_0.setVisible(true);lyr_sanmartin_limite_provincia_1.setVisible(true);lyr_sitios_arquelogicos_guardada_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_sanmartin_limite_provincia_1,lyr_sitios_arquelogicos_guardada_2];
lyr_sanmartin_limite_provincia_1.set('fieldAliases', {'gid': 'gid', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'ccdd': 'ccdd', 'nombdep': 'nombdep', 'ccpp': 'ccpp', 'nombprov': 'nombprov', 'capital': 'capital', 'idprov': 'idprov', 'shape_star': 'shape_star', 'shape_stle': 'shape_stle', 'orig_fid': 'orig_fid', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_sitios_arquelogicos_guardada_2.set('fieldAliases', {'gid': 'gid', 'dpto': 'dpto', 'prov': 'prov', 'dist': 'dist', 'nombre': 'nombre', 'fuente': 'fuente', 'latitud': 'latitud', 'longitud': 'longitud', });
lyr_sanmartin_limite_provincia_1.set('fieldImages', {'gid': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'ccdd': 'TextEdit', 'nombdep': 'TextEdit', 'ccpp': 'TextEdit', 'nombprov': 'TextEdit', 'capital': 'TextEdit', 'idprov': 'TextEdit', 'shape_star': 'TextEdit', 'shape_stle': 'TextEdit', 'orig_fid': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_sitios_arquelogicos_guardada_2.set('fieldImages', {'gid': 'TextEdit', 'dpto': 'TextEdit', 'prov': 'TextEdit', 'dist': 'TextEdit', 'nombre': 'TextEdit', 'fuente': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', });
lyr_sanmartin_limite_provincia_1.set('fieldLabels', {'gid': 'no label', 'objectid_1': 'no label', 'objectid': 'no label', 'ccdd': 'no label', 'nombdep': 'no label', 'ccpp': 'no label', 'nombprov': 'no label', 'capital': 'no label', 'idprov': 'no label', 'shape_star': 'no label', 'shape_stle': 'no label', 'orig_fid': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_sitios_arquelogicos_guardada_2.set('fieldLabels', {'gid': 'no label', 'dpto': 'no label', 'prov': 'no label', 'dist': 'no label', 'nombre': 'no label', 'fuente': 'no label', 'latitud': 'no label', 'longitud': 'no label', });
lyr_sitios_arquelogicos_guardada_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});