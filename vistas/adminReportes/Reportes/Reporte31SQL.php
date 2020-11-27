<?php

require_once('../../../server/Clases/conexion.php');

$consulta ="
SELECT
   if(c.codigo<=>null,'TOTAL',c.codigo) as codigo,
   concat(c.nombres,' ',c.apellidos) as nombre_apellido,
    FORMAT (SUM(pp.cantidad*pr.precio),0) as venta_confirmada,
    if(p.idEstadoPedido=4,'Entregado','Pendiente') as estado
    FROM clientes c
    JOIN pedidos p on p.idCliente=c.idCliente
    JOIN pedidosproductos pp on pp.idPedido=p.idPedido
    JOIN precioproducto pr on pr.idProducto = pp.idProducto
    where p.idEstadoPedido = 4 or p.idEstadoPedido = 5 and  pr.idProducto = pp.idProducto
    group by c.codigo 
  ";

   
$resultado = mysqli_query($conexion, $consulta) or die('no se consulto el precio');




// Recorremos la unidad de M
while($data = mysqli_fetch_assoc($resultado)) {
    $datos["data"][] = $data;
    
}

// Retornamos la info a la tabla
echo json_encode($datos);



?>