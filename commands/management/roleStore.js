const a86_0x3c93=['catch','info','roleStoreAdd','tag','roleStore\x20ROLE\x20--buy','LIMITS','GOLD','roleStore\x20ROLE\x20--sell\x20AMOUNT','find','_id','permissions','roleBought','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','has','locale','test','@bastion/tesseract','NO_PERMISSION','../../models/Role','GREEN','errors','countDocuments','user','PLATINUM','document','clamp','INSUFFICIENT_BALANCE','\x20Bastion\x20Coins','cache','save','roleStore','Command','buy','RED','client','roleNotFound','isPublicBastion','ROLE_ALREADY_ASSIGNED','send','findOneAndUpdate','ROLE_NOT_FOUND','../../utils/constants','constructor','MAX_SAFE_INTEGER','NO_ROLES_ON_SALE','membershipLimitPaidRoles','PAID_ROLES','\x20/\x20','PREMIUM_MEMBERSHIP_REQUIRED','PremiumTier','fetchPremiumTier','MANAGE_ROLES','getString','Constants','language','resolver','BASTION_ERROR_TYPE','join','roles','DiscordError','IRIS','sell','member','premiumPaidRoles','default','COLORS','exec','apply','roleStoreRemove','author','../../utils/omnic','findOne','price','guild','channel','resolveRole','roleStore\x20ROLE\x20--unlist','It\x20allows\x20you\x20to\x20set\x20up\x20a\x20Role\x20Store\x20in\x20the\x20server.\x20Server\x20managers\x20can\x20sell\x20roles\x20in\x20the\x20server\x20and\x20members\x20can\x20buy\x20them\x20with\x20Bastion\x20Coins.','name'];(function(_0x5afd02,_0x3c9389){const _0x4045d9=function(_0x47ae41){while(--_0x47ae41){_0x5afd02['push'](_0x5afd02['shift']());}},_0x37abd0=function(){const _0x1f8b18={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1464bf,_0x3b1075,_0x3777fb,_0x37e8c5){_0x37e8c5=_0x37e8c5||{};let _0x217f5a=_0x3b1075+'='+_0x3777fb,_0x38ab52=0x0;for(let _0x5e19e6=0x0,_0x59a642=_0x1464bf['length'];_0x5e19e6<_0x59a642;_0x5e19e6++){const _0x130fa0=_0x1464bf[_0x5e19e6];_0x217f5a+=';\x20'+_0x130fa0;const _0x33d1d3=_0x1464bf[_0x130fa0];_0x1464bf['push'](_0x33d1d3),_0x59a642=_0x1464bf['length'],_0x33d1d3!==!![]&&(_0x217f5a+='='+_0x33d1d3);}_0x37e8c5['cookie']=_0x217f5a;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5a7a7b,_0x31bc57){_0x5a7a7b=_0x5a7a7b||function(_0x41fc53){return _0x41fc53;};const _0x5e7bdb=_0x5a7a7b(new RegExp('(?:^|;\x20)'+_0x31bc57['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x252308=function(_0x201a0b,_0x156577){_0x201a0b(++_0x156577);};return _0x252308(_0x4045d9,_0x3c9389),_0x5e7bdb?decodeURIComponent(_0x5e7bdb[0x1]):undefined;}},_0x2c4768=function(){const _0x1e5a87=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1e5a87['test'](_0x1f8b18['removeCookie']['toString']());};_0x1f8b18['updateCookie']=_0x2c4768;let _0x3684e1='';const _0x4423d4=_0x1f8b18['updateCookie']();if(!_0x4423d4)_0x1f8b18['setCookie'](['*'],'counter',0x1);else _0x4423d4?_0x3684e1=_0x1f8b18['getCookie'](null,'counter'):_0x1f8b18['removeCookie']();};_0x37abd0();}(a86_0x3c93,0x71));const a86_0x4045=function(_0x5afd02,_0x3c9389){_0x5afd02=_0x5afd02-0x0;let _0x4045d9=a86_0x3c93[_0x5afd02];return _0x4045d9;};const _0x291515=a86_0x4045,a86_0x1f8b18=function(){let _0x3684e1=!![];return function(_0x4423d4,_0x1464bf){const _0x3b1075=_0x3684e1?function(){const _0x2a3e3e=a86_0x4045;if(_0x1464bf){const _0x3777fb=_0x1464bf[_0x2a3e3e('0x21')](_0x4423d4,arguments);return _0x1464bf=null,_0x3777fb;}}:function(){};return _0x3684e1=![],_0x3b1075;};}(),a86_0x47ae41=a86_0x1f8b18(this,function(){const _0x37e8c5=function(){const _0x4af9b4=a86_0x4045,_0x217f5a=_0x37e8c5[_0x4af9b4('0x8')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x4af9b4('0x8')](_0x4af9b4('0x39'));return!_0x217f5a[_0x4af9b4('0x3c')](a86_0x47ae41);};return _0x37e8c5();});a86_0x47ae41();'use strict';const tesseract_1=require(_0x291515('0x3d')),Role_1=require(_0x291515('0x3f')),constants=require(_0x291515('0x7')),errors=require('../../utils/errors'),numbers=require('../../utils/numbers'),omnic=require(_0x291515('0x24'));module['exports']=class RoleStoreCommand extends tesseract_1[_0x291515('0x4c')]{constructor(){const _0x140bec=_0x291515;super('roleStore',{'description':_0x140bec('0x2b'),'triggers':[],'arguments':{'boolean':[_0x140bec('0x4d'),'unlist'],'number':[_0x140bec('0x1b')],'coerce':{'sell':_0x38ab52=>numbers[_0x140bec('0x46')](_0x38ab52,0x1,Number[_0x140bec('0x9')])}},'scope':_0x140bec('0x27'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[_0x140bec('0x11')],'userPermissions':[],'syntax':[_0x140bec('0x4b'),_0x140bec('0x34'),_0x140bec('0x31'),_0x140bec('0x2a')]}),this[_0x140bec('0x20')]=async(_0x5e19e6,_0x59a642)=>{const _0x50487f=_0x140bec;if(_0x59a642['_']['length']){const _0x33d1d3=this[_0x50487f('0x0')][_0x50487f('0x15')][_0x50487f('0x29')](_0x5e19e6[_0x50487f('0x27')],_0x59a642['_'][_0x50487f('0x17')]('\x20'));if(!_0x33d1d3)throw new errors[(_0x50487f('0x19'))](errors[_0x50487f('0x16')][_0x50487f('0x6')],this[_0x50487f('0x0')][_0x50487f('0x3b')][_0x50487f('0x12')](_0x5e19e6[_0x50487f('0x27')][_0x50487f('0x45')]['language'],'errors',_0x50487f('0x1')));if(_0x59a642[_0x50487f('0x1b')]>0x0){if(constants[_0x50487f('0x2')](this[_0x50487f('0x0')][_0x50487f('0x43')])){const _0x5a7a7b=await Role_1[_0x50487f('0x1e')][_0x50487f('0x42')]({'guild':_0x5e19e6[_0x50487f('0x27')]['id'],'price':{'$exists':!![],'$ne':null}});if(_0x5a7a7b>=constants[_0x50487f('0x32')]['PAID_ROLES']){const _0x31bc57=await omnic[_0x50487f('0x10')](_0x5e19e6['guild'])[_0x50487f('0x2d')](()=>{});if(_0x31bc57){if(_0x31bc57===omnic[_0x50487f('0xf')][_0x50487f('0x33')]&&_0x5a7a7b>=constants['LIMITS'][_0x50487f('0x33')]['PAID_ROLES'])throw new errors[(_0x50487f('0x19'))](errors[_0x50487f('0x16')]['LIMITED_PREMIUM_MEMBERSHIP'],this[_0x50487f('0x0')]['locale'][_0x50487f('0x12')](_0x5e19e6['guild'][_0x50487f('0x45')]['language'],_0x50487f('0x41'),_0x50487f('0xb'),constants[_0x50487f('0x32')][_0x50487f('0x33')][_0x50487f('0xc')]));else{if(_0x31bc57===omnic['PremiumTier'][_0x50487f('0x44')]&&_0x5a7a7b>=constants[_0x50487f('0x32')][_0x50487f('0x44')][_0x50487f('0xc')])throw new errors[(_0x50487f('0x19'))](errors['BASTION_ERROR_TYPE']['LIMITED_PREMIUM_MEMBERSHIP'],this[_0x50487f('0x0')]['locale']['getString'](_0x5e19e6[_0x50487f('0x27')][_0x50487f('0x45')]['language'],_0x50487f('0x41'),'membershipLimitPaidRoles',constants['LIMITS'][_0x50487f('0x44')]['PAID_ROLES']));}}else throw new errors[(_0x50487f('0x19'))](errors[_0x50487f('0x16')][_0x50487f('0xe')],this[_0x50487f('0x0')]['locale'][_0x50487f('0x12')](_0x5e19e6[_0x50487f('0x27')]['document'][_0x50487f('0x14')],_0x50487f('0x41'),_0x50487f('0x1d'),constants[_0x50487f('0x32')][_0x50487f('0xc')]));}}if(!_0x5e19e6[_0x50487f('0x1c')][_0x50487f('0x37')][_0x50487f('0x3a')](_0x50487f('0x11')))throw new Error(_0x50487f('0x3e'));return await Role_1[_0x50487f('0x1e')]['findOneAndUpdate']({'_id':_0x33d1d3['id'],'guild':_0x5e19e6[_0x50487f('0x27')]['id']},{'_id':_0x33d1d3['id'],'guild':_0x5e19e6[_0x50487f('0x27')]['id'],'price':_0x59a642[_0x50487f('0x1b')]},{'upsert':!![]}),await _0x5e19e6['channel'][_0x50487f('0x4')]({'embed':{'color':tesseract_1['Constants'][_0x50487f('0x1f')][_0x50487f('0x40')],'description':this[_0x50487f('0x0')][_0x50487f('0x3b')][_0x50487f('0x12')](_0x5e19e6[_0x50487f('0x27')][_0x50487f('0x45')]['language'],_0x50487f('0x2e'),_0x50487f('0x2f'),_0x5e19e6[_0x50487f('0x23')][_0x50487f('0x30')],_0x33d1d3[_0x50487f('0x2c')],_0x59a642[_0x50487f('0x1b')])}})[_0x50487f('0x2d')](()=>{});}if(_0x59a642[_0x50487f('0x4d')]){if(_0x5e19e6[_0x50487f('0x1c')]['roles']['cache']['has'](_0x33d1d3['id']))throw new Error(_0x50487f('0x3'));const _0x5e7bdb=await Role_1[_0x50487f('0x1e')][_0x50487f('0x25')]({'_id':_0x33d1d3['id'],'guild':_0x5e19e6[_0x50487f('0x27')]['id'],'price':{'$exists':!![],'$ne':null}});if(!_0x5e7bdb)throw new Error('ROLE_NOT_FOR_SALE');if(_0x5e19e6['member'][_0x50487f('0x45')]['balance']<_0x5e7bdb[_0x50487f('0x26')])throw new Error(_0x50487f('0x47'));return await _0x5e19e6[_0x50487f('0x1c')][_0x50487f('0x18')]['add'](_0x33d1d3),_0x5e19e6[_0x50487f('0x1c')]['debit'](_0x5e7bdb[_0x50487f('0x26')],'Paid\x20Role',_0x5e19e6['member'][_0x50487f('0x45')]),await _0x5e19e6[_0x50487f('0x1c')][_0x50487f('0x45')][_0x50487f('0x4a')](),await _0x5e19e6[_0x50487f('0x28')][_0x50487f('0x4')]({'embed':{'color':tesseract_1['Constants']['COLORS'][_0x50487f('0x40')],'description':this['client'][_0x50487f('0x3b')][_0x50487f('0x12')](_0x5e19e6['guild'][_0x50487f('0x45')][_0x50487f('0x14')],_0x50487f('0x2e'),_0x50487f('0x38'),_0x5e19e6[_0x50487f('0x23')][_0x50487f('0x30')],_0x33d1d3[_0x50487f('0x2c')],_0x5e7bdb[_0x50487f('0x26')])}})[_0x50487f('0x2d')](()=>{});}if(_0x59a642['unlist']){if(!_0x5e19e6['member'][_0x50487f('0x37')]['has'](_0x50487f('0x11')))throw new Error(_0x50487f('0x3e'));return await Role_1['default'][_0x50487f('0x5')]({'_id':_0x33d1d3['id'],'guild':_0x5e19e6[_0x50487f('0x27')]['id'],'price':{'$exists':!![],'$ne':null}},{'_id':_0x33d1d3['id'],'guild':_0x5e19e6[_0x50487f('0x27')]['id'],'$unset':{'price':0x1}}),await _0x5e19e6[_0x50487f('0x28')][_0x50487f('0x4')]({'embed':{'color':tesseract_1[_0x50487f('0x13')][_0x50487f('0x1f')][_0x50487f('0x4e')],'description':this[_0x50487f('0x0')][_0x50487f('0x3b')][_0x50487f('0x12')](_0x5e19e6[_0x50487f('0x27')][_0x50487f('0x45')]['language'],_0x50487f('0x2e'),_0x50487f('0x22'),_0x5e19e6[_0x50487f('0x23')][_0x50487f('0x30')],_0x33d1d3['name'])}})[_0x50487f('0x2d')](()=>{});}}const _0x130fa0=await Role_1[_0x50487f('0x1e')][_0x50487f('0x35')]({'guild':_0x5e19e6[_0x50487f('0x27')]['id'],'price':{'$exists':!![],'$ne':null}});if(!_0x130fa0['length'])throw new Error(_0x50487f('0xa'));return await _0x5e19e6['channel']['send']({'embed':{'color':tesseract_1['Constants'][_0x50487f('0x1f')][_0x50487f('0x1a')],'title':'Roles\x20Store','fields':_0x130fa0['map'](_0x252308=>({'name':(_0x5e19e6['guild'][_0x50487f('0x18')][_0x50487f('0x49')][_0x50487f('0x3a')](_0x252308[_0x50487f('0x36')])?_0x5e19e6['guild'][_0x50487f('0x18')]['cache']['get'](_0x252308[_0x50487f('0x36')])[_0x50487f('0x2c')]+_0x50487f('0xd'):'')+_0x252308[_0x50487f('0x36')],'value':_0x252308[_0x50487f('0x26')]+_0x50487f('0x48')}))}})[_0x50487f('0x2d')](()=>{});};}};