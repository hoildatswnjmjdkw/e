const a82_0x12ad=['info','language','ORANGE','BASTION_ERROR_TYPE','resolver','test','resolveUser','user','Constants','document','../../utils/errors','join','guildBanRemove','guild','@bastion/tesseract','catch','exec','members','unban\x20--user\x20USER_ID\x20--\x20REASON','locale','BAN_MEMBERS','apply','It\x20allows\x20you\x20to\x20unban\x20the\x20users\x20who\x27re\x20banned\x20in\x20the\x20server.','INVALID_COMMAND_SYNTAX','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','constructor','send','tag','channel','DiscordError','compile'];(function(_0x4ceeca,_0x12adbd){const _0x46ba12=function(_0x2826f1){while(--_0x2826f1){_0x4ceeca['push'](_0x4ceeca['shift']());}};const _0x2d5687=function(){const _0x5c6d39={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x585ca6,_0x1a08d0,_0x1f1516,_0x16c969){_0x16c969=_0x16c969||{};let _0x215977=_0x1a08d0+'='+_0x1f1516;let _0x304363=0x0;for(let _0x5d3fc8=0x0,_0x56ba64=_0x585ca6['length'];_0x5d3fc8<_0x56ba64;_0x5d3fc8++){const _0x49a856=_0x585ca6[_0x5d3fc8];_0x215977+=';\x20'+_0x49a856;const _0x1a4eb2=_0x585ca6[_0x49a856];_0x585ca6['push'](_0x1a4eb2);_0x56ba64=_0x585ca6['length'];if(_0x1a4eb2!==!![]){_0x215977+='='+_0x1a4eb2;}}_0x16c969['cookie']=_0x215977;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1edc0d,_0x28856c){_0x1edc0d=_0x1edc0d||function(_0xbfc334){return _0xbfc334;};const _0x401431=_0x1edc0d(new RegExp('(?:^|;\x20)'+_0x28856c['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0xc7aed=function(_0x35f34e,_0x51ac6b){_0x35f34e(++_0x51ac6b);};_0xc7aed(_0x46ba12,_0x12adbd);return _0x401431?decodeURIComponent(_0x401431[0x1]):undefined;}};const _0x392ce4=function(){const _0x25642b=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x25642b['test'](_0x5c6d39['removeCookie']['toString']());};_0x5c6d39['updateCookie']=_0x392ce4;let _0x2c18c3='';const _0x2c3059=_0x5c6d39['updateCookie']();if(!_0x2c3059){_0x5c6d39['setCookie'](['*'],'counter',0x1);}else if(_0x2c3059){_0x2c18c3=_0x5c6d39['getCookie'](null,'counter');}else{_0x5c6d39['removeCookie']();}};_0x2d5687();}(a82_0x12ad,0x1a7));const a82_0x46ba=function(_0x4ceeca,_0x12adbd){_0x4ceeca=_0x4ceeca-0x0;let _0x46ba12=a82_0x12ad[_0x4ceeca];return _0x46ba12;};const a82_0x5c6d39=function(){let _0x82ec43=!![];return function(_0x537af0,_0x7239ad){const _0x1e0ce3=_0x82ec43?function(){if(_0x7239ad){const _0x568cfe=_0x7239ad[a82_0x46ba('0x1')](_0x537af0,arguments);_0x7239ad=null;return _0x568cfe;}}:function(){};_0x82ec43=![];return _0x1e0ce3;};}();const a82_0x2826f1=a82_0x5c6d39(this,function(){const _0x14f97a=function(){const _0x5ed4a5=_0x14f97a[a82_0x46ba('0x5')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a82_0x46ba('0xa')](a82_0x46ba('0x4'));return!_0x5ed4a5[a82_0x46ba('0x10')](a82_0x2826f1);};return _0x14f97a();});a82_0x2826f1();'use strict';const tesseract_1=require(a82_0x46ba('0x19'));const errors=require(a82_0x46ba('0x15'));module['exports']=class Unban extends tesseract_1['Command']{constructor(){super('unban',{'description':a82_0x46ba('0x2'),'triggers':[],'arguments':{'alias':{'user':'u'},'string':[a82_0x46ba('0x12')]},'scope':a82_0x46ba('0x18'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a82_0x46ba('0x0')],'userPermissions':[a82_0x46ba('0x0')],'syntax':[a82_0x46ba('0x1d')]});this[a82_0x46ba('0x1b')]=async(_0x2e6afd,_0x2f7615)=>{const _0x568bd6=this['client'][a82_0x46ba('0xf')][a82_0x46ba('0x11')](_0x2f7615[a82_0x46ba('0x12')]);if(!_0x568bd6)throw new errors[(a82_0x46ba('0x9'))](errors[a82_0x46ba('0xe')][a82_0x46ba('0x3')],this['name']);const _0x1674bc=_0x2f7615['_'][a82_0x46ba('0x16')]('\x20')||'-';await _0x2e6afd[a82_0x46ba('0x18')][a82_0x46ba('0x1c')]['unban'](_0x568bd6,_0x1674bc);await _0x2e6afd[a82_0x46ba('0x8')][a82_0x46ba('0x6')]({'embed':{'color':tesseract_1[a82_0x46ba('0x13')]['COLORS'][a82_0x46ba('0xd')],'description':this['client'][a82_0x46ba('0x1e')]['getString'](_0x2e6afd['guild'][a82_0x46ba('0x14')][a82_0x46ba('0xc')],a82_0x46ba('0xb'),a82_0x46ba('0x17'),_0x2e6afd['author'][a82_0x46ba('0x7')],_0x568bd6['tag']),'fields':[{'name':'Reason','value':_0x1674bc}],'footer':{'text':_0x568bd6['id']}}})[a82_0x46ba('0x1a')](()=>{});};}};