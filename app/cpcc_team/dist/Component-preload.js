//@ui5-bundle cpccteam/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"cpccteam/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("cpccteam.Component",{metadata:{manifest:"json"}})});
},
	"cpccteam/ext/controller/Comments.js":function(){sap.ui.define(["sap/m/MessageToast"],function(e){"use strict";return{comments:function(t){e.show("Custom handler invoked.");var a=new sap.m.Dialog({title:"Approval Comments",endButton:new sap.m.Button({text:"Close",press:async function(){a.close()},layoutData:new sap.m.FlexItemData({growFactor:5,alignSelf:"End"})})});a.addContent(new sap.m.VBox({width:"60vw"}));function n(){var e=Math.floor(Math.random()*1e6);var t=(new Date).getTime();var a=t+"-"+e;return a}debugger;var o=new sap.suite.ui.commons.TimelineItem("thisuniqid1"+n(),{dateTime:"12/3/34",title:"demo title1",userNameClickable:false,userPicture:"Photo",text:"Demo Comment1",userName:"username1"});var s=new sap.suite.ui.commons.TimelineItem("thisuniqid2"+n(),{dateTime:"12/3/34",title:"demo title2",userNameClickable:false,userPicture:"Photo",text:"Demo Comment2",userName:"username2"});a.addContent(o);a.addContent(s);a.open();debugger}}});
},
	"cpccteam/ext/controller/Discard.js":function(){sap.ui.define(["sap/m/MessageToast"],function(s){"use strict";return{Discard:function(e){s.show("Custom handler invoked.")}}});
},
	"cpccteam/ext/controller/Submit.js":function(){sap.ui.define(["sap/m/MessageToast"],function(s){"use strict";return{submit:function(e){s.show("Custom handler invoked.")}}});
},
	"cpccteam/ext/fragment/Attachments.fragment.xml":'<core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:macros="sap.fe.macros"\ndisplayBlock="true"\nxmlns:mvc="sap.ui.core.mvc"\n\txmlns:upload="sap.m.upload"><VBox id= "11" ><Button id="dewdewdw" visible="false" core:require="{ handler: \'cpccteam/ext/fragment/Attachments\'}" text="Jhggfds" press="handler.onPress" /><upload:UploadSet\n\t\t\t\t\t\n\t\t\t\t\tid="uploadSet"\n\t\t\t\t\tcore:require="{ handler: \'cpccteam/ext/fragment/Attachments\'}"\n\t\t\t\t\tinstantUpload="false"\n\t\t\t\t\tuploadEnabled="true"\n\t\t\t\t\tshowIcons="true"\n\t\t\t\t\tmode="None"\n\t\t\t\t\tafterItemAdded="handler.onAfterItemAdded"\n\t\t\t\t\tuploadCompleted="handler.onUploadCompleted"\n\t\t\t\t\titems="{\n\t\t\t\t\t\t\t\tpath: \'/Files\',\n\t\t\t\t\t\t\t\tparameters: {\n\t\t\t\t\t\t\t\t\t$orderby: \'createdAt desc\'\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\ttemplateShareable: false}"\n\t\t\t\t><upload:toolbar></upload:toolbar><upload:items><upload:UploadSetItem\n\t\t\t\t\t\tid="ddd"\n\t\t\t\t\t\t\tfileName="{fileName}"\n\t\t\t\t\t\t\tmediaType="{mediaType}"\n\t\t\t\t\t\t\turl="{url}"\n\t\t\t\t\t\t\tthumbnailUrl="{\n\t\t\t\t\t\t\t\tpath: \'mediaType\',\n\t\t\t\t\t\t\t\tformatter: \'handler.formatThumbnailUrl\'\n\t\t\t\t\t\t\t}"\n\t\t\t\t\t\t\tenabledEdit="false"\n\t\t\t\t\t\t\topenPressed="handler.onOpenPressed"\n\t\t\t\t\t\t\tremovePressed="handler.onRemovePressed"\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t><upload:attributes><ObjectAttribute\n\t\t\t\t\t\t\t\tid="dd"\n\t\t\t\t\t\t\t\t\ttitle="Uploaded By"\n\t\t\t\t\t\t\t\t\ttext="{createdBy}"\n\t\t\t\t\t\t\t\t\tactive="false"\n\t\t\t\t\t\t\t\t/><ObjectAttribute\n\t\t\t\t\t\t\t\tid="dd22"\n\t\t\t\t\t\t\t\t\ttitle="Uploaded on"\n\t\t\t\t\t\t\t\t\ttext="{createdAt}"\n\t\t\t\t\t\t\t\t\tactive="false"\n\t\t\t\t\t\t\t\t/><ObjectAttribute\n\t\t\t\t\t\t\t\tid="dddw2"\n\n\t\t\t\t\t\t\t\t\ttitle="File Type"\n\t\t\t\t\t\t\t\t\ttext="{mediaType}"\n\t\t\t\t\t\t\t\t\tactive="false"\n\t\t\t\t\t\t\t\t/><ObjectAttribute\n\t\t\t\t\t\t\t\tid="dd22a"\n\t\t\t\t\t\t\t\t\ttitle="File Size"\n\t\t\t\t\t\t\t\t\ttext="{size}"\n\t\t\t\t\t\t\t\t\tactive="false"\n\t\t\t\t\t\t\t\t/></upload:attributes></upload:UploadSetItem></upload:items></upload:UploadSet></VBox></core:FragmentDefinition>',
	"cpccteam/ext/fragment/Attachments.js":function(){sap.ui.define(["sap/m/MessageToast","sap/ui/model/json/JSONModel","sap/ui/core/Item","sap/m/MessageToast"],function(e){"use strict";var t=this;var a;return{onPress:function(t){debugger;e.show("Custom handler invoked.")},onAfterItemAdded:function(e){debugger;var t=e.getParameter("item");var o=window.location.href;const n=/New_Model_Code='([^']+)'/;const i=o.match(n);if(i){a=i[1];console.log(a)}else{console.log("Number not found in URL")}var s=function(e){var t={mediaType:e.getMediaType(),fileName:e.getFileName(),size:e.getFileObject().size,id1:a};var o={url:"/odata/v4/my/Files",method:"POST",headers:{"Content-type":"application/json"},data:JSON.stringify(t)};return new Promise((e,t)=>{$.ajax(o).done((t,a,o)=>{e(t.ID)}).fail(e=>{t(e)})})};s(t).then(e=>{var o=`/odata/v4/my/Files(ID=${e},id1='${a}')/content`;t.setUploadUrl(o);var n=this.byId("uploadSet");n.setHttpRequestMethod("PUT");n.uploadItem(t)}).catch(e=>{console.log(e)})},onUploadCompleted:function(e){var t=this.byId("uploadSet");t.removeAllIncompleteItems();t.getBinding("items").refresh()},onRemovePressed:function(e){debugger;e.getParameter("item").destroy()},onOpenPressed:function(e){debugger;e.preventDefault();var t=e.getSource();var a=t.getUrl();var o=window.open(a,"_blank");if(o){o.focus()}else{alert("Please allow pop-ups to open the file.");return new Promise((e,t)=>{$.ajax(settings).done(t=>{e(t)}).fail(e=>{t(e)})})}return new Promise((e,t)=>{$.ajax(settings).done(t=>{e(t)}).fail(e=>{t(e)})})},_createEntity:function(e){var t={mediaType:e.getMediaType(),fileName:e.getFileName(),size:e.getFileObject().size};var a={url:"/attachments/Files",method:"POST",headers:{"Content-type":"application/json"},data:JSON.stringify(t)};return new Promise((e,t)=>{$.ajax(a).done((t,a,o)=>{e(t.ID)}).fail(e=>{t(e)})})},_uploadContent:function(e,t){var a=`/attachments/Files(ID='${t}',id1=)/content`;e.setUploadUrl(a);var o=this.byId("uploadSet");o.setHttpRequestMethod("PUT");o.uploadItem(e)},formatThumbnailUrl:function(e){var t;switch(e){case"image/png":t="sap-icon://card";break;case"text/plain":t="sap-icon://document-text";break;case"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":t="sap-icon://excel-attachment";break;case"application/vnd.openxmlformats-officedocument.wordprocessingml.document":t="sap-icon://doc-attachment";break;case"application/pdf":t="sap-icon://pdf-attachment";break;default:t="sap-icon://attachment"}return t}}});
},
	"cpccteam/i18n/i18n.properties":'# This is the resource bundle for cpccteam\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=App Title\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n\nflpTitle=cpcc_team\n',
	"cpccteam/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"cpccteam","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.12.5","toolsId":"0528887d-4b45-4e01-96d6-b6a5522411e9"},"dataSources":{"mainService":{"uri":"odata/v4/my/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"cpcc_team-display":{"semanticObject":"cpcc_team","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.120.9","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{},"sap.suite.ui.commons":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"cpccteam.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"routes":[{"pattern":":?query:","name":"cpcc_teamList","target":"cpcc_teamList"},{"pattern":"cpcc_team({key}):?query:","name":"cpcc_teamObjectPage","target":"cpcc_teamObjectPage"}],"targets":{"cpcc_teamList":{"type":"Component","id":"cpcc_teamList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/cpcc_team","variantManagement":"Page","navigation":{"cpcc_team":{"detail":{"route":"cpcc_teamObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"GridTable"}}},"initialLoad":"Enabled"}}},"cpcc_teamObjectPage":{"type":"Component","id":"cpcc_teamObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/cpcc_team","content":{"body":{"sections":{"Attachments":{"template":"cpccteam.ext.fragment.Attachments","position":{"placement":"After","anchor":"section2"},"title":"attachments","type":"XMLFragment"}}},"footer":{"actions":{"submit":{"press":"cpccteam.ext.controller.Submit.submit","visible":true,"enabled":true,"text":"submit"},"Discard":{"press":"cpccteam.ext.controller.Discard.Discard","visible":true,"enabled":true,"text":"Discard","position":{"placement":"After","anchor":"submit"}}}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.FieldGroup#Comments":{"actions":{"comments":{"press":"cpccteam.ext.controller.Comments.comments","visible":true,"enabled":true,"text":"Comments"}}},"child/@com.sap.vocabularies.UI.v1.LineItem#WorkflowHistory":{"tableSettings":{"type":"GridTable"}}}}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"approval"}}'
}});