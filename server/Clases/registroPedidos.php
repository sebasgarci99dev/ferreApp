<?php 	
	require_once('conexion.php');

	$idCliente 	= $_POST['idCliente'];
	$esDomi 	= $_POST['esDomi'];

	// Información de la direccion del pedido
	if($esDomi == 'true') {
		$direccion 	= $_POST['direccion'];
		$depto 		= $_POST['depto'];
		$munic 		= $_POST['munic'];
		$esDomicilio = 2;
	} else {
		$str = "
			select 
				direccion,
				idDepto,
				idMunicipio
			from clientes 
			where idCliente = ".$idCliente;
		$resultado = mysqli_query($conexion, $str);
		$cliente = mysqli_fetch_array($resultado);

		$direccion 	= $cliente['direccion'];
		$depto 		= $cliente['idDepto'];
		$munic 		= $cliente['idMunicipio'];
		$esDomicilio = 1;
	}

	// Creamos el pedido
	$str = "
		INSERT INTO pedidos(
			idCliente,
			fechaPedido,
			idDepto,
			idCiudad,
			direccion,
			idEstadoPedido,
			es_domicilio
		) 
		VALUES (
			'".$idCliente."',
			NOW(),
			'".$depto."',
			'".$munic."',
			'".$direccion."',
			1,
			'".$esDomicilio."'
		);";
	$resultado = mysqli_query($conexion, $str);
	$idPedido = mysqli_insert_id($conexion);

	// Relacionamos los productos al pedido
	$productos = $_POST['productos'];
	$arrayProductos = explode(';', $productos);
	foreach ($arrayProductos as $prod) {
		if(!empty($prod)) {
			$filaProducto = json_decode($prod);

			$str = "
				INSERT INTO pedidosproductos(
					idPedido, 
					idProducto,
					cantidad
				)
				VALUES (
					'".$idPedido."',
					'".$filaProducto->idProd."',
					'".$filaProducto->cantSol."'
				);";
			$resultado = mysqli_query($conexion, $str);
		}
	}

	echo "1";

?>