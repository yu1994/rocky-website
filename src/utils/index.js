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
