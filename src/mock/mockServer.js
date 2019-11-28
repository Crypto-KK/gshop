/*
使用mockjs提供mock数据接口
 */
import data from './data.json'
import Mock from 'mockjs'

// 返回商品列表
Mock.mock('/goods', {code: 0, data: data.goods})
Mock.mock('/ratings', {code: 0, data: data.ratings})
Mock.mock('/info', {code: 0, data: data.info})
