const a87_0x16c1=['music','getString','enabled','send','author','guild','Command','@bastion/tesseract','catch','save','language','resolveGuildChannel','musicDisabledPublic','exports','COLORS','return\x20/\x22\x20+\x20this\x20+\x20\x22/','channel','exec','musicChannel','musicChannelsAdd','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','musicDisabled','voice','locale','constructor','errors','document','resolver','Constants','voiceChannel','apply','compile','info','RED'];(function(_0x32b371,_0x16c1f6){const _0x15c2cb=function(_0x10ec88){while(--_0x10ec88){_0x32b371['push'](_0x32b371['shift']());}};const _0x4d0902=function(){const _0x2d5762={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x165ce2,_0x418f0f,_0x18002f,_0x58fe5c){_0x58fe5c=_0x58fe5c||{};let _0x284bf6=_0x418f0f+'='+_0x18002f;let _0x515e92=0x0;for(let _0x3105e1=0x0,_0x442a2d=_0x165ce2['length'];_0x3105e1<_0x442a2d;_0x3105e1++){const _0x291afd=_0x165ce2[_0x3105e1];_0x284bf6+=';\x20'+_0x291afd;const _0x5d1063=_0x165ce2[_0x291afd];_0x165ce2['push'](_0x5d1063);_0x442a2d=_0x165ce2['length'];if(_0x5d1063!==!![]){_0x284bf6+='='+_0x5d1063;}}_0x58fe5c['cookie']=_0x284bf6;},'removeCookie':function(){return'dev';},'getCookie':function(_0xec6bd5,_0x523e6a){_0xec6bd5=_0xec6bd5||function(_0x814a28){return _0x814a28;};const _0x553ade=_0xec6bd5(new RegExp('(?:^|;\x20)'+_0x523e6a['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x3e9d7b=function(_0x27cbf6,_0x3e2a29){_0x27cbf6(++_0x3e2a29);};_0x3e9d7b(_0x15c2cb,_0x16c1f6);return _0x553ade?decodeURIComponent(_0x553ade[0x1]):undefined;}};const _0xe6b4ed=function(){const _0x5c2ffe=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5c2ffe['test'](_0x2d5762['removeCookie']['toString']());};_0x2d5762['updateCookie']=_0xe6b4ed;let _0x1fba33='';const _0x112d83=_0x2d5762['updateCookie']();if(!_0x112d83){_0x2d5762['setCookie'](['*'],'counter',0x1);}else if(_0x112d83){_0x1fba33=_0x2d5762['getCookie'](null,'counter');}else{_0x2d5762['removeCookie']();}};_0x4d0902();}(a87_0x16c1,0x139));const a87_0x15c2=function(_0x32b371,_0x16c1f6){_0x32b371=_0x32b371-0x0;let _0x15c2cb=a87_0x16c1[_0x32b371];return _0x15c2cb;};const a87_0x2d5762=function(){let _0x4488fc=!![];return function(_0x4d3e5d,_0x2e1bc4){const _0x4c5f44=_0x4488fc?function(){if(_0x2e1bc4){const _0x1c289e=_0x2e1bc4[a87_0x15c2('0x17')](_0x4d3e5d,arguments);_0x2e1bc4=null;return _0x1c289e;}}:function(){};_0x4488fc=![];return _0x4c5f44;};}();const a87_0x10ec88=a87_0x2d5762(this,function(){const _0x42fa5d=function(){const _0x566b2a=_0x42fa5d[a87_0x15c2('0x11')](a87_0x15c2('0x8'))()[a87_0x15c2('0x18')](a87_0x15c2('0xd'));return!_0x566b2a['test'](a87_0x10ec88);};return _0x42fa5d();});a87_0x10ec88();'use strict';const tesseract_1=require(a87_0x15c2('0x0'));const constants=require('../../utils/constants');module[a87_0x15c2('0x6')]=class MusicChannel extends tesseract_1[a87_0x15c2('0x21')]{constructor(){super(a87_0x15c2('0xb'),{'description':'It\x20allows\x20you\x20to\x20set\x20(and\x20unset)\x20Bastion\x27s\x20Music\x20Channels.','triggers':[],'arguments':{'string':[a87_0x15c2('0x16')]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['musicChannel\x20--voice-channel\x20VOICE_CHANNEL_ID',a87_0x15c2('0xb')]});this[a87_0x15c2('0xa')]=async(_0x32e285,_0x38fc01)=>{const _0x40c94e=_0x32e285[a87_0x15c2('0x20')];if(!_0x40c94e[a87_0x15c2('0x13')]['music']||!_0x40c94e[a87_0x15c2('0x13')][a87_0x15c2('0x1b')][a87_0x15c2('0x1d')]){return await _0x32e285[a87_0x15c2('0x9')][a87_0x15c2('0x1e')]({'embed':{'color':tesseract_1[a87_0x15c2('0x15')][a87_0x15c2('0x7')][a87_0x15c2('0x1a')],'description':this['client'][a87_0x15c2('0x10')][a87_0x15c2('0x1c')](_0x32e285[a87_0x15c2('0x20')][a87_0x15c2('0x13')][a87_0x15c2('0x3')],a87_0x15c2('0x12'),constants['isPublicBastion'](_0x32e285[a87_0x15c2('0x1f')])?a87_0x15c2('0x5'):a87_0x15c2('0xe'))}})[a87_0x15c2('0x1')](()=>{});}const _0x50e390=this['client'][a87_0x15c2('0x14')][a87_0x15c2('0x4')](_0x40c94e,_0x38fc01['voiceChannel'],[a87_0x15c2('0xf')]);_0x40c94e['document'][a87_0x15c2('0x1b')]={..._0x40c94e[a87_0x15c2('0x13')][a87_0x15c2('0x1b')],'textChannelId':_0x50e390?_0x32e285[a87_0x15c2('0x9')]['id']:undefined,'voiceChannelId':_0x50e390?_0x50e390['id']:undefined};_0x40c94e[a87_0x15c2('0x13')][a87_0x15c2('0x2')]();await _0x32e285[a87_0x15c2('0x9')][a87_0x15c2('0x1e')]({'embed':{'color':_0x50e390?tesseract_1['Constants'][a87_0x15c2('0x7')]['GREEN']:tesseract_1['Constants'][a87_0x15c2('0x7')][a87_0x15c2('0x1a')],'description':this['client'][a87_0x15c2('0x10')][a87_0x15c2('0x1c')](_0x32e285[a87_0x15c2('0x20')][a87_0x15c2('0x13')]['language'],a87_0x15c2('0x19'),_0x50e390?a87_0x15c2('0xc'):'musicChannelsRemove',_0x32e285['author']['tag'],_0x50e390?_0x32e285[a87_0x15c2('0x9')]['name']:null,_0x50e390?_0x50e390['name']:null)}})[a87_0x15c2('0x1')](()=>{});};}};