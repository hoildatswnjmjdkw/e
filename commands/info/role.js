const a56_0x4d35=['items','cache','hoist','document','DiscordError','test','permissions','page','\x20/\x20','createdAt','roleInfo','tag','resolver','members','client','roleNotFound','\x20Members','values','exec','resolveRole','Position','map','guild','role\x20ROLE\x20--members\x20PAGE','Managed','user','../../utils/errors','errors','exports','pages','channel','name','Permissions','apply','managed','toUTCString','role\x20ROLE','compile','It\x20allows\x20you\x20see\x20the\x20information\x20of\x20a\x20role.\x20It\x20also\x20allows\x20you\x20to\x20see\x20the\x20members\x20in\x20a\x20role.','bitfield','Page\x20','roles','language','locale','size','Role\x20Members','paginate','role','join','\x20Role','Command','../../utils/pagination','rawPosition'];(function(_0x26dfb1,_0x4d35e0){const _0x1f7715=function(_0x4df039){while(--_0x4df039){_0x26dfb1['push'](_0x26dfb1['shift']());}};const _0x9c4b00=function(){const _0x166e0c={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5e75cd,_0x21a7d9,_0x5d652f,_0x7fe13){_0x7fe13=_0x7fe13||{};let _0x49258f=_0x21a7d9+'='+_0x5d652f;let _0x272f2c=0x0;for(let _0x399863=0x0,_0x4b24ce=_0x5e75cd['length'];_0x399863<_0x4b24ce;_0x399863++){const _0x917ebc=_0x5e75cd[_0x399863];_0x49258f+=';\x20'+_0x917ebc;const _0x2ed162=_0x5e75cd[_0x917ebc];_0x5e75cd['push'](_0x2ed162);_0x4b24ce=_0x5e75cd['length'];if(_0x2ed162!==!![]){_0x49258f+='='+_0x2ed162;}}_0x7fe13['cookie']=_0x49258f;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1daed8,_0x3fb53e){_0x1daed8=_0x1daed8||function(_0xa8c53d){return _0xa8c53d;};const _0x12527d=_0x1daed8(new RegExp('(?:^|;\x20)'+_0x3fb53e['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x3a4e00=function(_0x319147,_0x1b5324){_0x319147(++_0x1b5324);};_0x3a4e00(_0x1f7715,_0x4d35e0);return _0x12527d?decodeURIComponent(_0x12527d[0x1]):undefined;}};const _0x632b46=function(){const _0x248c76=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x248c76['test'](_0x166e0c['removeCookie']['toString']());};_0x166e0c['updateCookie']=_0x632b46;let _0x1ea9c5='';const _0x562a11=_0x166e0c['updateCookie']();if(!_0x562a11){_0x166e0c['setCookie'](['*'],'counter',0x1);}else if(_0x562a11){_0x1ea9c5=_0x166e0c['getCookie'](null,'counter');}else{_0x166e0c['removeCookie']();}};_0x9c4b00();}(a56_0x4d35,0x107));const a56_0x1f77=function(_0x26dfb1,_0x4d35e0){_0x26dfb1=_0x26dfb1-0x0;let _0x1f7715=a56_0x4d35[_0x26dfb1];return _0x1f7715;};const a56_0x166e0c=function(){let _0x1a7ca5=!![];return function(_0xdda474,_0x8d6005){const _0x19e82f=_0x1a7ca5?function(){if(_0x8d6005){const _0x4ea5a3=_0x8d6005[a56_0x1f77('0x23')](_0xdda474,arguments);_0x8d6005=null;return _0x4ea5a3;}}:function(){};_0x1a7ca5=![];return _0x19e82f;};}();const a56_0x4df039=a56_0x166e0c(this,function(){const _0x22a896=function(){const _0x2b751f=_0x22a896['constructor']('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a56_0x1f77('0x27')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x2b751f[a56_0x1f77('0x7')](a56_0x4df039);};return _0x22a896();});a56_0x4df039();'use strict';const tesseract_1=require('@bastion/tesseract');const errors=require(a56_0x1f77('0x1c'));const pagination=require(a56_0x1f77('0x0'));const strings=require('../../utils/strings');module[a56_0x1f77('0x1e')]=class RoleCommand extends tesseract_1[a56_0x1f77('0x34')]{constructor(){super(a56_0x1f77('0x31'),{'description':a56_0x1f77('0x28'),'triggers':[a56_0x1f77('0xc')],'arguments':{'alias':{'members':['m']},'number':[a56_0x1f77('0xf')]},'scope':a56_0x1f77('0x18'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a56_0x1f77('0x26'),a56_0x1f77('0x19')]});this[a56_0x1f77('0x14')]=async(_0x3ce260,_0x4591de)=>{const _0x26e981=_0x4591de['_'][a56_0x1f77('0x32')]('\x20');const _0x3f9248=this[a56_0x1f77('0x10')][a56_0x1f77('0xe')][a56_0x1f77('0x15')](_0x3ce260['guild'],_0x26e981);if(!_0x3f9248)throw new errors[(a56_0x1f77('0x6'))](errors['BASTION_ERROR_TYPE']['ROLE_NOT_FOUND'],this['client'][a56_0x1f77('0x2d')]['getString'](_0x3ce260['guild'][a56_0x1f77('0x5')][a56_0x1f77('0x2c')],a56_0x1f77('0x1d'),a56_0x1f77('0x11')));if(_0x4591de['members']){const _0x5e0e39=pagination[a56_0x1f77('0x30')]([..._0x3f9248['members'][a56_0x1f77('0x13')]()],_0x4591de['members']);return await _0x3ce260['channel']['send']({'embed':{'color':_0x3f9248['color'],'author':{'name':_0x3f9248[a56_0x1f77('0x21')]},'title':a56_0x1f77('0x2f'),'fields':_0x5e0e39[a56_0x1f77('0x2')][a56_0x1f77('0x17')](_0x3f0251=>({'name':_0x3f0251['displayName'],'value':_0x3f0251[a56_0x1f77('0x1b')][a56_0x1f77('0xd')]+a56_0x1f77('0xa')+_0x3f0251['id']})),'footer':{'text':a56_0x1f77('0x2a')+_0x5e0e39[a56_0x1f77('0x9')]+'\x20of\x20'+_0x5e0e39[a56_0x1f77('0x1f')]}}});}return await _0x3ce260[a56_0x1f77('0x20')]['send']({'embed':{'color':_0x3f9248['color'],'author':{'name':_0x3f9248[a56_0x1f77('0x21')]},'title':(_0x3f9248[a56_0x1f77('0x24')]?a56_0x1f77('0x1a'):'')+a56_0x1f77('0x33'),'fields':[{'name':a56_0x1f77('0x16'),'value':(_0x3ce260['guild'][a56_0x1f77('0x2b')][a56_0x1f77('0x3')][a56_0x1f77('0x2e')]-_0x3f9248[a56_0x1f77('0x1')])['toString'](),'inline':!![]},{'name':'Members','value':_0x3f9248[a56_0x1f77('0xf')][a56_0x1f77('0x2e')]+a56_0x1f77('0x12'),'inline':!![]},{'name':'Created','value':_0x3f9248[a56_0x1f77('0xb')][a56_0x1f77('0x25')](),'inline':!![]},{'name':a56_0x1f77('0x22'),'value':_0x3f9248[a56_0x1f77('0x8')][a56_0x1f77('0x29')]?_0x3f9248['permissions']['toArray']()[a56_0x1f77('0x17')](_0x532741=>strings['snakeToTitleCase'](_0x532741))[a56_0x1f77('0x32')](',\x20'):'-'}],'footer':{'text':(_0x3f9248[a56_0x1f77('0x4')]?'Hoisted\x20•\x20':'')+_0x3f9248['id']}}});};}};