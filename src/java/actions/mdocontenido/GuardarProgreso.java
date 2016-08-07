package actions.mdocontenido;

import com.opensymphony.xwork2.ActionSupport;
import java.util.Map;
import java.util.HashMap;

public class GuardarProgreso extends ActionSupport {
	
	private Map<String, String> stateMap = new HashMap<>();
	private String param;

	@Override
	public String execute() throws Exception {
		stateMap.put("message", "El nombre del parámetro fue: " + param);
		return SUCCESS;
	}
	
	public void setParam(String param) {
		this.param = param;
	}
	
	public String getParam() {
		return param;
	}
	
	public void setStateMap(Map<String, String> stateMap) {
		this.stateMap = stateMap;
	}
	
	public Map<String, String> getStateMap() {
		return stateMap;
	}
}