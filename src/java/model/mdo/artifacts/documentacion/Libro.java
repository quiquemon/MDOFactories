package model.mdo.artifacts.documentacion;

import model.mdo.artifacts.MDOArtifact;

public class Libro implements MDOArtifact {
	
	private String autor;
	private String titulo;
	private String anyo;
	private String ciudad;
	private String editorial;
	private String volumen;
	
	public Libro setAutor(String autor) {
		this.autor = autor;
		return this;
	}
	
	public Libro setTitulo(String titulo) {
		this.titulo = titulo;
		return this;
	}
	
	public Libro setAnyo(String anyo) {
		this.anyo = anyo;
		return this;
	}
	
	public Libro setCiudad(String ciudad) {
		this.ciudad = ciudad;
		return this;
	}
	
	public Libro setEditorial(String editorial) {
		this.editorial = editorial;
		return this;
	}
	
	public Libro setVolumen(String volumen) {
		this.volumen = volumen;
		return this;
	}
	
	@Override
	public String toHtml() {
		return String.format("Libro[%s, %s, %s, %s, %s, %s]",
			autor, titulo, anyo, ciudad, editorial, volumen);
	}
}