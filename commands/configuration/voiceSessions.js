const a39_0x27bd=['DiscordError','➕\x20New\x20Voice\x20Channel','PREMIUM_MEMBERSHIP_REQUIRED','voice','getString','BASTION_ERROR_TYPE','errors','catch','concat','user','locale','premiumVoiceSessions','voiceSessionCreate','language','../../utils/constants','../../utils/errors','guild','Command','name','create','categories','apply','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','fetchPremiumTier','document','voiceSessions\x20--create','Constants','INVALID_COMMAND_SYNTAX','tag','isPublicBastion','client','exports','return\x20/\x22\x20+\x20this\x20+\x20\x22/','findByIdAndUpdate','COLORS','channels','GREEN','info','send','channel','author','exec','compile','voiceSessions'];(function(_0x3e32eb,_0x27bd00){const _0x207c54=function(_0x16dfe1){while(--_0x16dfe1){_0x3e32eb['push'](_0x3e32eb['shift']());}};const _0x3b76d1=function(){const _0xb4adc2={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3c0827,_0xa5e1aa,_0x3c5245,_0x56ef01){_0x56ef01=_0x56ef01||{};let _0x4d9206=_0xa5e1aa+'='+_0x3c5245;let _0x4a2ab3=0x0;for(let _0x21419e=0x0,_0x46478e=_0x3c0827['length'];_0x21419e<_0x46478e;_0x21419e++){const _0x59fbd2=_0x3c0827[_0x21419e];_0x4d9206+=';\x20'+_0x59fbd2;const _0x2dd475=_0x3c0827[_0x59fbd2];_0x3c0827['push'](_0x2dd475);_0x46478e=_0x3c0827['length'];if(_0x2dd475!==!![]){_0x4d9206+='='+_0x2dd475;}}_0x56ef01['cookie']=_0x4d9206;},'removeCookie':function(){return'dev';},'getCookie':function(_0x15f993,_0x3d3e5f){_0x15f993=_0x15f993||function(_0x4141f2){return _0x4141f2;};const _0x57faec=_0x15f993(new RegExp('(?:^|;\x20)'+_0x3d3e5f['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x5df44e=function(_0x5d58de,_0x4d869e){_0x5d58de(++_0x4d869e);};_0x5df44e(_0x207c54,_0x27bd00);return _0x57faec?decodeURIComponent(_0x57faec[0x1]):undefined;}};const _0x3ef4f5=function(){const _0x34fda9=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x34fda9['test'](_0xb4adc2['removeCookie']['toString']());};_0xb4adc2['updateCookie']=_0x3ef4f5;let _0x412631='';const _0x589d85=_0xb4adc2['updateCookie']();if(!_0x589d85){_0xb4adc2['setCookie'](['*'],'counter',0x1);}else if(_0x589d85){_0x412631=_0xb4adc2['getCookie'](null,'counter');}else{_0xb4adc2['removeCookie']();}};_0x3b76d1();}(a39_0x27bd,0x169));const a39_0x207c=function(_0x3e32eb,_0x27bd00){_0x3e32eb=_0x3e32eb-0x0;let _0x207c54=a39_0x27bd[_0x3e32eb];return _0x207c54;};const a39_0xb4adc2=function(){let _0x2cec64=!![];return function(_0x2a7fdf,_0x4bd35e){const _0x2d90fe=_0x2cec64?function(){if(_0x4bd35e){const _0x2dbf73=_0x4bd35e[a39_0x207c('0xc')](_0x2a7fdf,arguments);_0x4bd35e=null;return _0x2dbf73;}}:function(){};_0x2cec64=![];return _0x2d90fe;};}();const a39_0x16dfe1=a39_0xb4adc2(this,function(){const _0x4a7d8a=function(){const _0x607cba=_0x4a7d8a['constructor'](a39_0x207c('0x17'))()[a39_0x207c('0x21')](a39_0x207c('0xd'));return!_0x607cba['test'](a39_0x16dfe1);};return _0x4a7d8a();});a39_0x16dfe1();'use strict';const tesseract_1=require('@bastion/tesseract');const Guild_1=require('../../models/Guild');const constants=require(a39_0x207c('0x5'));const errors=require(a39_0x207c('0x6'));const omnic=require('../../utils/omnic');module[a39_0x207c('0x16')]=class VoiceSessionsCommand extends tesseract_1[a39_0x207c('0x8')]{constructor(){super(a39_0x207c('0x22'),{'description':'It\x20allows\x20you\x20manage\x20Voice\x20Sessions\x20(or\x20Temporary\x20Voice\x20Channels,\x20if\x20you\x20prefer),\x20in\x20the\x20server.','triggers':[],'arguments':{'boolean':['create']},'scope':a39_0x207c('0x7'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':['MANAGE_CHANNELS'],'userPermissions':['MANAGE_GUILD'],'syntax':[a39_0x207c('0x10')]});this[a39_0x207c('0x20')]=async(_0x5f05e0,_0x3876e4)=>{if(constants[a39_0x207c('0x14')](this[a39_0x207c('0x15')][a39_0x207c('0x0')])){const _0x1bd7fb=await omnic[a39_0x207c('0xe')](_0x5f05e0[a39_0x207c('0x7')])[a39_0x207c('0x2a')](()=>{});if(!_0x1bd7fb)throw new errors[(a39_0x207c('0x23'))](errors[a39_0x207c('0x28')][a39_0x207c('0x25')],this[a39_0x207c('0x15')]['locale']['getString'](_0x5f05e0[a39_0x207c('0x7')][a39_0x207c('0xf')][a39_0x207c('0x4')],a39_0x207c('0x29'),a39_0x207c('0x2')));}if(_0x3876e4[a39_0x207c('0xa')]){const _0x645994=await _0x5f05e0[a39_0x207c('0x7')][a39_0x207c('0x1a')][a39_0x207c('0xa')]('Sessional\x20Channels',{'type':'category'});await _0x5f05e0[a39_0x207c('0x7')][a39_0x207c('0x1a')][a39_0x207c('0xa')](a39_0x207c('0x24'),{'type':a39_0x207c('0x26'),'parent':_0x645994});const _0x292128=_0x5f05e0[a39_0x207c('0x7')][a39_0x207c('0xf')][a39_0x207c('0x22')]&&_0x5f05e0[a39_0x207c('0x7')][a39_0x207c('0xf')][a39_0x207c('0x22')][a39_0x207c('0xb')]?_0x5f05e0[a39_0x207c('0x7')][a39_0x207c('0xf')][a39_0x207c('0x22')][a39_0x207c('0xb')][a39_0x207c('0x2b')](_0x645994['id']):[_0x645994['id']];await Guild_1['default'][a39_0x207c('0x18')](_0x5f05e0[a39_0x207c('0x7')]['id'],{'voiceSessions':{'categories':_0x292128}});return _0x5f05e0[a39_0x207c('0x1e')][a39_0x207c('0x1d')]({'embed':{'color':tesseract_1[a39_0x207c('0x11')][a39_0x207c('0x19')][a39_0x207c('0x1b')],'description':this['client'][a39_0x207c('0x1')][a39_0x207c('0x27')](_0x5f05e0[a39_0x207c('0x7')][a39_0x207c('0xf')][a39_0x207c('0x4')],a39_0x207c('0x1c'),a39_0x207c('0x3'),_0x5f05e0[a39_0x207c('0x1f')][a39_0x207c('0x13')])}})['catch'](()=>{});}throw new errors[(a39_0x207c('0x23'))](errors[a39_0x207c('0x28')][a39_0x207c('0x12')],this[a39_0x207c('0x9')]);};}};