const a27_0x4d6a=['moderationLogs\x20--disable','locale','moderationLogsDisable','constructor','modLogs','exec','MANAGE_GUILD','info','save','guild','apply','return\x20/\x22\x20+\x20this\x20+\x20\x22/','exports','language','author','channel','client','getString','test','disable','RED','document','moderationLogs','catch','send','moderationLogChannelId','Command','Constants'];(function(_0x8a6cff,_0x4d6a00){const _0xeaa55f=function(_0x514c04){while(--_0x514c04){_0x8a6cff['push'](_0x8a6cff['shift']());}};const _0x4b566b=function(){const _0x2c16a3={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x136f8f,_0x5920b0,_0x5cab47,_0x46a01c){_0x46a01c=_0x46a01c||{};let _0x5c62ce=_0x5920b0+'='+_0x5cab47;let _0x14f0ef=0x0;for(let _0x285d8e=0x0,_0xbe4052=_0x136f8f['length'];_0x285d8e<_0xbe4052;_0x285d8e++){const _0x524692=_0x136f8f[_0x285d8e];_0x5c62ce+=';\x20'+_0x524692;const _0x3e9c64=_0x136f8f[_0x524692];_0x136f8f['push'](_0x3e9c64);_0xbe4052=_0x136f8f['length'];if(_0x3e9c64!==!![]){_0x5c62ce+='='+_0x3e9c64;}}_0x46a01c['cookie']=_0x5c62ce;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3f1996,_0x40136e){_0x3f1996=_0x3f1996||function(_0xdb3004){return _0xdb3004;};const _0x359e6e=_0x3f1996(new RegExp('(?:^|;\x20)'+_0x40136e['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x1017e0=function(_0x122b18,_0x3f5e6e){_0x122b18(++_0x3f5e6e);};_0x1017e0(_0xeaa55f,_0x4d6a00);return _0x359e6e?decodeURIComponent(_0x359e6e[0x1]):undefined;}};const _0x4bfb25=function(){const _0x3a99c8=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3a99c8['test'](_0x2c16a3['removeCookie']['toString']());};_0x2c16a3['updateCookie']=_0x4bfb25;let _0x17b80a='';const _0x3ba6c0=_0x2c16a3['updateCookie']();if(!_0x3ba6c0){_0x2c16a3['setCookie'](['*'],'counter',0x1);}else if(_0x3ba6c0){_0x17b80a=_0x2c16a3['getCookie'](null,'counter');}else{_0x2c16a3['removeCookie']();}};_0x4b566b();}(a27_0x4d6a,0x88));const a27_0xeaa5=function(_0x8a6cff,_0x4d6a00){_0x8a6cff=_0x8a6cff-0x0;let _0xeaa55f=a27_0x4d6a[_0x8a6cff];return _0xeaa55f;};const a27_0x2c16a3=function(){let _0x4f6849=!![];return function(_0x25f385,_0x2aab13){const _0x590f66=_0x4f6849?function(){if(_0x2aab13){const _0x212fdb=_0x2aab13[a27_0xeaa5('0xe')](_0x25f385,arguments);_0x2aab13=null;return _0x212fdb;}}:function(){};_0x4f6849=![];return _0x590f66;};}();const a27_0x514c04=a27_0x2c16a3(this,function(){const _0xd6706a=function(){const _0x1bca76=_0xd6706a[a27_0xeaa5('0x7')](a27_0xeaa5('0xf'))()['compile']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x1bca76[a27_0xeaa5('0x16')](a27_0x514c04);};return _0xd6706a();});a27_0x514c04();'use strict';const tesseract_1=require('@bastion/tesseract');module[a27_0xeaa5('0x10')]=class ModerationLogs extends tesseract_1[a27_0xeaa5('0x2')]{constructor(){super(a27_0xeaa5('0x1a'),{'description':'It\x20allows\x20you\x20to\x20enable\x20(and\x20disable)\x20logging\x20of\x20the\x20moderation\x20events\x20in\x20the\x20server.\x20It\x20sets\x20the\x20channel\x20as\x20the\x20Moderation\x20Log\x20Channel\x20that\x20will\x20log\x20the\x20moderation\x20events\x20in\x20the\x20server.','triggers':[a27_0xeaa5('0x8')],'arguments':{'alias':{'disable':['d']},'boolean':[a27_0xeaa5('0x17')]},'scope':a27_0xeaa5('0xd'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a27_0xeaa5('0xa')],'syntax':[a27_0xeaa5('0x1a'),a27_0xeaa5('0x4')]});this[a27_0xeaa5('0x9')]=async(_0x12bf95,_0x308f9d)=>{const _0x176561=_0x12bf95[a27_0xeaa5('0xd')];if(_0x308f9d[a27_0xeaa5('0x17')]){_0x176561[a27_0xeaa5('0x19')]['moderationLogChannelId']=undefined;delete _0x176561[a27_0xeaa5('0x19')][a27_0xeaa5('0x1')];}else{_0x176561['document'][a27_0xeaa5('0x1')]=_0x12bf95[a27_0xeaa5('0x13')]['id'];}await _0x176561[a27_0xeaa5('0x19')][a27_0xeaa5('0xc')]();await _0x12bf95[a27_0xeaa5('0x13')][a27_0xeaa5('0x0')]({'embed':{'color':_0x176561[a27_0xeaa5('0x19')][a27_0xeaa5('0x1')]?tesseract_1[a27_0xeaa5('0x3')]['COLORS']['GREEN']:tesseract_1[a27_0xeaa5('0x3')]['COLORS'][a27_0xeaa5('0x18')],'description':this[a27_0xeaa5('0x14')][a27_0xeaa5('0x5')][a27_0xeaa5('0x15')](_0x12bf95[a27_0xeaa5('0xd')][a27_0xeaa5('0x19')][a27_0xeaa5('0x11')],a27_0xeaa5('0xb'),_0x176561[a27_0xeaa5('0x19')]['moderationLogChannelId']?'moderationLogsEnable':a27_0xeaa5('0x6'),_0x12bf95[a27_0xeaa5('0x12')]['tag'])}})[a27_0xeaa5('0x1b')](()=>{});};}};