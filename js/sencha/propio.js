/*
propio.js
Ejemplo de mensaje a pantalla con Sencha ExtJS
*/
Ext.require([
    'Ext.plugin.Viewport'
]);
Ext.application({
    name: 'HolaMundo1',
    launch : function() {
		Ext.Msg.alert(
			'Signos vitales',
			'Bienvenido a la plataforma, a continuación registraremos tus signos vitales para darte un diagnostico si es necesario o no ir al médico, el formulario solo acepta números, por tu atención gracias.'
		);
	}
});