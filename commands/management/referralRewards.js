const a84_0x12cb=['referralRewards\x20-n\x20NUMBER\x20--role\x20ROLE','PREMIUM_MEMBERSHIP_REQUIRED','roles','ROLE_NOT_FOUND','exec','PLATINUM','pages','referralRewards','referrals','Referral\x20Rewards','createDocument','roleReferralsSet','document','INVITE_REWARDS','resolver','DiscordError','COLORS','author','get','Command','catch','roleNotFound','remove','keys','It\x20allows\x20you\x20set\x20roles\x20as\x20rewards\x20for\x20referrals\x20(inviting\x20other\x20users\x20to\x20the\x20server).','push','default','save','items','paginate','RED','LIMITED_PREMIUM_MEMBERSHIP','../../models/Role','PremiumTier','resolveRole','page','GOLD','IRIS','apply','MANAGE_GUILD','test','errors','channel','../../utils/errors','referralRewards\x20--page\x20NUMBER','BASTION_ERROR_TYPE','return\x20/\x22\x20+\x20this\x20+\x20\x22/','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','LIMITS','fetchDocument','language','fetchPremiumTier','NO_REFERRAL_REWARDS','\x20Referrals','clamp','name','exports','getString','map','length','referralRewards\x20-n\x20NUMBER\x20--remove','isPublicBastion','info','cache','send','membershipLimitInviteRoles','locale','guild','client','Constants','premiumInviteRoles','../../utils/omnic','@bastion/tesseract','tag','constructor','role','../../utils/numbers','has','join'];(function(_0x343416,_0x12cb43){const _0x4a66b7=function(_0x5a1f09){while(--_0x5a1f09){_0x343416['push'](_0x343416['shift']());}},_0x25eb0c=function(){const _0x131bef={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x30c5c6,_0x338151,_0x126cf4,_0x461277){_0x461277=_0x461277||{};let _0x515591=_0x338151+'='+_0x126cf4,_0x416a26=0x0;for(let _0x460542=0x0,_0x5df556=_0x30c5c6['length'];_0x460542<_0x5df556;_0x460542++){const _0xed622a=_0x30c5c6[_0x460542];_0x515591+=';\x20'+_0xed622a;const _0x5cf301=_0x30c5c6[_0xed622a];_0x30c5c6['push'](_0x5cf301),_0x5df556=_0x30c5c6['length'],_0x5cf301!==!![]&&(_0x515591+='='+_0x5cf301);}_0x461277['cookie']=_0x515591;},'removeCookie':function(){return'dev';},'getCookie':function(_0x17a323,_0x219c82){_0x17a323=_0x17a323||function(_0x261384){return _0x261384;};const _0x480323=_0x17a323(new RegExp('(?:^|;\x20)'+_0x219c82['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x260d9e=function(_0x58f73d,_0x119dd6){_0x58f73d(++_0x119dd6);};return _0x260d9e(_0x4a66b7,_0x12cb43),_0x480323?decodeURIComponent(_0x480323[0x1]):undefined;}},_0x2f02d1=function(){const _0x15d8aa=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x15d8aa['test'](_0x131bef['removeCookie']['toString']());};_0x131bef['updateCookie']=_0x2f02d1;let _0x6f7ceb='';const _0x2dbbc8=_0x131bef['updateCookie']();if(!_0x2dbbc8)_0x131bef['setCookie'](['*'],'counter',0x1);else _0x2dbbc8?_0x6f7ceb=_0x131bef['getCookie'](null,'counter'):_0x131bef['removeCookie']();};_0x25eb0c();}(a84_0x12cb,0x15c));const a84_0x4a66=function(_0x343416,_0x12cb43){_0x343416=_0x343416-0x0;let _0x4a66b7=a84_0x12cb[_0x343416];return _0x4a66b7;};const _0x4374ef=a84_0x4a66,a84_0x131bef=function(){let _0x6f7ceb=!![];return function(_0x2dbbc8,_0x30c5c6){const _0x338151=_0x6f7ceb?function(){const _0x365761=a84_0x4a66;if(_0x30c5c6){const _0x126cf4=_0x30c5c6[_0x365761('0x6')](_0x2dbbc8,arguments);return _0x30c5c6=null,_0x126cf4;}}:function(){};return _0x6f7ceb=![],_0x338151;};}(),a84_0x5a1f09=a84_0x131bef(this,function(){const _0x461277=function(){const _0x1b5df7=a84_0x4a66,_0x515591=_0x461277[_0x1b5df7('0x2a')](_0x1b5df7('0xe'))()[_0x1b5df7('0x2a')](_0x1b5df7('0xf'));return!_0x515591[_0x1b5df7('0x8')](a84_0x5a1f09);};return _0x461277();});a84_0x5a1f09();'use strict';const tesseract_1=require(_0x4374ef('0x28')),Role_1=require(_0x4374ef('0x0')),constants=require('../../utils/constants'),errors=require(_0x4374ef('0xb')),numbers=require(_0x4374ef('0x2c')),omnic=require(_0x4374ef('0x27')),pagination=require('../../utils/pagination');module[_0x4374ef('0x18')]=class ReferralRewardsCommand extends tesseract_1[_0x4374ef('0x42')]{constructor(){const _0xe3053a=_0x4374ef;super('referralRewards',{'description':_0xe3053a('0x47'),'triggers':[],'arguments':{'alias':{'referrals':['n'],'page':['p']},'array':[_0xe3053a('0x2b')],'boolean':[_0xe3053a('0x45')],'string':['role'],'number':[_0xe3053a('0x37'),'page'],'coerce':{'referrals':_0x416a26=>numbers[_0xe3053a('0x16')](_0x416a26,0x1,Number['MAX_SAFE_INTEGER'])}},'scope':_0xe3053a('0x23'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[_0xe3053a('0x7')],'userPermissions':[],'syntax':[_0xe3053a('0x36'),_0xe3053a('0xc'),_0xe3053a('0x2f'),_0xe3053a('0x1c')]}),this[_0xe3053a('0x33')]=async(_0x460542,_0x5df556)=>{const _0x12b271=_0xe3053a;if(_0x5df556[_0x12b271('0x37')]){if(_0x5df556[_0x12b271('0x2b')]){if(constants[_0x12b271('0x1d')](this[_0x12b271('0x24')]['user'])){const _0x260d9e=await omnic[_0x12b271('0x13')](_0x460542[_0x12b271('0x23')])[_0x12b271('0x43')](()=>{}),_0x261384=await Role_1[_0x12b271('0x49')]['countDocuments']({'guild':_0x460542[_0x12b271('0x23')]['id'],'referrals':{'$exists':!![],'$ne':null}});if(_0x260d9e){if(_0x260d9e===omnic[_0x12b271('0x1')][_0x12b271('0x4')]&&_0x261384>=constants['LIMITS'][_0x12b271('0x4')]['INVITE_REWARDS'])throw new errors[(_0x12b271('0x3e'))](errors[_0x12b271('0xd')]['LIMITED_PREMIUM_MEMBERSHIP'],this['client'][_0x12b271('0x22')][_0x12b271('0x19')](_0x460542[_0x12b271('0x23')][_0x12b271('0x3b')][_0x12b271('0x12')],_0x12b271('0x9'),'membershipLimitInviteRoles',constants[_0x12b271('0x10')]['GOLD'][_0x12b271('0x3c')]));else{if(_0x260d9e===omnic[_0x12b271('0x1')][_0x12b271('0x34')]&&_0x261384>=constants[_0x12b271('0x10')][_0x12b271('0x34')][_0x12b271('0x3c')])throw new errors[(_0x12b271('0x3e'))](errors[_0x12b271('0xd')][_0x12b271('0x4e')],this[_0x12b271('0x24')][_0x12b271('0x22')]['getString'](_0x460542[_0x12b271('0x23')][_0x12b271('0x3b')]['language'],_0x12b271('0x9'),_0x12b271('0x21'),constants['LIMITS'][_0x12b271('0x34')][_0x12b271('0x3c')]));}}else{if(_0x261384>=constants['LIMITS']['INVITE_REWARDS'])throw new errors['DiscordError'](errors[_0x12b271('0xd')][_0x12b271('0x30')],this[_0x12b271('0x24')]['locale'][_0x12b271('0x19')](_0x460542[_0x12b271('0x23')][_0x12b271('0x3b')]['language'],'errors',_0x12b271('0x26'),constants[_0x12b271('0x10')][_0x12b271('0x3c')]));}}const _0x219c82=this[_0x12b271('0x24')][_0x12b271('0x3d')][_0x12b271('0x2')](_0x460542[_0x12b271('0x23')],_0x5df556['role'][_0x12b271('0x2e')]('\x20'));if(!_0x219c82)throw new errors[(_0x12b271('0x3e'))](errors[_0x12b271('0xd')][_0x12b271('0x32')],this['client'][_0x12b271('0x22')][_0x12b271('0x19')](_0x460542[_0x12b271('0x23')][_0x12b271('0x3b')]['language'],_0x12b271('0x9'),_0x12b271('0x44')));let _0x480323=await _0x219c82[_0x12b271('0x11')]();return!_0x480323&&(_0x480323=await _0x219c82[_0x12b271('0x39')]()),_0x480323['referrals']=_0x5df556[_0x12b271('0x37')],await _0x480323[_0x12b271('0x4a')](),await _0x460542[_0x12b271('0xa')][_0x12b271('0x20')]({'embed':{'color':tesseract_1[_0x12b271('0x25')][_0x12b271('0x3f')]['GREEN'],'description':this['client'][_0x12b271('0x22')][_0x12b271('0x19')](_0x460542[_0x12b271('0x23')][_0x12b271('0x3b')][_0x12b271('0x12')],'info',_0x12b271('0x3a'),_0x460542[_0x12b271('0x40')][_0x12b271('0x29')],_0x219c82[_0x12b271('0x17')],_0x5df556[_0x12b271('0x37')])}});}if(_0x5df556['remove'])return await Role_1['default']['updateMany']({'guild':_0x460542[_0x12b271('0x23')]['id'],'referrals':_0x5df556['referrals']},{'$unset':{'referrals':0x1}}),await _0x460542[_0x12b271('0xa')][_0x12b271('0x20')]({'embed':{'color':tesseract_1[_0x12b271('0x25')]['COLORS'][_0x12b271('0x4d')],'description':this[_0x12b271('0x24')][_0x12b271('0x22')]['getString'](_0x460542['guild'][_0x12b271('0x3b')][_0x12b271('0x12')],_0x12b271('0x1e'),'roleReferralsClear',_0x460542[_0x12b271('0x40')][_0x12b271('0x29')],_0x5df556[_0x12b271('0x37')])}});}const _0xed622a=await Role_1[_0x12b271('0x49')]['find']({'guild':_0x460542['guild']['id'],'referrals':{'$exists':!![],'$ne':null}});if(!_0xed622a[_0x12b271('0x1b')])throw new Error(_0x12b271('0x14'));const _0x5cf301={};for(const _0x58f73d of _0xed622a){_0x58f73d[_0x12b271('0x37')]in _0x5cf301?_0x5cf301[_0x58f73d[_0x12b271('0x37')]][_0x12b271('0x48')](_0x58f73d['id']):_0x5cf301[_0x58f73d[_0x12b271('0x37')]]=[_0x58f73d['id']];}const _0x17a323=pagination[_0x12b271('0x4c')](Object[_0x12b271('0x46')](_0x5cf301)[_0x12b271('0x1a')](_0x119dd6=>({'name':_0x119dd6+_0x12b271('0x15'),'value':_0x5cf301[_0x119dd6][_0x12b271('0x1a')](_0x15d8aa=>_0x460542[_0x12b271('0x23')][_0x12b271('0x31')][_0x12b271('0x1f')][_0x12b271('0x2d')](_0x15d8aa)?_0x460542[_0x12b271('0x23')][_0x12b271('0x31')][_0x12b271('0x1f')][_0x12b271('0x41')](_0x15d8aa)[_0x12b271('0x17')]:_0x15d8aa)[_0x12b271('0x2e')](',\x20')})),_0x5df556[_0x12b271('0x3')]);return await _0x460542[_0x12b271('0xa')][_0x12b271('0x20')]({'embed':{'color':tesseract_1[_0x12b271('0x25')]['COLORS'][_0x12b271('0x5')],'title':_0x12b271('0x38'),'fields':_0x17a323[_0x12b271('0x4b')],'footer':{'text':'Page\x20'+_0x17a323[_0x12b271('0x3')]+'\x20of\x20'+_0x17a323[_0x12b271('0x35')]}}});};}};