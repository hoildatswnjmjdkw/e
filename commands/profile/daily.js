const a124_0x2fea=['It\x20allows\x20you\x20to\x20claim\x20Bastion\x20Coins,\x20that\x20every\x20member\x20receives\x20as\x20a\x20reward\x20for\x20being\x20in\x20the\x20server.\x20You\x20can\x20claim\x20your\x20rewards\x20once\x20every\x2024\x20hours.','claimRewardBooster','../../models/Member','getString','lastClaimed','claim','document','tag','Command','member','test','getClaimMessageKey','credit','author','alreadyClaimed','locale','@bastion/tesseract','constructor','../../utils/numbers','getTime','Constants','claimStreakFirst','claimStreak','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','getRandomInt','IRIS','client','info','joinedTimestamp','claimStreakClaimed','channel','exec','toDateString','guild','Daily\x20Reward','language','save','send','premiumSinceTimestamp','default'];(function(_0x453757,_0x2fea15){const _0xac85bb=function(_0x3fc7de){while(--_0x3fc7de){_0x453757['push'](_0x453757['shift']());}},_0x506b3a=function(){const _0x5cde1d={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x327517,_0x570d4f,_0x5cacf5,_0x5c1377){_0x5c1377=_0x5c1377||{};let _0x57450f=_0x570d4f+'='+_0x5cacf5,_0x500de5=0x0;for(let _0x2bb916=0x0,_0x3174e9=_0x327517['length'];_0x2bb916<_0x3174e9;_0x2bb916++){const _0x38bfce=_0x327517[_0x2bb916];_0x57450f+=';\x20'+_0x38bfce;const _0x2c976f=_0x327517[_0x38bfce];_0x327517['push'](_0x2c976f),_0x3174e9=_0x327517['length'],_0x2c976f!==!![]&&(_0x57450f+='='+_0x2c976f);}_0x5c1377['cookie']=_0x57450f;},'removeCookie':function(){return'dev';},'getCookie':function(_0x408cfe,_0x71900){_0x408cfe=_0x408cfe||function(_0x4c20b1){return _0x4c20b1;};const _0x479c97=_0x408cfe(new RegExp('(?:^|;\x20)'+_0x71900['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x225dd7=function(_0xb7e757,_0x245125){_0xb7e757(++_0x245125);};return _0x225dd7(_0xac85bb,_0x2fea15),_0x479c97?decodeURIComponent(_0x479c97[0x1]):undefined;}},_0x3da096=function(){const _0x51cb1e=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x51cb1e['test'](_0x5cde1d['removeCookie']['toString']());};_0x5cde1d['updateCookie']=_0x3da096;let _0x28e1b4='';const _0x567c4a=_0x5cde1d['updateCookie']();if(!_0x567c4a)_0x5cde1d['setCookie'](['*'],'counter',0x1);else _0x567c4a?_0x28e1b4=_0x5cde1d['getCookie'](null,'counter'):_0x5cde1d['removeCookie']();};_0x506b3a();}(a124_0x2fea,0xe1));const a124_0xac85=function(_0x453757,_0x2fea15){_0x453757=_0x453757-0x0;let _0xac85bb=a124_0x2fea[_0x453757];return _0xac85bb;};const _0x12eff2=a124_0xac85,a124_0x5cde1d=function(){let _0x28e1b4=!![];return function(_0x567c4a,_0x327517){const _0x570d4f=_0x28e1b4?function(){if(_0x327517){const _0x5cacf5=_0x327517['apply'](_0x567c4a,arguments);return _0x327517=null,_0x5cacf5;}}:function(){};return _0x28e1b4=![],_0x570d4f;};}(),a124_0x3fc7de=a124_0x5cde1d(this,function(){const _0x5c1377=function(){const _0x44aa2a=a124_0xac85,_0x57450f=_0x5c1377[_0x44aa2a('0x20')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['constructor'](_0x44aa2a('0x26'));return!_0x57450f[_0x44aa2a('0x19')](a124_0x3fc7de);};return _0x5c1377();});a124_0x3fc7de();'use strict';const tesseract_1=require(_0x12eff2('0x1f')),Member_1=require(_0x12eff2('0x11')),numbers=require(_0x12eff2('0x21'));module['exports']=class DailyCommand extends tesseract_1[_0x12eff2('0x17')]{constructor(){const _0x2187c6=_0x12eff2;super('daily',{'description':_0x2187c6('0xf'),'triggers':[_0x2187c6('0x14')],'arguments':{},'scope':_0x2187c6('0x8'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[]}),this[_0x2187c6('0x1a')]=_0x500de5=>{const _0x14b24b=_0x2187c6;switch(_0x500de5){case 0x1:return _0x14b24b('0x24');case 0x6:return'claimStreakLast';case 0x7:return _0x14b24b('0x4');default:return _0x14b24b('0x25');}},this[_0x2187c6('0x6')]=async _0x2bb916=>{const _0x50ee90=_0x2187c6,_0x3174e9=await Member_1[_0x50ee90('0xe')]['findOne']({'user':_0x2bb916[_0x50ee90('0x1c')]['id'],'guild':_0x2bb916[_0x50ee90('0x8')]['id']}),_0x38bfce=new Date(),_0x2c976f=(_0x225dd7=>new Date(_0x225dd7['setDate'](_0x225dd7['getDate']()-0x1)))(new Date()),_0x408cfe=new Date(_0x3174e9[_0x50ee90('0x13')]);if(_0x38bfce['toDateString']()===_0x408cfe[_0x50ee90('0x7')]())throw new Error(this[_0x50ee90('0x1')][_0x50ee90('0x1e')][_0x50ee90('0x12')](_0x2bb916[_0x50ee90('0x8')][_0x50ee90('0x15')][_0x50ee90('0xa')],'errors',_0x50ee90('0x1d'),_0x2bb916[_0x50ee90('0x1c')][_0x50ee90('0x16')]));_0x3174e9[_0x50ee90('0x13')]=_0x38bfce['getTime']();let _0x71900=numbers[_0x50ee90('0x27')](0x2a,0x80);_0x38bfce[_0x50ee90('0x22')]()-_0x2bb916[_0x50ee90('0x18')][_0x50ee90('0x3')]<0xf731400&&(_0x71900/=0x2);_0x3174e9[_0x50ee90('0x25')]=_0x2c976f[_0x50ee90('0x7')]()===_0x408cfe[_0x50ee90('0x7')]()?_0x3174e9[_0x50ee90('0x25')]+0x1:0x1;const _0x479c97=this[_0x50ee90('0x1')][_0x50ee90('0x1e')][_0x50ee90('0x12')](_0x2bb916[_0x50ee90('0x8')][_0x50ee90('0x15')][_0x50ee90('0xa')],_0x50ee90('0x2'),this[_0x50ee90('0x1a')](_0x3174e9[_0x50ee90('0x25')]),0x7-_0x3174e9[_0x50ee90('0x25')]);_0x3174e9[_0x50ee90('0x25')]===0x7&&(_0x3174e9[_0x50ee90('0x25')]=0x0,_0x71900+=numbers[_0x50ee90('0x27')](0x200,0x400)),_0x2bb916['member'][_0x50ee90('0xd')]&&(_0x71900*=0x2),await _0x2bb916[_0x50ee90('0x18')][_0x50ee90('0x1b')](_0x71900,_0x50ee90('0x9'),_0x3174e9),await _0x3174e9[_0x50ee90('0xb')](),_0x2bb916[_0x50ee90('0x5')][_0x50ee90('0xc')]({'embed':{'color':tesseract_1[_0x50ee90('0x23')]['COLORS'][_0x50ee90('0x0')],'description':this[_0x50ee90('0x1')][_0x50ee90('0x1e')][_0x50ee90('0x12')](_0x2bb916[_0x50ee90('0x8')][_0x50ee90('0x15')][_0x50ee90('0xa')],_0x50ee90('0x2'),'claim',_0x2bb916[_0x50ee90('0x1c')]['tag'])+'\x0a\x0a'+_0x479c97,'footer':{'text':_0x2bb916['member'][_0x50ee90('0xd')]?this['client']['locale']['getString'](_0x2bb916['guild']['document'][_0x50ee90('0xa')],_0x50ee90('0x2'),_0x50ee90('0x10')):''}}})['catch'](()=>{});};}};