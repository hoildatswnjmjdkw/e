const a24_0x4376=['locale','document','client','membersOnlyDisable','save','language','guild','return\x20/\x22\x20+\x20this\x20+\x20\x22/','compile','membersOnly','exec','constructor','info','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','RED','catch','send','MANAGE_GUILD','It\x20allows\x20you\x20to\x20enable\x20(and\x20disable)\x20Members\x20Only\x20mode\x20in\x20the\x20server.\x20If\x20enabled,\x20only\x20the\x20members\x20who\x20have\x20at\x20least\x20one\x20role\x20in\x20the\x20server\x20can\x20use\x20Bastion.','apply','Constants','tag','getString'];(function(_0x5a82d4,_0x43762a){const _0x27eeed=function(_0x55415e){while(--_0x55415e){_0x5a82d4['push'](_0x5a82d4['shift']());}};const _0x364b4e=function(){const _0x589a28={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xa1bc07,_0x453c6a,_0x15c828,_0x4c20db){_0x4c20db=_0x4c20db||{};let _0x483c34=_0x453c6a+'='+_0x15c828;let _0x496e8f=0x0;for(let _0x4f5e3b=0x0,_0x4ab994=_0xa1bc07['length'];_0x4f5e3b<_0x4ab994;_0x4f5e3b++){const _0x3ade92=_0xa1bc07[_0x4f5e3b];_0x483c34+=';\x20'+_0x3ade92;const _0x260f22=_0xa1bc07[_0x3ade92];_0xa1bc07['push'](_0x260f22);_0x4ab994=_0xa1bc07['length'];if(_0x260f22!==!![]){_0x483c34+='='+_0x260f22;}}_0x4c20db['cookie']=_0x483c34;},'removeCookie':function(){return'dev';},'getCookie':function(_0x11db34,_0x466725){_0x11db34=_0x11db34||function(_0x352d19){return _0x352d19;};const _0x477dad=_0x11db34(new RegExp('(?:^|;\x20)'+_0x466725['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x1b8962=function(_0xbac58,_0x413f03){_0xbac58(++_0x413f03);};_0x1b8962(_0x27eeed,_0x43762a);return _0x477dad?decodeURIComponent(_0x477dad[0x1]):undefined;}};const _0x310f70=function(){const _0x1777ff=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1777ff['test'](_0x589a28['removeCookie']['toString']());};_0x589a28['updateCookie']=_0x310f70;let _0x94cd66='';const _0x368a3b=_0x589a28['updateCookie']();if(!_0x368a3b){_0x589a28['setCookie'](['*'],'counter',0x1);}else if(_0x368a3b){_0x94cd66=_0x589a28['getCookie'](null,'counter');}else{_0x589a28['removeCookie']();}};_0x364b4e();}(a24_0x4376,0x1e0));const a24_0x27ee=function(_0x5a82d4,_0x43762a){_0x5a82d4=_0x5a82d4-0x0;let _0x27eeed=a24_0x4376[_0x5a82d4];return _0x27eeed;};const a24_0x589a28=function(){let _0x314cb2=!![];return function(_0x291d98,_0x357b98){const _0x2740da=_0x314cb2?function(){if(_0x357b98){const _0x55f7a5=_0x357b98[a24_0x27ee('0x16')](_0x291d98,arguments);_0x357b98=null;return _0x55f7a5;}}:function(){};_0x314cb2=![];return _0x2740da;};}();const a24_0x55415e=a24_0x589a28(this,function(){const _0x1c7192=function(){const _0x306abb=_0x1c7192[a24_0x27ee('0xe')](a24_0x27ee('0xa'))()[a24_0x27ee('0xb')](a24_0x27ee('0x10'));return!_0x306abb['test'](a24_0x55415e);};return _0x1c7192();});a24_0x55415e();'use strict';const tesseract_1=require('@bastion/tesseract');module['exports']=class MembersOnlyCommand extends tesseract_1['Command']{constructor(){super('membersOnly',{'description':a24_0x27ee('0x15'),'triggers':[],'arguments':{},'scope':a24_0x27ee('0x9'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a24_0x27ee('0x14')],'syntax':[]});this[a24_0x27ee('0xd')]=async _0x27f1a4=>{const _0x3212f5=_0x27f1a4[a24_0x27ee('0x9')];if(_0x3212f5[a24_0x27ee('0x4')][a24_0x27ee('0xc')]){_0x3212f5[a24_0x27ee('0x4')][a24_0x27ee('0xc')]=undefined;delete _0x3212f5[a24_0x27ee('0x4')][a24_0x27ee('0xc')];}else{_0x3212f5[a24_0x27ee('0x4')][a24_0x27ee('0xc')]=!![];}await _0x3212f5[a24_0x27ee('0x4')][a24_0x27ee('0x7')]();await _0x27f1a4['channel'][a24_0x27ee('0x13')]({'embed':{'color':_0x3212f5[a24_0x27ee('0x4')]['membersOnly']?tesseract_1[a24_0x27ee('0x0')]['COLORS']['GREEN']:tesseract_1['Constants']['COLORS'][a24_0x27ee('0x11')],'description':this[a24_0x27ee('0x5')][a24_0x27ee('0x3')][a24_0x27ee('0x2')](_0x27f1a4[a24_0x27ee('0x9')][a24_0x27ee('0x4')][a24_0x27ee('0x8')],a24_0x27ee('0xf'),_0x3212f5[a24_0x27ee('0x4')][a24_0x27ee('0xc')]?'membersOnlyEnable':a24_0x27ee('0x6'),_0x27f1a4['author'][a24_0x27ee('0x1')])}})[a24_0x27ee('0x12')](()=>{});};}};