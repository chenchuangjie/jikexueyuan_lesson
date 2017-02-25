-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-02-06 07:08:01
-- 服务器版本： 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunew`
--

-- --------------------------------------------------------

--
-- 表的结构 `headnews`
--

CREATE TABLE `headnews` (
  `id` int(11) NOT NULL,
  `headtitle` char(200) NOT NULL,
  `headimg` varchar(200) NOT NULL,
  `headtime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `headnews`
--

INSERT INTO `headnews` (`id`, `headtitle`, `headimg`, `headtime`) VALUES
(0, '美国联邦法官裁决暂停入境限制令', 'img/4.jpg', '2017-02-05 15:51:51'),
(1, 'ICU病房女护士：带病上岗', 'img/2.jpg', '2017-02-05 17:25:28'),
(2, '香港垃圾站700箱过期薯条遭市', 'img/3.jpg', '2017-02-05 17:53:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `headnews`
--
ALTER TABLE `headnews`
  ADD PRIMARY KEY (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
