<?php

require_once('../../../server/Clases/conexion.php');

$consulta ="
SELECT
    pd.idPedido,
    concat(c.nombres,' ',c.apellidos) as nombre_apellido,
    pd.fechaPedido,
    FORMAT (sum(pr.precio*pp.cantidad),0) AS valor,
    ep.estado

    
    from pedidos pd
    join clientes c on pd.idCliente =c.idCliente
    join pedidosproductos pp on pd.idPedido=pp.idPedido
    join producto p on p.idProducto=pp.idProducto
    join precioproducto pr on p.idProducto=pr.idProducto
    join estadopedido ep on ep.idEstadoPedido=pd.idEstadoPedido
    
    WHERE pd.idEstadoPedido !=4
    group by pd.idPedido 
       
  
  ";

   
$resultado = mysqli_query($conexion, $consulta) or die('no se consulto el precio');




// Recorremos la unidad de M
while($data = mysqli_fetch_assoc($resultado)) {
    $datos["data"][] = $data;
    
}

// Retornamos la info a la tabla
echo json_encode($datos);



?>