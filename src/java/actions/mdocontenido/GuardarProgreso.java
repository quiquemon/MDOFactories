package actions.mdocontenido;

import com.opensymphony.xwork2.ActionSupport;
import java.util.List;
import java.util.Map;

public class GuardarProgreso extends ActionSupport {
	
	/**
	 * Recibe los artefactos del cliente en JSON.
	 */
	private List<Map<String, Object>> artefactos;
	
	/**
	 * Mensaje de respuesta al cliente.
	 */
	private String message;

	@Override
	public String execute() throws Exception {
		message = "Su progreso ha sido guardado.";
		return SUCCESS;
	}
	
	public void setArtefactos(List<Map<String, Object>> artefactos) {
		this.artefactos = artefactos;
	}
	
	public String getMessage() {
		return message;
	}
}