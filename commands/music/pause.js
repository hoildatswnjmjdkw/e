const a90_0x1a66=['duration','queue','locale','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','\x20/\x20','constructor','pausedTime','guild','../../utils/constants','language','COLORS','enabled','\x20•\x20','voice','musicDisabledPublic','test','floor','getString','track','exec','document','info','send','paused','author','channel','tag','Constants','RED','It\x20allows\x20you\x20to\x20pause\x20the\x20music\x20track\x20that\x20is\x20currently\x20being\x20played\x20in\x20the\x20server.','apply','name','music','errors','member','catch','connection','return\x20/\x22\x20+\x20this\x20+\x20\x22/','isPublicBastion','client','Command','Paused\x20Playback','pause','dispatcher','textChannel','compile','@bastion/tesseract'];(function(_0x4afd02,_0x1a6691){const _0x473520=function(_0x38658c){while(--_0x38658c){_0x4afd02['push'](_0x4afd02['shift']());}};const _0x22a890=function(){const _0x4361eb={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1cf449,_0x3fd695,_0x1abc53,_0x3dda38){_0x3dda38=_0x3dda38||{};let _0x670a38=_0x3fd695+'='+_0x1abc53;let _0x18298a=0x0;for(let _0x5ef4f8=0x0,_0x27bc8b=_0x1cf449['length'];_0x5ef4f8<_0x27bc8b;_0x5ef4f8++){const _0x6b8cf4=_0x1cf449[_0x5ef4f8];_0x670a38+=';\x20'+_0x6b8cf4;const _0x38e5bd=_0x1cf449[_0x6b8cf4];_0x1cf449['push'](_0x38e5bd);_0x27bc8b=_0x1cf449['length'];if(_0x38e5bd!==!![]){_0x670a38+='='+_0x38e5bd;}}_0x3dda38['cookie']=_0x670a38;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4525ec,_0x145e92){_0x4525ec=_0x4525ec||function(_0x9ab94d){return _0x9ab94d;};const _0x533c2d=_0x4525ec(new RegExp('(?:^|;\x20)'+_0x145e92['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x259abb=function(_0x5edb64,_0x15ba68){_0x5edb64(++_0x15ba68);};_0x259abb(_0x473520,_0x1a6691);return _0x533c2d?decodeURIComponent(_0x533c2d[0x1]):undefined;}};const _0x5eef72=function(){const _0xbb0631=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xbb0631['test'](_0x4361eb['removeCookie']['toString']());};_0x4361eb['updateCookie']=_0x5eef72;let _0x328904='';const _0x2a49f7=_0x4361eb['updateCookie']();if(!_0x2a49f7){_0x4361eb['setCookie'](['*'],'counter',0x1);}else if(_0x2a49f7){_0x328904=_0x4361eb['getCookie'](null,'counter');}else{_0x4361eb['removeCookie']();}};_0x22a890();}(a90_0x1a66,0x19f));const a90_0x4735=function(_0x4afd02,_0x1a6691){_0x4afd02=_0x4afd02-0x0;let _0x473520=a90_0x1a66[_0x4afd02];return _0x473520;};const a90_0x4361eb=function(){let _0x3b2657=!![];return function(_0x1fd2f7,_0x2bce10){const _0x24306f=_0x3b2657?function(){if(_0x2bce10){const _0x579726=_0x2bce10[a90_0x4735('0x26')](_0x1fd2f7,arguments);_0x2bce10=null;return _0x579726;}}:function(){};_0x3b2657=![];return _0x24306f;};}();const a90_0x38658c=a90_0x4361eb(this,function(){const _0x12002e=function(){const _0x50b007=_0x12002e[a90_0x4735('0xd')](a90_0x4735('0x2d'))()[a90_0x4735('0x6')](a90_0x4735('0xb'));return!_0x50b007[a90_0x4735('0x17')](a90_0x38658c);};return _0x12002e();});a90_0x38658c();'use strict';const tesseract_1=require(a90_0x4735('0x7'));const constants=require(a90_0x4735('0x10'));module['exports']=class Pause extends tesseract_1[a90_0x4735('0x1')]{constructor(){super(a90_0x4735('0x3'),{'description':a90_0x4735('0x25'),'triggers':[],'arguments':{},'scope':a90_0x4735('0xf'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[]});this[a90_0x4735('0x1b')]=async _0x1ad022=>{const _0x202d11=_0x1ad022['guild'];if(!_0x202d11[a90_0x4735('0x1c')][a90_0x4735('0x28')]||!_0x202d11['document'][a90_0x4735('0x28')][a90_0x4735('0x13')]){return await _0x1ad022[a90_0x4735('0x21')][a90_0x4735('0x1e')]({'embed':{'color':tesseract_1[a90_0x4735('0x23')]['COLORS'][a90_0x4735('0x24')],'description':this['client'][a90_0x4735('0xa')][a90_0x4735('0x19')](_0x1ad022[a90_0x4735('0xf')][a90_0x4735('0x1c')][a90_0x4735('0x11')],a90_0x4735('0x29'),constants[a90_0x4735('0x2e')](_0x1ad022[a90_0x4735('0x20')])?a90_0x4735('0x16'):'musicDisabled')}})[a90_0x4735('0x2b')](()=>{});}if(!_0x1ad022[a90_0x4735('0x2a')]['isMusicMaster']())return;if(_0x202d11['music']['playing']&&_0x202d11[a90_0x4735('0x15')]&&_0x202d11['voice']['connection']['dispatcher']&&!_0x202d11[a90_0x4735('0x15')][a90_0x4735('0x2c')][a90_0x4735('0x4')][a90_0x4735('0x1f')]){_0x202d11[a90_0x4735('0x15')]['connection']['dispatcher'][a90_0x4735('0x3')](!![]);const _0xd21a8e=_0x202d11[a90_0x4735('0x28')][a90_0x4735('0x9')][0x0];const _0x527e73=_0x202d11[a90_0x4735('0x15')]['connection']['dispatcher']['streamTime']-_0x202d11[a90_0x4735('0x15')][a90_0x4735('0x2c')][a90_0x4735('0x4')][a90_0x4735('0xe')];_0x202d11[a90_0x4735('0x28')][a90_0x4735('0x5')][a90_0x4735('0x1e')]({'embed':{'color':tesseract_1[a90_0x4735('0x23')][a90_0x4735('0x12')]['PINK'],'title':a90_0x4735('0x2'),'description':this[a90_0x4735('0x0')][a90_0x4735('0xa')][a90_0x4735('0x19')](_0x1ad022[a90_0x4735('0xf')][a90_0x4735('0x1c')][a90_0x4735('0x11')],a90_0x4735('0x1d'),'playbackPause',_0x1ad022['author'][a90_0x4735('0x22')],_0xd21a8e[a90_0x4735('0x1a')]),'footer':{'text':Math[a90_0x4735('0x18')](_0x527e73/0xea60)+':'+Math['floor'](_0x527e73%0xea60/0x3e8)+a90_0x4735('0xc')+_0xd21a8e[a90_0x4735('0x8')]+a90_0x4735('0x14')+_0x202d11['voice'][a90_0x4735('0x2c')][a90_0x4735('0x21')][a90_0x4735('0x27')]}}})['catch'](()=>{});}};}};