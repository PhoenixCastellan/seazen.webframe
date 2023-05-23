// 浮点数的精确运算
// 加
const add = (...nums) => {
  var lenArr = [];
  var numArr = [];
  var n;
  var res = 0;
  nums.map((item) => {
    lenArr.push(item.toString().length);
  });
  lenArr.sort(function(a, b) {
    return b - a;
  });
  n = Math.pow(10, lenArr[0]);
  nums.map((item) => {
    res += item * n;
  });
  return res / n;
};
// 减
const minus = (a, b) => {
  var n1 = a.toString().length;
  var n2 = b.toString().length;
  var num = n1 > n2 ? Math.pow(10, n1) : Math.pow(10, n2);
  return (a * num - b * num) / num;
};
// 乘
const multiply = (...nums) => {
  var lenArr = [];
  var numArr = [];
  var n = 1;
  var res = 1;
  nums.map((item) => {
    lenArr.push(item.toString().length);
  });
  for (var i = 0; i < lenArr.length; i++) {
    n = n * Math.pow(10, lenArr[i]);
    numArr[i] = nums[i] * Math.pow(10, lenArr[i]);
  }
  numArr.map((item) => {
    res = res * item;
  });
  return res / n;
};

// 除
const divide = (a, b) => {
  var n1 = a.toString().length;
  var n2 = b.toString().length;
  var num = n1 > n2 ? Math.pow(10, n1) : Math.pow(10, n2);
  return (((a * num) / b) * num) / Math.pow(num, 2);
};

// 判断数组中是否含有某个json对象
const isIncludeObj = (arr, obj) => {
  let newArr = new Array(arr.length);
  for (let i = 0; i < newArr.length; i++) {
    let keyArr = Object.keys(arr[i]).sort();
    newArr[i] = {};
    for (let j = 0; j < keyArr.length; j++) {
      newArr[i][keyArr[j]] = arr[i][keyArr[j]];
    }
  }
  let objKeyArr = Object.keys(obj).sort();
  let newObj = {};
  for (let i = 0; i < objKeyArr.length; i++) {
    newObj[objKeyArr[i]] = obj[objKeyArr[i]];
  }
  return JSON.stringify(newArr).indexOf(JSON.stringify(newObj)) > -1
    ? true
    : false;
};

// 模糊搜索延迟加载
const delaySearch = (callBack) => {
  var time = event.timeStamp;
  lastTime = event.timeStamp;
  setTimeout(() => {
    if (lastTime - time == 0) {
      console.log("可以加载搜索了");
      if (callBack) callBack();
    }
  }, 600);
};

// 去除字符串空格 默认去除所有空格、left去除左空格、right去除右空格
const trim = (str, type) => {
  switch (type) {
    case "both":
      return str.replace(/(^\s*)|(\s*$)/g, "");
    case "left":
      return str.replace(/(^\s*)/g, "");
    case "right":
      return str.replace(/(\s*$)/g, "");
    default:
      return str.replace(/\s+/g, "");
  }
};
// 调用方式 trim(' aabc');
const checkType = (str, type) => {
  switch (type) {
    case "email": //邮箱
      return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
    case "mobile": //手机
      return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
    case "tel": //电话
      return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
    case "number": //数字
      return /^[0-9]$/.test(str);
    case "english": //英文
      return /^[a-zA-Z]+$/.test(str);
    case "text": //文本
      return /^\w+$/.test(str);
    case "chinese": //中文
      return /^[\u4E00-\u9FA5]+$/.test(str);
    case "lower":
      return /^[a-z]+$/.test(str);
    case "upper":
      return /^[A-Z]+$/.test(str);
    case "id":
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
    default:
      return true;
  }
};
// 调用方式 checkType('165226226326','mobile');

const setCookie = (key, value, expire) => {
  const d = new Date();
  d.setDate(d.getDate() + expire);
  document.cookie = `${key}=${value};expires=${d.toUTCString()}`;
};
const getCookie = (key) => {
  const cookieStr = unescape(document.cookie);
  const arr = cookieStr.split("; ");
  let cookieValue = "";
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i].split("=");
    if (temp[0] === key) {
      cookieValue = temp[1];
      break;
    }
  }
  return cookieValue;
};
const removeCookie = (key) => {
  document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`;
};

const formatPassTime = (startTime) => {
  var currentTime = Date.parse(new Date()),
    time = currentTime - startTime,
    day = parseInt(time / (1000 * 60 * 60 * 24)),
    hour = parseInt(time / (1000 * 60 * 60)),
    min = parseInt(time / (1000 * 60)),
    month = parseInt(day / 30),
    year = parseInt(month / 12);
  if (year) return year + "年前";
  if (month) return month + "个月前";
  if (day) return day + "天前";
  if (hour) return hour + "小时前";
  if (min) return min + "分钟前";
  else return "刚刚";
};
// console.log(formatPassTime(new Date('2019/09/06 01:00')))

// 格式化现在距${endTime}的剩余时间
const formatRemainTime = (endTime) => {
  var startDate = new Date(); //开始时间
  var endDate = new Date(endTime); //结束时间
  var t = endDate.getTime() - startDate.getTime(); //时间差
  var d = 0,
    h = 0,
    m = 0,
    s = 0;
  if (t >= 0) {
    d = Math.floor(t / 1000 / 3600 / 24);
    h = Math.floor((t / 1000 / 3600) % 24);
    m = Math.floor((t / 1000 / 60) % 60);
    s = Math.floor((t / 1000) % 60);
  }
  return d + "天 " + h + "小时 " + m + "分钟 " + s + "秒";
};

const formatDate = (date, fmt) => {
  var type = Object.prototype.toString.call(date),
    newDate;
  if (type.includes("String")) {
    newDate = new Date(date.replace(/-/g, "/")); //解决ios不兼容-
  }
  if (type.includes("Date")) {
    newDate = date;
  }
  if (newDate.toString() == "Invalid Date") {
    return (
      date + "格式误，正确格式如：1999-1-9或1999/01/9或一个new Date(xxx)日期"
    );
  }
  var o = {
    "M+": newDate.getMonth() + 1, //月份
    "d+": newDate.getDate(), //日
    "h+": newDate.getHours(), //小时
    "m+": newDate.getMinutes(), //分
    "s+": newDate.getSeconds(), //秒
    "q+": Math.floor((newDate.getMonth() + 3) / 3), //季度
    S: newDate.getMilliseconds(), //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (newDate.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
};

Date.prototype.formatDate = (fmt) => {
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds(), //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
};
// console.log(new Date().formatDate('yyyy-MM-dd hh:mm:ss'));

// 序列化: 即js中的Object转化为字符串
const stringfyQueryString = (obj) => {
  if (!obj) return "";
  var pairs = [];

  for (var key in obj) {
    var value = obj[key];

    if (value instanceof Array) {
      for (var i = 0; i < value.length; ++i) {
        pairs.push(
          encodeURIComponent(key + "[" + i + "]") +
            "=" +
            encodeURIComponent(value[i])
        );
      }
      continue;
    }

    pairs.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
  }

  return pairs.join("&");
};

const parseQueryString = (url) => {
  url = url == null ? window.location.href : url;
  if (url.lastIndexOf("?") <= 0) {
    return {};
  }
  var search = url.substring(url.lastIndexOf("?") + 1);
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
};

// 不传参数：获取地址栏参数集合对象 || 传参：具体某个参数值
const getQueryStringArgs = (_name) => {
  var args = {};
  if (location.search.length) {
    var qs = location.search.length ? location.search.substring(1) : "";
    //取得查询字符串并去掉开头的问号
    var items = qs.split("&"),
      item = null,
      name = null,
      value = null,
      len = items.length;
    //逐个将每一项添加到arg对象中
    for (var i = 0; i < items.length; i++) {
      item = items[i].split("=");
      name = decodeURIComponent(item[0]);
      value = decodeURIComponent(item[1]);
      if (name.length) {
        args[name] = value;
      }
    }
  }
  if (_name) {
    return args[_name];
  } else {
    return args;
  }
};

// 判断两个对象是否完全相同的值
const isEqualObj = (target, source) => {
  var keysArr = Object.keys(target);
  var res = true;
  keysArr.map((key) => {
    if (target[key] !== source[key]) {
      res = false;
    }
  });
  return res;
};

// 防抖：
// 原理：事件响应函数会在一段事件之后执行，如果在这段时间之内再次调用，则重新计算执行时间
// 应用场景：
// 1.scroll
// 2.resize窗口缩放
// 3.input搜索
// 4.按钮提交
const debounce = (fn, wait, immediate) => {
  // fn执行函数,wait等待时间,immediate是否立即执行
  var timeout, contex, args, result;
  //timeout 定时器;context 执行上下文；args 保存event事件；result立即执行返回return;
  return function() {
    clearTimeout(timeout);
    contex = this;
    args = arguments;
    if (immediate) {
      //立即执行
      var callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) fn.apply(contex, args);
    } else {
      //延迟执行
      timeout = setTimeout(() => {
        fn.apply(contex, args);
      }, wait);
    }
    return result;
  };
};

//节流：
// 原理：如果持续触发事件，每一段时间，只执行一次
const throttle = (fn, wait, options) => {
  //有头有尾
  var contex,
    args,
    timeout,
    old = 0;
  options = options ? options : {};
  // 注意：leading 和 trailing不可以同时为false
  // options = {
  //     leading: true, //立即执行 反之不立即执行
  //     trailing:true //等待时间后执行 反之不执行
  // }
  return function() {
    contex = this;
    args = arguments;
    var now = new Date().valueOf();
    if (options.leading === false && !old) {
      old = now;
    }
    if (now - old > wait) {
      fn.apply(contex, args);
      old = now;
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
    } else if (!timeout && options.trailing) {
      timeout = setTimeout(() => {
        fn.apply(contex, args);
        timeout = null;
        old = new Date().valueOf();
      }, wait);
    }
  };
};

// base64转为file
const dataURLtoFile = (dataurl, filename) => {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
};

// 生成指定范围随机数
const randomNum = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

//数组乱序
const arrScrambling = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const randomIndex = Math.round(Math.random() * (arr.length - 1 - i)) + i;
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
  return arr;
};

//数字转化为大写金额

const digitUppercase = (n) => {
  const fraction = ["角", "分"];
  const digit = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
  const unit = [
    ["元", "万", "亿"],
    ["", "拾", "佰", "仟"],
  ];
  n = Math.abs(n);
  let s = "";
  for (let i = 0; i < fraction.length; i++) {
    s += (
      digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]
    ).replace(/零./, "");
  }
  s = s || "整";
  n = Math.floor(n);
  for (let i = 0; i < unit[0].length && n > 0; i++) {
    let p = "";
    for (let j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p;
      n = Math.floor(n / 10);
    }
    s = p.replace(/(零.)*零$/, "").replace(/^$/, "零") + unit[0][i] + s;
  }
  return s
    .replace(/(零.)*零元/, "元")
    .replace(/(零.)+/g, "零")
    .replace(/^整$/, "零元整");
};

// 数字转化为中文数字
const intToChinese = (value) => {
  const str = String(value);
  const len = str.length - 1;
  const idxs = [
    "",
    "十",
    "百",
    "千",
    "万",
    "十",
    "百",
    "千",
    "亿",
    "十",
    "百",
    "千",
    "万",
    "十",
    "百",
    "千",
    "亿",
  ];
  const num = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
  return str.replace(/([1-9]|0+)/g, ($, $1, idx, full) => {
    let pos = 0;
    if ($1[0] !== "0") {
      pos = len - idx;
      if (idx == 0 && $1[0] == 1 && idxs[len - idx] == "十") {
        return idxs[len - idx];
      }
      return num[$1[0]] + idxs[len - idx];
    } else {
      let left = len - idx;
      let right = len - idx + $1.length;
      if (Math.floor(right / 4) - Math.floor(left / 4) > 0) {
        pos = left - (left % 4);
      }
      if (pos) {
        return idxs[pos] + num[$1[0]];
      } else if (idx + $1.length >= len) {
        return "";
      } else {
        return num[$1[0]];
      }
    }
  });
};

const format = (n) => {
  if (typeof n == "number") {
    var numArr = n.toString().split(".");
    let preNum = numArr[0];
    let fixNum = numArr.length > 1 ? "." + numArr[1] : "";
    let len = preNum.length;
    if (len <= 3) {
      return preNum + fixNum;
    } else {
      let temp = "";
      let remainder = len % 3;

      if (remainder > 0) {
        // 不是3的整数倍
        return (
          preNum.slice(0, remainder) +
          "," +
          preNum
            .slice(remainder, len)
            .match(/\d{3}/g)
            .join(",") +
          temp +
          fixNum
        );
      } else {
        // 3的整数倍
        return (
          preNum
            .slice(0, len)
            .match(/\d{3}/g)
            .join(",") +
          temp +
          fixNum
        );
      }
    }
  } else {
    alert(n + "不是数值类型");
  }
};

const setLocalStorage = (key, value) => {
  if (!key) return;
  if (typeof value !== "string") {
    value = JSON.stringify(value);
  }
  window.localStorage.setItem(key, value);
};

const getLocalStorage = (key) => {
  if (!key) return;
  return window.localStorage.getItem(key);
};

const removeLocalStorage = (key) => {
  if (!key) return;
  window.localStorage.removeItem(key);
};

const setSessionStorage = (key, value) => {
  if (!key) return;
  if (typeof value !== "string") {
    value = JSON.stringify(value);
  }
  window.sessionStorage.setItem(key, value);
};

const getSessionStorage = (key) => {
  if (!key) return;
  return window.sessionStorage.getItem(key);
};

const removeSessionStorage = (key) => {
  if (!key) return;
  window.sessionStorage.removeItem(key);
};

const paramsToUrl = (obj) => {
  let params = [];
  for (let key in obj) {
    params.push(`${key}=${obj[key]}`);
  }
  return encodeURIComponent(params.join("&"));
};
const replaceParamVal = (paramName, replaceWith) => {
  const oUrl = location.href.toString();
  const re = eval("/(" + paramName + "=)([^&]*)/gi");
  location.href = oUrl.replace(re, paramName + "=" + replaceWith);
  return location.href;
};

const deleParamVal = (name) => {
  const baseUrl = location.origin + location.pathname + "?";
  const query = location.search.substr(1);
  if (query.indexOf(name) > -1) {
    const obj = {};
    const arr = query.split("&");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split("=");
      obj[arr[i][0]] = arr[i][1];
    }
    delete obj[name];
    return (
      baseUrl +
      JSON.stringify(obj)
        .replace(/[\"\{\}]/g, "")
        .replace(/\:/g, "=")
        .replace(/\,/g, "&")
    );
  }
};

const isMobile = () => {
  if (
    navigator.userAgent.match(
      /(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i
    )
  ) {
    return true;
  }
  return false;
};

const getOs = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  let isIos = /iphone|ipod|ipad|Macintosh/i.test(userAgent),
    isAndroid = /android/i.test(userAgent);
  if (isIos) return "ios";
  if (isAndroid) return "android";
};

const osType = () => {
  const agent = navigator.userAgent.toLowerCase();
  const isMac = /macintosh|mac os x/i.test(navigator.userAgent);
  const isWindows =
    agent.indexOf("win64") >= 0 ||
    agent.indexOf("wow64") >= 0 ||
    agent.indexOf("win32") >= 0 ||
    agent.indexOf("wow32") >= 0;
  if (isWindows) {
    return "windows";
  }
  if (isMac) {
    return "mac";
  }
};

const getExplorerInfo = () => {
  let t = navigator.userAgent.toLowerCase();
  return 0 <= t.indexOf("msie")
    ? {
        //ie < 11
        type: "IE",
        version: Number(t.match(/msie ([\d]+)/)[1]),
      }
    : !!t.match(/trident\/.+?rv:(([\d.]+))/)
    ? {
        // ie 11
        type: "IE",
        version: 11,
      }
    : 0 <= t.indexOf("edge")
    ? {
        type: "Edge",
        version: Number(t.match(/edge\/([\d]+)/)[1]),
      }
    : 0 <= t.indexOf("firefox")
    ? {
        type: "Firefox",
        version: Number(t.match(/firefox\/([\d]+)/)[1]),
      }
    : 0 <= t.indexOf("chrome")
    ? {
        type: "Chrome",
        version: Number(t.match(/chrome\/([\d]+)/)[1]),
      }
    : 0 <= t.indexOf("opera")
    ? {
        type: "Opera",
        version: Number(t.match(/opera.([\d]+)/)[1]),
      }
    : 0 <= t.indexOf("Safari")
    ? {
        type: "Safari",
        version: Number(t.match(/version\/([\d]+)/)[1]),
      }
    : {
        type: t,
        version: -1,
      };
};

const scrollIntoView = (element) => {
  document.querySelector(element).scrollIntoView({
    behavior: "smooth",
  });
};

const getClientHeight = () => {
  let clientHeight = 0;
  if (document.body.clientHeight && document.documentElement.clientHeight) {
    clientHeight =
      document.body.clientHeight < document.documentElement.clientHeight
        ? document.body.clientHeight
        : document.documentElement.clientHeight;
  } else {
    clientHeight =
      document.body.clientHeight > document.documentElement.clientHeight
        ? document.body.clientHeight
        : document.documentElement.clientHeight;
  }
  return clientHeight;
};

const getClientWidth = () => {
  return (document.compatMode == "BackCompat"
    ? document.body
    : document.documentElement
  ).clientWidth;
};

const stopPropagation = (e) => {
  e = e || window.event;
  if (e.stopPropagation) {
    // W3C阻止冒泡方法
    e.stopPropagation();
  } else {
    e.cancelBubble = true; // IE阻止冒泡方法
  }
};
const getType = (value) => {
  if (value === null) {
    return value + "";
  }
  // 判断数据是引用类型的情况
  if (typeof value === "object") {
    let valueClass = Object.prototype.toString.call(value),
      type = valueClass.split(" ")[1].split("");
    type.pop();
    return type.join("").toLowerCase();
  } else {
    // 判断数据是基本数据类型的情况和函数的情况
    return typeof value;
  }
};

const deepClone = (obj, hash = new WeakMap()) => {
  // 日期对象直接返回一个新的日期对象
  if (obj instanceof Date) {
    return new Date(obj);
  }
  //正则对象直接返回一个新的正则对象
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  //如果循环引用,就用 weakMap 来解决
  if (hash.has(obj)) {
    return hash.get(obj);
  }
  // 获取对象所有自身属性的描述
  let allDesc = Object.getOwnPropertyDescriptors(obj);
  // 遍历传入参数所有键的特性
  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);

  hash.set(obj, cloneObj);
  for (let key of Reflect.ownKeys(obj)) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      cloneObj[key] = deepClone(obj[key], hash);
    } else {
      cloneObj[key] = obj[key];
    }
  }
  return cloneObj;
};


export {
  add, //浮点数的精确运算----加
  minus, //浮点数的精确运算----减
  multiply, //浮点数的精确运算----乘
  divide, //浮点数的精确运算----除
  delaySearch, //模糊搜索延迟加载
  trim, //去除字符串空格
  checkType, //表单合法验证类型
  setCookie, //设置cookie
  getCookie, //获取cookie
  removeCookie, //删除置cookie
  formatPassTime, // 格式化$ { startTime }距现在的已过时间
  formatRemainTime, // 格式化现在距${endTime}的剩余时间
  formatDate, //格式化日期
  stringfyQueryString, //序列化：Object转化为字符串
  parseQueryString, // 反序列化：即js中字符串转化为Object
  getQueryStringArgs, //获取地址栏参数
  paramsToUrl, //值对拼接成URL参数
  replaceParamVal, //修改URL中的参数
  deleParamVal, //删除URL中指定参数
  isEqualObj, //判断两个对象是否相等，严格讲是不是完全有相同的key：value值
  isIncludeObj, //判断数组中是否含有某个json对象
  debounce, // 防抖
  throttle, //节流
  dataURLtoFile, //base64转为file
  randomNum, //生成指定范围随机数
  arrScrambling, //数组乱序
  digitUppercase, //数字转化为大写金额
  intToChinese, //数字转化为中文数字
  format, //转为千分位
  setLocalStorage, //存储loalStorage
  getLocalStorage, //获取localStorage
  removeLocalStorage, //删除localStorage
  setSessionStorage, //存储sessionStorage
  getSessionStorage, //获取sessionStorage
  removeSessionStorage, //删除sessionStorage
  isMobile, //判断是移动还是PC设备
  getOs, //判断是否是苹果还是安卓移动设备
  osType, //判断是Windows还是Mac系统
  getExplorerInfo, //浏览器型号和版本
  scrollIntoView, //滚动到指定元素区域
  getClientHeight, //获取可视窗口高度
  getClientWidth, //获取可视窗口宽度
  stopPropagation, //止冒泡事件
  getType, //数据类型判断
  deepClone, //对象深拷贝
};
