const a39_0x5a8e=['author','create','constructor','client','fetchPremiumTier','voice','compile','default','DiscordError','../../utils/errors','test','BASTION_ERROR_TYPE','guild','Sessional\x20Channels','MANAGE_CHANNELS','isPublicBastion','voiceSessions','exports','MANAGE_GUILD','concat','➕\x20New\x20Voice\x20Channel','PREMIUM_MEMBERSHIP_REQUIRED','send','tag','COLORS','categories','Constants','locale','info','channel','exec','../../utils/omnic','name','Command','INVALID_COMMAND_SYNTAX','catch','getString','return\x20/\x22\x20+\x20this\x20+\x20\x22/','../../utils/constants','document','errors','premiumVoiceSessions','channels','voiceSessionCreate','voiceSessions\x20--create','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','language'];(function(_0x382d31,_0x5a8e8a){const _0x507055=function(_0x481f15){while(--_0x481f15){_0x382d31['push'](_0x382d31['shift']());}};const _0x554c5e=function(){const _0x4b5d02={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x36d1d1,_0x22a8f4,_0x57a81c,_0xac194d){_0xac194d=_0xac194d||{};let _0x583a0b=_0x22a8f4+'='+_0x57a81c;let _0x58f33c=0x0;for(let _0x31eaa8=0x0,_0x21805d=_0x36d1d1['length'];_0x31eaa8<_0x21805d;_0x31eaa8++){const _0x17da61=_0x36d1d1[_0x31eaa8];_0x583a0b+=';\x20'+_0x17da61;const _0x1119a7=_0x36d1d1[_0x17da61];_0x36d1d1['push'](_0x1119a7);_0x21805d=_0x36d1d1['length'];if(_0x1119a7!==!![]){_0x583a0b+='='+_0x1119a7;}}_0xac194d['cookie']=_0x583a0b;},'removeCookie':function(){return'dev';},'getCookie':function(_0x35fabe,_0x53c120){_0x35fabe=_0x35fabe||function(_0x125b4c){return _0x125b4c;};const _0x5807f7=_0x35fabe(new RegExp('(?:^|;\x20)'+_0x53c120['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x102e66=function(_0x1fa40c,_0x1bbb02){_0x1fa40c(++_0x1bbb02);};_0x102e66(_0x507055,_0x5a8e8a);return _0x5807f7?decodeURIComponent(_0x5807f7[0x1]):undefined;}};const _0x2da9e3=function(){const _0x2e4cd8=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2e4cd8['test'](_0x4b5d02['removeCookie']['toString']());};_0x4b5d02['updateCookie']=_0x2da9e3;let _0x5b4f2d='';const _0x3252ed=_0x4b5d02['updateCookie']();if(!_0x3252ed){_0x4b5d02['setCookie'](['*'],'counter',0x1);}else if(_0x3252ed){_0x5b4f2d=_0x4b5d02['getCookie'](null,'counter');}else{_0x4b5d02['removeCookie']();}};_0x554c5e();}(a39_0x5a8e,0x150));const a39_0x5070=function(_0x382d31,_0x5a8e8a){_0x382d31=_0x382d31-0x0;let _0x507055=a39_0x5a8e[_0x382d31];return _0x507055;};const a39_0x4b5d02=function(){let _0x3d2895=!![];return function(_0x12a324,_0x472b6f){const _0x108634=_0x3d2895?function(){if(_0x472b6f){const _0x105d4d=_0x472b6f['apply'](_0x12a324,arguments);_0x472b6f=null;return _0x105d4d;}}:function(){};_0x3d2895=![];return _0x108634;};}();const a39_0x481f15=a39_0x4b5d02(this,function(){const _0x5c01c2=function(){const _0x27a383=_0x5c01c2[a39_0x5070('0x2a')](a39_0x5070('0x1e'))()[a39_0x5070('0x2e')](a39_0x5070('0x26'));return!_0x27a383[a39_0x5070('0x3')](a39_0x481f15);};return _0x5c01c2();});a39_0x481f15();'use strict';const tesseract_1=require('@bastion/tesseract');const Guild_1=require('../../models/Guild');const constants=require(a39_0x5070('0x1f'));const errors=require(a39_0x5070('0x2'));const omnic=require(a39_0x5070('0x18'));module[a39_0x5070('0xa')]=class VoiceSessionsCommand extends tesseract_1[a39_0x5070('0x1a')]{constructor(){super('voiceSessions',{'description':'It\x20allows\x20you\x20manage\x20Voice\x20Sessions\x20(or\x20Temporary\x20Voice\x20Channels,\x20if\x20you\x20prefer),\x20in\x20the\x20server.','triggers':[],'arguments':{'boolean':[a39_0x5070('0x29')]},'scope':a39_0x5070('0x5'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a39_0x5070('0x7')],'userPermissions':[a39_0x5070('0xb')],'syntax':[a39_0x5070('0x25')]});this[a39_0x5070('0x17')]=async(_0x3fa8d9,_0x67153)=>{if(constants[a39_0x5070('0x8')](this['client']['user'])){const _0x1fb151=await omnic[a39_0x5070('0x2c')](_0x3fa8d9[a39_0x5070('0x5')])[a39_0x5070('0x1c')](()=>{});if(!_0x1fb151)throw new errors[(a39_0x5070('0x1'))](errors['BASTION_ERROR_TYPE'][a39_0x5070('0xe')],this[a39_0x5070('0x2b')][a39_0x5070('0x14')]['getString'](_0x3fa8d9[a39_0x5070('0x5')]['document']['language'],a39_0x5070('0x21'),a39_0x5070('0x22')));}if(_0x67153['create']){const _0x4bee4e=await _0x3fa8d9[a39_0x5070('0x5')][a39_0x5070('0x23')]['create'](a39_0x5070('0x6'),{'type':'category'});await _0x3fa8d9[a39_0x5070('0x5')][a39_0x5070('0x23')][a39_0x5070('0x29')](a39_0x5070('0xd'),{'type':a39_0x5070('0x2d'),'parent':_0x4bee4e});const _0xbc4742=_0x3fa8d9[a39_0x5070('0x5')][a39_0x5070('0x20')]['voiceSessions']&&_0x3fa8d9[a39_0x5070('0x5')][a39_0x5070('0x20')]['voiceSessions'][a39_0x5070('0x12')]?_0x3fa8d9[a39_0x5070('0x5')][a39_0x5070('0x20')][a39_0x5070('0x9')][a39_0x5070('0x12')][a39_0x5070('0xc')](_0x4bee4e['id']):[_0x4bee4e['id']];await Guild_1[a39_0x5070('0x0')]['findByIdAndUpdate'](_0x3fa8d9[a39_0x5070('0x5')]['id'],{'voiceSessions':{'categories':_0xbc4742}});return _0x3fa8d9[a39_0x5070('0x16')][a39_0x5070('0xf')]({'embed':{'color':tesseract_1[a39_0x5070('0x13')][a39_0x5070('0x11')]['GREEN'],'description':this[a39_0x5070('0x2b')][a39_0x5070('0x14')][a39_0x5070('0x1d')](_0x3fa8d9[a39_0x5070('0x5')][a39_0x5070('0x20')][a39_0x5070('0x27')],a39_0x5070('0x15'),a39_0x5070('0x24'),_0x3fa8d9[a39_0x5070('0x28')][a39_0x5070('0x10')])}})[a39_0x5070('0x1c')](()=>{});}throw new errors['DiscordError'](errors[a39_0x5070('0x4')][a39_0x5070('0x1b')],this[a39_0x5070('0x19')]);};}};