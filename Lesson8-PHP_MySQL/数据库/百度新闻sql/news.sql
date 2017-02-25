-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-02-06 07:09:08
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
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `newstype` char(200) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newstime` date NOT NULL,
  `newssrc` char(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`) VALUES
(1, '精选', '习近平送出的“年货”', 'img/1.jpg', '2017-02-06', '新浪微博'),
(2, '精选', '广西柳州一家三口南非旅游遭抢劫 皆中枪受伤', 'img/5.jpg', '2017-02-06', '热点'),
(3, '精选', '浙江男子玩滑翔伞时偏离航线 掉入湖中呛水遇难', 'img/6.png', '2017-02-17', '网易要闻'),
(4, '百家', '每个中国人都应该看看，2月5日部分在日华人东京街头举办抗议日本右翼背景APA酒店活动', 'img/7.png', '2017-02-06', '百家'),
(5, '精选', '福彩双色球2017014期重点号码分析，这两组连号爆出机率很大', 'img/8.png', '2017-02-06', '百家'),
(6, '百家', '福彩双色球2017014期重点号码分析，这两组连号爆出机率很大', 'img/8.png', '2017-02-06', '百家'),
(7, '百家', '喜欢一个人不可怕，习惯一个人才可怕', 'img/9.png', '2017-02-06', '百家'),
(8, '本地', '老马32分阿联27分+关键三罚球 广东险胜北京', 'img/10.png', '2017-02-06', '搜狐要闻'),
(9, '本地', '北京爱心人春节登门送祝福萤火受助者小芸和家人共享温情', 'img/11.png', '2017-02-06', '春节'),
(10, '本地', ' CBA漫画：广东险胜双杀北京 双拳老马难敌四手', ' img/12.png', '2017-02-06', ' 篮球'),
(11, '图片', ' 青城山刻字弄晕女游客 "大道无为"看成"采药超人"', ' img/13.png', '2017-02-06', ' 网易要闻'),
(12, '图片', ' 大S复工录节目 一头短发廋出小V脸汪小菲曾赞有气质', ' img/14.png', '2017-02-06', ' 大s'),
(13, '图片', '  《耳畔中国》阵容曝光 蔡国庆任“耳畔召集人”', ' img/15.png', '2017-02-06', '图片'),
(14, '娱乐', ' 罗家英指导粤剧新人 愿有机会合作周星驰', ' img/16.png', '2017-02-06', ' 周星驰'),
(15, '娱乐', ' 彭于晏：生活里缺乏父爱 影片中完美父亲', ' img/17.png', '2017-02-06', ' 彭于晏'),
(16, '社会', ' 西安一警察家中冰箱意外着火 三人被烧成重伤', ' img/18.png', '2017-02-07', ' 网易要闻'),
(17, '社会', ' 衡阳春节期间日均投入警力800 查获酒驾145起', ' img/19.png', '2017-02-07', ' 酒后驾驶'),
(18, '军事', ' 中国老兵滞留印度50年 印度妻儿支持其回中国', ' img/20.png', '2017-02-07', ' 网易要闻'),
(19, '女人', ' 眼光好！看人直觉最准的生肖', 'img/21.png', '2017-02-07', ' 美女'),
(20, '搞笑', ' 二货哥们蛮有心得的对我说', ' img/22.png', '2017-02-07', ' 搞笑'),
(21, '互联网', ' 章苏阳：医疗投资窗口期约有2年', 'img/24.png ', '2017-02-07', ' IDG');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
