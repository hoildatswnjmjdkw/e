const a39_0x4f33=['pattern','Response\x20Message','guild','It\x20allows\x20you\x20to\x20add\x20(and\x20remove)\x20Triggers\x20in\x20the\x20server.\x20When\x20a\x20trigger\x20is\x20set,\x20and\x20Bastion\x20sees\x20a\x20message\x20from\x20a\x20human\x20containing\x20the\x20pattern\x20specified\x20in\x20the\x20trigger,\x20it\x27ll\x20respond\x20with\x20either\x20the\x20specified\x20response\x20message\x20or\x20reaction,\x20or\x20both.','test','apply','channel','GOLD','fetchPremiumTier','Message\x20Response','responseReaction','info','deleteMany','TRIGGERS','../../utils/omnic','triggersClear','```','constructor','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','PREMIUM_MEMBERSHIP_REQUIRED','catch','send','tag','user','countDocuments','clear','premiumTriggers','triggers\x20--pattern\x20PATTERN\x20--\x20RESPONSE','getString','exec','map','triggers\x20--pattern\x20PATTERN\x20--reaction\x20EMOJI','PLATINUM','RED','MANAGE_GUILD','../../models/Trigger','triggersRemove','language','../../utils/errors','Trigger','create','Constants','PremiumTier','client','document','exports','reaction','responseMessage','delete','triggers','push','author','errors','join','triggers\x20--clear','membershipLimitTriggers','triggersList','LIMITS','default','COLORS','find','locale','DiscordError','LIMITED_PREMIUM_MEMBERSHIP','BASTION_ERROR_TYPE','Command','value','length','triggers\x20--delete\x20PATTERN'];(function(_0x5a9b62,_0x4f335f){const _0x209ab7=function(_0x21e4d0){while(--_0x21e4d0){_0x5a9b62['push'](_0x5a9b62['shift']());}},_0x25338b=function(){const _0x496f40={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x26a7ec,_0x13c898,_0xe50418,_0x217e25){_0x217e25=_0x217e25||{};let _0x1a9911=_0x13c898+'='+_0xe50418,_0x22d778=0x0;for(let _0x20daf6=0x0,_0x3daa4d=_0x26a7ec['length'];_0x20daf6<_0x3daa4d;_0x20daf6++){const _0x35312a=_0x26a7ec[_0x20daf6];_0x1a9911+=';\x20'+_0x35312a;const _0x542233=_0x26a7ec[_0x35312a];_0x26a7ec['push'](_0x542233),_0x3daa4d=_0x26a7ec['length'],_0x542233!==!![]&&(_0x1a9911+='='+_0x542233);}_0x217e25['cookie']=_0x1a9911;},'removeCookie':function(){return'dev';},'getCookie':function(_0x182a3b,_0x54f73e){_0x182a3b=_0x182a3b||function(_0x4a3b63){return _0x4a3b63;};const _0xbef85=_0x182a3b(new RegExp('(?:^|;\x20)'+_0x54f73e['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0xfdbdca=function(_0x2f46f4,_0x49f84b){_0x2f46f4(++_0x49f84b);};return _0xfdbdca(_0x209ab7,_0x4f335f),_0xbef85?decodeURIComponent(_0xbef85[0x1]):undefined;}},_0x5a3841=function(){const _0x409bac=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x409bac['test'](_0x496f40['removeCookie']['toString']());};_0x496f40['updateCookie']=_0x5a3841;let _0x35c05c='';const _0x1a61ac=_0x496f40['updateCookie']();if(!_0x1a61ac)_0x496f40['setCookie'](['*'],'counter',0x1);else _0x1a61ac?_0x35c05c=_0x496f40['getCookie'](null,'counter'):_0x496f40['removeCookie']();};_0x25338b();}(a39_0x4f33,0x153));const a39_0x209a=function(_0x5a9b62,_0x4f335f){_0x5a9b62=_0x5a9b62-0x0;let _0x209ab7=a39_0x4f33[_0x5a9b62];return _0x209ab7;};const _0x3fa236=a39_0x209a,a39_0x496f40=function(){let _0x35c05c=!![];return function(_0x1a61ac,_0x26a7ec){const _0x13c898=_0x35c05c?function(){const _0x5b40ec=a39_0x209a;if(_0x26a7ec){const _0xe50418=_0x26a7ec[_0x5b40ec('0xb')](_0x1a61ac,arguments);return _0x26a7ec=null,_0xe50418;}}:function(){};return _0x35c05c=![],_0x13c898;};}(),a39_0x21e4d0=a39_0x496f40(this,function(){const _0x217e25=function(){const _0x40ec8f=a39_0x209a,_0x1a9911=_0x217e25['constructor']('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x40ec8f('0x17')](_0x40ec8f('0x18'));return!_0x1a9911[_0x40ec8f('0xa')](a39_0x21e4d0);};return _0x217e25();});a39_0x21e4d0();'use strict';const tesseract_1=require('@bastion/tesseract'),Trigger_1=require(_0x3fa236('0x29')),constants=require('../../utils/constants'),embeds=require('../../utils/embeds'),emojis=require('../../utils/emojis'),errors=require(_0x3fa236('0x2c')),omnic=require(_0x3fa236('0x14'));module[_0x3fa236('0x33')]=class MessageFilterCommand extends tesseract_1[_0x3fa236('0x2')]{constructor(){const _0x5939de=_0x3fa236;super('triggers',{'description':_0x5939de('0x9'),'triggers':[],'arguments':{'alias':{'clear':['c'],'delete':['d'],'pattern':['p'],'reaction':['e']},'boolean':['clear'],'array':[_0x5939de('0x36'),_0x5939de('0x6')],'string':['delete',_0x5939de('0x6'),_0x5939de('0x34')]},'scope':_0x5939de('0x8'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[_0x5939de('0x28')],'syntax':[_0x5939de('0x37'),_0x5939de('0x21'),_0x5939de('0x25'),_0x5939de('0x5'),_0x5939de('0x3c')]}),this[_0x5939de('0x23')]=async(_0x22d778,_0x20daf6)=>{const _0x1a70a6=_0x5939de;if(_0x20daf6[_0x1a70a6('0x1f')])return await Trigger_1[_0x1a70a6('0x40')][_0x1a70a6('0x12')]({'guild':_0x22d778[_0x1a70a6('0x8')]['id']}),await _0x22d778[_0x1a70a6('0xc')][_0x1a70a6('0x1b')]({'embed':{'color':tesseract_1[_0x1a70a6('0x2f')][_0x1a70a6('0x41')][_0x1a70a6('0x27')],'description':this[_0x1a70a6('0x31')][_0x1a70a6('0x43')][_0x1a70a6('0x22')](_0x22d778[_0x1a70a6('0x8')][_0x1a70a6('0x32')][_0x1a70a6('0x2b')],_0x1a70a6('0x11'),_0x1a70a6('0x15'),_0x22d778[_0x1a70a6('0x39')]['tag'])}})[_0x1a70a6('0x1a')](()=>{});if(_0x20daf6[_0x1a70a6('0x36')]&&_0x20daf6[_0x1a70a6('0x36')]['length']){const _0x35312a=_0x20daf6[_0x1a70a6('0x36')]['join']('\x20');return await Trigger_1[_0x1a70a6('0x40')][_0x1a70a6('0x12')]({'guild':_0x22d778['guild']['id'],'trigger':_0x35312a}),await _0x22d778[_0x1a70a6('0xc')]['send']({'embed':{'color':tesseract_1[_0x1a70a6('0x2f')]['COLORS'][_0x1a70a6('0x27')],'description':this[_0x1a70a6('0x31')][_0x1a70a6('0x43')][_0x1a70a6('0x22')](_0x22d778[_0x1a70a6('0x8')][_0x1a70a6('0x32')]['language'],_0x1a70a6('0x11'),_0x1a70a6('0x2a'),_0x22d778[_0x1a70a6('0x39')][_0x1a70a6('0x1c')],_0x35312a)}})['catch'](()=>{});}if(_0x20daf6[_0x1a70a6('0x6')]&&_0x20daf6[_0x1a70a6('0x6')][_0x1a70a6('0x4')]&&(_0x20daf6['_'][_0x1a70a6('0x4')]||_0x20daf6[_0x1a70a6('0x34')])){if(constants['isPublicBastion'](this[_0x1a70a6('0x31')][_0x1a70a6('0x1d')])){const _0xfdbdca=await Trigger_1[_0x1a70a6('0x40')][_0x1a70a6('0x1e')]({'guild':_0x22d778[_0x1a70a6('0x8')]['id']});if(_0xfdbdca>=constants[_0x1a70a6('0x3f')][_0x1a70a6('0x13')]){const _0x4a3b63=await omnic[_0x1a70a6('0xe')](_0x22d778[_0x1a70a6('0x8')])[_0x1a70a6('0x1a')](()=>{});if(_0x4a3b63){if(_0x4a3b63===omnic['PremiumTier']['GOLD']&&_0xfdbdca>=constants['LIMITS'][_0x1a70a6('0xd')][_0x1a70a6('0x13')])throw new errors['DiscordError'](errors[_0x1a70a6('0x1')][_0x1a70a6('0x0')],this['client']['locale'][_0x1a70a6('0x22')](_0x22d778[_0x1a70a6('0x8')][_0x1a70a6('0x32')]['language'],_0x1a70a6('0x3a'),'membershipLimitTriggers',constants[_0x1a70a6('0x3f')][_0x1a70a6('0xd')][_0x1a70a6('0x13')]));else{if(_0x4a3b63===omnic[_0x1a70a6('0x30')][_0x1a70a6('0x26')]&&_0xfdbdca>=constants[_0x1a70a6('0x3f')]['PLATINUM'][_0x1a70a6('0x13')])throw new errors['DiscordError'](errors[_0x1a70a6('0x1')]['LIMITED_PREMIUM_MEMBERSHIP'],this['client'][_0x1a70a6('0x43')]['getString'](_0x22d778['guild'][_0x1a70a6('0x32')][_0x1a70a6('0x2b')],_0x1a70a6('0x3a'),_0x1a70a6('0x3d'),constants['LIMITS']['PLATINUM']['TRIGGERS']));}}else throw new errors[(_0x1a70a6('0x44'))](errors[_0x1a70a6('0x1')][_0x1a70a6('0x19')],this[_0x1a70a6('0x31')][_0x1a70a6('0x43')]['getString'](_0x22d778['guild'][_0x1a70a6('0x32')][_0x1a70a6('0x2b')],_0x1a70a6('0x3a'),_0x1a70a6('0x20'),constants['LIMITS'][_0x1a70a6('0x13')]));}}const _0x542233=_0x20daf6[_0x1a70a6('0x6')][_0x1a70a6('0x3b')]('\x20'),_0x182a3b=[{'name':_0x1a70a6('0x2d'),'value':_0x542233,'inline':!![]}];let _0x54f73e;_0x20daf6['_']['length']&&(_0x54f73e=embeds['generateBastionEmbed'](_0x20daf6['_'][_0x1a70a6('0x3b')]('\x20')),_0x182a3b[_0x1a70a6('0x38')]({'name':_0x1a70a6('0x7'),'value':'```json\x0a'+JSON['stringify'](_0x54f73e)+_0x1a70a6('0x16')}));let _0xbef85;if(_0x20daf6[_0x1a70a6('0x34')]){const _0x2f46f4=emojis['parseEmoji'](_0x20daf6[_0x1a70a6('0x34')]);_0x2f46f4&&(_0xbef85=_0x2f46f4[_0x1a70a6('0x3')],_0x182a3b[_0x1a70a6('0x38')]({'name':'Response\x20Reaction','value':_0x20daf6[_0x1a70a6('0x34')]}));}return await Trigger_1[_0x1a70a6('0x40')][_0x1a70a6('0x2e')]({'guild':_0x22d778[_0x1a70a6('0x8')]['id'],'trigger':_0x542233,'responseMessage':_0x54f73e,'responseReaction':_0xbef85}),await _0x22d778['channel'][_0x1a70a6('0x1b')]({'embed':{'color':tesseract_1[_0x1a70a6('0x2f')][_0x1a70a6('0x41')]['GREEN'],'description':this['client']['locale']['getString'](_0x22d778['guild'][_0x1a70a6('0x32')][_0x1a70a6('0x2b')],'info','triggersAdd',_0x22d778[_0x1a70a6('0x39')][_0x1a70a6('0x1c')]),'fields':_0x182a3b}})[_0x1a70a6('0x1a')](()=>{});}const _0x3daa4d=await Trigger_1['default'][_0x1a70a6('0x42')]({'guild':_0x22d778['guild']['id']});return await _0x22d778[_0x1a70a6('0xc')]['send']({'embed':{'color':tesseract_1[_0x1a70a6('0x2f')][_0x1a70a6('0x41')]['IRIS'],'description':this[_0x1a70a6('0x31')]['locale'][_0x1a70a6('0x22')](_0x22d778['guild']['document'][_0x1a70a6('0x2b')],'info',_0x1a70a6('0x3e')),'fields':_0x3daa4d[_0x1a70a6('0x24')](_0x49f84b=>({'name':_0x49f84b['trigger'],'value':(_0x49f84b[_0x1a70a6('0x35')]?_0x1a70a6('0xf'):'')+'\x0a'+(_0x49f84b[_0x1a70a6('0x10')]?'Reaction\x20Response':'')}))}})[_0x1a70a6('0x1a')](()=>{});};}};