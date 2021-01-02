$(document).ready(function() {

	var Array_1 = [];
	var Array_2 = [];
	var Array_3 = [];
	var diskresrva = [];
	var diskdados_1 = [];
	var diskdados_2 = [];
    var sizfor = 0;

    var d1 = {'id':'funciona',};
	var d2 = {'id':'funciona'};
	var d3 = {'id':'funciona',};
	Array_1.push(d1);
	Array_2.push(d2);
	Array_3.push(d3);

	function addknob(){
		$("#d_1").html("");
		$("#d_1").html('<p style="color: rgba(0, 123, 255);"><i class="fas fa-hdd"></i>'+
			'    Primary Disk</p><input class="knob" id="knob_1" data-displayPrevious=true data-fgColor="#8bc34af7" readonly data-thickness=".2" >');
		$("#d_2").html("");
		$("#d_2").html('<p style="color: rgba(133, 100, 4);"><i class="fas fa-hdd"></i>'+
			'    Segundary Disk</p><input class="knob" id="knob_2" data-displayPrevious=true data-fgColor="#8bc34af7" readonly data-thickness=".2" >');
		$("#d_3").html("");
		$("#d_3").html('<p style="color: rgba(148, 193, 63);"><i class="fas fa-hdd"></i>'+
			'    Slave Disk</p><input class="knob" id="knob_3" data-displayPrevious=true data-fgColor="#8bc34af7" readonly data-thickness=".2" >');
	}

    function setknob(){
    	if (Array_1.length == 0) {
		  diskdados_1 = Array_2;
		  diskdados_2 = Array_3;
    	  $("#knob_2").val((Array_2.length-1));
    	  $("#knob_2").knob({});
    	  $("#knob_3").val((Array_3.lengt-1));
    	  $("#knob_3").knob({});
		}else if (Array_2.length == 0) {
		  diskdados_1 = Array_1;
		  diskdados_2 = Array_3;
    	  $("#knob_1").val((Array_1.length-1));
    	  $("#knob_1").knob({});
    	  $("#knob_3").val((Array_3.lengt-1));
    	  $("#knob_3").knob({});
		}else if (Array_3.length == 0) {
		  diskdados_1 = Array_1;
		  diskdados_2 = Array_2;
		  $("#knob_1").val((Array_1.length-1));
    	  $("#knob_1").knob({});
    	  $("#knob_2").val((Array_2.length-1));
    	  $("#knob_2").knob({});
		}else{
		  diskdados_1 = Array_1;
		  diskdados_2 = Array_2;
		  $("#knob_1").val((Array_1.length-1));
    	  $("#knob_1").knob({});
    	  $("#knob_2").val((Array_2.length-1));
    	  $("#knob_2").knob({});
    	  $("#knob_3").val((Array_3.length-1));
    	  $("#knob_3").knob({});
		}
    }

    setknob();

	$("#pills-profile-tab").on('click',function () {
		//PARA LER DADO
		addknob();
		setknob();//verifica tomanho
		if (Array_1.length >= 0) {
		  if (Array_1.length >= Array_2.length ) {
		    if (Array_1.length >= Array_3.length) {
		       sizfor = Array_1.length;
		    }else if(Array_3.length >= Array_2.length){
		      sizfor = Array_3.length;
		    }
		  }else if(Array_2.length >= Array_3.length){
		    sizfor = Array_2.length;
		  }else if(Array_3.length >= Array_2.length){
		    sizfor = Array_3.length;
		  }
		}

		//VERIFICA SE ESTRAGO UM
		if (Array_1.length == 0) {
		  diskdados_1 = Array_2;
		  diskdados_2 = Array_3;
		}else if (Array_2.length == 0) {
		  diskdados_1 = Array_1;
		  diskdados_2 = Array_3;
		}else if (Array_3.length == 0) {
		  diskdados_1 = Array_1;
		  diskdados_2 = Array_2;
		}else{
		  diskdados_1 = Array_1;
		  diskdados_2 = Array_2;
		}

		//LISTAR Dadosif ($sizfor > 1) {
		console.log(sizfor)
		$('#tabela_1').html("");
	  	for (var i=1; i <= sizfor ; i++)
		{
			// console.log(diskdados_1[i]["id"]);
			// console.log(diskdados_2[i]["info"]);
			// console.log(Array_3);
	     	var parte_1 = "";
			var parte_2 = "";
	     	var pardate = "";

			if (diskdados_1[i]["id"] == "dados") {
				parte_1 =  diskdados_1[i]["info"];
				if(diskdados_2[i]["id"] == "dados"){
					parte_2 = diskdados_2[i]["info"];
					pardate = parte_1+""+parte_2;
				}else if(diskdados_2[i]["id"] == "paridade"){
					pardate = diskdados_2[i]["info"];
					var ret  = (pardate.length%2);
					var valdv = (pardate.length-ret);
					var vlowner = (valdv/2);
					parte_2 = pardate.substr(-(vlowner+ret));
				}
			}else if(diskdados_2[i]["id"] == "dados"){
					parte_2 = diskdados_2[i]["info"];
					if (diskdados_1[i]["id"] == "dados") {
					   parte_1 =  diskdados_1[i]["info"];
					   pardate = parte_1+""+parte_2;
					}else if(diskdados_1[i]["id"] == "paridade"){
						pardate = diskdados_1[i]["info"];
						var ret  = (pardate.length%2);
						var valdv = (pardate.length-ret);
						var vlowner = (valdv/2);
						parte_1 =  diskdados_2[i]["info"];
						parte_2 = pardate.substr(-(vlowner+ret));
					}
					pardate = parte_1+""+parte_2;
			}
			$('#tabela_1').append('<tr><th style="background-color :azure;color:black;text-align: center;padding:0px">'+
				i+
				'</th><td style="background-color: #454d55;color:white;padding:0px;text-align: center;width: -webkit-fill-available">'+
				parte_1+'</td>'+
				'<td style="background-color: #dee2e6;color:black;padding:0px;text-align: center;width: -webkit-fill-available">'+
				parte_2+'</td>'
				+'<td style="background-color: #454d55;color:white;padding:0px;text-align: center;width: -webkit-fill-available">'+
				pardate+
				'</td></tr>');
		}
	});

	$("#submit").on('click',function () {
		var tirar = $("#inputex").val();
		var text = tirar.trim();
		var rest = "";
		var valordiv = "";
		var valoowner = "";
		var dados_1 = "";
		var dados_2 = "";
		var dados_paridade = "";
		if (text != "") {
			rest  = (text.length%2);
			valordiv = (text.length-rest);
			valoowner = (valordiv/2);
			dados_1 = text.substr(0,valoowner);
			dados_2 = text.substr(-(valoowner+rest));
			dados_paridade = text.substr(0,text.length);

			//salvar
			console.log(Array_1);
			console.log(Array_2);
			console.log(Array_3);
			// console.log(Array_1[(Array_1.length-1)])
			if(Array_1.length == 1 && Array_2.length == 1 && Array_3.length == 1){
				var d1 = {'id':'dados','info' : dados_1};
				var d2 = {'id':'dados','info' : dados_2};
				var d3 = {'id':'paridade', 'info' : dados_paridade};
				Array_1.push(d1);
			    Array_2.push(d2);
			    Array_3.push(d3);
			}else if (Array_1[(Array_1.length-1)]["id"] == "dados"){
				var d1 = {'id':'dados','info' : dados_1};
				var d2 = {'id':'dados','info' : dados_2};
				var d3 = {'id':'paridade', 'info' : dados_paridade};
				Array_1.push(d3);
				Array_2.push(d1);
				Array_3.push(d2);
			}else if (Array_2[(Array_2.length-1)]["id"] == "dados"){
				var d1 = {'id':'dados','info' : dados_1};
				var d2 = {'id':'dados','info' : dados_2};
				var d3 = {'id':'paridade', 'info' : dados_paridade};
				Array_1.push(d1);
				Array_2.push(d3);
				Array_3.push(d1);
			}else if (Array_3[(Array_3.length-1)]["id"] == "dados"){
				var d1 = {'id':'dados','info' : dados_1};
				var d2 = {'id':'dados','info' : dados_2};
				var d3 = {'id':'paridade', 'info' : dados_paridade};
				Array_1.push(d2);
				Array_2.push(d1);
				Array_3.push(d3);
			}
			$("#pills-profile-tab").trigger( "click" );
		}
    });
	    //
	$("#listD").on('click',function(){
		$("#gestD").removeClass('active');
		$(this).addClass('active');
		//VERIFICA SE ESTRAGO UM

	});
	$("#gestD").on('click',function(){
		$("#listD").removeClass('active');
		$(this).addClass('active');
	});


	function RestorDis(val){
			if (val == "restor_1") {
				for (var i = 0; i < Array_2.length; i++) {

				}
			}else if (val == "restor_2") {

			}else if (val == "restor_3") {

			}
	}

	function DeletDisk(val){
		$("#"+val+"").html("");
		$("#"+val+"").html('<p style="color: rgba(0, 123, 255);">Disk Deletado</p>'+
			'<i class="fas fa-hdd" style="font-size:58px;color:red"></i>');
	}

	$(".card-body").on('click',"a",function(){
		var btclik = $(this).attr('id');
		if (btclik == "del_1") {
			if (Array_1.length > 0) {
				DeletDisk("d_1");
				diskresrva = Array_1;
				Array_1 = [];
			}else{
				alert("O disco Ja foi Deletado")
			}

		}else if (btclik == "restor_1") {
			if (Array_1.length == 0) {
				// RestorDis(btclik);
				Array_1 = diskresrva;
				diskresrva = [];
			}else{
				alert("Disk nao Foi deletado entao nao tem com restorar !");
			}
		}else if (btclik == "del_2") {
			if (Array_2.length > 0) {
			   DeletDisk("d_2");
				 diskresrva = Array_2;
			   Array_2 = [];
			}else{
				alert("O disco Ja foi Deletado")
			}
		}else if (btclik == "restor_2") {
			if (Array_2.length == 0) {
					// RestorDis(btclik);
					Array_2 = diskresrva;
					diskresrva =[];
			}else{
				alert("Disk nao Foi deletado entao nao tem com restorar !");
			}
		}else if (btclik == "del_3") {
			if (Array_3.length >0) {
				DeletDisk("d_3");
				diskresrva = Array_3;
				Array_3 = [];
			}else{
				alert("O disco Ja foi Deletado")
			}
		}else if (btclik == "restor_3") {
			if (Array_3.length == 0) {
				// RestorDis(btclik);
				Array_3 = diskresrva;
				diskresrva = [];
			}else{
				alert("Disk nao Foi deletado entao nao tem com restorar !");
			}
		}
		if (btclik == "" || btclik == "" || btclik == "") {

		}
		addknob();
		setknob();
	})
})
