const a74_0x3f62=['resolveUser','tag','exports','language','bot','clear\x20--bots\x20--\x20REASON','locale','info','deletable','test','client','Cleared\x20','clear\x20--system\x20--\x20REASON','clear\x20--\x20REASON','channel','delete','pinned','catch','system','@bastion/tesseract','Reason','join','bulkDelete','size','createdTimestamp','messages','Constants','errors','clear\x20--limit\x2042\x20--\x20REASON','compile','COLORS','noDeletableMessages','RED','getString','document','constructor','apply','author','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','send','MANAGE_MESSAGES','guild','purge','user','messageClear','\x20messages','fetch','clear\x20--user\x20USER_ID\x20--\x20REASON','Command','limit','clean','bots','time','clear\x20--pinned\x20--\x20REASON','resolver','filter'];(function(_0x488dfd,_0x3f62a4){const _0x44248c=function(_0x12e343){while(--_0x12e343){_0x488dfd['push'](_0x488dfd['shift']());}};const _0x3bf841=function(){const _0x140c9d={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5da7d6,_0x138434,_0x328a50,_0xc6293e){_0xc6293e=_0xc6293e||{};let _0x294d97=_0x138434+'='+_0x328a50;let _0x204d68=0x0;for(let _0x2095fd=0x0,_0x58ccd0=_0x5da7d6['length'];_0x2095fd<_0x58ccd0;_0x2095fd++){const _0x536ea3=_0x5da7d6[_0x2095fd];_0x294d97+=';\x20'+_0x536ea3;const _0x2b0bbb=_0x5da7d6[_0x536ea3];_0x5da7d6['push'](_0x2b0bbb);_0x58ccd0=_0x5da7d6['length'];if(_0x2b0bbb!==!![]){_0x294d97+='='+_0x2b0bbb;}}_0xc6293e['cookie']=_0x294d97;},'removeCookie':function(){return'dev';},'getCookie':function(_0x46530c,_0x56895e){_0x46530c=_0x46530c||function(_0x56d1e6){return _0x56d1e6;};const _0x2e1c51=_0x46530c(new RegExp('(?:^|;\x20)'+_0x56895e['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x2658a3=function(_0x5727b7,_0x16609d){_0x5727b7(++_0x16609d);};_0x2658a3(_0x44248c,_0x3f62a4);return _0x2e1c51?decodeURIComponent(_0x2e1c51[0x1]):undefined;}};const _0x43a435=function(){const _0x2a9311=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2a9311['test'](_0x140c9d['removeCookie']['toString']());};_0x140c9d['updateCookie']=_0x43a435;let _0x2ec409='';const _0x40cfd6=_0x140c9d['updateCookie']();if(!_0x40cfd6){_0x140c9d['setCookie'](['*'],'counter',0x1);}else if(_0x40cfd6){_0x2ec409=_0x140c9d['getCookie'](null,'counter');}else{_0x140c9d['removeCookie']();}};_0x3bf841();}(a74_0x3f62,0x195));const a74_0x4424=function(_0x488dfd,_0x3f62a4){_0x488dfd=_0x488dfd-0x0;let _0x44248c=a74_0x3f62[_0x488dfd];return _0x44248c;};const a74_0x140c9d=function(){let _0x2581f5=!![];return function(_0x9240fa,_0x304223){const _0x18be29=_0x2581f5?function(){if(_0x304223){const _0x4aef8d=_0x304223[a74_0x4424('0x17')](_0x9240fa,arguments);_0x304223=null;return _0x4aef8d;}}:function(){};_0x2581f5=![];return _0x18be29;};}();const a74_0x12e343=a74_0x140c9d(this,function(){const _0x1a8015=function(){const _0x4aea8d=_0x1a8015[a74_0x4424('0x16')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a74_0x4424('0x10')](a74_0x4424('0x19'));return!_0x4aea8d[a74_0x4424('0x34')](a74_0x12e343);};return _0x1a8015();});a74_0x12e343();'use strict';const tesseract_1=require(a74_0x4424('0x6'));module[a74_0x4424('0x2d')]=class Clear extends tesseract_1[a74_0x4424('0x23')]{constructor(){super('clear',{'description':'It\x20allows\x20you\x20to\x20clear\x20a\x20specified\x20number\x20of\x20messages\x20in\x20a\x20channel.\x20You\x20can\x20optionally\x20filter\x20the\x20messages\x20that\x20should\x20be\x20cleard\x20based\x20on\x20the\x20message\x20author,\x20or\x20since\x20when\x20it\x20was\x20sent,\x20or\x20whether\x20it\x20is\x20pinned\x20or\x20system\x20message\x20or\x20a\x20bot\x20sent\x20it.','triggers':[a74_0x4424('0x25'),a74_0x4424('0x1d')],'arguments':{'alias':{'limit':'l','time':'t','user':'u'},'boolean':['bots',a74_0x4424('0x3'),a74_0x4424('0x5')],'number':['limit','time'],'string':[a74_0x4424('0x1e')]},'scope':a74_0x4424('0x1c'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a74_0x4424('0x1b')],'userPermissions':['MANAGE_MESSAGES'],'syntax':[a74_0x4424('0x0'),a74_0x4424('0xf'),a74_0x4424('0x22'),a74_0x4424('0x30'),a74_0x4424('0x28'),a74_0x4424('0x37'),'clear\x20--time\x201586478504946\x20--\x20REASON']});this['exec']=async(_0x5b314d,_0xc6028d)=>{let _0x439988=await _0x5b314d['channel'][a74_0x4424('0xc')][a74_0x4424('0x21')]({'limit':_0xc6028d[a74_0x4424('0x24')]||0x64,'before':_0x5b314d['id']},![]);const _0x327dd1=this[a74_0x4424('0x35')][a74_0x4424('0x29')][a74_0x4424('0x2b')](_0xc6028d[a74_0x4424('0x1e')]);if(_0x327dd1)_0x439988=_0x439988[a74_0x4424('0x2a')](_0x3f845a=>_0x3f845a[a74_0x4424('0x18')]['id']===_0x327dd1['id']);else if(_0xc6028d[a74_0x4424('0x1e')])_0x439988=_0x439988['filter'](_0x1ad672=>_0x1ad672[a74_0x4424('0x18')]['id']===_0xc6028d[a74_0x4424('0x1e')]);if(_0xc6028d['bots'])_0x439988=_0x439988[a74_0x4424('0x2a')](_0x573d6b=>_0x573d6b[a74_0x4424('0x18')][a74_0x4424('0x2f')]);else if(_0xc6028d[a74_0x4424('0x26')]===![])_0x439988=_0x439988[a74_0x4424('0x2a')](_0x53ef0b=>!_0x53ef0b[a74_0x4424('0x18')][a74_0x4424('0x2f')]);if(_0xc6028d[a74_0x4424('0x3')])_0x439988=_0x439988[a74_0x4424('0x2a')](_0x96e555=>_0x96e555['pinned']);else if(_0xc6028d[a74_0x4424('0x3')]===![])_0x439988=_0x439988[a74_0x4424('0x2a')](_0x266086=>!_0x266086[a74_0x4424('0x3')]);if(_0xc6028d[a74_0x4424('0x5')])_0x439988=_0x439988['filter'](_0x461a17=>_0x461a17['system']);else if(_0xc6028d[a74_0x4424('0x5')]===![])_0x439988=_0x439988[a74_0x4424('0x2a')](_0x1764b9=>!_0x1764b9[a74_0x4424('0x5')]);if(_0xc6028d[a74_0x4424('0x27')]){_0x439988=_0x439988[a74_0x4424('0x2a')](_0x2d5dc8=>_0x2d5dc8[a74_0x4424('0xb')]>=_0x5b314d[a74_0x4424('0xb')]-_0xc6028d[a74_0x4424('0x27')]*0xea60);}const _0x48e356=_0xc6028d['_'][a74_0x4424('0x8')]('\x20')||'-';const _0x56a35c=await _0x5b314d['channel'][a74_0x4424('0x9')](_0x439988,!![]);if(!_0x56a35c[a74_0x4424('0xa')]){return await _0x5b314d[a74_0x4424('0x1')][a74_0x4424('0x1a')]({'embed':{'color':tesseract_1[a74_0x4424('0xd')][a74_0x4424('0x11')][a74_0x4424('0x13')],'title':this[a74_0x4424('0x35')][a74_0x4424('0x31')][a74_0x4424('0x14')](_0x5b314d[a74_0x4424('0x1c')][a74_0x4424('0x15')][a74_0x4424('0x2e')],a74_0x4424('0xe'),'notFound'),'description':this[a74_0x4424('0x35')][a74_0x4424('0x31')][a74_0x4424('0x14')](_0x5b314d[a74_0x4424('0x1c')]['document']['language'],'errors',a74_0x4424('0x12'))}})['catch'](()=>{});}await _0x5b314d[a74_0x4424('0x1')][a74_0x4424('0x1a')]({'embed':{'color':tesseract_1[a74_0x4424('0xd')][a74_0x4424('0x11')]['ORANGE'],'description':this[a74_0x4424('0x35')]['locale'][a74_0x4424('0x14')](_0x5b314d[a74_0x4424('0x1c')]['document'][a74_0x4424('0x2e')],a74_0x4424('0x32'),a74_0x4424('0x1f'),_0x5b314d[a74_0x4424('0x18')][a74_0x4424('0x2c')],_0x56a35c[a74_0x4424('0xa')]),'fields':[{'name':a74_0x4424('0x7'),'value':_0x48e356}]}})['then'](_0x51091e=>{if(_0x5b314d[a74_0x4424('0x33')])_0x5b314d[a74_0x4424('0x2')]({'reason':'Bulk\x20Delete\x20by\x20'+_0x5b314d[a74_0x4424('0x18')][a74_0x4424('0x2c')]})[a74_0x4424('0x4')](()=>{});_0x51091e[a74_0x4424('0x2')]({'timeout':0xea60,'reason':a74_0x4424('0x36')+_0x56a35c[a74_0x4424('0xa')]+a74_0x4424('0x20')})[a74_0x4424('0x4')](()=>{});})[a74_0x4424('0x4')](()=>{});};}};