const a114_0x3ac4=['compile','NOT_FOUND','Release\x20Date','guild','slice','total_rating','sanitize','makeRequest','../../utils/omnic','constructor','test','join','Powered\x20by\x20IGDB','json','length','name','/games/search/','exports','send','cover','../../utils/errors','@bastion/tesseract','toFixed','Rating','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','DiscordError','toDateString','IRIS','websites','game\x20TITLE','BASTION_ERROR_TYPE','url','return\x20/\x22\x20+\x20this\x20+\x20\x22/','\x0a...','COLORS','channel'];(function(_0x3eee56,_0x3ac49c){const _0x1b074f=function(_0x40f4fe){while(--_0x40f4fe){_0x3eee56['push'](_0x3eee56['shift']());}};const _0x124419=function(){const _0x33146c={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2b1ee2,_0x35e513,_0x19783d,_0x3748a1){_0x3748a1=_0x3748a1||{};let _0x23ac94=_0x35e513+'='+_0x19783d;let _0x271ece=0x0;for(let _0x3f8fc8=0x0,_0x8f4d7e=_0x2b1ee2['length'];_0x3f8fc8<_0x8f4d7e;_0x3f8fc8++){const _0x51ffd6=_0x2b1ee2[_0x3f8fc8];_0x23ac94+=';\x20'+_0x51ffd6;const _0x5ad7e0=_0x2b1ee2[_0x51ffd6];_0x2b1ee2['push'](_0x5ad7e0);_0x8f4d7e=_0x2b1ee2['length'];if(_0x5ad7e0!==!![]){_0x23ac94+='='+_0x5ad7e0;}}_0x3748a1['cookie']=_0x23ac94;},'removeCookie':function(){return'dev';},'getCookie':function(_0x538d3f,_0x13097a){_0x538d3f=_0x538d3f||function(_0x255430){return _0x255430;};const _0x3e141f=_0x538d3f(new RegExp('(?:^|;\x20)'+_0x13097a['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x56d8a7=function(_0x3b7526,_0x263bbc){_0x3b7526(++_0x263bbc);};_0x56d8a7(_0x1b074f,_0x3ac49c);return _0x3e141f?decodeURIComponent(_0x3e141f[0x1]):undefined;}};const _0xd10ccf=function(){const _0x51517c=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x51517c['test'](_0x33146c['removeCookie']['toString']());};_0x33146c['updateCookie']=_0xd10ccf;let _0x5d10ae='';const _0x3fd1af=_0x33146c['updateCookie']();if(!_0x3fd1af){_0x33146c['setCookie'](['*'],'counter',0x1);}else if(_0x3fd1af){_0x5d10ae=_0x33146c['getCookie'](null,'counter');}else{_0x33146c['removeCookie']();}};_0x124419();}(a114_0x3ac4,0x16c));const a114_0x1b07=function(_0x3eee56,_0x3ac49c){_0x3eee56=_0x3eee56-0x0;let _0x1b074f=a114_0x3ac4[_0x3eee56];return _0x1b074f;};const a114_0x33146c=function(){let _0x28125b=!![];return function(_0x492136,_0x45485d){const _0x44f33a=_0x28125b?function(){if(_0x45485d){const _0x2096c4=_0x45485d['apply'](_0x492136,arguments);_0x45485d=null;return _0x2096c4;}}:function(){};_0x28125b=![];return _0x44f33a;};}();const a114_0x40f4fe=a114_0x33146c(this,function(){const _0x59aeca=function(){const _0x200302=_0x59aeca[a114_0x1b07('0x5')](a114_0x1b07('0x1c'))()[a114_0x1b07('0x20')](a114_0x1b07('0x14'));return!_0x200302[a114_0x1b07('0x6')](a114_0x40f4fe);};return _0x59aeca();});a114_0x40f4fe();'use strict';const tesseract_1=require(a114_0x1b07('0x11'));const errors=require(a114_0x1b07('0x10'));const omnic=require(a114_0x1b07('0x4'));module[a114_0x1b07('0xd')]=class GameCommand extends tesseract_1['Command']{constructor(){super('game',{'description':'It\x20allows\x20you\x20to\x20search\x20for\x20information\x20on\x20the\x20specified\x20game.','triggers':[],'arguments':{},'scope':a114_0x1b07('0x23'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a114_0x1b07('0x19')]});this['sanitize']=_0x253576=>{return _0x253576[a114_0x1b07('0xa')]>0x7d0?_0x253576[a114_0x1b07('0x0')](0x0,0x7d0)+a114_0x1b07('0x1d'):_0x253576;};this['exec']=async(_0x20ebd3,_0x4656c4)=>{if(!_0x4656c4['_']['length'])throw new errors[(a114_0x1b07('0x15'))](errors[a114_0x1b07('0x1a')]['INVALID_COMMAND_SYNTAX'],this[a114_0x1b07('0xb')]);const _0x38ce97=_0x4656c4['_'][a114_0x1b07('0x7')]('\x20');const _0x101ae5=await omnic[a114_0x1b07('0x3')](a114_0x1b07('0xc')+_0x38ce97);const _0x184147=await _0x101ae5[a114_0x1b07('0x9')]();if(!_0x184147[a114_0x1b07('0xa')])throw new Error(a114_0x1b07('0x21'));await _0x20ebd3[a114_0x1b07('0x1f')][a114_0x1b07('0xe')]({'embed':{'color':tesseract_1['Constants'][a114_0x1b07('0x1e')][a114_0x1b07('0x17')],'author':{'name':_0x184147[0x0]['version_title']},'title':_0x184147[0x0][a114_0x1b07('0xb')],'url':_0x184147[0x0][a114_0x1b07('0x1b')],'description':this[a114_0x1b07('0x2')](_0x184147[0x0]['summary']),'fields':[{'name':a114_0x1b07('0x13'),'value':_0x184147[0x0][a114_0x1b07('0x1')]?_0x184147[0x0]['total_rating'][a114_0x1b07('0x12')](0x2):'-','inline':!![]},{'name':a114_0x1b07('0x22'),'value':_0x184147[0x0]['first_release_date']?new Date(_0x184147[0x0]['first_release_date']*0x3e8)[a114_0x1b07('0x16')]():'-','inline':!![]},{'name':'Links','value':_0x184147[0x0]['websites']?_0x184147[0x0][a114_0x1b07('0x18')][a114_0x1b07('0x7')]('\x0a'):'-'}],'image':{'url':_0x184147[0x0][a114_0x1b07('0xf')]},'footer':{'text':a114_0x1b07('0x8')}}});};}};