var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PerimetrosABAS_1 = new ol.format.GeoJSON();
var features_PerimetrosABAS_1 = format_PerimetrosABAS_1.readFeatures(json_PerimetrosABAS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerimetrosABAS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerimetrosABAS_1.addFeatures(features_PerimetrosABAS_1);
var lyr_PerimetrosABAS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerimetrosABAS_1, 
                style: style_PerimetrosABAS_1,
                popuplayertitle: 'Perimetros ABAS',
                interactive: true,
                title: '<img src="styles/legend/PerimetrosABAS_1.png" /> Perimetros ABAS'
            });
var format_PerimetrosAES_2 = new ol.format.GeoJSON();
var features_PerimetrosAES_2 = format_PerimetrosAES_2.readFeatures(json_PerimetrosAES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerimetrosAES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerimetrosAES_2.addFeatures(features_PerimetrosAES_2);
var lyr_PerimetrosAES_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerimetrosAES_2, 
                style: style_PerimetrosAES_2,
                popuplayertitle: 'Perimetros AES',
                interactive: false,
                title: '<img src="styles/legend/PerimetrosAES_2.png" /> Perimetros AES'
            });
var format_PerimetrosAGS_3 = new ol.format.GeoJSON();
var features_PerimetrosAGS_3 = format_PerimetrosAGS_3.readFeatures(json_PerimetrosAGS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerimetrosAGS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerimetrosAGS_3.addFeatures(features_PerimetrosAGS_3);
var lyr_PerimetrosAGS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerimetrosAGS_3, 
                style: style_PerimetrosAGS_3,
                popuplayertitle: 'Perimetros AGS',
                interactive: false,
                title: '<img src="styles/legend/PerimetrosAGS_3.png" /> Perimetros AGS'
            });
var format_INRAParcelas_4 = new ol.format.GeoJSON();
var features_INRAParcelas_4 = format_INRAParcelas_4.readFeatures(json_INRAParcelas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INRAParcelas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INRAParcelas_4.addFeatures(features_INRAParcelas_4);
var lyr_INRAParcelas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INRAParcelas_4, 
                style: style_INRAParcelas_4,
                popuplayertitle: 'INRA Parcelas',
                interactive: true,
    title: 'INRA Parcelas<br />\
    <img src="styles/legend/INRAParcelas_4_0.png" /> No Coincide<br />\
    <img src="styles/legend/INRAParcelas_4_1.png" /> Si Coincide<br />' });
var format_UPASProcedencia_5 = new ol.format.GeoJSON();
var features_UPASProcedencia_5 = format_UPASProcedencia_5.readFeatures(json_UPASProcedencia_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UPASProcedencia_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UPASProcedencia_5.addFeatures(features_UPASProcedencia_5);
cluster_UPASProcedencia_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_UPASProcedencia_5
});
var lyr_UPASProcedencia_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_UPASProcedencia_5, 
                style: style_UPASProcedencia_5,
                popuplayertitle: 'UPAS Procedencia',
                interactive: true,
    title: 'UPAS Procedencia<br />\
    <img src="styles/legend/UPASProcedencia_5_0.png" /> Nuevos - Operativo Campo<br />\
    <img src="styles/legend/UPASProcedencia_5_1.png" /> RA<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_PerimetrosABAS_1.setVisible(true);lyr_PerimetrosAES_2.setVisible(true);lyr_PerimetrosAGS_3.setVisible(true);lyr_INRAParcelas_4.setVisible(true);lyr_UPASProcedencia_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PerimetrosABAS_1,lyr_PerimetrosAES_2,lyr_PerimetrosAGS_3,lyr_INRAParcelas_4,lyr_UPASProcedencia_5];
lyr_PerimetrosABAS_1.set('fieldAliases', {'Depto.': 'Depto.', 'Provincia': 'Provincia', 'Municipio': 'Municipio', 'Comunidad': 'Comunidad', 'Autoridad': 'Autoridad', 'Org. Com.': 'Org. Com.', 'Prin. Acce': 'Prin. Acce', 'Prin. Agua': 'Prin. Agua', 'Daño Max': 'Daño Max', 'Servicios': 'Servicios', 'En. Elec.': 'En. Elec.', });
lyr_PerimetrosAES_2.set('fieldAliases', {'gid': 'gid', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'upa_13_ae': 'upa_13_ae', 'sup13ha_ae': 'sup13ha_ae', 'pre_ace_ae': 'pre_ace_ae', 'n_aba_ae': 'n_aba_ae', 'n_com_ae': 'n_com_ae', 'n_est_ae': 'n_est_ae', 'n_tco_ae': 'n_tco_ae', 'viv_12_ae': 'viv_12_ae', 'viv_ac_ae': 'viv_ac_ae', 'ord_mun': 'ord_mun', 'cod_ag': 'cod_ag', 'con_ag': 'con_ag', 'ag_unico': 'ag_unico', 'cod_ae': 'cod_ae', 'con_ae': 'con_ae', 'ae_unico': 'ae_unico', 'observ': 'observ', 'upa_fin': 'upa_fin', 'usr_insert': 'usr_insert', 'fec_insert': 'fec_insert', 'usr_update': 'usr_update', 'fec_update': 'fec_update', 'n_cuest': 'n_cuest', 'n_empadro': 'n_empadro', 'COD_AES': 'COD_AES', });
lyr_PerimetrosAGS_3.set('fieldAliases', {'gid': 'gid', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'upa_13_ag': 'upa_13_ag', 'sup13ha_ag': 'sup13ha_ag', 'pre_ace_ag': 'pre_ace_ag', 'viv_12_ag': 'viv_12_ag', 'viv_ace_ag': 'viv_ace_ag', 'n_aba_ag': 'n_aba_ag', 'n_com_ag': 'n_com_ag', 'n_est_ag': 'n_est_ag', 'n_tco_ag': 'n_tco_ag', 'ord_mun': 'ord_mun', 'cod_ag': 'cod_ag', 'con_ag': 'con_ag', 'ag_unico': 'ag_unico', 'observ': 'observ', 'upa_fin': 'upa_fin', 'c_op': 'c_op', 'usr_insert': 'usr_insert', 'fec_insert': 'fec_insert', 'usr_update': 'usr_update', 'fec_update': 'fec_update', 'COD_AG1': 'COD_AG1', });
lyr_INRAParcelas_4.set('fieldAliases', {'N. Doc.': 'N. Doc.', 'Parcela': 'Parcela', 'ClaseTitul': 'ClaseTitul', 'Califica.': 'Califica.', 'Clasifica.': 'Clasifica.', 'Nombre': 'Nombre', 'Coincide': 'Coincide', });
lyr_UPASProcedencia_5.set('fieldAliases', {'Depto': 'Depto', 'Provincia': 'Provincia', 'Municipio': 'Municipio', 'Comunidad': 'Comunidad', 'Productor': 'Productor', 'Procedenci': 'Procedenci', 'Valida_Cam': 'Valida_Cam', 'Prod/Estab': 'Prod/Estab', 'Proced_Fin': 'Proced_Fin', 'Proced': 'Proced', });
lyr_PerimetrosABAS_1.set('fieldImages', {'Depto.': 'TextEdit', 'Provincia': 'TextEdit', 'Municipio': 'TextEdit', 'Comunidad': 'TextEdit', 'Autoridad': 'TextEdit', 'Org. Com.': 'TextEdit', 'Prin. Acce': 'TextEdit', 'Prin. Agua': 'TextEdit', 'Daño Max': 'TextEdit', 'Servicios': 'TextEdit', 'En. Elec.': 'TextEdit', });
lyr_PerimetrosAES_2.set('fieldImages', {'gid': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'upa_13_ae': 'TextEdit', 'sup13ha_ae': 'TextEdit', 'pre_ace_ae': 'TextEdit', 'n_aba_ae': 'TextEdit', 'n_com_ae': 'TextEdit', 'n_est_ae': 'TextEdit', 'n_tco_ae': 'TextEdit', 'viv_12_ae': 'TextEdit', 'viv_ac_ae': 'TextEdit', 'ord_mun': 'TextEdit', 'cod_ag': 'TextEdit', 'con_ag': 'TextEdit', 'ag_unico': 'TextEdit', 'cod_ae': 'TextEdit', 'con_ae': 'TextEdit', 'ae_unico': 'TextEdit', 'observ': 'TextEdit', 'upa_fin': 'TextEdit', 'usr_insert': 'TextEdit', 'fec_insert': 'TextEdit', 'usr_update': 'TextEdit', 'fec_update': 'TextEdit', 'n_cuest': 'TextEdit', 'n_empadro': 'TextEdit', 'COD_AES': 'TextEdit', });
lyr_PerimetrosAGS_3.set('fieldImages', {'gid': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'upa_13_ag': 'TextEdit', 'sup13ha_ag': 'TextEdit', 'pre_ace_ag': 'TextEdit', 'viv_12_ag': 'TextEdit', 'viv_ace_ag': 'TextEdit', 'n_aba_ag': 'TextEdit', 'n_com_ag': 'TextEdit', 'n_est_ag': 'TextEdit', 'n_tco_ag': 'TextEdit', 'ord_mun': 'TextEdit', 'cod_ag': 'TextEdit', 'con_ag': 'TextEdit', 'ag_unico': 'TextEdit', 'observ': 'TextEdit', 'upa_fin': 'TextEdit', 'c_op': 'TextEdit', 'usr_insert': 'TextEdit', 'fec_insert': 'TextEdit', 'usr_update': 'TextEdit', 'fec_update': 'TextEdit', 'COD_AG1': 'TextEdit', });
lyr_INRAParcelas_4.set('fieldImages', {'N. Doc.': 'TextEdit', 'Parcela': 'TextEdit', 'ClaseTitul': 'TextEdit', 'Califica.': 'TextEdit', 'Clasifica.': 'TextEdit', 'Nombre': 'TextEdit', 'Coincide': 'TextEdit', });
lyr_UPASProcedencia_5.set('fieldImages', {'Depto': 'TextEdit', 'Provincia': 'TextEdit', 'Municipio': 'TextEdit', 'Comunidad': 'TextEdit', 'Productor': 'TextEdit', 'Procedenci': 'TextEdit', 'Valida_Cam': 'TextEdit', 'Prod/Estab': 'TextEdit', 'Proced_Fin': 'TextEdit', 'Proced': 'TextEdit', });
lyr_PerimetrosABAS_1.set('fieldLabels', {'Depto.': 'inline label - always visible', 'Provincia': 'inline label - always visible', 'Municipio': 'inline label - always visible', 'Comunidad': 'inline label - always visible', 'Autoridad': 'inline label - always visible', 'Org. Com.': 'inline label - always visible', 'Prin. Acce': 'inline label - always visible', 'Prin. Agua': 'inline label - always visible', 'Daño Max': 'inline label - always visible', 'Servicios': 'inline label - always visible', 'En. Elec.': 'inline label - always visible', });
lyr_PerimetrosAES_2.set('fieldLabels', {'gid': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'upa_13_ae': 'no label', 'sup13ha_ae': 'no label', 'pre_ace_ae': 'no label', 'n_aba_ae': 'no label', 'n_com_ae': 'no label', 'n_est_ae': 'no label', 'n_tco_ae': 'no label', 'viv_12_ae': 'no label', 'viv_ac_ae': 'no label', 'ord_mun': 'no label', 'cod_ag': 'no label', 'con_ag': 'no label', 'ag_unico': 'no label', 'cod_ae': 'no label', 'con_ae': 'no label', 'ae_unico': 'no label', 'observ': 'no label', 'upa_fin': 'no label', 'usr_insert': 'no label', 'fec_insert': 'no label', 'usr_update': 'no label', 'fec_update': 'no label', 'n_cuest': 'no label', 'n_empadro': 'no label', 'COD_AES': 'no label', });
lyr_PerimetrosAGS_3.set('fieldLabels', {'gid': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'upa_13_ag': 'no label', 'sup13ha_ag': 'no label', 'pre_ace_ag': 'no label', 'viv_12_ag': 'no label', 'viv_ace_ag': 'no label', 'n_aba_ag': 'no label', 'n_com_ag': 'no label', 'n_est_ag': 'no label', 'n_tco_ag': 'no label', 'ord_mun': 'no label', 'cod_ag': 'no label', 'con_ag': 'no label', 'ag_unico': 'no label', 'observ': 'no label', 'upa_fin': 'no label', 'c_op': 'no label', 'usr_insert': 'no label', 'fec_insert': 'no label', 'usr_update': 'no label', 'fec_update': 'no label', 'COD_AG1': 'no label', });
lyr_INRAParcelas_4.set('fieldLabels', {'N. Doc.': 'inline label - always visible', 'Parcela': 'inline label - always visible', 'ClaseTitul': 'inline label - always visible', 'Califica.': 'inline label - always visible', 'Clasifica.': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'Coincide': 'inline label - always visible', });
lyr_UPASProcedencia_5.set('fieldLabels', {'Depto': 'inline label - always visible', 'Provincia': 'inline label - always visible', 'Municipio': 'inline label - always visible', 'Comunidad': 'inline label - always visible', 'Productor': 'inline label - always visible', 'Procedenci': 'inline label - always visible', 'Valida_Cam': 'inline label - always visible', 'Prod/Estab': 'inline label - always visible', 'Proced_Fin': 'inline label - always visible', 'Proced': 'inline label - always visible', });
lyr_UPASProcedencia_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});