<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Fábricas MDO</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/bootstrap-theme.min.css">
		<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/dragula.min.css">
		<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/timeline.css">
		<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/estilo.css">
		<script>
			var APP_BASE = "${pageContext.request.contextPath}";
		</script>
		<script src="${pageContext.request.contextPath}/js/jquery.min.js"></script>
		<script src="${pageContext.request.contextPath}/js/bootstrap.min.js"></script>
		<script src="${pageContext.request.contextPath}/js/dragula.min.js"></script>
		<script src="${pageContext.request.contextPath}/js/mdo-factories.js"></script>
		<script src="${pageContext.request.contextPath}/js/mdo-utilities.js"></script>
		<script src="${pageContext.request.contextPath}/js/funciones.js"></script>
	</head>
	<body>
		<div id="header" class="container" align="center">
			<div class="row">
				<h1>Fábricas Abstractas de MDO</h1>
			</div>
		</div>
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-2 col-sm-2 col-xs-4 fixed">
					<div id="menuMDO" class="panel-group">
						<div class="panel panel-danger">
							<div class="panel-heading">
								<h4 class="panel-title">
									<a data-toggle="collapse" data-parent="#menuMDO" href="#vivenciaPanel">
										Vivencias
									</a>
								</h4>
							</div>
							<div id="vivenciaPanel" class="panel-collapse collapse">
								<div id="vivenciaPanelBody" class="panel-body"></div>
							</div>
						</div>
						<div class="panel panel-danger">
							<div class="panel-heading">
								<h4 class="panel-title">
									<a data-toggle="collapse" data-parent="#menuMDO" href="#conceptualizacionPanel">
										Conceptualización
									</a>
								</h4>
							</div>
							<div id="conceptualizacionPanel" class="panel-collapse collapse">
								<div id="conceptualizacionPanelBody" class="panel-body"></div>
							</div>
						</div>
						<div class="panel panel-danger">
							<div class="panel-heading">
								<h4 class="panel-title">
									<a data-toggle="collapse" data-parent="#menuMDO" href="#documentacionPanel">
										Documentación
									</a>
								</h4>
							</div>
							<div id="documentacionPanel" class="panel-collapse collapse in">
								<div id="documentacionPanelBody" class="panel-body"></div>
							</div>
						</div>
						<div class="panel panel-danger">
							<div class="panel-heading">
								<h4 class="panel-title">
									<a data-toggle="collapse" data-parent="#menuMDO" href="#aplicacionPanel">
										Aplicación
									</a>
								</h4>
							</div>
							<div id="aplicacionPanel" class="panel-collapse collapse">
								<div id="aplicacionPanelBody" class="panel-body"></div>
							</div>
						</div>
						<div class="panel panel-danger">
							<div class="panel-heading">
								<h4 class="panel-title">
									<a data-toggle="collapse" data-parent="#menuMDO" href="#ampliacionPanel">
										Ampliación
									</a>
								</h4>
							</div>
							<div id="ampliacionPanel" class="panel-collapse collapse">
								<div id="ampliacionPanelBody" class="panel-body"></div>
							</div>
						</div>
					</div>
					<button id="btnGuardar" class="btn btn-primary btn-block">Guardar</button>
					<br>
					<button id="btnDescargar" class="btn btn-primary btn-block">Descargar ZIP</button>
				</div>
				<br>
				<br>
				<div class="col-md-10 col-sm-10 col-xs-8 scrollit">
					<!-- AQUÍ VA EL TIMELINE -->
					<div class="container">
						<ul id="contenidoDidacticoBody" class="timeline">
							<li class="year">Vivencia</li>
							<li class="event">
								<h3 class="heading">Responsive PHP Quiz Script</h3>
								<span class="month"><i class="fa fa-calendar"></i> &nbsp; March 2015</span>

								<p>&nbsp;</p>
								<p>Demo : <a href="http://demo.smarttutorials.net/php-quiz-code/" target="_blank">PHP Quiz Script Demo</a></p>

								<p>Tutorial : <a href="http://www.smarttutorials.net/php-quiz-script/" target="_blank">PHP Quiz Script</a></p>
								<div class="text-center">
									<img class="img-responsive img-thumbnail" src="http://1.bp.blogspot.com/-5VF-5ZFx6fk/VRu6g9QaxjI/AAAAAAAAEB4/ipE14PIvqGQ/s1600/php-quiz-script.png">
								</div>
								<p>This version of Responsive PHP Quiz application has following new features are added. You may refer my previous versions of PHP MySQL quiz script tutorial to download php quiz script freely.</p>
								<blockquote>
									<ol>
										<li>Now users can share his/her results on Social networks (Facebook, Twitter, Google Plus, Reddit and Linkedin).</li>
										<li>The Quiz result page will contain all questions answered by the user along with correct answer.</li>
										<li>The Quiz result manage Grid has unique link to each taken Quiz result page, So user can refer his last Quiz results.</li>
										<li>The User can sort Quiz results on manage Grid using quiz taken date.</li>
									</ol>
								</blockquote>
							</li>
							<li class="event">
								<h2 class="heading">Video</h2>
								<br>
								<label>Nombre:</label>
								<input type='text' class='form-control' /><br>
								<label>Descripción:</label>
								<input type='text' class='form-control' /><br>
								<label>URL del video:</label>
								<input type='text' class='form-control' />
								<br>
								<button class='btn btn-primary'>O puedes subir un video</button>
							</li>
							<li class="year">Web</li>
							<li class="event">
								<h3 class="heading">Invoice System Using jQuery PHP MySQL And Bootstrap</h3>
								<span class="month"><i class="fa fa-calendar"></i> &nbsp; March 2015 </span>
								<p>&nbsp;</p>
								<div class="embed-responsive embed-responsive-16by9">
									<iframe frameborder="0" allowfullscreen="allowfullscreen" src="https://www.youtube.com/embed/AGawieZttJ0" class="embed-responsive-item"></iframe>
								</div>
								<p>&nbsp;</p>
								<p>Demo : <a href="http://demo.smarttutorials.net/invoice-script-php/" target="_blank">PHP Invoice System Demo</a></p>

								<p>Tutorial : <a href="http://www.smarttutorials.net/invoice-system-using-jquery-php-mysql-bootstrap/" target="_blank">Smart Invoice System</a></p>

								<p>This is an awesome tool for your marketing team and they can crack the deal at client’s doorstep. Order PDF Invoice System Script today! and increase sales. It just comes at a fraction of one time price. Grab the deal today.</p>
							</li>
							<li class="event">
								<h3 class="heading">Invoice System Using jQuery PHP MySQL And Bootstrap</h3>
								<span class="month"><i class="fa fa-calendar"></i> &nbsp; March 2015 </span>
								<p>&nbsp;</p>
								<div class="embed-responsive embed-responsive-16by9">
									<iframe frameborder="0" allowfullscreen="allowfullscreen" src="https://www.youtube.com/embed/AGawieZttJ0" class="embed-responsive-item"></iframe>
								</div>
								<p>&nbsp;</p>
								<p>Demo : <a href="http://demo.smarttutorials.net/invoice-script-php/" target="_blank">PHP Invoice System Demo</a></p>

								<p>Tutorial : <a href="http://www.smarttutorials.net/invoice-system-using-jquery-php-mysql-bootstrap/" target="_blank">Smart Invoice System</a></p>

								<p>This is an awesome tool for your marketing team and they can crack the deal at client’s doorstep. Order PDF Invoice System Script today! and increase sales. It just comes at a fraction of one time price. Grab the deal today.</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>