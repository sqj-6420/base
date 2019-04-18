/** 
 * 办事引导系统公共API 
*/
import { fetchData } from './ajax';

/** 
 * <--------------- 1.导航指引模块API ---------------> 
*/
/* -- 按单位查找 -- */
// 楼层及单位列表
export function getFloorInfoListRef(data, type, callFunc) {
    var msg = data;
    if (callFunc && (callFunc.constructor === Function)) {
        return fetchData('/ApprTerminalSys/ApprNetInterface/api/hall/floorInfoListRef/query.v', msg, type, callFunc)
    }
    return fetchData('/ApprTerminalSys/ApprNetInterface/api/hall/floorInfoListRef/query.v', msg, type)
}

// 单位窗口详情页 --获取大厅某个的楼层信息
export function getUnitList(data, type, callFunc) {
    var msg = data;
    if (callFunc && (callFunc.constructor === Function)) {
        return fetchData('/ApprTerminalSys/ApprNetInterface/api/hall/unitList/1/query.v', msg, type, callFunc)
    }
    return fetchData('/ApprTerminalSys/ApprNetInterface/api/hall/unitList/1/query.v', msg, type)
}

// 窗口信息页


/* -- 按楼层查找 -- */

// 楼层图示
// 1、获取大厅楼层列表--主要获取所有楼层seq
export function getFloorList(data, type, callFunc) {
    var msg = data;
    if (callFunc && (callFunc.constructor === Function)) {
        return fetchData('/ApprTerminalSys/ApprNetInterface/api/hall/floorList/query.v', msg, type, callFunc)
    }
    return fetchData('/ApprTerminalSys/ApprNetInterface/api/hall/floorList/query.v', msg, type)
}
// 2、获取大厅某个楼层信息接口--主要获取图片
export function getFloorInfo(data, type, callFunc) {
    var msg = data;
    if (callFunc && (callFunc.constructor === Function)) {
        return fetchData('/ApprTerminalSys/ApprNetInterface/api/hall/floorInfo/query.v', msg, type, callFunc)
    }
    return fetchData('/ApprTerminalSys/ApprNetInterface/api/hall/floorInfo/query.v', msg, type)
}



// 公共方法-通过地区获取大厅列表--主要获取大厅seq
export function getHallInfoList(data, type, callFunc) {
    var msg = data;
    if (callFunc && (callFunc.constructor === Function)) {
        return fetchData('/ApprTerminalSys/ApprNetInterface/api/hall/hallInfoList/query.v', msg, type, callFunc)
    }
    return fetchData('/ApprTerminalSys/ApprNetInterface/api/hall/hallInfoList/query.v', msg, type)
}




/** 
 * <--------------- 2.办事指南模块API ---------------> 
*/
/* -- 服务部门,个人事项,法人事项 -- */
// 部门列表
export function getDeptList(data, type, callFunc) {
    var msg = data;
    if (callFunc && (callFunc.constructor === Function)) {
        return fetchData('/ApprTerminalSys/ApprItemInterface/api/unit/unitList/1/query.v', msg, type, callFunc)
    }
    return fetchData('/ApprTerminalSys/ApprItemInterface/api/unit/unitList/1/query.v', msg, type)
}

// 主题分类 
export function getTopicList(data, type, callFunc) {
    var msg = data;
    if (callFunc && (callFunc.constructor === Function)) {
        return fetchData('/ApprTerminalSys/ApprItemInterface/api/program/topicList/1/query.v', msg, type, callFunc)
    }
    return fetchData('/ApprTerminalSys/ApprItemInterface/api/program/topicList/1/query.v', msg, type)
}

// 事项列表
export function getProgramList(data, type, callFunc) {
    var msg = data;
    if (callFunc && (callFunc.constructor === Function)) {
        return fetchData('/ApprTerminalSys/ApprItemInterface/api/program/programList/1/query.v', msg, type, callFunc)
    }
    return fetchData('/ApprTerminalSys/ApprItemInterface/api/program/programList/1/query.v', msg, type)
}

// 办事指南详情页
// 1、获取办事指南基本信息
export function getProgramInfo(data, type, callFunc) {
    var msg = data;
    if (callFunc && (callFunc.constructor === Function)) {
        return fetchData('/ApprTerminalSys/ApprItemInterface/api/program/programInfo/1/query.v', msg, type, callFunc)
    }
    return fetchData('/ApprTerminalSys/ApprItemInterface/api/program/programInfo/1/query.v', msg, type)
}
// 2、获取事项特别时限信息
export function getProgramSpecialLimit(data, type, callFunc) {
    var msg = data;
    if (callFunc && (callFunc.constructor === Function)) {
        return fetchData('/ApprTerminalSys/ApprItemInterface/api/program/programSpecialLimit/1/query.v', msg, type, callFunc)
    }
    return fetchData('/ApprTerminalSys/ApprItemInterface/api/program/programSpecialLimit/1/query.v', msg, type)
}

// 3、获取投诉咨询信息
export function getApprAsk(data, type, callFunc) {
    var msg = data;
    if (callFunc && (callFunc.constructor === Function)) {
        return fetchData('/ApprTerminalSys/ApprItemInterface/api/program/apprAsk/1/query.v', msg, type, callFunc)
    }
    return fetchData('/ApprTerminalSys/ApprItemInterface/api/program/apprAsk/1/query.v', msg, type)
}

// 4、获取事项的常见问题列表
export function getApprQuestionList(data, type, callFunc) {
    var msg = data;
    if (callFunc && (callFunc.constructor === Function)) {
        return fetchData('/ApprTerminalSys/ApprItemInterface/api/program/questionList/1/query.v', msg, type, callFunc)
    }
    return fetchData('/ApprTerminalSys/ApprItemInterface/api/program/questionList/1/query.v', msg, type)
}

// 5、获取权利与义务信息
export function getApprRightDuty(data, type, callFunc) {
    var msg = data;
    if (callFunc && (callFunc.constructor === Function)) {
        return fetchData('/ApprTerminalSys/ApprItemInterface/api/program/apprRightDuty/1/query.v', msg, type, callFunc)
    }
    return fetchData('/ApprTerminalSys/ApprItemInterface/api/program/apprRightDuty/1/query.v', msg, type)
}

// 6、获取事项的申请材料列表（材料有分类）
export function getProgramStuffList(data, type, callFunc) {
    var msg = data;
    if (callFunc && (callFunc.constructor === Function)) {
        return fetchData('/ApprTerminalSys/ApprItemInterface/api/program/programStuffList/1/query.v', msg, type, callFunc)
    }
    return fetchData('/ApprTerminalSys/ApprItemInterface/api/program/programStuffList/1/query.v', msg, type)
}

// 7、获取事项办事窗口信息
export function getProgramWinInfo(data, type, callFunc) {
    var msg = data;
    if (callFunc && (callFunc.constructor === Function)) {
        return fetchData('/ApprTerminalSys/ApprItemInterface/api/program/programWinInfo/1/query.v', msg, type, callFunc)
    }
    return fetchData('/ApprTerminalSys/ApprItemInterface/api/program/programWinInfo/1/query.v', msg, type)
}

// 8、获取审批条件
export function getApprRule(data, type, callFunc) {
    var msg = data;
    if (callFunc && (callFunc.constructor === Function)) {
        return fetchData('/ApprTerminalSys/ApprItemInterface/api/program/apprRule/1/query.v', msg, type, callFunc)
    }
    return fetchData('/ApprTerminalSys/ApprItemInterface/api/program/apprRule/1/query.v', msg, type)
}

// 9、获取办理流程
export function getdDalflow(data, type, callFunc) {
    var msg = data;
    if (callFunc && (callFunc.constructor === Function)) {
        return fetchData('/ApprTerminalSys/ApprItemInterface/api/program/dealflow/1/query.v', msg, type, callFunc)
    }
    return fetchData('/ApprTerminalSys/ApprItemInterface/api/program/dealflow/1/query.v', msg, type)
}

// 10、获取事项实施机关信息 
export function getProgramItemOrgan(data, type, callFunc) {
    var msg = data;
    if (callFunc && (callFunc.constructor === Function)) {
        return fetchData('/ApprTerminalSys/ApprItemInterface/api/program/programItemOrgan/1/query.v', msg, type, callFunc)
    }
    return fetchData('/ApprTerminalSys/ApprItemInterface/api/program/programItemOrgan/1/query.v', msg, type)
}

// 11、获取事项审批证件样本信息
export function getProgramLicenseResultFile(data, type, callFunc) {
    var msg = data;
    if (callFunc && (callFunc.constructor === Function)) {
        return fetchData('/ApprTerminalSys/ApprItemInterface/api/apprItem/programLicenseResultFile/1/query.v', msg, type, callFunc)
    }
    return fetchData('/ApprTerminalSys/ApprItemInterface/api/apprItem/programLicenseResultFile/1/query.v', msg, type)
}



/** 
 * <--------------- 3.办事指引模块API ---------------> 
*/

// 获取情景式事项列表
export function getItemList(data, type, callFunc) {
    var msg = data
    if (callFunc && (callFunc.constructor === Function)) {
        return fetchData('/ApprTerminalSys/CommonService/api/apprItem/itemList/1/query.v', msg, type, callFunc)
    }
    return fetchData('/ApprTerminalSys/CommonService/api/apprItem/itemList/1/query.v', msg, type)
}

// 情景式问卷
export function getQuestionList(data, type, callFunc) {
    var msg = data;
    if (callFunc && (callFunc.constructor === Function)) {
        return fetchData('/ApprTerminalSys/CommonService/api/scene/questionList/query.v', msg, type, callFunc)
    }
    return fetchData('/ApprTerminalSys/CommonService/api/scene/questionList/query.v', msg, type)
}

// 获取材料清单
export function getStuffList(data, type, callFunc) {
    var msg = data;
    if (callFunc && (callFunc.constructor === Function)) {
        return fetchData('/ApprTerminalSys/CommonService/api/scene/stuffList/query.v', msg, type, callFunc)
    }
    return fetchData('/ApprTerminalSys/CommonService/api/scene/stuffList/query.v', msg, type)
}

// 获取审批流水号
export function getItemCode(data, type, callFunc) {
    var msg = data;
    if (callFunc && (callFunc.constructor === Function)) {
        return fetchData('/ApprTerminalSys/ApprItemInterface/api/program/programInfo/5/query.v', msg, type, callFunc)
    }
    return fetchData('/ApprTerminalSys/ApprItemInterface/api/program/programInfo/5/query.v', msg, type)
}

/** 
 * <--------------- 4.其他 ---------------> 
*/

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
        return fetchData('/ApprTerminalSys/getConfig', msg, type, callFunc)
    }
    return fetchData('/ApprTerminalSys/getConfig', msg, type)
}