const a70_0x1d0b=['create','author','COLORS','getString','roles\x20--create\x20NAME\x20--hoist\x20--\x20REASON','BASTION_ERROR_TYPE','../../utils/confirmation','join','compile','resolver','roles\x20--create\x20NAME\x20--\x20REASON','delete','roleDeleteQuestion','hoist','rename','roles\x20--create\x20NAME\x20--color\x20COLOR\x20--\x20REASON','roleCreate','ArgumentTypes','document','edit','roles\x20--create\x20NAME\x20--mentionable\x20--\x20REASON','Command','roleDelete','tag','client','catch','Constants','GREEN','MANAGE_ROLES','roleRename','../../utils/errors','name','default','test','roles','roles\x20--rename\x20ROLE\x20--name\x20NAME\x20--\x20REASON','constructor','resolveRole','channel','guild','color','info','COLOR','length','exports','send','It\x20allows\x20you\x20create,\x20delete\x20and\x20update\x20roles\x20in\x20the\x20server.','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','language','locale','mentionable'];(function(_0x345935,_0x1d0be4){const _0x42b8cc=function(_0x5aca8e){while(--_0x5aca8e){_0x345935['push'](_0x345935['shift']());}};const _0x4966fb=function(){const _0x2931b7={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x527834,_0x3f0c26,_0x3ba51a,_0x386fdb){_0x386fdb=_0x386fdb||{};let _0x5ba316=_0x3f0c26+'='+_0x3ba51a;let _0x1a25b8=0x0;for(let _0x29d1cf=0x0,_0x43f56a=_0x527834['length'];_0x29d1cf<_0x43f56a;_0x29d1cf++){const _0x260c71=_0x527834[_0x29d1cf];_0x5ba316+=';\x20'+_0x260c71;const _0xb862b2=_0x527834[_0x260c71];_0x527834['push'](_0xb862b2);_0x43f56a=_0x527834['length'];if(_0xb862b2!==!![]){_0x5ba316+='='+_0xb862b2;}}_0x386fdb['cookie']=_0x5ba316;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3c233e,_0x48dda9){_0x3c233e=_0x3c233e||function(_0x5c1aa4){return _0x5c1aa4;};const _0x938b35=_0x3c233e(new RegExp('(?:^|;\x20)'+_0x48dda9['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0xab0a7d=function(_0x5add0a,_0x1fc9c9){_0x5add0a(++_0x1fc9c9);};_0xab0a7d(_0x42b8cc,_0x1d0be4);return _0x938b35?decodeURIComponent(_0x938b35[0x1]):undefined;}};const _0x41f418=function(){const _0x3f3cc2=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3f3cc2['test'](_0x2931b7['removeCookie']['toString']());};_0x2931b7['updateCookie']=_0x41f418;let _0x5d6da7='';const _0x8913bf=_0x2931b7['updateCookie']();if(!_0x8913bf){_0x2931b7['setCookie'](['*'],'counter',0x1);}else if(_0x8913bf){_0x5d6da7=_0x2931b7['getCookie'](null,'counter');}else{_0x2931b7['removeCookie']();}};_0x4966fb();}(a70_0x1d0b,0x140));const a70_0x42b8=function(_0x345935,_0x1d0be4){_0x345935=_0x345935-0x0;let _0x42b8cc=a70_0x1d0b[_0x345935];return _0x42b8cc;};const a70_0x2931b7=function(){let _0x2e1029=!![];return function(_0x31a333,_0x188d89){const _0x2f6157=_0x2e1029?function(){if(_0x188d89){const _0x1c1683=_0x188d89['apply'](_0x31a333,arguments);_0x188d89=null;return _0x1c1683;}}:function(){};_0x2e1029=![];return _0x2f6157;};}();const a70_0x5aca8e=a70_0x2931b7(this,function(){const _0x32c4f0=function(){const _0x33346b=_0x32c4f0[a70_0x42b8('0x16')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a70_0x42b8('0x2d')](a70_0x42b8('0x21'));return!_0x33346b[a70_0x42b8('0x13')](a70_0x5aca8e);};return _0x32c4f0();});a70_0x5aca8e();'use strict';const tesseract_1=require('@bastion/tesseract');const confirmation_1=require(a70_0x42b8('0x2b'));const errors=require(a70_0x42b8('0x10'));module[a70_0x42b8('0x1e')]=class RolesCommand extends tesseract_1[a70_0x42b8('0x7')]{constructor(){super(a70_0x42b8('0x14'),{'description':a70_0x42b8('0x20'),'triggers':[],'arguments':{'array':['create',a70_0x42b8('0x30'),a70_0x42b8('0x11'),'rename'],'boolean':['hoist',a70_0x42b8('0x24')],'string':[a70_0x42b8('0x25'),'delete','rename'],'coerce':{'color':tesseract_1['Constants'][a70_0x42b8('0x3')][a70_0x42b8('0x1c')]}},'scope':a70_0x42b8('0x19'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':['MANAGE_ROLES'],'userPermissions':[a70_0x42b8('0xe')],'syntax':[a70_0x42b8('0x2f'),a70_0x42b8('0x1'),a70_0x42b8('0x29'),a70_0x42b8('0x6'),a70_0x42b8('0x15'),'roles\x20--delete\x20ROLE\x20--\x20REASON']});this['exec']=async(_0x17b492,_0x2f68d4)=>{const _0x8ead52=_0x2f68d4['_'][a70_0x42b8('0x2c')]('\x20')||'-';if(_0x2f68d4[a70_0x42b8('0x25')]&&_0x2f68d4[a70_0x42b8('0x25')][a70_0x42b8('0x1d')]){const _0x5649e3=await _0x17b492[a70_0x42b8('0x19')][a70_0x42b8('0x14')]['create']({'data':{'name':_0x2f68d4[a70_0x42b8('0x25')]['join']('\x20'),'color':_0x2f68d4[a70_0x42b8('0x1a')],'hoist':_0x2f68d4[a70_0x42b8('0x32')],'mentionable':_0x2f68d4[a70_0x42b8('0x24')]},'reason':_0x8ead52});return await _0x17b492[a70_0x42b8('0x18')]['send']({'embed':{'color':tesseract_1[a70_0x42b8('0xc')][a70_0x42b8('0x27')][a70_0x42b8('0xd')],'description':this[a70_0x42b8('0xa')][a70_0x42b8('0x23')][a70_0x42b8('0x28')](_0x17b492[a70_0x42b8('0x19')][a70_0x42b8('0x4')][a70_0x42b8('0x22')],a70_0x42b8('0x1b'),a70_0x42b8('0x2'),_0x17b492[a70_0x42b8('0x26')][a70_0x42b8('0x9')],_0x5649e3[a70_0x42b8('0x11')],_0x8ead52)}})[a70_0x42b8('0xb')](()=>{});}if(_0x2f68d4['delete']&&_0x2f68d4[a70_0x42b8('0x30')][a70_0x42b8('0x1d')]){const _0x437e9a=this[a70_0x42b8('0xa')][a70_0x42b8('0x2e')][a70_0x42b8('0x17')](_0x17b492[a70_0x42b8('0x19')],_0x2f68d4['delete']['join']('\x20'));const _0x30ca95=await confirmation_1[a70_0x42b8('0x12')](_0x17b492,this[a70_0x42b8('0xa')][a70_0x42b8('0x23')]['getString'](_0x17b492[a70_0x42b8('0x19')]['document']['language'],a70_0x42b8('0x1b'),a70_0x42b8('0x31'),_0x17b492[a70_0x42b8('0x26')][a70_0x42b8('0x9')],_0x437e9a[a70_0x42b8('0x11')]));if(_0x30ca95){await _0x437e9a[a70_0x42b8('0x30')](_0x8ead52);return await _0x17b492[a70_0x42b8('0x18')][a70_0x42b8('0x1f')]({'embed':{'color':tesseract_1['Constants'][a70_0x42b8('0x27')][a70_0x42b8('0xd')],'description':this[a70_0x42b8('0xa')][a70_0x42b8('0x23')][a70_0x42b8('0x28')](_0x17b492['guild'][a70_0x42b8('0x4')]['language'],'info',a70_0x42b8('0x8'),_0x17b492['author'][a70_0x42b8('0x9')],_0x437e9a[a70_0x42b8('0x11')],_0x8ead52)}})[a70_0x42b8('0xb')](()=>{});}return!![];}if(_0x2f68d4[a70_0x42b8('0x0')]&&_0x2f68d4[a70_0x42b8('0x0')][a70_0x42b8('0x1d')]&&_0x2f68d4[a70_0x42b8('0x11')]&&_0x2f68d4[a70_0x42b8('0x11')][a70_0x42b8('0x1d')]){let _0x1ffc9a=this[a70_0x42b8('0xa')][a70_0x42b8('0x2e')][a70_0x42b8('0x17')](_0x17b492['guild'],_0x2f68d4['rename'][a70_0x42b8('0x2c')]('\x20'));_0x1ffc9a=await _0x1ffc9a[a70_0x42b8('0x5')]({'name':_0x2f68d4['name'][a70_0x42b8('0x2c')]('\x20')});return await _0x17b492['channel']['send']({'embed':{'color':tesseract_1[a70_0x42b8('0xc')][a70_0x42b8('0x27')][a70_0x42b8('0xd')],'description':this[a70_0x42b8('0xa')]['locale'][a70_0x42b8('0x28')](_0x17b492[a70_0x42b8('0x19')][a70_0x42b8('0x4')][a70_0x42b8('0x22')],a70_0x42b8('0x1b'),a70_0x42b8('0xf'),_0x17b492[a70_0x42b8('0x26')][a70_0x42b8('0x9')],_0x1ffc9a[a70_0x42b8('0x11')],_0x8ead52)}})['catch'](()=>{});}throw new errors['DiscordError'](errors[a70_0x42b8('0x2a')]['INVALID_COMMAND_SYNTAX'],this[a70_0x42b8('0x11')]);};}};