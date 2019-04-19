/** 
 * 办事引导系统公共API 
*/
import { fetchData } from './ajax';

/** 
 * <--------------- 1.导航指引模块API ---------------> 
*/

// 单位窗口详情页 --获取大厅某个的楼层信息
export function getUnitList(data, type, callFunc) {
    var msg = data;
    if (callFunc && (callFunc.constructor === Function)) {
        return fetchData('/ApprTerminalSys/ApprNetInterface/api/hall/unitList/1/query.v', msg, type, callFunc,returnData(data))
    }
    return fetchData('/ApprTerminalSys/ApprNetInterface/api/hall/unitList/1/query.v', msg, type)
}

//设置cookie
export function setCookie(c_name, value, expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = c_name + "=" + value +
        ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())

};
export function getCookie(name) {
    var arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if ((arr = document.cookie.match(reg))) {
        return decodeURI(arr[2]);
    } else {
        return null;
    }

};

// 获取config
export function getConfig(data, type, callFunc) {
    var msg = data;
    if (callFunc && (callFunc.constructor === Function)) {
        return fetchData('/ApprTerminalSys/getConfig', msg, type, callFunc,()=>{return data})
    }
    return fetchData('/ApprTerminalSys/getConfig', msg, type,returnData(data))
}
