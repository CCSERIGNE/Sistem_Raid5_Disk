<?php
$disk_1 = array();
$disk_2 = array();
$disk_3 = array();
$disk_1[1]['id'] = "fsdhsfdkhfds";
$disk_1[2]['info'] = "fsdhsfdkhfds";
$string_array = implode("|", $disk_1);
?>
<script type="text/javascript">
  $(document).ready(function() {
    $("#pills-profile-tab").on('click',function () {
      alert('opapep');
      <?php
        $dir = __DIR__;
        // include_once ''.$dir.'/lerDados.php';
      ?>
    })
    $("#submit").on('click',function () {
      var text =
      $("#inputex").val();
      alert(text);
      if (text != "") {
        var arr_1 = "<?php echo $string_array;?>";
        alert(arr_1);
        $.post('gravarDados.php',{dados:text},function(resultado){

        })
      }
    });

  })
</script>
