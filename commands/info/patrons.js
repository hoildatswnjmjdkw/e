const a55_0xa2f3=['Anonymous','Command','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','compile','You\x20can\x20be\x20one\x20of\x20them\x20too!','Active\x20Patrons','@bastion/tesseract','join','patrons','https://c5.patreon.com/external/logo/guidelines/wordmark_on_navy.jpg','locale','patron_status','exec','.png','COLORS','constructor','apply','Patrons','../../utils/constants','map','makeRequest','client','bastion.project.url','test','Former\x20Patrons','/patreon/patrons','send','active_patron','channel','return\x20/\x22\x20+\x20this\x20+\x20\x22/','It\x20allows\x20you\x20to\x20see\x20our\x20Patrons,\x20the\x20amazing\x20people\x20who\x20support\x20the\x20development\x20of\x20The\x20Bastion\x20Bot\x20Project.','getConstant','catch','full_name','json'];(function(_0x235567,_0xa2f3d1){const _0x12371e=function(_0x54ff82){while(--_0x54ff82){_0x235567['push'](_0x235567['shift']());}};const _0x1818b5=function(){const _0x52da94={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x46519f,_0x378961,_0x2ce505,_0x465e54){_0x465e54=_0x465e54||{};let _0x132b68=_0x378961+'='+_0x2ce505;let _0x285743=0x0;for(let _0x4a24c4=0x0,_0x59bf43=_0x46519f['length'];_0x4a24c4<_0x59bf43;_0x4a24c4++){const _0x437114=_0x46519f[_0x4a24c4];_0x132b68+=';\x20'+_0x437114;const _0x39c654=_0x46519f[_0x437114];_0x46519f['push'](_0x39c654);_0x59bf43=_0x46519f['length'];if(_0x39c654!==!![]){_0x132b68+='='+_0x39c654;}}_0x465e54['cookie']=_0x132b68;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3fad99,_0x58edfe){_0x3fad99=_0x3fad99||function(_0x20e1b3){return _0x20e1b3;};const _0x179563=_0x3fad99(new RegExp('(?:^|;\x20)'+_0x58edfe['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x1406ad=function(_0x42778d,_0x2b90e7){_0x42778d(++_0x2b90e7);};_0x1406ad(_0x12371e,_0xa2f3d1);return _0x179563?decodeURIComponent(_0x179563[0x1]):undefined;}};const _0x46c933=function(){const _0x110ea9=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x110ea9['test'](_0x52da94['removeCookie']['toString']());};_0x52da94['updateCookie']=_0x46c933;let _0x1fb98a='';const _0x242d2f=_0x52da94['updateCookie']();if(!_0x242d2f){_0x52da94['setCookie'](['*'],'counter',0x1);}else if(_0x242d2f){_0x1fb98a=_0x52da94['getCookie'](null,'counter');}else{_0x52da94['removeCookie']();}};_0x1818b5();}(a55_0xa2f3,0xf8));const a55_0x1237=function(_0x235567,_0xa2f3d1){_0x235567=_0x235567-0x0;let _0x12371e=a55_0xa2f3[_0x235567];return _0x12371e;};const a55_0x52da94=function(){let _0x3df4a1=!![];return function(_0x26595e,_0xd0347c){const _0x21406b=_0x3df4a1?function(){if(_0xd0347c){const _0x40fd94=_0xd0347c[a55_0x1237('0xd')](_0x26595e,arguments);_0xd0347c=null;return _0x40fd94;}}:function(){};_0x3df4a1=![];return _0x21406b;};}();const a55_0x54ff82=a55_0x52da94(this,function(){const _0x53eb4b=function(){const _0x28f17c=_0x53eb4b[a55_0x1237('0xc')](a55_0x1237('0x1a'))()[a55_0x1237('0x0')](a55_0x1237('0x22'));return!_0x28f17c[a55_0x1237('0x14')](a55_0x54ff82);};return _0x53eb4b();});a55_0x54ff82();'use strict';const tesseract_1=require(a55_0x1237('0x3'));const constants=require(a55_0x1237('0xf'));const omnic=require('../../utils/omnic');module['exports']=class PatronsCommand extends tesseract_1[a55_0x1237('0x21')]{constructor(){super(a55_0x1237('0x5'),{'description':a55_0x1237('0x1b'),'triggers':[],'arguments':{},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[]});this[a55_0x1237('0x9')]=async _0x49ed4e=>{const _0x1f9184=await omnic[a55_0x1237('0x11')](a55_0x1237('0x16'));const _0x40954e=await _0x1f9184[a55_0x1237('0x1f')]();await _0x49ed4e[a55_0x1237('0x19')][a55_0x1237('0x17')]({'embed':{'color':constants[a55_0x1237('0xb')]['PATREON'],'author':{'name':this[a55_0x1237('0x12')]['locale'][a55_0x1237('0x1c')]('bastion.project'),'iconURL':this[a55_0x1237('0x12')]['locale'][a55_0x1237('0x1c')](a55_0x1237('0x13'))+a55_0x1237('0xa')},'title':a55_0x1237('0xe'),'url':this[a55_0x1237('0x12')][a55_0x1237('0x7')]['getConstant']('bastion.website')+'/donate','description':'These\x20are\x20the\x20amazing\x20people\x20who\x20continuously\x20support\x20us,\x20by\x20being\x20our\x20patron,\x20on\x20Patreon.','thumbnail':{'url':a55_0x1237('0x6')},'fields':[{'name':a55_0x1237('0x2'),'value':_0x40954e['filter'](_0x28272b=>_0x28272b[a55_0x1237('0x8')]===a55_0x1237('0x18'))[a55_0x1237('0x10')](_0x5acaad=>_0x5acaad[a55_0x1237('0x1e')]||a55_0x1237('0x20'))[a55_0x1237('0x4')](',\x20')},{'name':a55_0x1237('0x15'),'value':_0x40954e['filter'](_0x4d26f2=>_0x4d26f2[a55_0x1237('0x8')]==='former_patron')[a55_0x1237('0x10')](_0x509e4b=>_0x509e4b[a55_0x1237('0x1e')]||'Anonymous')['join'](',\x20')}],'footer':{'text':a55_0x1237('0x1')}}})[a55_0x1237('0x1d')](()=>{});};}};