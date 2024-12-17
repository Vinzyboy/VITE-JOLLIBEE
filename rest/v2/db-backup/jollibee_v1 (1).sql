-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 12, 2024 at 01:29 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jollibee_v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `jollibee_category`
--

CREATE TABLE `jollibee_category` (
  `category_aid` int(11) NOT NULL,
  `category_is_active` tinyint(1) NOT NULL,
  `category_image` varchar(20) NOT NULL,
  `category_title` varchar(30) NOT NULL,
  `category_datetime` varchar(20) NOT NULL,
  `category_created` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jollibee_category`
--

INSERT INTO `jollibee_category` (`category_aid`, `category_is_active`, `category_image`, `category_title`, `category_datetime`, `category_created`) VALUES
(9, 1, 'nav-chickenjoy.webp', 'Chicken', '2024-12-11 15:05:33', 2024),
(10, 1, 'nav-burger.webp', 'Burger', '2024-12-11 15:05:41', 2024),
(11, 1, 'nav-spaghetti.webp', 'Spaghetti', '2024-12-11 15:05:52', 2024),
(12, 1, 'nav-palabok.webp', 'Palabok', '2024-12-11 15:05:58', 2024),
(16, 1, 'nav-sides.webp', 'Sides', '2024-12-11 15:06:09', 2024),
(17, 1, 'value-meal-1.webp', 'Value Meal', '2024-12-11 15:04:26', 2024),
(18, 1, 'steak-1.webp', 'Steak', '2024-12-11 15:26:38', 2024),
(19, 1, 'nav-desserts.webp', 'Dessert', '2024-12-11 15:05:25', 2024);

-- --------------------------------------------------------

--
-- Table structure for table `jollibee_food`
--

CREATE TABLE `jollibee_food` (
  `food_aid` int(11) NOT NULL,
  `food_is_active` tinyint(1) NOT NULL,
  `food_image` varchar(20) NOT NULL,
  `food_title` varchar(30) NOT NULL,
  `food_price` int(20) NOT NULL,
  `food_category_id` int(11) NOT NULL,
  `food_datetime` varchar(30) NOT NULL,
  `food_created` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jollibee_food`
--

INSERT INTO `jollibee_food` (`food_aid`, `food_is_active`, `food_image`, `food_title`, `food_price`, `food_category_id`, `food_datetime`, `food_created`) VALUES
(1, 1, 'chicken-1.webp', '1pc Chickenjoy solo', 180, 9, '2024-12-11 15:35:19', 0),
(2, 1, '', 'rt', 324563, 0, '2024-12-11 09:24:03', 2024),
(3, 1, '', 'werq', 1234, 0, '2024-12-11 09:29:23', 2024),
(4, 1, '', 'qwer', 123, 0, '2024-12-11 09:29:41', 2024),
(8, 1, 'chicken-2.webp', '3pc Chicken', 250, 9, '2024-12-11 15:36:00', 2024),
(9, 1, 'chicken-3.webp', '1Bucket w/ fries and sides', 500, 9, '2024-12-11 15:36:32', 2024),
(10, 1, 'burger-1.webp', 'Yum Burger', 50, 10, '2024-12-11 15:36:53', 2024),
(11, 1, 'burger-2.webp', 'Yum Burger w/ Fries', 70, 10, '2024-12-11 15:37:09', 2024),
(12, 1, 'burger-3.webp', 'Cheesy Yum Burger', 60, 10, '2024-12-11 15:37:26', 2024),
(13, 1, 'spag-1.webp', 'Spaghetti', 80, 11, '2024-12-11 15:37:54', 2024),
(14, 1, 'spag-2.webp', 'Spaghetti w/ Chicken', 120, 11, '2024-12-11 15:38:14', 2024),
(15, 1, 'spag-3.webp', 'Family Spaghetti', 250, 11, '2024-12-11 15:38:37', 2024),
(16, 1, 'palabok-1.webp', 'Palabok Solo', 100, 12, '2024-12-11 15:39:00', 2024),
(17, 1, 'palabok-2.webp', 'Palabok w/ Drinks', 130, 12, '2024-12-11 15:39:21', 2024),
(18, 1, 'palabok-3.webp', 'Palabok Pampamilya', 350, 12, '2024-12-11 15:39:59', 2024),
(19, 1, 'sides-1.webp', 'Fries', 50, 16, '2024-12-11 15:40:22', 2024),
(20, 1, 'sides-2.webp', 'Mashed Potato', 20, 16, '2024-12-11 15:40:44', 2024),
(21, 1, 'sides-3.webp', 'Rice', 15, 16, '2024-12-11 15:41:03', 2024),
(22, 1, 'value-meal-1.webp', 'Value Meal 1', 250, 17, '2024-12-11 15:41:28', 2024),
(23, 1, 'value-meal-2.webp', 'Value Meal 2', 350, 17, '2024-12-11 15:41:44', 2024),
(24, 1, 'value-meal-3.webp', 'Value Meal 3', 300, 17, '2024-12-11 15:41:59', 2024),
(25, 1, 'steak-1.webp', 'Burger Steak', 150, 18, '2024-12-11 15:42:13', 2024),
(26, 1, 'steak-2.webp', '6pc Burger Steak', 300, 18, '2024-12-11 15:42:29', 2024),
(27, 1, 'steak-3.webp', 'Combo', 500, 18, '2024-12-11 15:44:33', 2024),
(28, 1, 'dessert-1.webp', 'Peach Mango Pie', 80, 19, '2024-12-11 15:43:45', 2024),
(29, 1, 'dessert-2.webp', 'Ube Pie', 80, 19, '2024-12-11 15:43:56', 2024),
(30, 1, 'dessert-3.webp', '6pc Peach Mango Pie', 200, 19, '2024-12-11 15:44:14', 2024);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jollibee_category`
--
ALTER TABLE `jollibee_category`
  ADD PRIMARY KEY (`category_aid`);

--
-- Indexes for table `jollibee_food`
--
ALTER TABLE `jollibee_food`
  ADD PRIMARY KEY (`food_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jollibee_category`
--
ALTER TABLE `jollibee_category`
  MODIFY `category_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `jollibee_food`
--
ALTER TABLE `jollibee_food`
  MODIFY `food_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;