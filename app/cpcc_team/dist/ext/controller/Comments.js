sap.ui.define(["sap/m/MessageToast"],function(e){"use strict";return{comments:function(t){e.show("Custom handler invoked.");var a=new sap.m.Dialog({title:"Approval Comments",endButton:new sap.m.Button({text:"Close",press:async function(){a.close()},layoutData:new sap.m.FlexItemData({growFactor:5,alignSelf:"End"})})});a.addContent(new sap.m.VBox({width:"60vw"}));function n(){var e=Math.floor(Math.random()*1e6);var t=(new Date).getTime();var a=t+"-"+e;return a}debugger;var o=new sap.suite.ui.commons.TimelineItem("thisuniqid1"+n(),{dateTime:"12/3/34",title:"demo title1",userNameClickable:false,userPicture:"Photo",text:"Demo Comment1",userName:"username1"});var s=new sap.suite.ui.commons.TimelineItem("thisuniqid2"+n(),{dateTime:"12/3/34",title:"demo title2",userNameClickable:false,userPicture:"Photo",text:"Demo Comment2",userName:"username2"});a.addContent(o);a.addContent(s);a.open();debugger}}});