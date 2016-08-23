package model.mdo.artifacts.documentacion;

import model.mdo.artifacts.MDOArtifact;

public class Pelicula implements MDOArtifact {

	private String titulo;
	private String descripcion;
	private String director;
	private String productora;
	private String pais;
	private String anyo;
	
	public Pelicula setTitulo(String titulo) {
		this.titulo = titulo;
		return this;
	}
	
	public Pelicula setDescripcion(String descripcion) {
		this.descripcion = descripcion;
		return this;
	}
	
	public Pelicula setDirector(String director) {
		this.director = director;
		return this;
	}
	
	public Pelicula setProductora(String productora) {
		this.productora = productora;
		return this;
	}
	
	public Pelicula setPais(String pais) {
		this.pais = pais;
		return this;
	}
	
	public Pelicula setAnyo(String anyo) {
		this.anyo = anyo;
		return this;
	}
	
	@Override
	public String toHtml() {
		return String.format("Película[%s, %s, %s, %s, %s, %s]",
			titulo, descripcion, director, productora, pais, anyo);
	}	
}