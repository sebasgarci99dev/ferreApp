<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=gb18030">
    <title></title>
    
<style>

    body{
    	margin: 0px;
    	font-family: arial;
    	font-size: 10px;
    }

    #contenedor {
        width: 7.2cm;
        /*height: 27.94cm;*/
        /*background-image: url('../../librerias/images/fondoHoja.jpg');*/
        background-size: 100%;
        padding-top: 1cm;
        padding-bottom: 1cm;
        padding-left: 1cm;
        padding-right: 1cm;
    }

    h1{
    	text-align: center;
    }

    p, 
    h2{
    	text-align: center;
    }

    table{
    	width: 100%;
    }

    </style>

</head>

<body>

    <div id="contenedor">

        <?php
            require_once('../../server/Clases/conexion.php');

            $idPedido = $_GET['idPedido'];

            // Realizamos la consulta para extraer los datos
            $consulta ="
                SELECT 
                    p.idPedido,
                    concat(cl.nombres, ' ', cl.apellidos) as cliente,
                    cl.codigo,
                    cl.telefono_cel,
                    (cl.direccion) as direccionCliente,
                    cl.email,
                    d.dep_nombre,
                    m.mun_nombre,
                    (p.direccion) as direccionPedido,
                    p.fechaPedido,
                    (ep.estado) as estPedido,
                    (ed.estado) as estDomicilio,
                    now() fecha
                FROM pedidos p 
                JOIN clientes cl 
                    ON cl.idCliente = p.idCliente
                    AND cl.estado = 0
                JOIN departamentos d 
                    ON d.id = p.idDepto
                JOIN municipios m
                    ON m.id = p.idCiudad
                JOIN estadopedido ep
                    ON ep.idEstadoPedido = p.idEstadoPedido
                JOIN estadomicilio ed 
                    ON ed.idEstadoDomicilio = p.es_domicilio
                WHERE p.idPedido = ".$idPedido;
            $resultado = mysqli_query($conexion, $consulta) or die('no se consulto la unidad');
            $infoPedido = mysqli_fetch_array($resultado);

              
        ?>
        <p> FerreApp - Colombia </p>
        <hr>
        <p> 
            Ferreteria AAA
            <br>
            Nit: 00000000-0
            <br>
            Dirección: Cra 6ta #20-43
        </p>
        <hr>
        <p>
            FACTURA DE VENTA # <?php echo $infoPedido['idPedido']; ?>
            <br>
            REGIMEN COMUN
            <br>
            FECHA: <?php echo $infoPedido['fechaPedido']; ?>
        </p>
        <hr>
        <p>
            Cliente: <?php echo $infoPedido['cliente']; ?>
            <br>
            NIT: <?php echo $infoPedido['codigo']; ?>
            <br>
            Tel: <?php echo $infoPedido['telefono_cel']; ?>
            <br>
            Email: <?php echo $infoPedido['email']; ?>
        </p>
        <hr>

        <table>
            <thead>
                <th>
                    Cod.
                </th>
                <th>
                    Prod.
                </th>
                <th>
                    Cant.
                </th>
                <th>
                    Total
                </th>
            </thead>
            <tbody>
                <?php 
                    $consulta = "
                        SELECT 
                            pp.idProducto,
                            p.nombre,
                            pp.cantidad,
                            (
                                pp.cantidad*pr.precio
                            ) precio
                        FROM pedidosproductos pp
                        JOIN producto p
                            ON p.idProducto = pp.idProducto
                        JOIN stockproductos sp
                            ON sp.idProducto  = pp.idProducto
                        JOIN precioproducto pr 
                            on sp.idProducto = pr.idProducto
                        WHERE pp.idPedido = ".$idPedido;
                    $resultado = mysqli_query($conexion, $consulta);

                    // Recorremos a los usuarios
                    while($data = mysqli_fetch_assoc($resultado)) {
                        $datos["data"][] = $data;
                    }

                    // print_r($datos);
                    $totalPedido = 0;
                    for ($i=0; $i < count($datos["data"]); $i++) { 
                        $infoProd = $datos["data"][$i];
                        echo "<tr>";
                            echo "<td>".$infoProd['idProducto'].'</td>';
                            echo "<td>".$infoProd['nombre'].'</td>';
                            echo "<td>".$infoProd['cantidad'].'</td>';
                            echo "<td align='right'>$ ".$infoProd['precio'].'</td>';
                        echo "</tr>";
                        $totalPedido += $infoProd['precio'];
                    }
                    echo "<tr>";
                        echo "<td colspan='4' align='right'> <b>Total pedido: </b> $ ".$totalPedido."</td>";
                    echo "</tr>";
                ?>
            </tbody>
        </table>
        <hr>
        <h2>
            ¡Muchas gracias por su compra!
        </h3>
        <p> <?php echo $infoPedido['fecha']; ?>
    </div>

</body>

</html>