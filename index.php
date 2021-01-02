
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<link rel="stylesheet" href="css/fileCss.css">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="js/filsScript.js"></script>
<script src="js/jquery.knob.min.js"></script>
<script src="js/Knosb.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" ></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
</head>
<body style="background-color: transparent;">
  <header style="background-color: #f8f9fa">
	<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist" >
	  <li class="nav-item"style="margin-left: auto;">
	    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true" style="width: 15em">Gestion Disks</a>
	  </li>
	  <li class="nav-item" style="margin-right: auto;">
	    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false" style="width: 15em">Discos / Dados</a>
	  </li>
	</ul>
  </header>
  <div class="tab-content" id="pills-tabContent" style="margin: auto;">
  	<div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
  		<div class="row" style="padding-left: 20%;padding-top: 5%">
		  <div class="col-sm-3">
		    <div class="card">
		      <div class="card-body">
		      	 <div class="demo" id="d_1">
        		</div>
		        <a href="#" id="del_1" class="btn btn-outline-danger">Delete</a>
		        <a href="#" id="restor_1" class="btn btn-outline-info"><i class="fas fa-download"></i>  Restore</a>
		      </div>
		    </div>
		  </div>
		  <div class="col-sm-3">
		    <div class="card">
		      <div class="card-body">
		        <div class="demo" id="d_2">
            		
        		</div>
		        <a href="#" id="del_2" class="btn btn-outline-danger">Delete</a>
		        <a href="#" id="restor_2" class="btn btn-outline-info"><i class="fas fa-download"></i>  Restore</a>
		      </div>
		    </div>
		  </div>
		  <div class="col-sm-3">
		    <div class="card">
		      <div class="card-body">
		        <div class="demo" id="d_3">
        		</div>
		        <a href="#" id="del_3" class="btn btn-outline-danger">Delete</a>
		        <a href="#" id="restor_3" class="btn btn-outline-info"><i class="fas fa-download"></i>  Restore</a>
		      </div>
		    </div>
		  </div>
		</div>
  	</div>


  	<div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
  		<div class="col-md" id="formStri" style="margin-bottom: 1em">
	  		<div class="form-group col-md-4">
	    		<label for="exampleInputEmail1">Informações que voce quiser salvar</label>
	    		<input type="text-muted" class="form-control" id="inputex" aria-describedby="emailHelp" placeholder="Entre Texto">
	  		</div>
	  		<button id="submit" class="btn btn-primary">Salvar</button>
		</div>
		<div class="container-fluid" style="background-color: #454d55;">
		  <div class="row" >
		    <div class="col"style="text-align: center;background-color: #454d55;margin-left: 3em">
		    	Disk A
		    </div>
		    <div class="col order-1" style="text-align: center;background-color: #dee2e6;width: 30%">
		      Disk B
		    </div>
		    <div class="col order-12" style="text-align: center;background-color: #454d55;">
		      Disk Paridade
		    </div>
		  </div>
		</div>
    <!-- Tabela 1 -->
  		<table class="table" style="float: left;">
		  <thead class="thead-dark">
		    <tr>
		      <th scope="col" style="width: 5%;text-align: center">Posição</th>
		      <th scope="col" style="width: 27%;text-align: center">Dados 1</th>
		      <th scope="col" style="width: 30%;background-color: #dee2e6;text-align: center">Dados 2</th>
		      <th scope="col" style="width: 30%;background-color: #454d55;text-align: center">Paridade</th>
		    </tr>
		  </thead>
		  <tbody class="tbody-light" id="tabela_1"></tbody>
		</table>
  	</div>
</div>

</body>
</html>
