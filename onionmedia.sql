-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 30, 2022 at 03:46 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `onionmedia`
--

-- --------------------------------------------------------

--
-- Table structure for table `statusgraph`
--

CREATE TABLE `statusgraph` (
  `id` int(100) NOT NULL,
  `totalSent` int(100) NOT NULL,
  `delivered` int(100) NOT NULL,
  `submitted` int(100) NOT NULL,
  `rejected` int(100) NOT NULL,
  `undelivered` int(100) NOT NULL,
  `dnd` int(100) NOT NULL,
  `others` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `statusgraph`
--

INSERT INTO `statusgraph` (`id`, `totalSent`, `delivered`, `submitted`, `rejected`, `undelivered`, `dnd`, `others`) VALUES
(1, 700, 570, 89, 10, 2, 20, 9);

-- --------------------------------------------------------

--
-- Table structure for table `statusview`
--

CREATE TABLE `statusview` (
  `id` int(100) NOT NULL,
  `sentToday` int(100) NOT NULL,
  `deliveredToday` int(100) NOT NULL,
  `sentYesterday` int(100) NOT NULL,
  `deliveredYesterday` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='The status report data.';

--
-- Dumping data for table `statusview`
--

INSERT INTO `statusview` (`id`, `sentToday`, `deliveredToday`, `sentYesterday`, `deliveredYesterday`) VALUES
(1, 890, 79, 954, 92);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `statusgraph`
--
ALTER TABLE `statusgraph`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `statusview`
--
ALTER TABLE `statusview`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `statusgraph`
--
ALTER TABLE `statusgraph`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `statusview`
--
ALTER TABLE `statusview`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
