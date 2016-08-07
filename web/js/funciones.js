$(document).ready(function(){
	populateArtefactos();
	agregarDragAndDrop("#documentacionPanelBody", "DocumentacionFactory");
});

/**
 * Agrega la funcionalidad de Drag and Drop al selector de artefactos MDO
 * y al área de trabajo de los contenidos didácticos.
 * 
 * @param {string} selector ID de jQuery del selector de artefactos
 * @param {type} nombreFabrica El nombre de la fábrica MDO a utilizar.
 */
function agregarDragAndDrop(selector, nombreFabrica) {
	dragula([
		document.querySelector(selector),
		document.querySelector("#contenidoDidacticoBody")
	], {
		copy: function(el, source) {
			return source === document.querySelector(selector);
		},
		accepts: function(el, target) {
			return target !== document.querySelector(selector);
		},
		removeOnSpill: true
	}).on("drag", function(el) {
		el.className = el.className.replace("ex-moved", "");
	}).on("drop", function(el) {
		var artefacto = el.className.replace("gu-transit", "").trim();
		if (!el.innerHTML.includes("mdo-"))
			el.innerHTML = MDOFactories[nombreFabrica].crear(artefacto);
		el.className += " ex-moved";
	}).on("over", function(el, container) {
		container.className += " ex-over";
	}).on("out", function(el, container) {
		container.className = container.className.replace("ex-over", "");
	});
}

/**
 * Rellena los selectores de artefactos de todas las etapas MDO.
 * OJO: ESTA FUNCIÓN ES ÚNICAMENTE DE PRUEBA Y NO IRÁ EN PRODUCCIÓN.
 */
function populateArtefactos() {
	populate("VivenciaFactory", "#vivenciaPanelBody");
	populate("ConceptualizacionFactory", "#conceptualizacionPanelBody");
	populate("DocumentacionFactory", "#documentacionPanelBody");
	populate("AplicacionFactory", "#aplicacionPanelBody");
	populate("AmpliacionFactory", "#ampliacionPanelBody");
}

/**
 * Rellena el selector de artefactos MDO con la fábrica indicada.
 * 
 * @param {string} nombreFabrica El nombre de la fábrica MDO a utilzar.
 * @param {string} selector ID de jQuery del selector de artefactos
 */
function populate(nombreFabrica, selector) {
	var body = $(selector);
	var lista = MDOFactories[nombreFabrica].listaArtefactos();
	lista.forEach(function(e) {
		body.append(e);
	});
}