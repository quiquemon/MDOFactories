package model.mdo.artifacts.documentacion;

import model.mdo.artifacts.MDOArtifact;

public class ArticuloPDF implements MDOArtifact {

	private String nombre;
	private String descripcion;
	private String url;
	
	public ArticuloPDF setNombre(String nombre) {
		this.nombre = nombre;
		return this;
	}
	
	public ArticuloPDF setDescripcion(String descripcion) {
		this.descripcion = descripcion;
		return this;
	}
	
	public ArticuloPDF setUrl(String url) {
		this.url = url;
		return this;
	}
	
	@Override
	public String toHtml() {
		return String.format("Artículo PDF[%s, %s, %s]", nombre, descripcion, url);
	}
}