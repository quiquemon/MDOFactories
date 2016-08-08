var MDOFactories = (function() {
	var _VivenciaFactory = (function() {
		function Observacion() {
			return "<div class='mdo-vivencia-observacion panel panel-success'>\n\
						<div class='panel-heading'><strong>Observación</strong></div>\n\
						<div class='panel-body'>\n\
							<input type='text' class='form-control' />\n\
						</div>\n\
					</div>";
		}
		
		function Visita() {
			return "<div class='mdo-vivencia-visita panel panel-success'>\n\
						<div class='panel-heading'><strong>Visita</strong></div>\n\
						<div class='panel-body'>\n\
							<textarea class='form-control'></textarea>\n\
						</div>\n\
					</div>";
		}
		
		function Demostracion() {
			return "<div class='mdo-vivencia-demostracion panel panel-success'>\n\
						<div class='panel-heading'><strong>Demostración</strong></div>\n\
						<div class='panel-body'>\n\
							<textarea class='form-control'></textarea>\n\
						</div>\n\
					</div>";
		}
		
		function Ensayo() {
			return "<div class='mdo-vivencia-ensayo panel panel-success'>\n\
						<div class='panel-heading'><strong>Ensayo</strong></div>\n\
						<div class='panel-body'>\n\
							<textarea class='form-control'></textarea>\n\
						</div>\n\
					</div>";
		}
		
		function Simulacion() {
			return "<div class='mdo-vivencia-simulacion panel panel-success'>\n\
						<div class='panel-heading'><strong>Simulación</strong></div>\n\
						<div class='panel-body'>\n\
							<textarea class='form-control'></textarea>\n\
						</div>\n\
					</div>";
		}

		function JuegoRol() {
			return "<div class='mdo-vivencia-juegorol panel panel-success'>\n\
						<div class='panel-heading'><strong>Juego de Rol</strong></div>\n\
						<div class='panel-body'>\n\
							<textarea class='form-control'></textarea>\n\
						</div>\n\
					</div>";
		}
		
		function _crear(tipo) {
			if (tipo === "Observacion")
				return Observacion();
			else if (tipo === "Visita")
				return Visita();
			else if (tipo === "Demostracion")
				return Demostracion();
			else if (tipo === "Ensayo")
				return Ensayo();
			else if(tipo === "Simulacion")
				return Simulacion();
			else if (tipo === "JuegoRol")
				return JuegoRol();
			else
				return null;
		}
		
		function _listaArtefactos() {
			return [
				"<div class='Observacion'>Observación</div>",
				"<div class='Visita'>Visita</div>",
				"<div class='Demostracion'>Demostración</div>",
				"<div class='Ensayo'>Ensayo</div>",
				"<div class='Simulacion'>Simulación</div>",
				"<div class='JuegoRol'>Juego de Rol</div>"
			];
		}

		return {
			crear: _crear,
			listaArtefactos: _listaArtefactos
		};
	})();
	
	var _ConceptualizacionFactory = (function() {
		function Dinamica() {
			return "<div class='mdo-conceptualizacion-dinamica panel panel-warning'>\n\
						<div class='panel-heading'><strong>Dinámica</strong></div>\n\
						<div class='panel-body'>\n\
							<input type='text' class='form-control' />\n\
						</div>\n\
					</div>";
		}
		
		function Preguntas() {
			return "<div class='mdo-conceptualizacion-preguntas panel panel-warning'>\n\
						<div class='panel-heading'><strong>Preguntas</strong></div>\n\
						<div class='panel-body'>\n\
							<textarea class='form-control'></textarea>\n\
						</div>\n\
					</div>";
		}
		
		function Tutoria() {
			return "<div class='mdo-conceptualizacion-tutoria panel panel-warning'>\n\
						<div class='panel-heading'><strong>Tutoría</strong></div>\n\
						<div class='panel-body'>\n\
							<textarea class='form-control'></textarea>\n\
						</div>\n\
					</div>";
		}
		
		function LluviaIdeas() {
			return "<div class='mdo-conceptualizacion-lluviaideas panel panel-warning'>\n\
						<div class='panel-heading'><strong>Lluvia de Ideas</strong></div>\n\
						<div class='panel-body'>\n\
							<textarea class='form-control'></textarea>\n\
						</div>\n\
					</div>";
		}
		
		function GrupoEstudio() {
			return "<div class='mdo-conceptualizacion-grupoestudio panel panel-warning'>\n\
						<div class='panel-heading'><strong>Grupo de Estudio</strong></div>\n\
						<div class='panel-body'>\n\
							<textarea class='form-control'></textarea>\n\
						</div>\n\
					</div>";
		}
		
		function _crear(tipo) {
			if (tipo === "Dinamica")
				return Dinamica();
			else if (tipo === "Preguntas")
				return Preguntas();
			else if (tipo === "Tutoria")
				return Tutoria();
			else if (tipo === "LluviaIdeas")
				return LluviaIdeas();
			else if (tipo === "GrupoEstudio")
				return GrupoEstudio();
			else
				return null;
		}
		
		function _listaArtefactos(){
			return [
				"<div class='Dinamica'>Dinámica</div>",
				"<div class='Preguntas'>Preguntas</div>",
				"<div class='Tutoria'>Tutoría</div>",
				"<div class='LluviaIdeas'>Lluvia de Ideas</div>",
				"<div class='GrupoEstudio'>Grupo de Estudio</div>"
			];
		}
		
		return {
			crear: _crear,
			listaArtefactos: _listaArtefactos
		};
	})();
	
	var _DocumentacionFactory = (function() {
		function Lectura() {
			return "<div class='mdo-documentacion-lectura panel panel-default panel-mdo-documentacion'>\n\
						<div class='panel-heading'><strong>Lectura</strong></div>\n\
						<div class='panel-body'>\n\
							<label>Nombre:</label>\n\
							<input type='text' class='form-control' /><br>\n\
							<label>Descripción:</label>\n\
							<input type='text' class='form-control' />\n\
						</div>\n\
					</div>";
		}
		
		function Video() {
			return "<div class='mdo-documentacion-video panel panel-default panel-mdo-documentacion'>\n\
						<div class='panel-heading'><strong>Video</strong></div>\n\
						<div class='panel-body'>\n\
							<label>Nombre:</label>\n\
							<input type='text' class='form-control' /><br>\n\
							<label>Descripción:</label>\n\
							<input type='text' class='form-control' /><br>\n\
							<label>URL del video:</label>\n\
							<input type='text' class='form-control' />\n\
							<br>\n\
							<button class='btn btn-primary'>O puedes subir un video</button>\n\
						</div>\n\
					</div>";
		}
		
		function CitaBibliografica() {
			return "<div class='mdo-documentacion-citabibliografica panel panel-default panel-mdo-documentacion'>\n\
						<div class='panel-heading'><strong>Cita Bibliográfica</strong></div>\n\
						<div class='panel-body'>\n\
							<textarea class='form-control'></textarea>\n\
						</div>\n\
					</div>";
		}
		
		function ArticuloWeb() {
			return "<div class='mdo-documentacion-articuloweb panel panel-default panel-mdo-documentacion'>\n\
						<div class='panel-heading'><strong>Artículo Web</strong></div>\n\
						<div class='panel-body'>\n\
							<label>Nombre:</label>\n\
							<input type='text' class='form-control' /><br>\n\
							<label>Descripción:</label>\n\
							<input type='text' class='form-control' /><br>\n\
							<label>URL del artículo:</label>\n\
							<input type='text' class='form-control' />\n\
						</div>\n\
					</div>";
		}
		
		function ArticuloPDF() {
			return "<div class='mdo-documentacion-articulopdf panel panel-default panel-mdo-documentacion'>\n\
						<div class='panel-heading'><strong>Artículo PDF</strong></div>\n\
						<div class='panel-body'>\n\
							<label>Nombre:</label>\n\
							<input type='text' class='form-control' /><br>\n\
							<label>Descripción:</label>\n\
							<input type='text' class='form-control' /><br>\n\
							<label>URL del artículo:</label>\n\
							<input type='text' class='form-control' />\n\
							<br>\n\
							<button class='btn btn-primary'>O puedes subir un PDF</button>\n\
						</div>\n\
					</div>";
		}
		
		function Revista() {
			return "<div class='mdo-documentacion-revista panel panel-default panel-mdo-documentacion'>\n\
						<div class='panel-heading'><strong>Revista</strong></div>\n\
						<div class='panel-body'>\n\
							<label>Nombre:</label>\n\
							<input type='text' class='form-control' /><br>\n\
							<label>Descripción:</label>\n\
							<input type='text' class='form-control' /><br>\n\
							<label>URL de la revista:</label>\n\
							<input type='text' class='form-control' />\n\
						</div>\n\
					</div>";
		}
		
		function _crear(tipo) {
			if (tipo === "Lectura")
				return Lectura();
			else if (tipo === "Video")
				return Video();
			else if (tipo === "CitaBibliografica")
				return CitaBibliografica();
			else if (tipo === "ArticuloWeb")
				return ArticuloWeb();
			else if (tipo === "ArticuloPDF")
				return ArticuloPDF();
			else if (tipo === "Revista")
				return Revista();
			else
				return null;
		}
		
		function _listaArtefactos() {
			return [
				"<div class='Lectura'>Lectura</div>",
				"<div class='Video'>Video</div>",
				"<div class='CitaBibliografica'>Cita Bibliográfica</div>",
				"<div class='ArticuloWeb'>Artículo Web</div>",
				"<div class='ArticuloPDF'>Artículo PDF</div>",
				"<div class='Revista'>Revista</div>"
			];
		}
		
		return {
			crear: _crear,
			listaArtefactos: _listaArtefactos
		};
	})();
	
	var _AplicacionFactory = (function() {
		function EstudioCasos() {
			return "<div class='mdo-aplicacion-estudiocasos panel panel-default panel-mdo-aplicacion'>\n\
						<div class='panel-heading'><strong>Estudio de Casos</strong></div>\n\
						<div class='panel-body'>\n\
							<textarea class='form-control'></textarea>\n\
						</div>\n\
					</div>";
		}
		
		function MarcoLogico() {
			return "<div class='mdo-aplicacion-marcologico panel panel-default panel-mdo-aplicacion'>\n\
						<div class='panel-heading'><strong>Marco Lógico</strong></div>\n\
						<div class='panel-body'>\n\
							<textarea class='form-control'></textarea>\n\
						</div>\n\
					</div>";
		}
		
		function MapaConceptual() {
			return "<div class='mdo-aplicacion-mapaconceptual panel panel-default panel-mdo-aplicacion'>\n\
						<div class='panel-heading'><strong>Mapa Conceptual</strong></div>\n\
						<div class='panel-body'>\n\
							<textarea class='form-control'></textarea>\n\
						</div>\n\
					</div>";
		}
		
		function ArbolProblemas() {
			return "<div class='mdo-aplicacion-arbolproblemas panel panel-default panel-mdo-aplicacion'>\n\
						<div class='panel-heading'><strong>Árbol de Problemas</strong></div>\n\
						<div class='panel-body'>\n\
							<textarea class='form-control'></textarea>\n\
						</div>\n\
					</div>";
		}
		
		function ProyectoInvestigacion() {
			return "<div class='mdo-aplicacion-proyectoinvestigacion panel panel-default panel-mdo-aplicacion'>\n\
						<div class='panel-heading'><strong>Proyecto de Investigación</strong></div>\n\
						<div class='panel-body'>\n\
							<textarea class='form-control'></textarea>\n\
						</div>\n\
					</div>";
		}
		
		function ProyectoProduccion() {
			return "<div class='mdo-aplicacion-proyectoproduccion panel panel-default panel-mdo-aplicacion'>\n\
						<div class='panel-heading'><strong>Proyecto de Producción</strong></div>\n\
						<div class='panel-body'>\n\
							<textarea class='form-control'></textarea>\n\
						</div>\n\
					</div>";
		}
		
		function Ejercicios() {
			return "<div class='mdo-aplicacion-ejercicios panel panel-default panel-mdo-aplicacion'>\n\
						<div class='panel-heading'><strong>Ejercicios</strong></div>\n\
						<div class='panel-body'>\n\
							<textarea class='form-control'></textarea>\n\
						</div>\n\
					</div>";
		}
		
		function _crear(tipo) {
			if (tipo === "EstudioCasos")
				return EstudioCasos();
			else if (tipo === "MarcoLogico")
				return MarcoLogico();
			else if (tipo === "MapaConceptual")
				return MapaConceptual();
			else if (tipo === "ArbolProblemas")
				return ArbolProblemas();
			else if (tipo === "ProyectoInvestigacion")
				return ProyectoInvestigacion();
			else if (tipo === "ProyectoProduccion")
				return ProyectoProduccion();
			else if (tipo === "Ejercicios")
				return Ejercicios();
			else
				return null;
		}
		
		function _listaArtefactos() {
			return [
				"<div class='EstudioCasos'>Casos de Estudio</div>",
				"<div class='MarcoLogico'>Marco Lógico</div>",
				"<div class='MapaConceptual'>Mapa Conceptual</div>",
				"<div class='ArbolProblemas'>Árbol de Problemas</div>",
				"<div class='ProyectoInvestigacion'>Proyecto de Investigación</div>",
				"<div class='ProyectoProduccion'>Proyecto de Producción</div>",
				"<div class='Ejercicios'>Ejercicios</div>"
			];
		}
		
		return {
			crear: _crear,
			listaArtefactos: _listaArtefactos
		};
	})();
	
	var _AmpliacionFactory = (function() {
		function Conferencia() {
			return "<div class='mdo-ampliacion-conferencia panel panel-default panel-mdo-ampliacion'>\n\
						<div class='panel-heading'><strong>Conferencia</strong></div>\n\
						<div class='panel-body'>\n\
							<textarea class='form-control'></textarea>\n\
						</div>\n\
					</div>";
		}
		
		function MesaRedonda() {
			return "<div class='mdo-ampliacion-mesaredonda panel panel-default panel-mdo-ampliacion'>\n\
						<div class='panel-heading'><strong>Mesa Redonda</strong></div>\n\
						<div class='panel-body'>\n\
							<textarea class='form-control'></textarea>\n\
						</div>\n\
					</div>";
		}
		
		function Panel() {
			return "<div class='mdo-ampliacion-panel panel panel-default panel-mdo-ampliacion'>\n\
						<div class='panel-heading'><strong>Panel</strong></div>\n\
						<div class='panel-body'>\n\
							<textarea class='form-control'></textarea>\n\
						</div>\n\
					</div>";
		}
		
		function Simposio() {
			return "<div class='mdo-ampliacion-simposio panel panel-default panel-mdo-ampliacion'>\n\
						<div class='panel-heading'><strong>Simposio</strong></div>\n\
						<div class='panel-body'>\n\
							<textarea class='form-control'></textarea>\n\
						</div>\n\
					</div>";
		}
		
		function _crear(tipo) {
			if (tipo === "Conferencia")
				return Conferencia();
			else if (tipo === "MesaRedonda")
				return MesaRedonda();
			else if (tipo === "Panel")
				return Panel();
			else if (tipo === "Simposio")
				return Simposio();
			else
				return null;
		}
		
		function _listaArtefactos() {
			return [
				"<div class='Conferencia'>Conferencia</div>",
				"<div class='MesaRedonda'>Mesa Redonda</div>",
				"<div class='Panel'>Panel</div>",
				"<div class='Simposio'>Simposio</div>"
			];
		}
		
		return {
			crear: _crear,
			listaArtefactos: _listaArtefactos
		};
	})();
	
	return {
		VivenciaFactory: _VivenciaFactory,
		ConceptualizacionFactory: _ConceptualizacionFactory,
		DocumentacionFactory: _DocumentacionFactory,
		AplicacionFactory: _AplicacionFactory,
		AmpliacionFactory: _AmpliacionFactory
	};
})();