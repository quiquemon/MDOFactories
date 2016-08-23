package model.mdo.artifacts.documentacion;

import model.mdo.artifacts.MDOArtifact;

public class Video implements MDOArtifact {
	
	private String nombre;
	private String descripcion;
	private String url;
	
	public Video setNombre(String nombre) {
		this.nombre = nombre;
		return this;
	}
	
	public Video setDescripcion(String descripcion) {
		this.descripcion = descripcion;
		return this;
	}
	
	public Video setUrl(String url) {
		this.url = url;
		return this;
	}
	
	@Override
	public String toHtml() {
		return String.format("Video[%s, %s, %s]", nombre, descripcion, url);
	}	
}