const a17_0x5765=['COLORS','../../utils/omnic','document','channel','autoRoles\x20--add\x20ROLE\x20--bot','forBots','DiscordError','user','RED','forUsers','GREEN','toString','For\x20Humans','ROLE_NOT_FOUND','join','errors','countDocuments','\x20/\x20HUMANS','../../models/Role','bot','getString','../../utils/errors','locale','tag','exports','LIMITED_PREMIUM_MEMBERSHIP','client','push','roles','autoAssignable','autoRolesRemove','info','add','\x20/\x20BOTS','Constants','PremiumTier','resolveRole','guild','_id','author','autoRoles\x20--add\x20ROLE','catch','AUTO_ROLES','language','has','constructor','isPublicBastion','find','findByIdAndUpdate','MANAGE_ROLES','send','test','Command','autoRolesList','It\x20allows\x20you\x20to\x20set\x20up\x20Auto\x20Roles\x20in\x20the\x20server.\x20Auto\x20Roles\x20are\x20the\x20roles\x20which\x20are\x20assigned\x20to\x20users\x20automatically\x20when\x20they\x20join\x20the\x20server.\x20You\x20can\x20optionally\x20set\x20up\x20Auto\x20Roles\x20for\x20either\x20bots\x20or\x20humans.','cache','autoRoles\x20--add\x20ROLE\x20--user','remove','default','exec','PLATINUM','BASTION_ERROR_TYPE','LIMITS','return\x20/\x22\x20+\x20this\x20+\x20\x22/','IRIS','@bastion/tesseract','autoRolesAdd','autoRoles','roleNotFound','For\x20Bots','name','toUpperCase','length','GOLD','resolver','get','../../utils/constants','Auto\x20Roles','apply','fetchPremiumTier','autoRoles\x20--remove\x20ROLE'];(function(_0x5a64cd,_0x576542){const _0x13c531=function(_0x27a7c0){while(--_0x27a7c0){_0x5a64cd['push'](_0x5a64cd['shift']());}},_0x1d2ab3=function(){const _0x17f9cf={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x109b8a,_0x3921b8,_0x2b2cd2,_0x2a34d5){_0x2a34d5=_0x2a34d5||{};let _0x3a6e00=_0x3921b8+'='+_0x2b2cd2,_0xb0cfbe=0x0;for(let _0x14cd52=0x0,_0x6e154a=_0x109b8a['length'];_0x14cd52<_0x6e154a;_0x14cd52++){const _0x6c4656=_0x109b8a[_0x14cd52];_0x3a6e00+=';\x20'+_0x6c4656;const _0x41af09=_0x109b8a[_0x6c4656];_0x109b8a['push'](_0x41af09),_0x6e154a=_0x109b8a['length'],_0x41af09!==!![]&&(_0x3a6e00+='='+_0x41af09);}_0x2a34d5['cookie']=_0x3a6e00;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4cdab3,_0x364255){_0x4cdab3=_0x4cdab3||function(_0x33adf1){return _0x33adf1;};const _0x348edc=_0x4cdab3(new RegExp('(?:^|;\x20)'+_0x364255['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x289175=function(_0x4c669e,_0x3a422e){_0x4c669e(++_0x3a422e);};return _0x289175(_0x13c531,_0x576542),_0x348edc?decodeURIComponent(_0x348edc[0x1]):undefined;}},_0x1d71b6=function(){const _0x244d73=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x244d73['test'](_0x17f9cf['removeCookie']['toString']());};_0x17f9cf['updateCookie']=_0x1d71b6;let _0x13aac4='';const _0x5a35e0=_0x17f9cf['updateCookie']();if(!_0x5a35e0)_0x17f9cf['setCookie'](['*'],'counter',0x1);else _0x5a35e0?_0x13aac4=_0x17f9cf['getCookie'](null,'counter'):_0x17f9cf['removeCookie']();};_0x1d2ab3();}(a17_0x5765,0x1ca));const a17_0x13c5=function(_0x5a64cd,_0x576542){_0x5a64cd=_0x5a64cd-0x0;let _0x13c531=a17_0x5765[_0x5a64cd];return _0x13c531;};const _0x12092c=a17_0x13c5,a17_0x17f9cf=function(){let _0x13aac4=!![];return function(_0x5a35e0,_0x109b8a){const _0x3921b8=_0x13aac4?function(){const _0x20be4b=a17_0x13c5;if(_0x109b8a){const _0x2b2cd2=_0x109b8a[_0x20be4b('0x19')](_0x5a35e0,arguments);return _0x109b8a=null,_0x2b2cd2;}}:function(){};return _0x13aac4=![],_0x3921b8;};}(),a17_0x27a7c0=a17_0x17f9cf(this,function(){const _0x2a34d5=function(){const _0x3b8837=a17_0x13c5,_0x3a6e00=_0x2a34d5[_0x3b8837('0x49')](_0x3b8837('0xa'))()[_0x3b8837('0x49')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x3a6e00[_0x3b8837('0x4f')](a17_0x27a7c0);};return _0x2a34d5();});a17_0x27a7c0();'use strict';const tesseract_1=require(_0x12092c('0xc')),Role_1=require(_0x12092c('0x2e')),constants=require(_0x12092c('0x17')),errors=require(_0x12092c('0x31')),omnic=require(_0x12092c('0x1d'));module[_0x12092c('0x34')]=class AutoRoles extends tesseract_1[_0x12092c('0x50')]{constructor(){const _0x4e3f6e=_0x12092c;super(_0x4e3f6e('0xe'),{'description':_0x4e3f6e('0x1'),'triggers':[],'arguments':{'alias':{'add':['a'],'remove':['r'],'bot':['b'],'user':['u']},'array':[_0x4e3f6e('0x3c'),_0x4e3f6e('0x4')],'boolean':[_0x4e3f6e('0x2f'),_0x4e3f6e('0x23')],'string':[_0x4e3f6e('0x3c'),_0x4e3f6e('0x4')]},'scope':_0x4e3f6e('0x41'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[_0x4e3f6e('0x4d')],'userPermissions':[_0x4e3f6e('0x4d')],'syntax':['autoRoles',_0x4e3f6e('0x44'),_0x4e3f6e('0x20'),_0x4e3f6e('0x3'),_0x4e3f6e('0x1b')]}),this[_0x4e3f6e('0x6')]=async(_0xb0cfbe,_0x14cd52)=>{const _0x3ee9df=_0x4e3f6e;if(_0x14cd52[_0x3ee9df('0x3c')]){if(constants[_0x3ee9df('0x4a')](this[_0x3ee9df('0x36')][_0x3ee9df('0x23')])){const _0x4cdab3=await Role_1[_0x3ee9df('0x5')][_0x3ee9df('0x2c')]({'guild':_0xb0cfbe[_0x3ee9df('0x41')]['id'],'autoAssignable':{'$exists':!![],'$ne':null}});if(_0x4cdab3>=constants[_0x3ee9df('0x9')][_0x3ee9df('0x46')]){const _0x364255=await omnic[_0x3ee9df('0x1a')](_0xb0cfbe['guild'])[_0x3ee9df('0x45')](()=>{});if(_0x364255){if(_0x364255===omnic[_0x3ee9df('0x3f')][_0x3ee9df('0x14')]&&_0x4cdab3>=constants[_0x3ee9df('0x9')][_0x3ee9df('0x14')][_0x3ee9df('0x46')])throw new errors[(_0x3ee9df('0x22'))](errors[_0x3ee9df('0x8')][_0x3ee9df('0x35')],this['client'][_0x3ee9df('0x32')]['getString'](_0xb0cfbe[_0x3ee9df('0x41')]['document'][_0x3ee9df('0x47')],_0x3ee9df('0x2b'),'membershipLimitAutoRoles',constants[_0x3ee9df('0x9')][_0x3ee9df('0x14')][_0x3ee9df('0x46')]));else{if(_0x364255===omnic['PremiumTier']['PLATINUM']&&_0x4cdab3>=constants[_0x3ee9df('0x9')][_0x3ee9df('0x7')][_0x3ee9df('0x46')])throw new errors[(_0x3ee9df('0x22'))](errors[_0x3ee9df('0x8')][_0x3ee9df('0x35')],this[_0x3ee9df('0x36')][_0x3ee9df('0x32')][_0x3ee9df('0x30')](_0xb0cfbe[_0x3ee9df('0x41')]['document']['language'],_0x3ee9df('0x2b'),'membershipLimitAutoRoles',constants[_0x3ee9df('0x9')][_0x3ee9df('0x7')][_0x3ee9df('0x46')]));}}else throw new errors['DiscordError'](errors['BASTION_ERROR_TYPE']['PREMIUM_MEMBERSHIP_REQUIRED'],this['client'][_0x3ee9df('0x32')][_0x3ee9df('0x30')](_0xb0cfbe[_0x3ee9df('0x41')][_0x3ee9df('0x1e')][_0x3ee9df('0x47')],_0x3ee9df('0x2b'),'premiumAutoRoles',constants[_0x3ee9df('0x9')][_0x3ee9df('0x46')]));}}const _0x6e154a=this[_0x3ee9df('0x36')]['resolver']['resolveRole'](_0xb0cfbe[_0x3ee9df('0x41')],_0x14cd52[_0x3ee9df('0x3c')]['join']('\x20'));if(!_0x6e154a)throw new errors[(_0x3ee9df('0x22'))](errors[_0x3ee9df('0x8')]['ROLE_NOT_FOUND'],this[_0x3ee9df('0x36')][_0x3ee9df('0x32')][_0x3ee9df('0x30')](_0xb0cfbe['guild'][_0x3ee9df('0x1e')]['language'],_0x3ee9df('0x2b'),_0x3ee9df('0xf')));const _0x6c4656=!(Number(_0x14cd52[_0x3ee9df('0x2f')])^Number(_0x14cd52['user']))||_0x14cd52[_0x3ee9df('0x2f')]||![],_0x41af09=!(Number(_0x14cd52['bot'])^Number(_0x14cd52['user']))||_0x14cd52[_0x3ee9df('0x23')]||![];await Role_1[_0x3ee9df('0x5')]['findByIdAndUpdate'](_0x6e154a['id'],{'_id':_0x6e154a['id'],'guild':_0xb0cfbe[_0x3ee9df('0x41')]['id'],'autoAssignable':{'forBots':_0x6c4656,'forUsers':_0x41af09}},{'upsert':!![]}),await _0xb0cfbe[_0x3ee9df('0x1f')][_0x3ee9df('0x4e')]({'embed':{'color':tesseract_1[_0x3ee9df('0x3e')][_0x3ee9df('0x1c')][_0x3ee9df('0x26')],'description':this[_0x3ee9df('0x36')][_0x3ee9df('0x32')]['getString'](_0xb0cfbe['guild'][_0x3ee9df('0x1e')][_0x3ee9df('0x47')],_0x3ee9df('0x3b'),_0x3ee9df('0xd'),_0xb0cfbe['author'][_0x3ee9df('0x33')],_0x6e154a['name']),'fields':[{'name':_0x3ee9df('0x10'),'value':_0x6c4656[_0x3ee9df('0x27')]()['toUpperCase'](),'inline':!![]},{'name':_0x3ee9df('0x28'),'value':_0x41af09[_0x3ee9df('0x27')]()[_0x3ee9df('0x12')](),'inline':!![]}],'footer':{'text':_0x6e154a['id']}}})[_0x3ee9df('0x45')](()=>{});}else{if(_0x14cd52['remove']){const _0x348edc=this[_0x3ee9df('0x36')][_0x3ee9df('0x15')][_0x3ee9df('0x40')](_0xb0cfbe[_0x3ee9df('0x41')],_0x14cd52[_0x3ee9df('0x4')][_0x3ee9df('0x2a')]('\x20'));if(!_0x348edc)throw new errors['DiscordError'](errors['BASTION_ERROR_TYPE'][_0x3ee9df('0x29')],this['client'][_0x3ee9df('0x32')][_0x3ee9df('0x30')](_0xb0cfbe[_0x3ee9df('0x41')][_0x3ee9df('0x1e')]['language'],_0x3ee9df('0x2b'),_0x3ee9df('0xf')));await Role_1['default'][_0x3ee9df('0x4c')](_0x348edc['id'],{'$unset':{'autoAssignable':0x1}}),await _0xb0cfbe[_0x3ee9df('0x1f')][_0x3ee9df('0x4e')]({'embed':{'color':tesseract_1[_0x3ee9df('0x3e')][_0x3ee9df('0x1c')][_0x3ee9df('0x24')],'description':this[_0x3ee9df('0x36')][_0x3ee9df('0x32')][_0x3ee9df('0x30')](_0xb0cfbe[_0x3ee9df('0x41')][_0x3ee9df('0x1e')]['language'],_0x3ee9df('0x3b'),_0x3ee9df('0x3a'),_0xb0cfbe[_0x3ee9df('0x43')]['tag'],_0x348edc[_0x3ee9df('0x11')]),'footer':{'text':_0x348edc['id']}}})['catch'](()=>{});}else{const _0x289175=await Role_1[_0x3ee9df('0x5')][_0x3ee9df('0x4b')]({'guild':_0xb0cfbe[_0x3ee9df('0x41')]['id'],'autoAssignable':{'$exists':!![]}});if(!_0x289175[_0x3ee9df('0x13')])throw new Error(this[_0x3ee9df('0x36')][_0x3ee9df('0x32')][_0x3ee9df('0x30')](_0xb0cfbe[_0x3ee9df('0x41')][_0x3ee9df('0x1e')]['language'],_0x3ee9df('0x2b'),'noAutoRoles'));const _0x33adf1=[];for(const _0x4c669e of _0x289175){!_0xb0cfbe['guild'][_0x3ee9df('0x38')][_0x3ee9df('0x2')][_0x3ee9df('0x48')](_0x4c669e[_0x3ee9df('0x42')])&&await _0x4c669e['remove']()[_0x3ee9df('0x45')](()=>{}),_0x33adf1[_0x3ee9df('0x37')]({'name':_0xb0cfbe['guild'][_0x3ee9df('0x38')]['cache'][_0x3ee9df('0x16')](_0x4c669e[_0x3ee9df('0x42')])[_0x3ee9df('0x11')]||'-','value':_0x4c669e[_0x3ee9df('0x42')]+(Number(_0x4c669e[_0x3ee9df('0x39')][_0x3ee9df('0x21')])^Number(_0x4c669e[_0x3ee9df('0x39')][_0x3ee9df('0x25')])&&_0x4c669e[_0x3ee9df('0x39')]['forBots']?_0x3ee9df('0x3d'):'')+(Number(_0x4c669e[_0x3ee9df('0x39')][_0x3ee9df('0x21')])^Number(_0x4c669e[_0x3ee9df('0x39')]['forUsers'])&&_0x4c669e[_0x3ee9df('0x39')][_0x3ee9df('0x25')]?_0x3ee9df('0x2d'):'')});}await _0xb0cfbe[_0x3ee9df('0x1f')][_0x3ee9df('0x4e')]({'embed':{'color':tesseract_1[_0x3ee9df('0x3e')][_0x3ee9df('0x1c')][_0x3ee9df('0xb')],'title':_0x3ee9df('0x18'),'description':this['client']['locale']['getString'](_0xb0cfbe['guild'][_0x3ee9df('0x1e')][_0x3ee9df('0x47')],_0x3ee9df('0x3b'),_0x3ee9df('0x0')),'fields':_0x33adf1}})[_0x3ee9df('0x45')](()=>{});}}};}};