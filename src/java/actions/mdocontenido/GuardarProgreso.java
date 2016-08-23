package actions.mdocontenido;

import com.opensymphony.xwork2.ActionSupport;
import java.util.List;
import java.util.Map;
import model.mdo.MDOUtil;

/**
 * Guarda el progreso que lleven los profesores en su propia carpeta.
 * Esta clase recibe un JSON desde el cliente con los artefactos creados
 * hasta el momento y los sube a su carpeta específica (grupo - contenido didáctico - etapa).
 */
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
		MDOUtil.parseMDOArtifacts(MDOUtil.parseJsonArtifacts(artefactos)).forEach(System.out::println);
		return SUCCESS;
	}
	
	public void setArtefactos(List<Map<String, Object>> artefactos) {
		this.artefactos = artefactos;
	}
	
	public String getMessage() {
		return message;
	}
}