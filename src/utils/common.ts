import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);
/** 常见公共方法 */

/**
 * @desc 去除空格
 * @param str - 字符串
 * @param pos - 去除空格的位置
 * pos="both": 去除两边空格
 * pos="left": 去除左边空格
 * pos="right": 去除右边空格
 * pos="all": 去除所有空格
 */
type Pos = 'both' | 'left' | 'right' | 'all'
export function trim(str: string, pos: Pos = 'both'): string {
  if (pos == 'both') {
    return str.replace(/^\s+|\s+$/g, '')
  } else if (pos == 'left') {
    return str.replace(/^\s*/, '')
  } else if (pos == 'right') {
    return str.replace(/(\s*$)/g, '')
  } else if (pos == 'all') {
    return str.replace(/\s+/g, '')
  } else {
    return str
  }
}

/**
 * 根据数字获取对应的汉字
 * @param num - 数字(0-10)
 */
export function getHanByNumber(num: number): string {
  const str = '零一二三四五六七八九十'
  return str.charAt(num)
}

/**
 * 获取指定整数范围内的随机整数
 * @param start - 开始范围
 * @param end - 结束范围
 */
export function getRandomInterger(end: number, start = 0): number {
  const range = end - start
  const random = Math.floor(Math.random() * range + start)
  return random
}

// 千分位格式化
export function formatMoney(money: string) {
  return money.replace(new RegExp(`(?!^)(?=(\\d{3})+${money.includes('.') ? '\\.' : '$'})`, 'g'), ',')
}

// 格式化电话号码 183-7983-6654
export function formatPhone(mobile: string, formatStr = '-') {
  return mobile.replace(/(?=(\d{4})+$)/g, formatStr)
}

// 数据类型检测方法
export function getDataType(value: string) {
  return Object.prototype.toString.call(value)
}

// 检测数据是否为空数据
export function isEmpty(data: unknown) {
  if (data === '' || data === 'undefined' || data === undefined || data === null || data === 'null') {
    return true
  }
  if (JSON.stringify(data) == '{}' || JSON.stringify(data) == '[]' || JSON.stringify(data) == '[{}]') {
    return true
  }
  return false
}

/**
 * 将字符串中的网址转化为链接形式。
 *
 * @param {string} text - 要处理的文本字符串。
 * @returns {string} - 转化后的字符串，其中的网址已被替换为链接形式。
 */
export function addLinkToURLs(text:string) {
  // 正则表达式匹配网址的模式
  const urlPattern = /(https?:\/\/[^\s]+)/g;
  
  // 使用 replace 方法替换匹配到的网址为链接格式
  const replacedText = text.replace(urlPattern, '<a href="$&" target="_blank">$&</a>');

  return replacedText;
}


/**
 * 计算给定时间戳与当前时间之间的时间差，并返回格式化后的时间差字符串。
 *
 * @param {number} insertedAtTimestamp - 插入时间的时间戳。
 * @returns {string} - 格式化后的时间差字符串。
 */
export function getTimeDifferenceString(insertedAtTimestamp:any) {
  // 获取当前时间
  const currentTime = dayjs();

  // 将时间戳转换为dayjs对象
  const insertedAt = dayjs(insertedAtTimestamp);

  // 计算时间差
  const duration = dayjs.duration(currentTime.diff(insertedAt));

  // 获取最大的时间单位
  const units = ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds'];
  const maxUnit = units.find(unit => duration.get(unit as any) > 0);

  // 获取时间差值
  const timeDifference = duration.get(maxUnit as any);

  // 构建时间差字符串
  let timeDifferenceString = `${timeDifference.toFixed()} ${maxUnit}`;

  return timeDifferenceString;
}


export const colors = [
  'red',
  'orangered',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'blue',
  'arcoblue',
  'purple',
  'pinkpurple',
  'magenta',
  'gray',
  'rgb(255, 0, 0)',
  'rgb(255, 69, 0)',
  'rgb(255, 165, 0)',
  'rgb(255, 215, 0)',
  'rgb(0, 255, 0)',
  'rgb(0, 128, 0)',
  'rgb(0, 255, 255)',
  'rgb(0, 0, 255)',
  'rgb(0, 51, 204)',
  'rgb(128, 0, 128)',
  'rgb(204, 51, 153)',
  'rgb(255, 0, 255)',
  'rgb(128, 128, 128)',
  'rgb(255, 255, 0)',
  'rgb(128, 0, 0)',
  'rgb(255, 192, 203)',
  'rgb(218, 112, 214)',
  'rgb(0, 255, 127)',
  'rgb(255, 255, 255)',
  'rgb(0, 0, 0)',
  'rgb(255, 99, 71)',
  'rgb(139, 0, 0)',
  'rgb(255, 165, 79)',
  'rgb(218, 165, 32)',
  'rgb(50, 205, 50)',
  'rgb(0, 128, 128)',
  'rgb(70, 130, 180)',
  'rgb(138, 43, 226)',
  'rgb(75, 0, 130)',
  'rgb(148, 0, 211)',
  'rgb(128, 128, 0)',
  'rgb(244, 164, 96)',
  'rgb(255, 255, 224)',
  'rgb(240, 230, 140)',
  'rgb(240, 248, 255)',
  'rgb(245, 245, 245)',
  'rgb(128, 0, 0)',
  'rgb(0, 0, 128)'
];

export function getRandomColor() {
  const colors = [
    'red',
    'orangered',
    'orange',
    'gold',
    'lime',
    'green',
    'cyan',
    'blue',
    'arcoblue',
    'purple',
    'pinkpurple',
    'magenta',
    'gray',
    'rgb(255, 0, 0)',
    'rgb(255, 69, 0)',
    'rgb(255, 165, 0)',
    'rgb(255, 215, 0)',
    'rgb(0, 255, 0)',
    'rgb(0, 128, 0)',
    'rgb(0, 255, 255)',
    'rgb(0, 0, 255)',
    'rgb(0, 51, 204)',
    'rgb(128, 0, 128)',
    'rgb(204, 51, 153)',
    'rgb(255, 0, 255)',
    'rgb(128, 128, 128)',
    'rgb(255, 255, 0)',
    'rgb(128, 0, 0)',
    'rgb(255, 192, 203)',
    'rgb(218, 112, 214)',
    'rgb(0, 255, 127)',
    'rgb(255, 255, 255)',
    'rgb(0, 0, 0)',
    'rgb(255, 99, 71)',
    'rgb(139, 0, 0)',
    'rgb(255, 165, 79)',
    'rgb(218, 165, 32)',
    'rgb(50, 205, 50)',
    'rgb(0, 128, 128)',
    'rgb(70, 130, 180)',
    'rgb(138, 43, 226)',
    'rgb(75, 0, 130)',
    'rgb(148, 0, 211)',
    'rgb(128, 128, 0)',
    'rgb(244, 164, 96)',
    'rgb(255, 255, 224)',
    'rgb(240, 230, 140)',
    'rgb(240, 248, 255)',
    'rgb(245, 245, 245)',
    'rgb(128, 0, 0)',
    'rgb(0, 0, 128)'
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
