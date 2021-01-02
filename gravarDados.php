<?php

// $dir = __DIR__;
// include_once ''.$dir.'/Raid5.php';

  $string = isset($_POST['dados']) ? $string = $_POST['dados'] :  $string = null;
  // "Serigne khassim";
  $rest  = (strlen($string )%2);
  $valordiv = (strlen($string )-$rest);
  $valoowner = ($valordiv/2);
  $dados_1 = substr($string, 0,$valoowner);
  $dados_2 = substr($string, -$valoowner);
  $dados_paridade = substr($string, 0,strlen($string ));


if (count($disk_1) > 0) {
  $keydados_1 = array_search(end($disk_1)), $disk_1);
}if (count($disk_2) > 0) {
  $keydados_2 = array_search(end($disk_2),$disk_2);
}if (count($disk_3) > 0) {
  $keydados_3 = array_search(end($disk_3),$disk_3);
}

  if(count($disk_1) == 0 && count($disk_2) == 0 && count($disk_3) == 0){
    $disk_1[0]['id'] = "dado";
    $disk_1[0]['info'] = $dados_1;
    $disk_2[0]['id'] = "dado";
    $disk_2[0]['info'] = $dados_2;
    $disk_3[0]['id'] = "paridade";
    $disk_3[0]['info'] = $dados_paridade;
  }elseif ($disk_1[$keydados_1]['id'] == "dado") {
    $prox1 = ($keydados_2+1);
    $disk_2[$prox1]['id'] = "dado";
    $disk_2[$prox1]['info'] = $dados_1;
    $prox2 =  ($keydados_3+1);
    $disk_3[$prox2]['id'] = "dado";
    $disk_3[$prox2]['info'] = $dados_2;
    $proxpar = ($keydados_1+1);
    $disk_1[$proxpar]['id'] = "paridade";
    $disk_1[$proxpar]['info'] = $dados_paridade;
  }elseif ($disk_2[$keydados_2]['id'] == "dado") {
    $prox1 = ($keydados_3+1);
    $disk_3[$prox1]['id'] = "dado";
    $disk_3[$prox1]['info'] = $dados_1;
    $prox2 =  ($keydados_1+1);
    $disk_1[$prox2]['id'] = "dado";
    $disk_1[$prox2]['info'] = $dados_2;
    $proxpar = ($keydados_2+1);
    $disk_2[$proxpar]['id'] = "paridade";
    $disk_2[$proxpar]['info'] = $dados_paridade;
  }elseif ($disk_3[$keydados_3]['id'] == "dado") {
    $prox1 = ($keydados_2+1);
    $disk_2[$prox1]['id'] = "dado";
    $disk_2[$prox1]['info'] = $dados_1;
    $prox2 =  ($keydados_3+1);
    $disk_1[$prox2]['id'] = "dado";
    $disk_1[$prox2]['info'] = $dados_2;
    $proxpar = ($keydados__1+1);
    $disk_3[$proxpar]['id'] = "paridade";
    $disk_3[$proxpar]['info'] = $dados_paridade;
  }

 ?>
