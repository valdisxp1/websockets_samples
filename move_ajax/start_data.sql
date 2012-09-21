-- phpMyAdmin SQL Dump
-- version 3.3.10
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 21, 2012 at 10:45 AM
-- Server version: 5.5.24
-- PHP Version: 5.3.10-1ubuntu3.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `spele`
--

-- --------------------------------------------------------

--
-- Table structure for table `moving`
--

CREATE TABLE IF NOT EXISTS `moving` (
  `oid` mediumint(9) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `x` smallint(6) NOT NULL DEFAULT '0',
  `y` smallint(6) NOT NULL DEFAULT '0',
  `z` smallint(6) NOT NULL DEFAULT '0',
  `dx` smallint(6) NOT NULL DEFAULT '0',
  `dy` smallint(6) NOT NULL DEFAULT '0',
  `dz` smallint(6) NOT NULL DEFAULT '0',
  `bcol0x` smallint(6) NOT NULL DEFAULT '0',
  `bcol0y` smallint(6) NOT NULL DEFAULT '0',
  `bcol0z` smallint(6) NOT NULL DEFAULT '0',
  `bcol1x` smallint(6) NOT NULL DEFAULT '0',
  `bcol1y` smallint(6) NOT NULL DEFAULT '0',
  `bcol1z` smallint(6) NOT NULL DEFAULT '0',
  `scol0x` smallint(6) NOT NULL DEFAULT '0',
  `scol0y` smallint(6) NOT NULL DEFAULT '0',
  `scol0z` smallint(6) NOT NULL DEFAULT '0',
  `scol1x` smallint(6) NOT NULL DEFAULT '0',
  `scol1y` smallint(6) NOT NULL DEFAULT '0',
  `scol1z` smallint(6) NOT NULL DEFAULT '0',
  `v` smallint(6) NOT NULL DEFAULT '0',
  `a` smallint(6) NOT NULL DEFAULT '0',
  `ax` smallint(6) NOT NULL DEFAULT '0',
  `ay` smallint(6) NOT NULL DEFAULT '0',
  `az` smallint(6) NOT NULL DEFAULT '0',
  `vstartdate` bigint(20) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`oid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `moving`
--

INSERT INTO `moving` (`oid`, `name`, `x`, `y`, `z`, `dx`, `dy`, `dz`, `bcol0x`, `bcol0y`, `bcol0z`, `bcol1x`, `bcol1y`, `bcol1z`, `scol0x`, `scol0y`, `scol0z`, `scol1x`, `scol1y`, `scol1z`, `v`, `a`, `ax`, `ay`, `az`, `vstartdate`) VALUES
(1, 'tree', 343, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1320307584750),
(2, 'tree2', 128, 232, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1301662049560),
(3, 'movingobject', 84, 111, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1294601075330);
