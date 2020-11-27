<?php

require_once('../../../server/Clases/conexion.php');

$consulta ="
SELECT
    c.codigo as codigo,
    concat(c.nombres, ' ', c.apellidos) as nombre_apellido,
    c.direccion as direccion,
    c.telefono_fijo as tel_fijo,
    c.telefono_cel as celular,
    c.email,
    d.dep_nombre as departamento,
    m.mun_nombre as ciudad,
    if(c.estado=0,'Activos','Inactivo') as estado
    from clientes c
    join departamentos d on d.id=c.idDepto
    join municipios m on c.idMunicipio=m.id
  
  ";

   
$resultado = mysqli_query($conexion, $consulta) or die('no se consulto el precio');




// Recorremos la unidad de M
while($data = mysqli_fetch_assoc($resultado)) {
    $datos["data"][] = $data;
    
}

// Retornamos la info a la tabla
echo json_encode($datos);



?>