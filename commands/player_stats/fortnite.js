const a99_0x5a15=['makeRequest','../../utils/omnic','length','BASTION_ERROR_TYPE','error','FORTNITE','send','platformNameLong','../../utils/errors','xbl','channel','epicUserHandle','fortnite\x20USERNAME','platform','psn','name','json','../../utils/constants','guild','return\x20/\x22\x20+\x20this\x20+\x20\x22/','exec','map','INVALID_COMMAND_SYNTAX','COLORS','includes','test','platforms','join','DiscordError','/playerstats/fortnite/','key','fortnite','fortnite\x20USERNAME\x20--platform\x20PLATFORM','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','It\x20allows\x20you\x20to\x20see\x20the\x20stats\x20of\x20any\x20Fortnite\x20player\x20in\x20any\x20supported\x20platform.'];(function(_0x5a9853,_0x5a15c9){const _0x5ade3a=function(_0x192e8a){while(--_0x192e8a){_0x5a9853['push'](_0x5a9853['shift']());}};const _0x36bec1=function(){const _0x2606ce={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3eff7c,_0x4add20,_0x3da4f5,_0x10c173){_0x10c173=_0x10c173||{};let _0x560305=_0x4add20+'='+_0x3da4f5;let _0x30bdbf=0x0;for(let _0x1c3e82=0x0,_0x411a74=_0x3eff7c['length'];_0x1c3e82<_0x411a74;_0x1c3e82++){const _0x5757b8=_0x3eff7c[_0x1c3e82];_0x560305+=';\x20'+_0x5757b8;const _0x4eb7d3=_0x3eff7c[_0x5757b8];_0x3eff7c['push'](_0x4eb7d3);_0x411a74=_0x3eff7c['length'];if(_0x4eb7d3!==!![]){_0x560305+='='+_0x4eb7d3;}}_0x10c173['cookie']=_0x560305;},'removeCookie':function(){return'dev';},'getCookie':function(_0x273456,_0xe3f5f4){_0x273456=_0x273456||function(_0x2d40e4){return _0x2d40e4;};const _0x57ad89=_0x273456(new RegExp('(?:^|;\x20)'+_0xe3f5f4['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x458cdd=function(_0x3412a5,_0x31b9fc){_0x3412a5(++_0x31b9fc);};_0x458cdd(_0x5ade3a,_0x5a15c9);return _0x57ad89?decodeURIComponent(_0x57ad89[0x1]):undefined;}};const _0x21f676=function(){const _0x2e5e1b=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2e5e1b['test'](_0x2606ce['removeCookie']['toString']());};_0x2606ce['updateCookie']=_0x21f676;let _0x5bf767='';const _0x5a44b8=_0x2606ce['updateCookie']();if(!_0x5a44b8){_0x2606ce['setCookie'](['*'],'counter',0x1);}else if(_0x5a44b8){_0x5bf767=_0x2606ce['getCookie'](null,'counter');}else{_0x2606ce['removeCookie']();}};_0x36bec1();}(a99_0x5a15,0x1e0));const a99_0x5ade=function(_0x5a9853,_0x5a15c9){_0x5a9853=_0x5a9853-0x0;let _0x5ade3a=a99_0x5a15[_0x5a9853];return _0x5ade3a;};const a99_0x2606ce=function(){let _0x3fa902=!![];return function(_0x362847,_0x57af11){const _0x4f37aa=_0x3fa902?function(){if(_0x57af11){const _0x4e7b8a=_0x57af11['apply'](_0x362847,arguments);_0x57af11=null;return _0x4e7b8a;}}:function(){};_0x3fa902=![];return _0x4f37aa;};}();const a99_0x192e8a=a99_0x2606ce(this,function(){const _0x890297=function(){const _0x43c03a=_0x890297['constructor'](a99_0x5ade('0x1d'))()['compile'](a99_0x5ade('0x8'));return!_0x43c03a[a99_0x5ade('0x0')](a99_0x192e8a);};return _0x890297();});a99_0x192e8a();'use strict';const tesseract_1=require('@bastion/tesseract');const constants=require(a99_0x5ade('0x1b'));const errors=require(a99_0x5ade('0x12'));const omnic=require(a99_0x5ade('0xb'));module['exports']=class FortniteCommand extends tesseract_1['Command']{constructor(){super(a99_0x5ade('0x6'),{'description':a99_0x5ade('0x9'),'triggers':[],'arguments':{'alias':{'platform':['p']},'string':['platform']},'scope':a99_0x5ade('0x1c'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a99_0x5ade('0x16'),a99_0x5ade('0x7')]});this[a99_0x5ade('0x1e')]=async(_0x194e6c,_0x48b761)=>{if(!_0x48b761['_'][a99_0x5ade('0xc')])throw new errors[(a99_0x5ade('0x3'))](errors[a99_0x5ade('0xd')][a99_0x5ade('0x20')],this[a99_0x5ade('0x19')]);const _0x2d8ad7=_0x48b761['_'][a99_0x5ade('0x2')]('\x20');const _0x1e2e2e=_0x48b761[a99_0x5ade('0x17')]&&this[a99_0x5ade('0x1')][a99_0x5ade('0x22')](_0x48b761[a99_0x5ade('0x17')]['toLowerCase']())?_0x48b761['platform']['toLowerCase']():this[a99_0x5ade('0x1')][0x0];const _0x4b1aaf=await omnic[a99_0x5ade('0xa')](a99_0x5ade('0x4')+_0x1e2e2e+'/'+encodeURIComponent(_0x2d8ad7));const _0x1fde4a=await _0x4b1aaf[a99_0x5ade('0x1a')]();if(_0x1fde4a[a99_0x5ade('0xe')])throw new Error(_0x1fde4a[a99_0x5ade('0xe')]);await _0x194e6c[a99_0x5ade('0x14')][a99_0x5ade('0x10')]({'embed':{'color':constants[a99_0x5ade('0x21')][a99_0x5ade('0xf')],'author':{'name':_0x1fde4a[a99_0x5ade('0x15')]},'title':'Fortnite\x20-\x20Player\x20Stats','fields':_0x1fde4a['lifeTimeStats'][a99_0x5ade('0x1f')](_0x23a6c4=>({'name':_0x23a6c4[a99_0x5ade('0x5')],'value':_0x23a6c4['value'],'inline':!![]})),'footer':{'text':_0x1fde4a[a99_0x5ade('0x11')]['toUpperCase']()+'\x20•\x20Powered\x20by\x20Fortnite\x20Tracker'}}});};this[a99_0x5ade('0x1')]=['pc',a99_0x5ade('0x18'),a99_0x5ade('0x13')];}};