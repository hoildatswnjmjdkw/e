const a67_0x1294=['prune\x20--\x20REASON','default','send','guild','../../utils/confirmation','author','info','membersPruneQuestion','client','@bastion/tesseract','days','RED','number','apply','getString','Command','membersPrune','catch','language','prune\x20--days\x20NUMBER\x20--\x20REASON','exports','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','constructor','join','prune','channel','tag','members','locale','return\x20/\x22\x20+\x20this\x20+\x20\x22/','COLORS','MANAGE_GUILD','It\x20allows\x20you\x20to\x20prune\x20members\x20without\x20any\x20roles,\x20from\x20the\x20server,\x20based\x20on\x20how\x20long\x20they\x20have\x20been\x20inactive.','Constants'];(function(_0xb3a3d8,_0x129490){const _0x3fabff=function(_0x901ee5){while(--_0x901ee5){_0xb3a3d8['push'](_0xb3a3d8['shift']());}};const _0x350177=function(){const _0x45924e={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2141ff,_0x4c92ee,_0x3f0fd9,_0x574ad9){_0x574ad9=_0x574ad9||{};let _0x410143=_0x4c92ee+'='+_0x3f0fd9;let _0x71a5b2=0x0;for(let _0x27ec45=0x0,_0x2c88d9=_0x2141ff['length'];_0x27ec45<_0x2c88d9;_0x27ec45++){const _0x3bbbce=_0x2141ff[_0x27ec45];_0x410143+=';\x20'+_0x3bbbce;const _0x44faa5=_0x2141ff[_0x3bbbce];_0x2141ff['push'](_0x44faa5);_0x2c88d9=_0x2141ff['length'];if(_0x44faa5!==!![]){_0x410143+='='+_0x44faa5;}}_0x574ad9['cookie']=_0x410143;},'removeCookie':function(){return'dev';},'getCookie':function(_0x44249c,_0x1ac2e5){_0x44249c=_0x44249c||function(_0x1f452a){return _0x1f452a;};const _0x4eb4f3=_0x44249c(new RegExp('(?:^|;\x20)'+_0x1ac2e5['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x2e2ab4=function(_0x2ceaaf,_0x5cb6b3){_0x2ceaaf(++_0x5cb6b3);};_0x2e2ab4(_0x3fabff,_0x129490);return _0x4eb4f3?decodeURIComponent(_0x4eb4f3[0x1]):undefined;}};const _0x16212e=function(){const _0xb72f54=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xb72f54['test'](_0x45924e['removeCookie']['toString']());};_0x45924e['updateCookie']=_0x16212e;let _0x2d8924='';const _0xbfddc7=_0x45924e['updateCookie']();if(!_0xbfddc7){_0x45924e['setCookie'](['*'],'counter',0x1);}else if(_0xbfddc7){_0x2d8924=_0x45924e['getCookie'](null,'counter');}else{_0x45924e['removeCookie']();}};_0x350177();}(a67_0x1294,0x93));const a67_0x3fab=function(_0xb3a3d8,_0x129490){_0xb3a3d8=_0xb3a3d8-0x0;let _0x3fabff=a67_0x1294[_0xb3a3d8];return _0x3fabff;};const a67_0x45924e=function(){let _0x17c050=!![];return function(_0x5c07dc,_0x3e98c8){const _0x598132=_0x17c050?function(){if(_0x3e98c8){const _0x217f40=_0x3e98c8[a67_0x3fab('0x2')](_0x5c07dc,arguments);_0x3e98c8=null;return _0x217f40;}}:function(){};_0x17c050=![];return _0x598132;};}();const a67_0x901ee5=a67_0x45924e(this,function(){const _0x3db865=function(){const _0x26a02c=_0x3db865[a67_0x3fab('0xb')](a67_0x3fab('0x12'))()['compile'](a67_0x3fab('0xa'));return!_0x26a02c['test'](a67_0x901ee5);};return _0x3db865();});a67_0x901ee5();'use strict';const tesseract_1=require(a67_0x3fab('0x20'));const confirmation_1=require(a67_0x3fab('0x1b'));module[a67_0x3fab('0x9')]=class PruneCommand extends tesseract_1[a67_0x3fab('0x4')]{constructor(){super(a67_0x3fab('0xd'),{'description':a67_0x3fab('0x15'),'triggers':[],'arguments':{'alias':{'days':'d'},'string':[a67_0x3fab('0x21')]},'scope':a67_0x3fab('0x1a'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':['MANAGE_GUILD'],'userPermissions':[a67_0x3fab('0x14')],'syntax':[a67_0x3fab('0x17'),a67_0x3fab('0x8')]});this['exec']=async(_0x5b0a26,_0x279361)=>{const _0x531bfb=typeof _0x279361[a67_0x3fab('0x21')]===a67_0x3fab('0x1')?Math['abs'](_0x279361[a67_0x3fab('0x21')]):0x7;const _0x3ec146=_0x279361['_'][a67_0x3fab('0xc')]('\x20')||'-';const _0x3cf693=await confirmation_1[a67_0x3fab('0x18')](_0x5b0a26,this[a67_0x3fab('0x1f')][a67_0x3fab('0x11')][a67_0x3fab('0x3')](_0x5b0a26['guild']['document'][a67_0x3fab('0x7')],a67_0x3fab('0x1d'),a67_0x3fab('0x1e'),_0x5b0a26[a67_0x3fab('0x1c')][a67_0x3fab('0xf')],_0x531bfb));if(!_0x3cf693)return;await _0x5b0a26['guild'][a67_0x3fab('0x10')][a67_0x3fab('0xd')]({'days':_0x531bfb,'reason':_0x3ec146});return _0x5b0a26[a67_0x3fab('0xe')][a67_0x3fab('0x19')]({'embed':{'color':tesseract_1[a67_0x3fab('0x16')][a67_0x3fab('0x13')][a67_0x3fab('0x0')],'description':this[a67_0x3fab('0x1f')]['locale'][a67_0x3fab('0x3')](_0x5b0a26[a67_0x3fab('0x1a')]['document'][a67_0x3fab('0x7')],a67_0x3fab('0x1d'),a67_0x3fab('0x5'),_0x5b0a26[a67_0x3fab('0x1c')][a67_0x3fab('0xf')],_0x531bfb,_0x3ec146)}})[a67_0x3fab('0x6')](()=>{});};}};