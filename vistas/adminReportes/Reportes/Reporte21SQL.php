<?php

require_once('../../../server/Clases/conexion.php');

$consulta ="
    SELECT
    c.idCategoria, 
    if(c.categoria<=>null,'TOTAL',c.categoria) AS categoria,
    FORMAT(SUM(s.stock*pr.precio),0) as valorizado
    FROM categoriaproducto c
    JOIN producto p on c.idCategoria=p.idCategoria
    JOIN stockproductos s on s.idProducto=p.idProducto
    JOIN precioproducto pr on pr.idProducto = s.idProducto
    group by c.categoria WITH ROLLUP
  ";

   
$resultado = mysqli_query($conexion, $consulta) or die('no se consulto el precio');




// Recorremos la unidad de M
while($data = mysqli_fetch_assoc($resultado)) {
    $datos["data"][] = $data;
    
}

// Retornamos la info a la tabla
echo json_encode($datos);



?>