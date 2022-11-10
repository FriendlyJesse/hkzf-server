/*
 Navicat Premium Data Transfer

 Source Server         : nodejs
 Source Server Type    : MySQL
 Source Server Version : 80030
 Source Host           : localhost:3306
 Source Schema         : hk

 Target Server Type    : MySQL
 Target Server Version : 80030
 File Encoding         : 65001

 Date: 10/11/2022 21:31:48
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for group
-- ----------------------------
DROP TABLE IF EXISTS `group`;
CREATE TABLE `group`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `title` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createdDate` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updateDate` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deleteDate` timestamp(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of group
-- ----------------------------
INSERT INTO `group` VALUES (1, '家住回龙观', '归属的感觉', '/img/groups/1.png', '2022-11-10 20:51:16.936000', '2022-11-10 20:51:16.936000', NULL);
INSERT INTO `group` VALUES (2, '宜居四五环', '大都市生活', '/img/groups/2.png', '2022-11-10 21:03:45.342875', '2022-11-10 21:03:45.342875', NULL);
INSERT INTO `group` VALUES (3, '喧嚣三里屯', '繁华的背后', '/img/groups/3.png', '2022-11-10 21:14:35.781775', '2022-11-10 21:14:35.781775', NULL);
INSERT INTO `group` VALUES (4, '比邻十号线', '地铁心连心', '/img/groups/4.png', '2022-11-10 21:17:38.902564', '2022-11-10 21:17:38.902564', NULL);

-- ----------------------------
-- Table structure for swiper
-- ----------------------------
DROP TABLE IF EXISTS `swiper`;
CREATE TABLE `swiper`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `isPublished` tinyint(0) NOT NULL DEFAULT 0,
  `createdDate` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updateDate` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deleteDate` timestamp(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of swiper
-- ----------------------------
INSERT INTO `swiper` VALUES (1, 'test', NULL, '/img/swiper/1.png', 0, '2022-11-10 19:16:18.740985', '2022-11-10 19:16:18.740985', NULL);
INSERT INTO `swiper` VALUES (2, 'test', NULL, '/img/swiper/2.png', 0, '2022-11-10 19:16:25.593218', '2022-11-10 19:16:25.593218', NULL);
INSERT INTO `swiper` VALUES (3, 'test', NULL, '/img/swiper/3.png', 0, '2022-11-10 19:16:29.637405', '2022-11-10 19:16:29.637405', NULL);
INSERT INTO `swiper` VALUES (4, 'test', NULL, '/img/swiper/4.png', 0, '2022-11-10 19:16:33.225409', '2022-11-10 19:49:20.000000', '2022-11-10 19:49:20.000000');

SET FOREIGN_KEY_CHECKS = 1;
