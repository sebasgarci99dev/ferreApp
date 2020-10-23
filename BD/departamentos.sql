-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.11-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Volcando datos para la tabla ferreapp.departamentos: ~33 rows (aproximadamente)
DELETE FROM `departamentos`;
/*!40000 ALTER TABLE `departamentos` DISABLE KEYS */;
INSERT INTO `departamentos` (`id`, `pai_id`, `dep_cod`, `dep_nombre`) VALUES
	(1, 47, '08', 'ATLANTICO'),
	(2, 47, '11', 'BOGOTA'),
	(3, 47, '13', 'BOLIVAR'),
	(4, 47, '15', 'BOYACA'),
	(5, 47, '17', 'CALDAS'),
	(6, 47, '18', 'CAQUETA'),
	(7, 47, '19', 'CAUCA'),
	(8, 47, '20', 'CESAR'),
	(9, 47, '23', 'CORDOBA'),
	(10, 47, '25', 'CUNDINAMARCA'),
	(11, 47, '27', 'CHOCO'),
	(12, 47, '41', 'HUILA'),
	(13, 47, '44', 'LA GUAJIRA'),
	(14, 47, '47', 'MAGDALENA'),
	(15, 47, '50', 'META'),
	(16, 47, '52', 'NARIÑO'),
	(17, 47, '54', 'N. DE SANTANDER'),
	(18, 47, '63', 'QUINDIO'),
	(19, 47, '66', 'RISARALDA'),
	(20, 47, '68', 'SANTANDER'),
	(21, 47, '70', 'SUCRE'),
	(22, 47, '73', 'TOLIMA'),
	(23, 47, '76', 'VALLE DEL CAUCA'),
	(24, 47, '81', 'ARAUCA'),
	(25, 47, '85', 'CASANARE'),
	(26, 47, '86', 'PUTUMAYO'),
	(27, 47, '88', 'SAN ANDRES'),
	(28, 47, '91', 'AMAZONAS'),
	(29, 47, '94', 'GUAINIA'),
	(30, 47, '95', 'GUAVIARE'),
	(31, 47, '97', 'VAUPES'),
	(32, 47, '99', 'VICHADA'),
	(33, 47, '05', 'ANTIOQUIA');
/*!40000 ALTER TABLE `departamentos` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
