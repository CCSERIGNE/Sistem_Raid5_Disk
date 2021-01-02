<?php
$sizfor = 0;
if (count($disk_1) >= 0) {
  if (count($disk_1) >= count($disk_2) ) {
    if (count($disk_1) >= count($disk_3)) {
       $sizfor = count($disk_1);
    }elseif(count($disk_3) >= count($disk_2)){
      $sizfor = count($disk_3);
    }
  }elseif(count($disk_2) >= count($disk_3)){
    $sizfor = count($disk_2);
  }elseif(count($disk_3) >= count($disk_2)){
    $sizfor = count($disk_3);
  }
}

if (count($disk_1) == 0) {
  $diskdados_1 = $disk_2;
  $diskdados_2 = $disk_3;
}elseif (count($disk_2) == 0) {
  $diskdados_1 = $disk_1;
  $diskdados_2 = $disk_3;
}elseif (count($disk_3) == 0) {
  $diskdados_1 = $disk_1;
  $diskdados_2 = $disk_2;
}

if ($sizfor > 1) {
  for ($i=0; $i < $sizfor ; $i++) {
        $parte_1 = $diskdados_1[$i]['info'];
        if (strlen($parte_1) > strlen($diskdados_2[$i]['info']))
          $parte_1  = $parte_1." ";
        else if (strlen($diskdados_2[$i]['info']) > strlen($parte_1))
          $parte_2 = $diskdados_2[$i]['info']." ";
        
        $pardate = $parte_1 ^ $parte_2;
        $date_1 =  $diskdados_2 ^ $pardate;
        $date_2 =  $diskdados_1 ^ $pardate;

        echo "<script>
            $('#tabela_1').append('<tr><th>".$i."</th>'+
            '<td>Dados</td><td>".$date_1."</td></tr>');

            $('#tabela_2').append('tr><th >".$i."</th>'+
            '<td>Dados</td><td>".$date_2."</td>'</tr>');

            $('#tabela_3').append('<tr><th>".$i."</th>'+
              '<td>Paridade</td><td>".$pardate."</td></tr>');
            </script>";
  }
}
 ?>
