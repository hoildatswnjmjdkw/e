const a16_0x57be=['has','toUpperCase','toString','\x20/\x20BOTS','compile','autoRoles\x20--add\x20ROLE\x20--bot','tag','catch','default','client','Command','autoRoles\x20--remove\x20ROLE','autoRolesList','name','guild','@bastion/tesseract','../../utils/constants','roleNotFound','PLATINUM','autoAssignable','For\x20Bots','GOLD','author','BASTION_ERROR_TYPE','GREEN','user','add','info','cache','Constants','test','channel','locale','MANAGE_ROLES','forUsers','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','AUTO_ROLES','PREMIUM_MEMBERSHIP_REQUIRED','autoRoles','language','resolver','send','LIMITS','findByIdAndUpdate','exec','_id','DiscordError','document','roles','constructor','PremiumTier','remove','noAutoRoles','resolveRole','forBots','ROLE_NOT_FOUND','LIMITED_PREMIUM_MEMBERSHIP','find','../../utils/omnic','../../utils/errors','errors','For\x20Humans','isPublicBastion','autoRolesAdd','length','getString','autoRoles\x20--add\x20ROLE','It\x20allows\x20you\x20to\x20set\x20up\x20Auto\x20Roles\x20in\x20the\x20server.\x20Auto\x20Roles\x20are\x20the\x20roles\x20which\x20are\x20assigned\x20to\x20users\x20automatically\x20when\x20they\x20join\x20the\x20server.\x20You\x20can\x20optionally\x20set\x20up\x20Auto\x20Roles\x20for\x20either\x20bots\x20or\x20humans.','push','COLORS','join','exports','premiumAutoRoles','autoRoles\x20--add\x20ROLE\x20--user','bot'];(function(_0x48ed64,_0x57be80){const _0x5dd74e=function(_0x1e3e69){while(--_0x1e3e69){_0x48ed64['push'](_0x48ed64['shift']());}};const _0x420015=function(){const _0x1da593={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x59ccab,_0x2b6279,_0x2cb26b,_0x45b3f7){_0x45b3f7=_0x45b3f7||{};let _0x451a2b=_0x2b6279+'='+_0x2cb26b;let _0x51dbef=0x0;for(let _0x1d8f31=0x0,_0x3a2555=_0x59ccab['length'];_0x1d8f31<_0x3a2555;_0x1d8f31++){const _0x324fe6=_0x59ccab[_0x1d8f31];_0x451a2b+=';\x20'+_0x324fe6;const _0x25b837=_0x59ccab[_0x324fe6];_0x59ccab['push'](_0x25b837);_0x3a2555=_0x59ccab['length'];if(_0x25b837!==!![]){_0x451a2b+='='+_0x25b837;}}_0x45b3f7['cookie']=_0x451a2b;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1e0352,_0x540eaa){_0x1e0352=_0x1e0352||function(_0x1fc720){return _0x1fc720;};const _0x3b4159=_0x1e0352(new RegExp('(?:^|;\x20)'+_0x540eaa['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x5445be=function(_0x415b55,_0x5389ae){_0x415b55(++_0x5389ae);};_0x5445be(_0x5dd74e,_0x57be80);return _0x3b4159?decodeURIComponent(_0x3b4159[0x1]):undefined;}};const _0x430b13=function(){const _0x222c8e=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x222c8e['test'](_0x1da593['removeCookie']['toString']());};_0x1da593['updateCookie']=_0x430b13;let _0x593640='';const _0x5ac534=_0x1da593['updateCookie']();if(!_0x5ac534){_0x1da593['setCookie'](['*'],'counter',0x1);}else if(_0x5ac534){_0x593640=_0x1da593['getCookie'](null,'counter');}else{_0x1da593['removeCookie']();}};_0x420015();}(a16_0x57be,0x196));const a16_0x5dd7=function(_0x48ed64,_0x57be80){_0x48ed64=_0x48ed64-0x0;let _0x5dd74e=a16_0x57be[_0x48ed64];return _0x5dd74e;};const a16_0x1da593=function(){let _0x529750=!![];return function(_0x56ba95,_0x381e43){const _0x43f660=_0x529750?function(){if(_0x381e43){const _0x190f6d=_0x381e43['apply'](_0x56ba95,arguments);_0x381e43=null;return _0x190f6d;}}:function(){};_0x529750=![];return _0x43f660;};}();const a16_0x1e3e69=a16_0x1da593(this,function(){const _0x9c7aa9=function(){const _0x174797=_0x9c7aa9[a16_0x5dd7('0x12')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a16_0x5dd7('0x30')](a16_0x5dd7('0x4'));return!_0x174797[a16_0x5dd7('0x4a')](a16_0x1e3e69);};return _0x9c7aa9();});a16_0x1e3e69();'use strict';const tesseract_1=require(a16_0x5dd7('0x3b'));const Role_1=require('../../models/Role');const constants=require(a16_0x5dd7('0x3c'));const errors=require(a16_0x5dd7('0x1c'));const omnic=require(a16_0x5dd7('0x1b'));module[a16_0x5dd7('0x28')]=class AutoRoles extends tesseract_1[a16_0x5dd7('0x36')]{constructor(){super('autoRoles',{'description':a16_0x5dd7('0x24'),'triggers':[],'arguments':{'alias':{'add':['a'],'remove':['r'],'bot':['b'],'user':['u']},'array':['add',a16_0x5dd7('0x14')],'boolean':[a16_0x5dd7('0x2b'),'user'],'string':[a16_0x5dd7('0x46'),a16_0x5dd7('0x14')]},'scope':a16_0x5dd7('0x3a'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a16_0x5dd7('0x2')],'userPermissions':[a16_0x5dd7('0x2')],'syntax':[a16_0x5dd7('0x7'),a16_0x5dd7('0x23'),a16_0x5dd7('0x31'),a16_0x5dd7('0x2a'),a16_0x5dd7('0x37')]});this[a16_0x5dd7('0xd')]=async(_0x18b9a0,_0x5b6444)=>{if(_0x5b6444[a16_0x5dd7('0x46')]){if(constants[a16_0x5dd7('0x1f')](this[a16_0x5dd7('0x35')][a16_0x5dd7('0x45')])){const _0x19d5e2=await Role_1[a16_0x5dd7('0x34')]['countDocuments']({'guild':_0x18b9a0[a16_0x5dd7('0x3a')]['id'],'autoAssignable':{'$exists':!![],'$ne':null}});if(_0x19d5e2>=constants[a16_0x5dd7('0xb')][a16_0x5dd7('0x5')]){const _0xc497da=await omnic['fetchPremiumTier'](_0x18b9a0['guild'])[a16_0x5dd7('0x33')](()=>{});if(_0xc497da){if(_0xc497da===omnic[a16_0x5dd7('0x13')][a16_0x5dd7('0x41')]&&_0x19d5e2>=constants['LIMITS'][a16_0x5dd7('0x41')][a16_0x5dd7('0x5')]){throw new errors[(a16_0x5dd7('0xf'))](errors[a16_0x5dd7('0x43')][a16_0x5dd7('0x19')],this[a16_0x5dd7('0x35')][a16_0x5dd7('0x1')][a16_0x5dd7('0x22')](_0x18b9a0[a16_0x5dd7('0x3a')][a16_0x5dd7('0x10')][a16_0x5dd7('0x8')],a16_0x5dd7('0x1d'),'membershipLimitAutoRoles',constants[a16_0x5dd7('0xb')]['GOLD'][a16_0x5dd7('0x5')]));}else if(_0xc497da===omnic['PremiumTier'][a16_0x5dd7('0x3e')]&&_0x19d5e2>=constants['LIMITS'][a16_0x5dd7('0x3e')][a16_0x5dd7('0x5')]){throw new errors[(a16_0x5dd7('0xf'))](errors[a16_0x5dd7('0x43')]['LIMITED_PREMIUM_MEMBERSHIP'],this['client'][a16_0x5dd7('0x1')]['getString'](_0x18b9a0['guild'][a16_0x5dd7('0x10')][a16_0x5dd7('0x8')],a16_0x5dd7('0x1d'),'membershipLimitAutoRoles',constants[a16_0x5dd7('0xb')][a16_0x5dd7('0x3e')][a16_0x5dd7('0x5')]));}}else{throw new errors[(a16_0x5dd7('0xf'))](errors[a16_0x5dd7('0x43')][a16_0x5dd7('0x6')],this[a16_0x5dd7('0x35')][a16_0x5dd7('0x1')][a16_0x5dd7('0x22')](_0x18b9a0['guild'][a16_0x5dd7('0x10')][a16_0x5dd7('0x8')],a16_0x5dd7('0x1d'),a16_0x5dd7('0x29'),constants['LIMITS']['AUTO_ROLES']));}}}const _0x3cbd7a=this['client'][a16_0x5dd7('0x9')][a16_0x5dd7('0x16')](_0x18b9a0['guild'],_0x5b6444['add'][a16_0x5dd7('0x27')]('\x20'));if(!_0x3cbd7a)throw new errors[(a16_0x5dd7('0xf'))](errors[a16_0x5dd7('0x43')]['ROLE_NOT_FOUND'],this[a16_0x5dd7('0x35')][a16_0x5dd7('0x1')][a16_0x5dd7('0x22')](_0x18b9a0[a16_0x5dd7('0x3a')][a16_0x5dd7('0x10')][a16_0x5dd7('0x8')],a16_0x5dd7('0x1d'),a16_0x5dd7('0x3d')));const _0x28b80d=!(Number(_0x5b6444['bot'])^Number(_0x5b6444[a16_0x5dd7('0x45')]))||_0x5b6444[a16_0x5dd7('0x2b')]||![];const _0x2d90a6=!(Number(_0x5b6444['bot'])^Number(_0x5b6444[a16_0x5dd7('0x45')]))||_0x5b6444['user']||![];await Role_1[a16_0x5dd7('0x34')][a16_0x5dd7('0xc')](_0x3cbd7a['id'],{'_id':_0x3cbd7a['id'],'guild':_0x18b9a0[a16_0x5dd7('0x3a')]['id'],'autoAssignable':{'forBots':_0x28b80d,'forUsers':_0x2d90a6}},{'upsert':!![]});await _0x18b9a0[a16_0x5dd7('0x0')]['send']({'embed':{'color':tesseract_1[a16_0x5dd7('0x49')]['COLORS'][a16_0x5dd7('0x44')],'description':this['client'][a16_0x5dd7('0x1')]['getString'](_0x18b9a0[a16_0x5dd7('0x3a')]['document'][a16_0x5dd7('0x8')],a16_0x5dd7('0x47'),a16_0x5dd7('0x20'),_0x18b9a0[a16_0x5dd7('0x42')][a16_0x5dd7('0x32')],_0x3cbd7a[a16_0x5dd7('0x39')]),'fields':[{'name':a16_0x5dd7('0x40'),'value':_0x28b80d['toString']()[a16_0x5dd7('0x2d')](),'inline':!![]},{'name':a16_0x5dd7('0x1e'),'value':_0x2d90a6[a16_0x5dd7('0x2e')]()[a16_0x5dd7('0x2d')](),'inline':!![]}],'footer':{'text':_0x3cbd7a['id']}}})[a16_0x5dd7('0x33')](()=>{});}else if(_0x5b6444[a16_0x5dd7('0x14')]){const _0x90c906=this[a16_0x5dd7('0x35')][a16_0x5dd7('0x9')][a16_0x5dd7('0x16')](_0x18b9a0['guild'],_0x5b6444[a16_0x5dd7('0x14')][a16_0x5dd7('0x27')]('\x20'));if(!_0x90c906)throw new errors['DiscordError'](errors[a16_0x5dd7('0x43')][a16_0x5dd7('0x18')],this[a16_0x5dd7('0x35')]['locale'][a16_0x5dd7('0x22')](_0x18b9a0['guild'][a16_0x5dd7('0x10')][a16_0x5dd7('0x8')],a16_0x5dd7('0x1d'),'roleNotFound'));await Role_1[a16_0x5dd7('0x34')][a16_0x5dd7('0xc')](_0x90c906['id'],{'$unset':{'autoAssignable':0x1}});await _0x18b9a0[a16_0x5dd7('0x0')][a16_0x5dd7('0xa')]({'embed':{'color':tesseract_1['Constants'][a16_0x5dd7('0x26')]['RED'],'description':this[a16_0x5dd7('0x35')][a16_0x5dd7('0x1')][a16_0x5dd7('0x22')](_0x18b9a0[a16_0x5dd7('0x3a')][a16_0x5dd7('0x10')][a16_0x5dd7('0x8')],'info','autoRolesRemove',_0x18b9a0['author'][a16_0x5dd7('0x32')],_0x90c906[a16_0x5dd7('0x39')]),'footer':{'text':_0x90c906['id']}}})['catch'](()=>{});}else{const _0x314e06=await Role_1[a16_0x5dd7('0x34')][a16_0x5dd7('0x1a')]({'guild':_0x18b9a0[a16_0x5dd7('0x3a')]['id'],'autoAssignable':{'$exists':!![]}});if(!_0x314e06[a16_0x5dd7('0x21')]){throw new Error(this['client'][a16_0x5dd7('0x1')][a16_0x5dd7('0x22')](_0x18b9a0[a16_0x5dd7('0x3a')][a16_0x5dd7('0x10')][a16_0x5dd7('0x8')],a16_0x5dd7('0x1d'),a16_0x5dd7('0x15')));}const _0x468096=[];for(const _0x117f1b of _0x314e06){if(!_0x18b9a0[a16_0x5dd7('0x3a')][a16_0x5dd7('0x11')][a16_0x5dd7('0x48')][a16_0x5dd7('0x2c')](_0x117f1b[a16_0x5dd7('0xe')])){await _0x117f1b[a16_0x5dd7('0x14')]()[a16_0x5dd7('0x33')](()=>{});}_0x468096[a16_0x5dd7('0x25')]({'name':_0x18b9a0[a16_0x5dd7('0x3a')][a16_0x5dd7('0x11')][a16_0x5dd7('0x48')]['get'](_0x117f1b['_id'])[a16_0x5dd7('0x39')]||'-','value':_0x117f1b['_id']+(Number(_0x117f1b[a16_0x5dd7('0x3f')][a16_0x5dd7('0x17')])^Number(_0x117f1b[a16_0x5dd7('0x3f')]['forUsers'])&&_0x117f1b[a16_0x5dd7('0x3f')][a16_0x5dd7('0x17')]?a16_0x5dd7('0x2f'):'')+(Number(_0x117f1b[a16_0x5dd7('0x3f')]['forBots'])^Number(_0x117f1b[a16_0x5dd7('0x3f')][a16_0x5dd7('0x3')])&&_0x117f1b[a16_0x5dd7('0x3f')][a16_0x5dd7('0x3')]?'\x20/\x20HUMANS':'')});}await _0x18b9a0[a16_0x5dd7('0x0')]['send']({'embed':{'color':tesseract_1[a16_0x5dd7('0x49')][a16_0x5dd7('0x26')]['IRIS'],'title':'Auto\x20Roles','description':this['client']['locale'][a16_0x5dd7('0x22')](_0x18b9a0[a16_0x5dd7('0x3a')][a16_0x5dd7('0x10')][a16_0x5dd7('0x8')],a16_0x5dd7('0x47'),a16_0x5dd7('0x38')),'fields':_0x468096}})[a16_0x5dd7('0x33')](()=>{});}};}};