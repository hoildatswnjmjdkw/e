const a63_0x2f57=['channel','../../utils/errors','compile','errors','add','Constants','guild','@bastion/tesseract','resolver','COLORS','roles','language','iam','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','roleNotFound','exports','selfAddRole','It\x20allows\x20you\x20add\x20(and\x20remove)\x20yourself\x20to\x20(and\x20from)\x20the\x20Self\x20Roles\x20set\x20in\x20the\x20server.','test','constructor','join','length','author','client','not','document','name','return\x20/\x22\x20+\x20this\x20+\x20\x22/','send','locale','ROLE_NOT_FOUND','BASTION_ERROR_TYPE','selfAssignable','iam\x20--not\x20ROLE','ERROR','selfRemoveRole','member','tag','RED','GREEN','getString','iam\x20ROLE','apply','DiscordError'];(function(_0x71c169,_0x2f5713){const _0x35adaf=function(_0x1d74cc){while(--_0x1d74cc){_0x71c169['push'](_0x71c169['shift']());}};const _0xb9a791=function(){const _0x2ae738={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x15cd50,_0x467eac,_0x3c8a25,_0x23af8b){_0x23af8b=_0x23af8b||{};let _0x19aad4=_0x467eac+'='+_0x3c8a25;let _0x554955=0x0;for(let _0x9f793f=0x0,_0x3d1c07=_0x15cd50['length'];_0x9f793f<_0x3d1c07;_0x9f793f++){const _0x55f0c2=_0x15cd50[_0x9f793f];_0x19aad4+=';\x20'+_0x55f0c2;const _0x3e0e62=_0x15cd50[_0x55f0c2];_0x15cd50['push'](_0x3e0e62);_0x3d1c07=_0x15cd50['length'];if(_0x3e0e62!==!![]){_0x19aad4+='='+_0x3e0e62;}}_0x23af8b['cookie']=_0x19aad4;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1bcc22,_0x37ee82){_0x1bcc22=_0x1bcc22||function(_0x3c5e85){return _0x3c5e85;};const _0x371d4d=_0x1bcc22(new RegExp('(?:^|;\x20)'+_0x37ee82['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x21128b=function(_0x4e28e1,_0xf3934a){_0x4e28e1(++_0xf3934a);};_0x21128b(_0x35adaf,_0x2f5713);return _0x371d4d?decodeURIComponent(_0x371d4d[0x1]):undefined;}};const _0xd6696b=function(){const _0x4877db=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4877db['test'](_0x2ae738['removeCookie']['toString']());};_0x2ae738['updateCookie']=_0xd6696b;let _0x1e0784='';const _0x2e482c=_0x2ae738['updateCookie']();if(!_0x2e482c){_0x2ae738['setCookie'](['*'],'counter',0x1);}else if(_0x2e482c){_0x1e0784=_0x2ae738['getCookie'](null,'counter');}else{_0x2ae738['removeCookie']();}};_0xb9a791();}(a63_0x2f57,0x81));const a63_0x35ad=function(_0x71c169,_0x2f5713){_0x71c169=_0x71c169-0x0;let _0x35adaf=a63_0x2f57[_0x71c169];return _0x35adaf;};const a63_0x2ae738=function(){let _0xf0b657=!![];return function(_0x1ca18a,_0x106865){const _0x28fabc=_0xf0b657?function(){if(_0x106865){const _0x1e0562=_0x106865[a63_0x35ad('0x1')](_0x1ca18a,arguments);_0x106865=null;return _0x1e0562;}}:function(){};_0xf0b657=![];return _0x28fabc;};}();const a63_0x1d74cc=a63_0x2ae738(this,function(){const _0xe652fb=function(){const _0x1c5090=_0xe652fb[a63_0x35ad('0x16')](a63_0x35ad('0x1e'))()[a63_0x35ad('0x5')](a63_0x35ad('0x10'));return!_0x1c5090[a63_0x35ad('0x15')](a63_0x1d74cc);};return _0xe652fb();});a63_0x1d74cc();'use strict';const tesseract_1=require(a63_0x35ad('0xa'));const Role_1=require('../../models/Role');const errors=require(a63_0x35ad('0x4'));module[a63_0x35ad('0x12')]=class IAmCommand extends tesseract_1['Command']{constructor(){super(a63_0x35ad('0xf'),{'description':a63_0x35ad('0x14'),'triggers':[],'arguments':{'alias':{'not':['n']},'boolean':[a63_0x35ad('0x1b')]},'scope':a63_0x35ad('0x9'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a63_0x35ad('0x0'),a63_0x35ad('0x24')]});this['exec']=async(_0x57562f,_0x59c65d)=>{if(!_0x59c65d['_'][a63_0x35ad('0x18')])throw new errors['DiscordError'](errors[a63_0x35ad('0x22')]['INVALID_COMMAND_SYNTAX'],this[a63_0x35ad('0x1d')]);const _0x1c8a2b=this[a63_0x35ad('0x1a')][a63_0x35ad('0xb')]['resolveRole'](_0x57562f[a63_0x35ad('0x9')],_0x59c65d['_'][a63_0x35ad('0x17')]('\x20'));if(!_0x1c8a2b)throw new errors['DiscordError'](errors[a63_0x35ad('0x22')][a63_0x35ad('0x21')],this[a63_0x35ad('0x1a')][a63_0x35ad('0x20')][a63_0x35ad('0x2b')](_0x57562f[a63_0x35ad('0x9')]['document'][a63_0x35ad('0xe')],a63_0x35ad('0x6'),a63_0x35ad('0x11')));const _0xa8c861=await Role_1['default']['findById'](_0x1c8a2b['id']);if(!_0xa8c861||!_0xa8c861[a63_0x35ad('0x23')])throw new errors[(a63_0x35ad('0x2'))](errors[a63_0x35ad('0x22')][a63_0x35ad('0x25')],this[a63_0x35ad('0x1a')][a63_0x35ad('0x20')][a63_0x35ad('0x2b')](_0x57562f[a63_0x35ad('0x9')][a63_0x35ad('0x1c')][a63_0x35ad('0xe')],'errors','roleNotSelfAssignable',_0x1c8a2b[a63_0x35ad('0x1d')]));if(_0x59c65d[a63_0x35ad('0x1b')]){await _0x57562f['member'][a63_0x35ad('0xd')]['remove'](_0x1c8a2b);}else{await _0x57562f[a63_0x35ad('0x27')]['roles'][a63_0x35ad('0x7')](_0x1c8a2b);}await _0x57562f[a63_0x35ad('0x3')][a63_0x35ad('0x1f')]({'embed':{'color':_0x59c65d[a63_0x35ad('0x1b')]?tesseract_1[a63_0x35ad('0x8')]['COLORS'][a63_0x35ad('0x29')]:tesseract_1[a63_0x35ad('0x8')][a63_0x35ad('0xc')][a63_0x35ad('0x2a')],'description':this['client']['locale'][a63_0x35ad('0x2b')](_0x57562f[a63_0x35ad('0x9')][a63_0x35ad('0x1c')]['language'],'info',_0x59c65d['not']?a63_0x35ad('0x26'):a63_0x35ad('0x13'),_0x57562f[a63_0x35ad('0x19')][a63_0x35ad('0x28')],_0x1c8a2b['name'])}})['catch'](()=>{});};}};