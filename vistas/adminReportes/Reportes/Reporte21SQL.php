<?php

require_once('../../../server/Clases/conexion.php');

$consulta ="
    SELECT
    c.idCategoria, 
    c.categoria,
    FORMAT(SUM(s.stock*pr.precio),2) as valorizado
    FROM categoriaproducto c
    JOIN producto p on c.idCategoria=p.idCategoria
    JOIN stockproductos s on s.idProducto=p.idProducto
    JOIN precioproducto pr on pr.idProducto = s.idProducto
    group by c.idCategoria
 

 ";

     

$resultado = mysqli_query($conexion, $consulta) or die('no se consulto el precio');




// Recorremos la unidad de M
while($data = mysqli_fetch_assoc($resultado)) {
    $datos["data"][] = $data;
    
}

// Retornamos la info a la tabla
echo json_encode($datos);



?>