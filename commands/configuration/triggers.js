const a38_0x5279=['apply','document','triggersList','LIMITED_PREMIUM_MEMBERSHIP','triggersClear','getString','locale','create','send','GREEN','delete','COLORS','@bastion/tesseract','BASTION_ERROR_TYPE','Constants','deleteMany','clear','PLATINUM','info','reaction','../../utils/emojis','errors','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','Message\x20Response','triggers\x20--pattern\x20PATTERN\x20--\x20RESPONSE','../../utils/errors','author','premiumTriggers','length','triggers','DiscordError','LIMITS','return\x20/\x22\x20+\x20this\x20+\x20\x22/','find','Response\x20Reaction','generateBastionEmbed','MANAGE_GUILD','catch','isPublicBastion','exports','language','Trigger','parseEmoji','countDocuments','default','channel','constructor','../../utils/omnic','membershipLimitTriggers','value','tag','pattern','RED','join','triggers\x20--clear','responseMessage','compile','push','../../utils/embeds','responseReaction','map','../../utils/constants','```','GOLD','stringify','client','Response\x20Message','fetchPremiumTier','guild','TRIGGERS','It\x20allows\x20you\x20to\x20add\x20(and\x20remove)\x20Triggers\x20in\x20the\x20server.\x20When\x20a\x20trigger\x20is\x20set,\x20and\x20Bastion\x20sees\x20a\x20message\x20from\x20a\x20human\x20containing\x20the\x20pattern\x20specified\x20in\x20the\x20trigger,\x20it\x27ll\x20respond\x20with\x20either\x20the\x20specified\x20response\x20message\x20or\x20reaction,\x20or\x20both.','triggersRemove'];(function(_0x5ca3e3,_0x527967){const _0x510951=function(_0x50d5c9){while(--_0x50d5c9){_0x5ca3e3['push'](_0x5ca3e3['shift']());}};const _0x469a52=function(){const _0x3c3154={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1da779,_0x450ce8,_0xdbeb7b,_0x504559){_0x504559=_0x504559||{};let _0x22e9ab=_0x450ce8+'='+_0xdbeb7b;let _0x589607=0x0;for(let _0x4cbc45=0x0,_0x3b5acb=_0x1da779['length'];_0x4cbc45<_0x3b5acb;_0x4cbc45++){const _0x6189c1=_0x1da779[_0x4cbc45];_0x22e9ab+=';\x20'+_0x6189c1;const _0x2b240f=_0x1da779[_0x6189c1];_0x1da779['push'](_0x2b240f);_0x3b5acb=_0x1da779['length'];if(_0x2b240f!==!![]){_0x22e9ab+='='+_0x2b240f;}}_0x504559['cookie']=_0x22e9ab;},'removeCookie':function(){return'dev';},'getCookie':function(_0xc576cd,_0xdca25f){_0xc576cd=_0xc576cd||function(_0x26941d){return _0x26941d;};const _0x4dc74d=_0xc576cd(new RegExp('(?:^|;\x20)'+_0xdca25f['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x485753=function(_0x2a6024,_0x3c7ff3){_0x2a6024(++_0x3c7ff3);};_0x485753(_0x510951,_0x527967);return _0x4dc74d?decodeURIComponent(_0x4dc74d[0x1]):undefined;}};const _0x358d96=function(){const _0x452562=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x452562['test'](_0x3c3154['removeCookie']['toString']());};_0x3c3154['updateCookie']=_0x358d96;let _0x7904bf='';const _0x39a8d6=_0x3c3154['updateCookie']();if(!_0x39a8d6){_0x3c3154['setCookie'](['*'],'counter',0x1);}else if(_0x39a8d6){_0x7904bf=_0x3c3154['getCookie'](null,'counter');}else{_0x3c3154['removeCookie']();}};_0x469a52();}(a38_0x5279,0x1e9));const a38_0x5109=function(_0x5ca3e3,_0x527967){_0x5ca3e3=_0x5ca3e3-0x0;let _0x510951=a38_0x5279[_0x5ca3e3];return _0x510951;};const a38_0x3c3154=function(){let _0x3d0c09=!![];return function(_0x47cfdc,_0x64af55){const _0x3f3203=_0x3d0c09?function(){if(_0x64af55){const _0x3ea485=_0x64af55[a38_0x5109('0xf')](_0x47cfdc,arguments);_0x64af55=null;return _0x3ea485;}}:function(){};_0x3d0c09=![];return _0x3f3203;};}();const a38_0x50d5c9=a38_0x3c3154(this,function(){const _0x30c6ae=function(){const _0x355f42=_0x30c6ae[a38_0x5109('0x3d')](a38_0x5109('0x2f'))()[a38_0x5109('0x47')](a38_0x5109('0x25'));return!_0x355f42['test'](a38_0x50d5c9);};return _0x30c6ae();});a38_0x50d5c9();'use strict';const tesseract_1=require(a38_0x5109('0x1b'));const Trigger_1=require('../../models/Trigger');const constants=require(a38_0x5109('0x4'));const embeds=require(a38_0x5109('0x1'));const emojis=require(a38_0x5109('0x23'));const errors=require(a38_0x5109('0x28'));const omnic=require(a38_0x5109('0x3e'));module[a38_0x5109('0x36')]=class MessageFilterCommand extends tesseract_1['Command']{constructor(){super('triggers',{'description':a38_0x5109('0xd'),'triggers':[],'arguments':{'alias':{'clear':['c'],'delete':['d'],'pattern':['p'],'reaction':['e']},'boolean':[a38_0x5109('0x1f')],'array':[a38_0x5109('0x19'),a38_0x5109('0x42')],'string':[a38_0x5109('0x19'),a38_0x5109('0x42'),a38_0x5109('0x22')]},'scope':a38_0x5109('0xb'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a38_0x5109('0x33')],'syntax':[a38_0x5109('0x2c'),a38_0x5109('0x27'),'triggers\x20--pattern\x20PATTERN\x20--reaction\x20EMOJI','triggers\x20--delete\x20PATTERN',a38_0x5109('0x45')]});this['exec']=async(_0x41a910,_0x4c8c38)=>{if(_0x4c8c38['clear']){await Trigger_1[a38_0x5109('0x3b')]['deleteMany']({'guild':_0x41a910[a38_0x5109('0xb')]['id']});return await _0x41a910[a38_0x5109('0x3c')][a38_0x5109('0x17')]({'embed':{'color':tesseract_1[a38_0x5109('0x1d')][a38_0x5109('0x1a')][a38_0x5109('0x43')],'description':this[a38_0x5109('0x8')][a38_0x5109('0x15')]['getString'](_0x41a910['guild'][a38_0x5109('0x10')]['language'],a38_0x5109('0x21'),a38_0x5109('0x13'),_0x41a910[a38_0x5109('0x29')]['tag'])}})['catch'](()=>{});}if(_0x4c8c38[a38_0x5109('0x19')]&&_0x4c8c38['delete'][a38_0x5109('0x2b')]){const _0x59a590=_0x4c8c38[a38_0x5109('0x19')][a38_0x5109('0x44')]('\x20');await Trigger_1[a38_0x5109('0x3b')][a38_0x5109('0x1e')]({'guild':_0x41a910['guild']['id'],'trigger':_0x59a590});return await _0x41a910[a38_0x5109('0x3c')][a38_0x5109('0x17')]({'embed':{'color':tesseract_1[a38_0x5109('0x1d')][a38_0x5109('0x1a')][a38_0x5109('0x43')],'description':this['client'][a38_0x5109('0x15')][a38_0x5109('0x14')](_0x41a910[a38_0x5109('0xb')]['document'][a38_0x5109('0x37')],a38_0x5109('0x21'),a38_0x5109('0xe'),_0x41a910[a38_0x5109('0x29')][a38_0x5109('0x41')],_0x59a590)}})[a38_0x5109('0x34')](()=>{});}if(_0x4c8c38['pattern']&&_0x4c8c38[a38_0x5109('0x42')][a38_0x5109('0x2b')]&&(_0x4c8c38['_'][a38_0x5109('0x2b')]||_0x4c8c38['reaction'])){if(constants[a38_0x5109('0x35')](this[a38_0x5109('0x8')]['user'])){const _0x523965=await Trigger_1[a38_0x5109('0x3b')][a38_0x5109('0x3a')]({'guild':_0x41a910[a38_0x5109('0xb')]['id']});if(_0x523965>=constants['LIMITS'][a38_0x5109('0xc')]){const _0x27b639=await omnic[a38_0x5109('0xa')](_0x41a910['guild'])[a38_0x5109('0x34')](()=>{});if(_0x27b639){if(_0x27b639===omnic['PremiumTier'][a38_0x5109('0x6')]&&_0x523965>=constants[a38_0x5109('0x2e')][a38_0x5109('0x6')][a38_0x5109('0xc')]){throw new errors[(a38_0x5109('0x2d'))](errors[a38_0x5109('0x1c')][a38_0x5109('0x12')],this['client'][a38_0x5109('0x15')][a38_0x5109('0x14')](_0x41a910[a38_0x5109('0xb')][a38_0x5109('0x10')]['language'],a38_0x5109('0x24'),a38_0x5109('0x3f'),constants[a38_0x5109('0x2e')][a38_0x5109('0x6')]['TRIGGERS']));}else if(_0x27b639===omnic['PremiumTier'][a38_0x5109('0x20')]&&_0x523965>=constants['LIMITS'][a38_0x5109('0x20')]['TRIGGERS']){throw new errors[(a38_0x5109('0x2d'))](errors[a38_0x5109('0x1c')][a38_0x5109('0x12')],this['client'][a38_0x5109('0x15')][a38_0x5109('0x14')](_0x41a910['guild']['document'][a38_0x5109('0x37')],a38_0x5109('0x24'),a38_0x5109('0x3f'),constants['LIMITS'][a38_0x5109('0x20')][a38_0x5109('0xc')]));}}else{throw new errors['DiscordError'](errors['BASTION_ERROR_TYPE']['PREMIUM_MEMBERSHIP_REQUIRED'],this[a38_0x5109('0x8')][a38_0x5109('0x15')][a38_0x5109('0x14')](_0x41a910[a38_0x5109('0xb')][a38_0x5109('0x10')]['language'],a38_0x5109('0x24'),a38_0x5109('0x2a'),constants[a38_0x5109('0x2e')][a38_0x5109('0xc')]));}}}const _0x3650dd=_0x4c8c38['pattern'][a38_0x5109('0x44')]('\x20');const _0x44ef8f=[{'name':a38_0x5109('0x38'),'value':_0x3650dd,'inline':!![]}];let _0x41616c;if(_0x4c8c38['_'][a38_0x5109('0x2b')]){_0x41616c=embeds[a38_0x5109('0x32')](_0x4c8c38['_']['join']('\x20'));_0x44ef8f['push']({'name':a38_0x5109('0x9'),'value':'```json\x0a'+JSON[a38_0x5109('0x7')](_0x41616c)+a38_0x5109('0x5')});}let _0x5039db;if(_0x4c8c38[a38_0x5109('0x22')]){const _0x4176bf=emojis[a38_0x5109('0x39')](_0x4c8c38[a38_0x5109('0x22')]);if(_0x4176bf){_0x5039db=_0x4176bf[a38_0x5109('0x40')];_0x44ef8f[a38_0x5109('0x0')]({'name':a38_0x5109('0x31'),'value':_0x4c8c38[a38_0x5109('0x22')]});}}await Trigger_1['default'][a38_0x5109('0x16')]({'guild':_0x41a910[a38_0x5109('0xb')]['id'],'trigger':_0x3650dd,'responseMessage':_0x41616c,'responseReaction':_0x5039db});return await _0x41a910['channel'][a38_0x5109('0x17')]({'embed':{'color':tesseract_1[a38_0x5109('0x1d')]['COLORS'][a38_0x5109('0x18')],'description':this[a38_0x5109('0x8')][a38_0x5109('0x15')][a38_0x5109('0x14')](_0x41a910[a38_0x5109('0xb')][a38_0x5109('0x10')]['language'],'info','triggersAdd',_0x41a910[a38_0x5109('0x29')][a38_0x5109('0x41')]),'fields':_0x44ef8f}})[a38_0x5109('0x34')](()=>{});}const _0x4f4587=await Trigger_1[a38_0x5109('0x3b')][a38_0x5109('0x30')]({'guild':_0x41a910[a38_0x5109('0xb')]['id']});return await _0x41a910[a38_0x5109('0x3c')][a38_0x5109('0x17')]({'embed':{'color':tesseract_1[a38_0x5109('0x1d')][a38_0x5109('0x1a')]['IRIS'],'description':this['client']['locale']['getString'](_0x41a910[a38_0x5109('0xb')][a38_0x5109('0x10')][a38_0x5109('0x37')],a38_0x5109('0x21'),a38_0x5109('0x11')),'fields':_0x4f4587[a38_0x5109('0x3')](_0x43ca6b=>({'name':_0x43ca6b['trigger'],'value':(_0x43ca6b[a38_0x5109('0x46')]?a38_0x5109('0x26'):'')+'\x0a'+(_0x43ca6b[a38_0x5109('0x2')]?'Reaction\x20Response':'')}))}})['catch'](()=>{});};}};