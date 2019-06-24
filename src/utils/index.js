export function cliceTime(data) {
  return data.slice(0, data.indexOf("T"));
}
export function isIE() {
  var browser = navigator.appName;
  var b_version = navigator.appVersion;
  var version = b_version.split(";");
  var trim_Version = version[1].replace(/[ ]/g, "");
  if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE6.0") {
    return 6;
  } else if (
    browser == "Microsoft Internet Explorer" &&
    trim_Version == "MSIE7.0"
  ) {
    return 7;
  } else if (
    browser == "Microsoft Internet Explorer" &&
    trim_Version == "MSIE8.0"
  ) {
    return 8;
  } else if (
    browser == "Microsoft Internet Explorer" &&
    trim_Version == "MSIE9.0"
  ) {
    return 9;
  } else return 10;
}
export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function() {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔last小于设定时间间隔wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function(...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}
