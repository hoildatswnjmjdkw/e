const a13_0x174b=['Constants','apply','garfield','COLORS','toDateString','send','Powered\x20by\x20Garfield','img','Garfield','Command','return\x20/\x22\x20+\x20this\x20+\x20\x22/','guild','It\x20allows\x20you\x20to\x20see\x20the\x20latest\x20Garfield\x20comic\x20strip.','../../utils/omnic','constructor','test','channel','exports'];(function(_0x4074cf,_0x174bd6){const _0xf68408=function(_0x43854d){while(--_0x43854d){_0x4074cf['push'](_0x4074cf['shift']());}};const _0x4c8a82=function(){const _0xeff2b2={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x13c2ac,_0x5d0960,_0x506630,_0x444c40){_0x444c40=_0x444c40||{};let _0x5f0c96=_0x5d0960+'='+_0x506630;let _0x142459=0x0;for(let _0x3587d7=0x0,_0x9a2ab=_0x13c2ac['length'];_0x3587d7<_0x9a2ab;_0x3587d7++){const _0x203779=_0x13c2ac[_0x3587d7];_0x5f0c96+=';\x20'+_0x203779;const _0x2302ba=_0x13c2ac[_0x203779];_0x13c2ac['push'](_0x2302ba);_0x9a2ab=_0x13c2ac['length'];if(_0x2302ba!==!![]){_0x5f0c96+='='+_0x2302ba;}}_0x444c40['cookie']=_0x5f0c96;},'removeCookie':function(){return'dev';},'getCookie':function(_0x2be7a8,_0x5f14ed){_0x2be7a8=_0x2be7a8||function(_0x5eab4e){return _0x5eab4e;};const _0x5f2567=_0x2be7a8(new RegExp('(?:^|;\x20)'+_0x5f14ed['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x583434=function(_0x35ced0,_0x1a3449){_0x35ced0(++_0x1a3449);};_0x583434(_0xf68408,_0x174bd6);return _0x5f2567?decodeURIComponent(_0x5f2567[0x1]):undefined;}};const _0x4f7953=function(){const _0x211b95=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x211b95['test'](_0xeff2b2['removeCookie']['toString']());};_0xeff2b2['updateCookie']=_0x4f7953;let _0x2dd79a='';const _0x1b2b8c=_0xeff2b2['updateCookie']();if(!_0x1b2b8c){_0xeff2b2['setCookie'](['*'],'counter',0x1);}else if(_0x1b2b8c){_0x2dd79a=_0xeff2b2['getCookie'](null,'counter');}else{_0xeff2b2['removeCookie']();}};_0x4c8a82();}(a13_0x174b,0x173));const a13_0xf684=function(_0x4074cf,_0x174bd6){_0x4074cf=_0x4074cf-0x0;let _0xf68408=a13_0x174b[_0x4074cf];return _0xf68408;};const a13_0xeff2b2=function(){let _0x1addf3=!![];return function(_0x289d4e,_0xbf47df){const _0x2d6c23=_0x1addf3?function(){if(_0xbf47df){const _0x2f40b5=_0xbf47df[a13_0xf684('0x8')](_0x289d4e,arguments);_0xbf47df=null;return _0x2f40b5;}}:function(){};_0x1addf3=![];return _0x2d6c23;};}();const a13_0x43854d=a13_0xeff2b2(this,function(){const _0x14b2cf=function(){const _0x193ef1=_0x14b2cf[a13_0xf684('0x3')](a13_0xf684('0x11'))()['compile']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x193ef1[a13_0xf684('0x4')](a13_0x43854d);};return _0x14b2cf();});a13_0x43854d();'use strict';const tesseract_1=require('@bastion/tesseract');const omnic=require(a13_0xf684('0x2'));module[a13_0xf684('0x6')]=class GarfieldCommand extends tesseract_1[a13_0xf684('0x10')]{constructor(){super(a13_0xf684('0x9'),{'description':a13_0xf684('0x1'),'triggers':[],'arguments':{},'scope':a13_0xf684('0x0'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[]});this['exec']=async _0x4a0e1b=>{const _0x4c7122=await omnic['makeRequest']('/comics/garfield/latest');const _0x3b47de=await _0x4c7122['json']();await _0x4a0e1b[a13_0xf684('0x5')][a13_0xf684('0xc')]({'embed':{'color':tesseract_1[a13_0xf684('0x7')][a13_0xf684('0xa')]['IRIS'],'author':{'name':a13_0xf684('0xf'),'url':_0x3b47de['url']},'fields':[{'name':'Publication\x20Date','value':new Date()[a13_0xf684('0xb')](),'inline':!![]}],'image':{'url':_0x3b47de[a13_0xf684('0xe')]},'footer':{'text':a13_0xf684('0xd')}}});};}};