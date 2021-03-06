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

-- Volcando datos para la tabla ferreapp.pai: ~249 rows (aproximadamente)
DELETE FROM `pai`;
/*!40000 ALTER TABLE `pai` DISABLE KEYS */;
INSERT INTO `pai` (`id`, `pai_nombre`, `pai_iso_nombre`, `pai_alfa_2`, `pai_alfa_3`, `pai_cod`) VALUES
	(1, 'AFGANIST&Aacute;N', 'AFGANIST&Aacute;N', 'AF', 'AFG', 4),
	(2, 'ALAND', 'ISLAS ALAND', 'AX', 'ALA', 248),
	(3, 'ALBANIA', 'ALBANIA', 'AL', 'ALB', 8),
	(4, 'ALEMANIA', 'ALEMANIA', 'DE', 'DEU', 276),
	(5, 'ANDORRA', 'ANDORRA', 'AD', 'AND', 20),
	(6, 'ANGOLA', 'ANGOLA', 'AO', 'AGO', 24),
	(7, 'ANGUILA', 'ANGUILA', 'AI', 'AIA', 660),
	(8, 'ANTA&Aacute;RTIDA', 'ANT&Aacute;RTIDA', 'AQ', 'ATA', 10),
	(9, 'ANTIGUA Y BARBUDA', 'ANTIGUA Y BARBUDA', 'AG', 'ATG', 28),
	(10, 'ARABIA SAUDITA', 'ARABIA SAUDITA', 'SA', 'SAU', 682),
	(11, 'ARGELIA', 'ARGELIA', 'DZ', 'DZA', 12),
	(12, 'ARGENTINA', 'ARGENTINA', 'AR', 'ARG', 32),
	(13, 'ARMENIA', 'ARMENIA', 'AM', 'ARM', 51),
	(14, 'ARUBA', 'ARUBA', 'AW', 'ABW', 533),
	(15, 'AUSTRALIA', 'AUSTRALIA', 'AU', 'AUS', 36),
	(16, 'AUSTRIA', 'AUSTRIA', 'AT', 'AUT', 40),
	(17, 'AZERBAIY&Aacute;N', 'AZERBAIY&Aacute;N', 'AZ', 'AZE', 31),
	(18, 'BAHAMAS', 'BAHAMAS (LAS)', 'BS', 'BHS', 44),
	(19, 'BANGLAD&Eacute;S', 'BANGLAD&Eacute;S', 'BD', 'BGD', 50),
	(20, 'BARBADOS', 'BARBADOS', 'BB', 'BRB', 52),
	(21, 'BAR&Eacute;IN', 'BAR&Eacute;IN', 'BH', 'BHR', 48),
	(22, 'B&Eacute;LGICA', 'B&Eacute;LGICA', 'BE', 'BEL', 56),
	(23, 'BELICE', 'BELICE', 'BZ', 'BLZ', 84),
	(24, 'BEN&Iacute;N', 'BEN&Iacute;N', 'BJ', 'BEN', 204),
	(25, 'BERMUDAS', 'BERMUDAS', 'BM', 'BMU', 60),
	(26, 'BIELORRUSIA', 'BIELORRUSIA', 'BY', 'BLR', 112),
	(27, 'BIRMANIA', 'MYANMAR', 'MM', 'MMR', 104),
	(28, 'BOLIVIA', 'BOLIVIA, ESTADO PLURINACIONAL ', 'BO', 'BOL', 68),
	(29, 'BOSNIA Y HERZEGOVINA', 'BOSNIA Y HERZEGOVINA', 'BA', 'BIH', 70),
	(30, 'BOTSUANA', 'BOTSUANA', 'BW', 'BWA', 72),
	(31, 'BRASIL', 'BRASIL', 'BR', 'BRA', 76),
	(32, 'BRUN&Eacute;I', 'BRUN&Eacute;I DARUSSALAM', 'BN', 'BRN', 96),
	(33, 'BULGARIA', 'BULGARIA', 'BG', 'BGR', 100),
	(34, 'BURKINA FASO', 'BURKINA FASO', 'BF', 'BFA', 854),
	(35, 'BURUNDI', 'BURUNDI', 'BI', 'BDI', 108),
	(36, 'BUT&Aacute;N', 'BUT&Aacute;N', 'BT', 'BTN', 64),
	(37, 'CABO VERDE', 'CABO VERDE', 'CV', 'CPV', 132),
	(38, 'CAMBOYA', 'CAMBOYA', 'KH', 'KHM', 116),
	(39, 'CAMER&Uacute;N', 'CAMER&Uacute;N', 'CM', 'CMR', 120),
	(40, 'CANAD&Aacute;', 'CANAD&Aacute;', 'CA', 'CAN', 124),
	(41, 'CATAR', 'CATAR', 'QA', 'QAT', 634),
	(42, 'CARIBE NEERLAND&Eacute;S', 'BONAIRE, SAN EUSTAQUIO Y SABA', 'BQ', 'BES', 535),
	(43, 'CHAD', 'CHAD', 'TD', 'TCD', 148),
	(44, 'CHILE', 'CHILE', 'CL', 'CHL', 152),
	(45, 'CHINA', 'CHINA', 'CN', 'CHN', 156),
	(46, 'CHIPRE', 'CHIPRE', 'CY', 'CYP', 196),
	(47, 'COLOMBIA', 'COLOMBIA', 'CO', 'COL', 170),
	(48, 'COMORAS', 'COMORAS', 'KM', 'COM', 174),
	(49, 'COREA DEL NORTE', 'COREA (LA REP&Uacute;BLICA DEMOCR&Aacute;TICA)', 'KP', 'PRK', 408),
	(50, 'COREA DEL SUR', 'COREA (LA REP&Uacute;BLICA DE)', 'KR', 'KOR', 410),
	(51, 'COSTA DE MARFIL', 'COSTA DE MARFIL', 'CI', 'CIV', 384),
	(52, 'COSTA RICA', 'COSTA RICA', 'CR', 'CRI', 188),
	(53, 'CROACIA', 'CROACIA', 'HR', 'HRV', 191),
	(54, 'CUBA', 'CUBA', 'CU', 'CUB', 192),
	(55, 'CURAZAO', 'CURAZAO', 'CW', 'CUW', 531),
	(56, 'DINAMARCA', 'DINAMARCA', 'DK', 'DNK', 208),
	(57, 'DOMINICA', 'DOMINICA', 'DM', 'DMA', 212),
	(58, 'ECUADOR', 'ECUADOR', 'EC', 'ECU', 218),
	(59, 'EGIPTO', 'EGIPTO', 'EG', 'EGY', 818),
	(60, 'EL SALVADOR', 'EL SALVADOR', 'SV', 'SLV', 222),
	(61, 'EMIRATOS &Aacute;RABES UNIDOS', 'EMIRATOS &Aacute;RABES UNIDOS (LOS)', 'AE', 'ARE', 784),
	(62, 'ERITREA', 'ERITREA', 'ER', 'ERI', 232),
	(63, 'ESLOVAQUIA', 'ESLOVAQUIA', 'SK', 'SVK', 703),
	(64, 'ESLOVENIA', 'ESLOVENIA', 'SI', 'SVN', 705),
	(65, 'ESPA&Ntilde;A', 'ESPA&Ntilde;A', 'ES', 'ESP', 724),
	(66, 'ESTADOS UNIDOS', 'ESTADOS UNIDOS (LOS)', 'US', 'USA', 840),
	(67, 'ESTONIA', 'ESTONIA', 'EE', 'EST', 233),
	(68, 'ETIOP&Iacute;A', 'ETIOP&Iacute;A', 'ET', 'ETH', 231),
	(69, 'FILIPINAS', 'FILIPINAS (LAS)', 'PH', 'PHL', 608),
	(70, 'FINLANDIA', 'FINLANDIA', 'FI', 'FIN', 246),
	(71, 'FIYI', 'FIYI', 'FJ', 'FJI', 242),
	(72, 'FRANCIA', 'FRANCIA', 'FR', 'FRA', 250),
	(73, 'GAB&Oacute;N', 'GAB&Oacute;N', 'GA', 'GAB', 266),
	(74, 'GAMBIA', 'GAMBIA (LA)', 'GM', 'GMB', 270),
	(75, 'GEORGIA', 'GEORGIA', 'GE', 'GEO', 268),
	(76, 'GHANA', 'GHANA', 'GH', 'GHA', 288),
	(77, 'GIBRALTAR', 'GIBRALTAR', 'GI', 'GIB', 292),
	(78, 'GRANADA', 'GRANADA', 'GD', 'GRD', 308),
	(79, 'GRECIA', 'GRECIA', 'GR', 'GRC', 300),
	(80, 'GROENLANDIA', 'GROENLANDIA', 'GL', 'GRL', 304),
	(81, 'GUADALUPE', 'GUADALUPE', 'GP', 'GLP', 312),
	(82, 'GUAM', 'GUAM', 'GU', 'GUM', 316),
	(83, 'GUATEMALA', 'GUATEMALA', 'GT', 'GTM', 320),
	(84, 'GUAYANA FRANCESA', 'GUAYANA FRANCESA', 'GF', 'GUF', 254),
	(85, 'GUERNSEY', 'GUERNSEY', 'GG', 'GGY', 831),
	(86, 'GUINEA', 'GUINEA', 'GN', 'GIN', 324),
	(87, 'GUINEA-BIS&Aacute;U', 'GUINEA-BIS&Aacute;U', 'GW', 'GNB', 624),
	(88, 'GUINEA ECUATORIAL', 'GUINEA ECUATORIAL', 'GQ', 'GNQ', 226),
	(89, 'GUYANA', 'GUYANA', 'GY', 'GUY', 328),
	(90, 'HAIT&Iacute;', 'HAIT&Iacute;', 'HT', 'HTI', 332),
	(91, 'HONDURAS', 'HONDURAS', 'HN', 'HND', 340),
	(92, 'HONG KONG', 'HONG KONG', 'HK', 'HKG', 344),
	(93, 'HUNGR&Iacute;A', 'HUNGR&Iacute;A', 'HU', 'HUN', 348),
	(94, 'INDIA', 'INDIA', 'IN', 'IND', 356),
	(95, 'INDONESIA', 'INDONESIA', 'ID', 'IDN', 360),
	(96, 'IRAK', 'IRAK', 'IQ', 'IRQ', 368),
	(97, 'IR&Aacute;N', 'IR&Aacute;N (LA REP&Uacute;BLICA ISL&Aacute;MICA DE', 'IR', 'IRN', 364),
	(98, 'IRLANDA', 'IRLANDA', 'IE', 'IRL', 372),
	(99, 'ISLA BOUVET', 'ISLA BOUVET', 'BV', 'BVT', 74),
	(100, 'ISLA DE MAN', 'ISLA DE MAN', 'IM', 'IMN', 833),
	(101, 'ISLA DE NAVIDAD', 'ISLA DE NAVIDAD', 'CX', 'CXR', 162),
	(102, 'NORFOLK', 'ISLA NORFOLK', 'NF', 'NFK', 574),
	(103, 'ISLANDIA', 'ISLANDIA', 'IS', 'ISL', 352),
	(104, 'ISLAS CAIM&Aacute;N', 'ISLAS CAIM&Aacute;N (LAS)', 'KY', 'CYM', 136),
	(105, 'ISLAS COCOS', 'ISLAS COCOS (KEELING)', 'CC', 'CCK', 166),
	(106, 'ISLAS COOK', 'ISLAS COOK (LAS)', 'CK', 'COK', 184),
	(107, 'ISLAS FEROE', 'ISLAS FEROE (LAS)', 'FO', 'FRO', 234),
	(108, 'ISLAS GEORGIAS DEL SUR Y SAND', 'GEORGIA DEL SUR Y LAS ISLAS SA', 'GS', 'SGS', 239),
	(109, 'ISLAS HEARD Y MCDONALD', 'ISLA HEARD E ISLAS MCDONALD', 'HM', 'HMD', 334),
	(110, 'ISLAS MALVINAS', 'ISLAS MALVINAS [FALKLAND] (LAS', 'FK', 'FLK', 238),
	(111, 'ISLAS MARIANAS DEL NORTE', 'ISLAS MARIANAS DEL NORTE (LAS)', 'MP', 'MNP', 580),
	(112, 'ISLAS MARSHALL', 'ISLAS MARSHALL (LAS)', 'MH', 'MHL', 584),
	(113, 'ISLAS PITCAIRN', 'PITCAIRN', 'PN', 'PCN', 612),
	(114, 'ISLAS SALOM&Oacute;N', 'ISLAS SALOM&Oacute;N (LAS)', 'SB', 'SLB', 90),
	(115, 'ISLAS TURCAS Y CAICOS', 'ISLAS TURCAS Y CAICOS (LAS)', 'TC', 'TCA', 796),
	(116, 'ISLAS ULTRAMARINAS DE ESTADOS', 'ISLAS DE ULTRAMAR MENORES DE E', 'UM', 'UMI', 581),
	(117, 'ISLAS V&Iacute;RGENES BRIT&Aacute;NICAS', 'ISLAS V&Iacute;RGENES (BRIT&Aacute;NICAS)', 'VG', 'VGB', 92),
	(118, 'ISLAS V&Iacute;RGENES DE LOS ESTADOS', 'ISLAS V&Iacute;RGENES (EE.UU.)', 'VI', 'VIR', 850),
	(119, 'ISRAEL', 'ISRAEL', 'IL', 'ISR', 376),
	(120, 'ITALIA', 'ITALIA', 'IT', 'ITA', 380),
	(121, 'JAMAICA', 'JAMAICA', 'JM', 'JAM', 388),
	(122, 'JAP&Oacute;N', 'JAP&Oacute;N', 'JP', 'JPN', 392),
	(123, 'JERSEY', 'JERSEY', 'JE', 'JEY', 832),
	(124, 'JORDANIA', 'JORDANIA', 'JO', 'JOR', 400),
	(125, 'KAZAJIST&Aacute;N', 'KAZAJIST&Aacute;N', 'KZ', 'KAZ', 398),
	(126, 'KENIA', 'KENIA', 'KE', 'KEN', 404),
	(127, 'KIRGUIST&Aacute;N', 'KIRGUIST&Aacute;N', 'KG', 'KGZ', 417),
	(128, 'KIRIBATI', 'KIRIBATI', 'KI', 'KIR', 296),
	(129, 'KUWAIT', 'KUWAIT', 'KW', 'KWT', 414),
	(130, 'LAOS', 'LAO, (LA) REP&Uacute;BLICA DEMOCR&Aacute;TIC', 'LA', 'LAO', 418),
	(131, 'LESOTO', 'LESOTO', 'LS', 'LSO', 426),
	(132, 'LETONIA', 'LETONIA', 'LV', 'LVA', 428),
	(133, 'L&Iacute;BANO', 'L&Iacute;BANO', 'LB', 'LBN', 422),
	(134, 'LIBERIA', 'LIBERIA', 'LR', 'LBR', 430),
	(135, 'LIBIA', 'LIBIA', 'LY', 'LBY', 434),
	(136, 'LIECHTENSTEIN', 'LIECHTENSTEIN', 'LI', 'LIE', 438),
	(137, 'LITUANIA', 'LITUANIA', 'LT', 'LTU', 440),
	(138, 'LUXEMBURGO', 'LUXEMBURGO', 'LU', 'LUX', 442),
	(139, 'MACAO', 'MACAO', 'MO', 'MAC', 446),
	(140, 'MADAGASCAR', 'MADAGASCAR', 'MG', 'MDG', 450),
	(141, 'MALASIA', 'MALASIA', 'MY', 'MYS', 458),
	(142, 'MALAUI', 'MALAUI', 'MW', 'MWI', 454),
	(143, 'MALDIVAS', 'MALDIVAS', 'MV', 'MDV', 462),
	(144, 'MAL&Iacute;', 'MAL&Iacute;', 'ML', 'MLI', 466),
	(145, 'MALTA', 'MALTA', 'MT', 'MLT', 470),
	(146, 'MARRUECOS', 'MARRUECOS', 'MA', 'MAR', 504),
	(147, 'MARTINICA', 'MARTINICA', 'MQ', 'MTQ', 474),
	(148, 'MAURICIO', 'MAURICIO', 'MU', 'MUS', 480),
	(149, 'MAURITANIA', 'MAURITANIA', 'MR', 'MRT', 478),
	(150, 'MAYOTTE', 'MAYOTTE', 'YT', 'MYT', 175),
	(151, 'M&Eacute;XICO', 'M&Eacute;XICO', 'MX', 'MEX', 484),
	(152, 'MICRONESIA', 'MICRONESIA (LOS ESTADOS FEDERA', 'FM', 'FSM', 583),
	(153, 'MOLDAVIA', 'MOLDAVIA (LA REP&Uacute;BLICA DE)', 'MD', 'MDA', 498),
	(154, 'M&Oacute;NACO', 'M&Oacute;NACO', 'MC', 'MCO', 492),
	(155, 'MONGOLIA', 'MONGOLIA', 'MN', 'MNG', 496),
	(156, 'MONTENEGRO', 'MONTENEGRO', 'ME', 'MNE', 499),
	(157, 'MONTSERRAT', 'MONTSERRAT', 'MS', 'MSR', 500),
	(158, 'MOZAMBIQUE', 'MOZAMBIQUE', 'MZ', 'MOZ', 508),
	(159, 'NAMIBIA', 'NAMIBIA', 'NA', 'NAM', 516),
	(160, 'NAURU', 'NAURU', 'NR', 'NRU', 520),
	(161, 'NEPAL', 'NEPAL', 'NP', 'NPL', 524),
	(162, 'NICARAGUA', 'NICARAGUA', 'NI', 'NIC', 558),
	(163, 'N&Iacute;GER', 'N&Iacute;GER (EL)', 'NE', 'NER', 562),
	(164, 'NIGERIA', 'NIGERIA', 'NG', 'NGA', 566),
	(165, 'NIUE', 'NIUE', 'NU', 'NIU', 570),
	(166, 'NORUEGA', 'NORUEGA', 'NO', 'NOR', 578),
	(167, 'NUEVA CALEDONIA', 'NUEVA CALEDONIA', 'NC', 'NCL', 540),
	(168, 'NUEVA ZELANDA', 'NUEVA ZELANDA', 'NZ', 'NZL', 554),
	(169, 'OM&Aacute;N', 'OM&Aacute;N', 'OM', 'OMN', 512),
	(170, 'PA&Iacute;SES BAJOS', 'PA&Iacute;SES BAJOS (LOS)', 'NL', 'NLD', 528),
	(171, 'PAKIST&Aacute;N', 'PAKIST&Aacute;N', 'PK', 'PAK', 586),
	(172, 'PALAOS', 'PALAOS', 'PW', 'PLW', 585),
	(173, 'PALESTINA', 'PALESTINA, ESTADO DE', 'PS', 'PSE', 275),
	(174, 'PANAM&Aacute;', 'PANAM&Aacute;', 'PA', 'PAN', 591),
	(175, 'PAP&Uacute;A NUEVA GUINEA', 'PAP&Uacute;A NUEVA GUINEA', 'PG', 'PNG', 598),
	(176, 'PARAGUAY', 'PARAGUAY', 'PY', 'PRY', 600),
	(177, 'PER&Uacute;', 'PER&Uacute;', 'PE', 'PER', 604),
	(178, 'POLINESIA FRANCESA', 'POLINESIA FRANCESA', 'PF', 'PYF', 258),
	(179, 'POLONIA', 'POLONIA', 'PL', 'POL', 616),
	(180, 'PORTUGAL', 'PORTUGAL', 'PT', 'PRT', 620),
	(181, 'PUERTO RICO', 'PUERTO RICO', 'PR', 'PRI', 630),
	(182, 'REINO UNIDO', 'REINO UNIDO (EL)', 'GB', 'GBR', 826),
	(183, 'REP&Uacute;BLICA CENTROAFRICANA', 'REP&Uacute;BLICA CENTROAFRICANA (LA)', 'CF', 'CAF', 140),
	(184, 'REP&Uacute;BLICA CHECA', 'REP&Uacute;BLICA CHECA (LA)', 'CZ', 'CZE', 203),
	(185, 'MACEDONIA', 'MACEDONIA (LA ANTIGUA REP?BLIC', 'MK', 'MKD', 807),
	(186, 'REP&Uacute;BLICA DEL CONGO', 'CONGO', 'CG', 'COG', 178),
	(187, 'REP&Uacute;BLICA DEMOCR&Aacute;TICA DEL CON', 'CONGO (LA REP&Uacute;BLICA DEMOCR&Aacute;TICA', 'CD', 'COD', 180),
	(188, 'REP&Uacute;BLICA DOMINICANA', 'REP&Uacute;BLICA DOMINICANA (LA)', 'DO', 'DOM', 214),
	(189, 'REUNI&Oacute;N', 'REUNI&Oacute;N', 'RE', 'REU', 638),
	(190, 'RUANDA', 'RUANDA', 'RW', 'RWA', 646),
	(191, 'RUMANIA', 'RUMANIA', 'RO', 'ROU', 642),
	(192, 'RUSIA', 'RUSIA, (LA) FEDERACI?N DE', 'RU', 'RUS', 643),
	(193, 'REP&Uacute;BLICA &Aacute;RABE SAHARAUI DEMO', 'SAHARA OCCIDENTAL', 'EH', 'ESH', 732),
	(194, 'SAMOA', 'SAMOA', 'WS', 'WSM', 882),
	(195, 'SAMOA AMERICANA', 'SAMOA AMERICANA', 'AS', 'ASM', 16),
	(196, 'SAN BARTOLOM&Eacute;', 'SAN BARTOLOM&Eacute;', 'BL', 'BLM', 652),
	(197, 'SAN CRIST&Oacute;BAL Y NIEVES', 'SAN CRIST&Oacute;BAL Y NIEVES', 'KN', 'KNA', 659),
	(198, 'SAN MARINO', 'SAN MARINO', 'SM', 'SMR', 674),
	(199, 'SAN MART&Iacute;N', 'SAN MART&Iacute;N (PARTE FRANCESA)', 'MF', 'MAF', 663),
	(200, 'SAN PEDRO Y MIQUEL&Oacute;N', 'SAN PEDRO Y MIQUEL&Oacute;N', 'PM', 'SPM', 666),
	(201, 'SAN VICENTE Y LAS GRANADINAS', 'SAN VICENTE Y LAS GRANADINAS', 'VC', 'VCT', 670),
	(202, 'SANTA ELENA, ASCENSI&Oacute;N Y TRIS', 'SANTA HELENA, ASCENSI&Oacute;N Y TRIS', 'SH', 'SHN', 654),
	(203, 'SANTA LUC&Iacute;A', 'SANTA LUC&Iacute;A', 'LC', 'LCA', 662),
	(204, 'SANTO TOM&Eacute; Y PR&Iacute;NCIPE', 'SANTO TOM&Eacute; Y PR&Iacute;NCIPE', 'ST', 'STP', 678),
	(205, 'SENEGAL', 'SENEGAL', 'SN', 'SEN', 686),
	(206, 'SERBIA', 'SERBIA', 'RS', 'SRB', 688),
	(207, 'SEYCHELLES', 'SEYCHELLES', 'SC', 'SYC', 690),
	(208, 'SIERRA LEONA', 'SIERRA LEONA', 'SL', 'SLE', 694),
	(209, 'SINGAPUR', 'SINGAPUR', 'SG', 'SGP', 702),
	(210, 'SINT MAARTEN', 'SINT MAARTEN (PARTE HOLANDESA)', 'SX', 'SXM', 534),
	(211, 'SIRIA', 'SIRIA, (LA) REP&Uacute;BLICA &Aacute;RABE', 'SY', 'SYR', 760),
	(212, 'SOMALIA', 'SOMALIA', 'SO', 'SOM', 706),
	(213, 'SRI LANKA', 'SRI LANKA', 'LK', 'LKA', 144),
	(214, 'SUAZILANDIA', 'SUAZILANDIA', 'SZ', 'SWZ', 748),
	(215, 'SUD&Aacute;FRICA', 'SUD&Aacute;FRICA', 'ZA', 'ZAF', 710),
	(216, 'SUD&Aacute;N', 'SUD&Aacute;N (EL)', 'SD', 'SDN', 729),
	(217, 'SUD&Aacute;N DEL SUR', 'SUD&Aacute;N DEL SUR', 'SS', 'SSD', 728),
	(218, 'SUECIA', 'SUECIA', 'SE', 'SWE', 752),
	(219, 'SUIZA', 'SUIZA', 'CH', 'CHE', 756),
	(220, 'SURINAM', 'SURINAM', 'SR', 'SUR', 740),
	(221, 'SVALBARD Y JAN MAYEN', 'SVALBARD Y JAN MAYEN', 'SJ', 'SJM', 744),
	(222, 'TAILANDIA', 'TAILANDIA', 'TH', 'THA', 764),
	(223, 'REP&Uacute;BLICA DE CHINA', 'TAIW&Aacute;N (PROVINCIA DE CHINA)', 'TW', 'TWN', 158),
	(224, 'TANZANIA', 'TANZANIA, REP&Uacute;BLICA UNIDA DE', 'TZ', 'TZA', 834),
	(225, 'TAYIKIST&Aacute;N', 'TAYIKIST&Aacute;N', 'TJ', 'TJK', 762),
	(226, 'TERRITORIO BRIT&Aacute;NICO DEL OC&Eacute;A', 'TERRITORIO BRIT&Aacute;NICO DEL OC&Eacute;AN', 'IO', 'IOT', 86),
	(227, 'TIERRAS AUSTRALES Y ANT&Aacute;RTICA', 'TERRITORIOS AUSTRALES FRANCESE', 'TF', 'ATF', 260),
	(228, 'TIMOR ORIENTAL', 'TIMOR-LESTE', 'TL', 'TLS', 626),
	(229, 'TOGO', 'TOGO', 'TG', 'TGO', 768),
	(230, 'TOKELAU', 'TOKELAU', 'TK', 'TKL', 772),
	(231, 'TONGA', 'TONGA', 'TO', 'TON', 776),
	(232, 'TRINIDAD Y TOBAGO', 'TRINIDAD Y TOBAGO', 'TT', 'TTO', 780),
	(233, 'T&Uacute;NEZ', 'T&Uacute;NEZ', 'TN', 'TUN', 788),
	(234, 'TURKMENIST&Aacute;N', 'TURKMENIST&Aacute;N', 'TM', 'TKM', 795),
	(235, 'TURQU&Iacute;A', 'TURQU&Iacute;A', 'TR', 'TUR', 792),
	(236, 'TUVALU', 'TUVALU', 'TV', 'TUV', 798),
	(237, 'UCRANIA', 'UCRANIA', 'UA', 'UKR', 804),
	(238, 'UGANDA', 'UGANDA', 'UG', 'UGA', 800),
	(239, 'URUGUAY', 'URUGUAY', 'UY', 'URY', 858),
	(240, 'UZBEKIST&Aacute;N', 'UZBEKIST&Aacute;N', 'UZ', 'UZB', 860),
	(241, 'VANUATU', 'VANUATU', 'VU', 'VUT', 548),
	(242, 'CIUDAD DEL VATICANO', 'SANTA SEDE [ESTADO DE LA CIUDA', 'VA', 'VAT', 336),
	(243, 'VENEZUELA', 'VENEZUELA, REP&Uacute;BLICA BOLIVARIANA', 'VE', 'VEN', 862),
	(244, 'VIETNAM', 'VIET NAM', 'VN', 'VNM', 704),
	(245, 'WALLIS Y FUTUNA', 'WALLIS Y FUTUNA', 'WF', 'WLF', 876),
	(246, 'YEMEN', 'YEMEN', 'YE', 'YEM', 887),
	(247, 'YIBUTI', 'YIBUTI', 'DJ', 'DJI', 262),
	(248, 'ZAMBIA', 'ZAMBIA', 'ZM', 'ZMB', 894),
	(249, 'ZIMBABUE', 'ZIMBABUE', 'ZW', 'ZWE', 716);
/*!40000 ALTER TABLE `pai` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
