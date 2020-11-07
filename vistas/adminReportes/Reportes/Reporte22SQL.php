<?php

require_once('../../../server/Clases/conexion.php');

$consulta ="
    SELECT
    c.categoria,
    p.idProducto,
    p.codigoBarras,
    u.unidadMedida,
    p.nombre,
    s.stock,
    FORMAT((s.stock*pr.precio),0) as valorizado
    FROM producto p
    JOIN stockproductos s on s.idProducto=p.idProducto
    JOIN precioproducto pr on pr.idProducto = p.idProducto
    JOIN categoriaproducto c on c.idCategoria = p.idCategoria
    JOIN unidadmedida u on u.idUnidadMedida=p.idunidadMedida
    WHERE s.stock !=0

 ";

     

$resultado = mysqli_query($conexion, $consulta) or die('no se consulto el query');




// Recorremos la unidad de M
while($data = mysqli_fetch_assoc($resultado)) {
    $datos["data"][] = $data;
    
}

// Retornamos la info a la tabla
echo json_encode($datos);



?>