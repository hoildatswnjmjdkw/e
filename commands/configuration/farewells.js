const a18_0x5486=['\x20minutes','\x20•\x20','save','Farewells\x20','apply','message','join','No\x20Timeout','guild','farewells\x20--timeout\x20TIMEOUT_IN_MINUTES','farewells\x20--disable','Disabled','generateBastionEmbed','RED','has','COLORS','return\x20/\x22\x20+\x20this\x20+\x20\x22/','number','Channel\x20#','constructor','```json\x0a','farewells\x20--\x20MESSAGE','Constants','cache','disable','random','exports','stringify','channelId','channels','send','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','generateEmbed','length','farewell','Timeout\x20-\x20','exec','channel','get','name','document','Message','enable','timeout','Enabled','```'];(function(_0x474fa5,_0x5486a1){const _0x1f19ca=function(_0x380be2){while(--_0x380be2){_0x474fa5['push'](_0x474fa5['shift']());}},_0xf11a03=function(){const _0x1eece3={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x44ac0c,_0x235afc,_0x168e5d,_0x5dbae6){_0x5dbae6=_0x5dbae6||{};let _0x64ca0=_0x235afc+'='+_0x168e5d,_0x48af36=0x0;for(let _0x129447=0x0,_0x29a71b=_0x44ac0c['length'];_0x129447<_0x29a71b;_0x129447++){const _0xb30a55=_0x44ac0c[_0x129447];_0x64ca0+=';\x20'+_0xb30a55;const _0x38a685=_0x44ac0c[_0xb30a55];_0x44ac0c['push'](_0x38a685),_0x29a71b=_0x44ac0c['length'],_0x38a685!==!![]&&(_0x64ca0+='='+_0x38a685);}_0x5dbae6['cookie']=_0x64ca0;},'removeCookie':function(){return'dev';},'getCookie':function(_0x31e9c7,_0x34d877){_0x31e9c7=_0x31e9c7||function(_0x1ea93e){return _0x1ea93e;};const _0xb24df0=_0x31e9c7(new RegExp('(?:^|;\x20)'+_0x34d877['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x4a6924=function(_0x5ec630,_0x27dd96){_0x5ec630(++_0x27dd96);};return _0x4a6924(_0x1f19ca,_0x5486a1),_0xb24df0?decodeURIComponent(_0xb24df0[0x1]):undefined;}},_0x22085c=function(){const _0x3c8529=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3c8529['test'](_0x1eece3['removeCookie']['toString']());};_0x1eece3['updateCookie']=_0x22085c;let _0x4af3a8='';const _0xd0dba8=_0x1eece3['updateCookie']();if(!_0xd0dba8)_0x1eece3['setCookie'](['*'],'counter',0x1);else _0xd0dba8?_0x4af3a8=_0x1eece3['getCookie'](null,'counter'):_0x1eece3['removeCookie']();};_0xf11a03();}(a18_0x5486,0x18a));const a18_0x1f19=function(_0x474fa5,_0x5486a1){_0x474fa5=_0x474fa5-0x0;let _0x1f19ca=a18_0x5486[_0x474fa5];return _0x1f19ca;};const _0x343901=a18_0x1f19,a18_0x1eece3=function(){let _0x4af3a8=!![];return function(_0xd0dba8,_0x44ac0c){const _0x235afc=_0x4af3a8?function(){const _0x5d9404=a18_0x1f19;if(_0x44ac0c){const _0x168e5d=_0x44ac0c[_0x5d9404('0x18')](_0xd0dba8,arguments);return _0x44ac0c=null,_0x168e5d;}}:function(){};return _0x4af3a8=![],_0x235afc;};}(),a18_0x380be2=a18_0x1eece3(this,function(){const _0x5dbae6=function(){const _0x5de5c7=a18_0x1f19,_0x64ca0=_0x5dbae6[_0x5de5c7('0x27')](_0x5de5c7('0x24'))()[_0x5de5c7('0x27')](_0x5de5c7('0x5'));return!_0x64ca0['test'](a18_0x380be2);};return _0x5dbae6();});a18_0x380be2();'use strict';const tesseract_1=require('@bastion/tesseract'),embeds=require('../../utils/embeds');module[_0x343901('0x0')]=class Farewells extends tesseract_1['Command']{constructor(){const _0x3482f3=_0x343901;super('farewells',{'description':'It\x20allows\x20you\x20to\x20enable\x20(and\x20disable)\x20farewells\x20in\x20the\x20server.\x20It\x20also\x20allows\x20you\x20to\x20set\x20farewell\x20message\x20and\x20timeout.','triggers':[],'arguments':{'alias':{'disable':['d'],'enable':['e'],'timeout':['t']},'boolean':[_0x3482f3('0x2c'),'enable','random'],'number':[_0x3482f3('0x11')]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':['MANAGE_GUILD'],'syntax':['farewells\x20--enable',_0x3482f3('0x1e'),_0x3482f3('0x1d'),_0x3482f3('0x29'),'farewells\x20--random']}),this[_0x3482f3('0xa')]=async(_0x48af36,_0x129447)=>{const _0x5048b2=_0x3482f3,_0x29a71b=_0x48af36[_0x5048b2('0x1c')];_0x29a71b['document'][_0x5048b2('0x8')]={'channelId':_0x129447[_0x5048b2('0x10')]?_0x48af36[_0x5048b2('0xb')]['id']:_0x129447['disable']?undefined:_0x29a71b[_0x5048b2('0xe')][_0x5048b2('0x8')]?_0x29a71b[_0x5048b2('0xe')][_0x5048b2('0x8')][_0x5048b2('0x2')]:undefined,'message':_0x129447['_'][_0x5048b2('0x7')]?embeds[_0x5048b2('0x20')](_0x129447['_'][_0x5048b2('0x1a')]('\x20')):_0x129447[_0x5048b2('0x2d')]?undefined:_0x29a71b[_0x5048b2('0xe')][_0x5048b2('0x8')]?_0x29a71b['document'][_0x5048b2('0x8')][_0x5048b2('0x19')]:undefined,'timeout':typeof _0x129447['timeout']===_0x5048b2('0x25')?_0x129447['timeout']:_0x29a71b[_0x5048b2('0xe')][_0x5048b2('0x8')]?_0x29a71b[_0x5048b2('0xe')][_0x5048b2('0x8')]['timeout']:undefined},await _0x29a71b[_0x5048b2('0xe')][_0x5048b2('0x16')](),await _0x48af36[_0x5048b2('0xb')][_0x5048b2('0x4')]({'embed':{'color':_0x48af36['guild'][_0x5048b2('0x3')][_0x5048b2('0x2b')][_0x5048b2('0x22')](_0x29a71b[_0x5048b2('0xe')][_0x5048b2('0x8')][_0x5048b2('0x2')])?tesseract_1[_0x5048b2('0x2a')][_0x5048b2('0x23')]['IRIS']:tesseract_1[_0x5048b2('0x2a')][_0x5048b2('0x23')][_0x5048b2('0x21')],'title':_0x5048b2('0x17')+(_0x48af36[_0x5048b2('0x1c')][_0x5048b2('0x3')][_0x5048b2('0x2b')][_0x5048b2('0x22')](_0x29a71b[_0x5048b2('0xe')][_0x5048b2('0x8')][_0x5048b2('0x2')])?_0x5048b2('0x12'):_0x5048b2('0x1f')),'fields':[{'name':_0x5048b2('0xf'),'value':_0x29a71b[_0x5048b2('0xe')][_0x5048b2('0x8')]['message']?_0x5048b2('0x28')+JSON[_0x5048b2('0x1')](_0x29a71b[_0x5048b2('0xe')][_0x5048b2('0x8')]['message']?embeds[_0x5048b2('0x6')](_0x29a71b['document']['farewell']['message']):{})+_0x5048b2('0x13'):'[Default\x20Messages]'}],'footer':{'text':(_0x48af36[_0x5048b2('0x1c')][_0x5048b2('0x3')][_0x5048b2('0x2b')]['has'](_0x29a71b[_0x5048b2('0xe')][_0x5048b2('0x8')]['channelId'])?_0x5048b2('0x26')+_0x48af36[_0x5048b2('0x1c')]['channels'][_0x5048b2('0x2b')][_0x5048b2('0xc')](_0x29a71b[_0x5048b2('0xe')][_0x5048b2('0x8')][_0x5048b2('0x2')])[_0x5048b2('0xd')]+_0x5048b2('0x15'):'')+(typeof _0x29a71b[_0x5048b2('0xe')]['farewell'][_0x5048b2('0x11')]==='number'&&_0x29a71b[_0x5048b2('0xe')][_0x5048b2('0x8')]['timeout']?_0x5048b2('0x9')+(_0x29a71b[_0x5048b2('0xe')][_0x5048b2('0x8')][_0x5048b2('0x11')]+_0x5048b2('0x14')):_0x5048b2('0x1b'))}}});};}};