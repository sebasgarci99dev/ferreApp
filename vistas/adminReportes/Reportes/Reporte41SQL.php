<?php

require_once('../../../server/Clases/conexion.php');

$consulta ="
SELECT
    c.idCategoria,
    if(c.categoria<=>null,'TOTAL',c.categoria) AS categoria,
  	FORMAT (SUM(pr.precio*pp.cantidad),0) AS venta
    
    from pedidos pd
    join pedidosproductos pp on pd.idPedido=pp.idPedido
    join producto p on p.idProducto=pp.idProducto
    join precioproducto pr on p.idProducto=pr.idProducto
    join categoriaproducto c on p.idCategoria =  c.idCategoria
    WHERE idEstadoPedido = 4
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