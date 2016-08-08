var MDOUtil = (function() {
	var MDOParser = (function() {
		/**
		 * ascoasihcoiashc
		 * @type asasd
		 */
		var _VivenciaParser = (function() {
			function ObservacionParser(nombreArtefacto, contenido) {
				
			}
			
			function VisitaParser(nombreArtefacto, contenido) {
				
			}
			
			function DemostracionParser(nombreArtefacto, contenido) {
				
			}
			
			function EnsayoParser(nombreArtefacto, contenido) {
				
			}
			
			function SimulacionParser(nombreArtefacto, contenido) {
				
			}
			
			function JuegoRolParser(nombreArtefacto, contenido) {
				
			}
			
			/**
			 * Analiza el nodo DOM pasado y lo convierte a un objeto JavaScript
			 * apropiado de la etapa MDO de Vivencia.
			 * @param {string} nombreArtefacto El nombreArtefacto del artefacto.
			 * @param {Node} contenido El nodo DOM del artefacto.
			 * @returns {Object} Un objeto que contiene la información ingresada
			 * sobre el artefacto.
			 */
			function _parse(nombreArtefacto, contenido) {
				if (nombreArtefacto.includes("observacion"))
					return ObservacionParser(nombreArtefacto, contenido);
				else if (nombreArtefacto.includes("visita"))
					return VisitaParser(nombreArtefacto, contenido);
				else if (nombreArtefacto.includes("demostracion"))
					return DemostracionParser(nombreArtefacto, contenido);
				else if (nombreArtefacto.includes("ensayo"))
					return EnsayoParser(nombreArtefacto, contenido);
				else if (nombreArtefacto.includes("simulacion"))
					return SimulacionParser(nombreArtefacto, contenido);
				else
					return JuegoRolParser(nombreArtefacto, contenido);
			}
			
			return {
				parse: _parse
			};
		})();
		
		var _ConceptualizacionParser = (function() {
			function DinamicaParser(nombreArtefacto, contenido) {
				
			}
			
			function PreguntasParser(nombreArtefacto, contenido) {
				
			}
			
			function TutoriaParser(nombreArtefacto, contenido) {
				
			}
			
			function LluviaIdeasParser(nombreArtefacto, contenido) {
				
			}
			
			function GrupoEstudioParser(nombreArtefacto, contenido) {
				
			}
			
			/**
			 * Analiza el nodo DOM pasado y lo convierte a un objeto JavaScript
			 * apropiado de la etapa MDO de Conceptualización.
			 * @param {string} nombreArtefacto El nombreArtefacto del artefacto.
			 * @param {Node} contenido El nodo DOM del artefacto.
			 * @returns {Object} Un objeto que contiene la información ingresada
			 * sobre el artefacto.
			 */
			function _parse(nombreArtefacto, contenido) {
				if (nombreArtefacto.includes("dinamica"))
					return DinamicaParser(nombreArtefacto, contenido);
				else if (nombreArtefacto.includes("preguntas"))
					return PreguntasParser(nombreArtefacto, contenido);
				else if (nombreArtefacto.includes("tutoria"))
					return TutoriaParser(nombreArtefacto, contenido);
				else if (nombreArtefacto.includes("lluviaideas"))
					return LluviaIdeasParser(nombreArtefacto, contenido);
				else
					return GrupoEstudioParser(nombreArtefacto, contenido);
			}
			
			return {
				parse: _parse
			};
		})();
		
		var _DocumentacionParser = (function() {
			function LecturaParser(nombreArtefacto, contenido) {
				var inputs = contenido.children("input");
				var nombre = inputs[0].value;
				var descripcion = inputs[1].value;
				
				return {
					artefacto: nombreArtefacto,
					nombre: nombre,
					descripcion: descripcion
				};
			}
			
			function VideoParser(nombreArtefacto, contenido) {
				
			}
			
			function CitaBibliograficaParser(nombreArtefacto, contenido) {
				
			}
			
			function ArticuloWebParser(nombreArtefacto, contenido) {
				
			}
			
			function ArticuloPDFParser(nombreArtefacto, contenido) {
				
			}
			
			function RevistaParser(nombreArtefacto, contenido) {
				
			}
			
			/**
			 * Analiza el nodo DOM pasado y lo convierte a un objeto JavaScript
			 * apropiado de la etapa MDO de Documentación.
			 * @param {string} nombreArtefacto El nombreArtefacto del artefacto.
			 * @param {Node} contenido El nodo DOM del artefacto.
			 * @returns {Object} Un objeto que contiene la información ingresada
			 * sobre el artefacto.
			 */
			function _parse(nombreArtefacto, contenido) {
				if (nombreArtefacto.includes("lectura"))
					return LecturaParser(nombreArtefacto, contenido);
				else if (nombreArtefacto.includes("video"))
					return VideoParser(nombreArtefacto, contenido);
				else if (nombreArtefacto.includes("citabibliografica"))
					return CitaBibliograficaParser(nombreArtefacto, contenido);
				else if (nombreArtefacto.includes("articuloweb"))
					return ArticuloWebParser(nombreArtefacto, contenido);
				else if (nombreArtefacto.includes("articulopdf"))
					return ArticuloPDFParser(nombreArtefacto, contenido);
				else
					return RevistaParser(nombreArtefacto, contenido);
			}
			
			return {
				parse: _parse
			};
		})();
		
		var _AplicacionParser = (function() {
			function EstudioCasosParser(nombreArtefacto, contenido) {
				
			}
			
			function MarcoLogicoParser(nombreArtefacto, contenido) {
				
			}
			
			function MapaConceptualParser(nombreArtefacto, contenido) {
				
			}
			
			function ArbolProblemasParser(nombreArtefacto, contenido) {
				
			}
			
			function ProyectoInvestigacionParser(nombreArtefacto, contenido) {
				
			}
			
			function ProyectoProduccionParser(nombreArtefacto, contenido) {
				
			}
			
			function EjerciciosParser(nombreArtefacto, contenido) {
				
			}
			
			/**
			 * Analiza el nodo DOM pasado y lo convierte a un objeto JavaScript
			 * apropiado de la etapa MDO de Aplicación.
			 * @param {string} nombreArtefacto El nombreArtefacto del artefacto.
			 * @param {Node} contenido El nodo DOM del artefacto.
			 * @returns {Object} Un objeto que contiene la información ingresada
			 * sobre el artefacto.
			 */
			function _parse(nombreArtefacto, contenido) {
				if (nombreArtefacto.includes("estudiocasos"))
					return EstudioCasosParser(nombreArtefacto, contenido);
				else if (nombreArtefacto.includes("marcologico"))
					return MarcoLogicoParser(nombreArtefacto, contenido);
				else if (nombreArtefacto.includes("mapaconceptual"))
					return MapaConceptualParser(nombreArtefacto, contenido);
				else if (nombreArtefacto.includes("arbolproblemas"))
					return ArbolProblemasParser(nombreArtefacto, contenido);
				else if (nombreArtefacto.includes("proyectoinvestigacion"))
					return ProyectoInvestigacionParser(nombreArtefacto, contenido);
				else if (nombreArtefacto.includes("proyectoproduccion"))
					return ProyectoProduccionParser(nombreArtefacto, contenido);
				else
					return EjerciciosParser(nombreArtefacto, contenido);
			}
			
			return {
				parse: _parse
			};
		})();
		
		var _AmpliacionParser = (function() {
			function ConferenciaParser(nombreArtefacto, contenido) {
				
			}
			
			function MesaRedondaParser(nombreArtefacto, contenido) {
				
			}
			
			function PanelParser(nombreArtefacto, contenido) {
				
			}
			
			function SimposioParser(nombreArtefacto, contenido) {
				
			}
			
			/**
			 * Analiza el nodo DOM pasado y lo convierte a un objeto JavaScript
			 * apropiado de la etapa MDO de Ampliación.
			 * @param {string} nombreArtefacto El nombreArtefacto del artefacto.
			 * @param {Node} contenido El nodo DOM del artefacto.
			 * @returns {Object} Un objeto que contiene la información ingresada
			 * sobre el artefacto.
			 */
			function _parse(nombreArtefacto, contenido) {
				if (nombreArtefacto.includes("conferencia"))
					return ConferenciaParser(nombreArtefacto, contenido);
				else if (nombreArtefacto.includes("mesaredonda"))
					return MesaRedondaParser(nombreArtefacto, contenido);
				else if (nombreArtefacto.includes("ampliacion-panel"))
					return PanelParser(nombreArtefacto, contenido);
				else
					return SimposioParser(nombreArtefacto, contenido);
			}
			
			return {
				parse: _parse
			};
		})();
		
		return {
			VivenciaParser: _VivenciaParser,
			ConceptualizacionParser: _ConceptualizacionParser,
			DocumentacionParser: _DocumentacionParser,
			AplicacionParser: _AplicacionParser,
			AmpliacionParser: _AmpliacionParser
		};
	})();
	
	/**
	 * Toma una lista del tipo NodeList y regresa un Array común de JavaScript.
	 * Se utiliza para convertir la NodeList de artefactos MDO en un arreglo de nodos
	 * fácil de manipular.
	 * 
	 * @param {NodeList} nodeList Una lista de artefactos, obtenidos preferentemente
	 * por document.querySelectorAll('.ex-moved > div').
	 * @returns {Array} Un arreglo común con los nodos de los artefactos MDO.
	 */
	function _parseNodeList(nodeList) {
		return [].slice.call(nodeList);
	}
	
	/**
	 * Obtiene un nodo DOM de algún artefacto MDO y regresa un objeto equivalente. El
	 * nodo debe ser de la clase .mdo-[etapa]-[artefacto]
	 * @param {Node} node Un objeto DOM Node.
	 * @returns {Object} Un objeto con los atributos del artefacto utilizado.
	 */
	function _parseNode(node) {
		var nombreArtefacto = node.className.split(" ")[0];
		var contenido = $(node).children().eq(1);
		var tipoParser;
		
		if (nombreArtefacto.includes("vivencia"))
			tipoParser = "VivenciaParser";
		else if (nombreArtefacto.includes("conceptualizacion"))
			tipoParser = "ConceptualizacionParser";
		else if (nombreArtefacto.includes("documentacion"))
			tipoParser = "DocumentacionParser";
		else if (nombreArtefacto.includes("aplicacion"))
			tipoParser = "AplicacionParser";
		else
			tipoParser = "AmpliacionParser";
		
		return MDOParser[tipoParser].parse(nombreArtefacto, contenido);
	}
	
	/**
	 * Convierte una lista de nodos DOM en una lista de objetos JavaScript. Los nodos
	 * deben ser de la clase .mdo-[etapa]-[artefacto]
	 * 
	 * @param {Array} nodeArray Un arreglo JavaScript de objetos DOM Node.
	 * @returns {Object} Un objeto que contiene una lista de objetos-artefacto.
	 */
	function _getListaArtefactos(nodeArray) {
		return {
			artefactos: nodeArray.map(function(e) {
				return _parseNode(e);
			})
		};
	}
	
	return {
		parseNodeList: _parseNodeList,
		getListaArtefactos: _getListaArtefactos
	};
})();