const a161_0x4918=['exec','Temporary\x20Membership','../utils/durations','Max\x20Uses','Inviter','maxUses','createdTimestamp','channel','Invite\x20Code','Constants','guild','inviteCreate','apply','exports','Listener','between','temporary','compile','push','createLog','inviter','tag','LISTENER_MODE'];(function(_0x31b62d,_0x491866){const _0x4ade30=function(_0x38754e){while(--_0x38754e){_0x31b62d['push'](_0x31b62d['shift']());}};const _0x1da801=function(){const _0xb7f433={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x51709e,_0xd7ad63,_0x481374,_0x4cd3c4){_0x4cd3c4=_0x4cd3c4||{};let _0x490c90=_0xd7ad63+'='+_0x481374;let _0xd684a=0x0;for(let _0x1cf9bf=0x0,_0x42da4d=_0x51709e['length'];_0x1cf9bf<_0x42da4d;_0x1cf9bf++){const _0xa78ef9=_0x51709e[_0x1cf9bf];_0x490c90+=';\x20'+_0xa78ef9;const _0x473a14=_0x51709e[_0xa78ef9];_0x51709e['push'](_0x473a14);_0x42da4d=_0x51709e['length'];if(_0x473a14!==!![]){_0x490c90+='='+_0x473a14;}}_0x4cd3c4['cookie']=_0x490c90;},'removeCookie':function(){return'dev';},'getCookie':function(_0x30a9ff,_0x447cd9){_0x30a9ff=_0x30a9ff||function(_0x509f40){return _0x509f40;};const _0x34cced=_0x30a9ff(new RegExp('(?:^|;\x20)'+_0x447cd9['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0xd5b217=function(_0x584d2b,_0x379ce5){_0x584d2b(++_0x379ce5);};_0xd5b217(_0x4ade30,_0x491866);return _0x34cced?decodeURIComponent(_0x34cced[0x1]):undefined;}};const _0x2e1607=function(){const _0x2cf743=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2cf743['test'](_0xb7f433['removeCookie']['toString']());};_0xb7f433['updateCookie']=_0x2e1607;let _0xf10cc='';const _0x5c4f1f=_0xb7f433['updateCookie']();if(!_0x5c4f1f){_0xb7f433['setCookie'](['*'],'counter',0x1);}else if(_0x5c4f1f){_0xf10cc=_0xb7f433['getCookie'](null,'counter');}else{_0xb7f433['removeCookie']();}};_0x1da801();}(a161_0x4918,0x135));const a161_0x4ade=function(_0x31b62d,_0x491866){_0x31b62d=_0x31b62d-0x0;let _0x4ade30=a161_0x4918[_0x31b62d];return _0x4ade30;};const a161_0xb7f433=function(){let _0x400270=!![];return function(_0x26d9aa,_0x2e2b61){const _0x136c26=_0x400270?function(){if(_0x2e2b61){const _0xe5661e=_0x2e2b61[a161_0x4ade('0x2')](_0x26d9aa,arguments);_0x2e2b61=null;return _0xe5661e;}}:function(){};_0x400270=![];return _0x136c26;};}();const a161_0x38754e=a161_0xb7f433(this,function(){const _0x5cd16d=function(){const _0x5801cf=_0x5cd16d['constructor']('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a161_0x4ade('0x7')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x5801cf['test'](a161_0x38754e);};return _0x5cd16d();});a161_0x38754e();'use strict';const tesseract_1=require('@bastion/tesseract');const durations=require(a161_0x4ade('0xf'));module[a161_0x4ade('0x3')]=class InviteCreateListener extends tesseract_1[a161_0x4ade('0x4')]{constructor(){super(a161_0x4ade('0x1'),{'mode':tesseract_1[a161_0x4ade('0x16')][a161_0x4ade('0xc')]['ON']});this[a161_0x4ade('0xd')]=async _0x4a07b2=>{const _0x3deb70=_0x4a07b2[a161_0x4ade('0x0')];const _0x7398f6=[{'name':a161_0x4ade('0x15'),'value':_0x4a07b2['code'],'inline':!![]},{'name':'Invite\x20Channel','value':_0x4a07b2[a161_0x4ade('0x14')],'inline':!![]}];if(_0x4a07b2[a161_0x4ade('0xa')]){_0x7398f6[a161_0x4ade('0x8')]({'name':a161_0x4ade('0x11'),'value':_0x4a07b2[a161_0x4ade('0xa')][a161_0x4ade('0xb')],'inline':!![]});}if(_0x4a07b2[a161_0x4ade('0x12')]){_0x7398f6[a161_0x4ade('0x8')]({'name':a161_0x4ade('0x10'),'value':_0x4a07b2[a161_0x4ade('0x12')]['toString'](),'inline':!![]});}if(_0x4a07b2['maxAge']){_0x7398f6[a161_0x4ade('0x8')]({'name':'Expires','value':durations['humanize'](durations[a161_0x4ade('0x5')](_0x4a07b2['maxAge']*0x3e8)),'inline':!![]});}_0x3deb70[a161_0x4ade('0x9')]({'event':a161_0x4ade('0x1'),'fields':_0x7398f6,'footer':_0x4a07b2[a161_0x4ade('0x6')]?a161_0x4ade('0xe'):undefined,'timestamp':_0x4a07b2[a161_0x4ade('0x13')]});};}};