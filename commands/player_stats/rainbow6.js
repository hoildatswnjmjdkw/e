const a102_0xa1e6=['Deaths','name','\x20has\x20played\x20PvP\x20matches\x20for\x20','general','PvE','\x0a**SKILL**\x20','Wins','Asia','current','steam','rainbow6\x20USERNAME\x20--platform\x20PLATFORM','push','emea','uplay','join','apply','exec','compile','Season\x20-\x20','America','playtime','platform','json','PLAYER_DOESNT_EXIST','Command','rank','map','Matches','\x20hours.','toFixed','region','rainbow6\x20USERNAME','pvp','KDR','RAINBOW6','seasons','\x20•\x20Powered\x20by\x20Ubisoft','constructor','Europe','\x20wins\x20/\x20','\x20-\x20Rank\x20','\x20deaths\x0a','psn','toLowerCase','../../utils/constants','pop','DiscordError','losses','makeRequest','level','Kills','values','resolveRegion','assists','deaths','rainbow6','../../utils/errors','username','wins','LDR','ncsa','length','skillMean','INVALID_COMMAND_SYNTAX','pve','send','\x20losses','WLR','@bastion/tesseract','\x20±\x20','user','platforms','xbl','kills','stats','Level','keys','matches'];(function(_0x56fbab,_0xa1e6d8){const _0x545aa2=function(_0xfbcbfd){while(--_0xfbcbfd){_0x56fbab['push'](_0x56fbab['shift']());}};const _0x4c8050=function(){const _0x564bb3={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x563beb,_0x39a284,_0x5c0f40,_0x5d2270){_0x5d2270=_0x5d2270||{};let _0x32a363=_0x39a284+'='+_0x5c0f40;let _0x2b2e83=0x0;for(let _0x315c36=0x0,_0x48425e=_0x563beb['length'];_0x315c36<_0x48425e;_0x315c36++){const _0x56d0cc=_0x563beb[_0x315c36];_0x32a363+=';\x20'+_0x56d0cc;const _0x2b76de=_0x563beb[_0x56d0cc];_0x563beb['push'](_0x2b76de);_0x48425e=_0x563beb['length'];if(_0x2b76de!==!![]){_0x32a363+='='+_0x2b76de;}}_0x5d2270['cookie']=_0x32a363;},'removeCookie':function(){return'dev';},'getCookie':function(_0x2715ef,_0x5d3764){_0x2715ef=_0x2715ef||function(_0x1c03f8){return _0x1c03f8;};const _0x588701=_0x2715ef(new RegExp('(?:^|;\x20)'+_0x5d3764['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x4ada33=function(_0xc0076e,_0x15e646){_0xc0076e(++_0x15e646);};_0x4ada33(_0x545aa2,_0xa1e6d8);return _0x588701?decodeURIComponent(_0x588701[0x1]):undefined;}};const _0x24b260=function(){const _0x5b2155=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5b2155['test'](_0x564bb3['removeCookie']['toString']());};_0x564bb3['updateCookie']=_0x24b260;let _0xa049db='';const _0x25ce4b=_0x564bb3['updateCookie']();if(!_0x25ce4b){_0x564bb3['setCookie'](['*'],'counter',0x1);}else if(_0x25ce4b){_0xa049db=_0x564bb3['getCookie'](null,'counter');}else{_0x564bb3['removeCookie']();}};_0x4c8050();}(a102_0xa1e6,0x1d1));const a102_0x545a=function(_0x56fbab,_0xa1e6d8){_0x56fbab=_0x56fbab-0x0;let _0x545aa2=a102_0xa1e6[_0x56fbab];return _0x545aa2;};const a102_0x564bb3=function(){let _0x124990=!![];return function(_0x65cd49,_0x25ba9e){const _0x444706=_0x124990?function(){if(_0x25ba9e){const _0x23b218=_0x25ba9e[a102_0x545a('0x12')](_0x65cd49,arguments);_0x25ba9e=null;return _0x23b218;}}:function(){};_0x124990=![];return _0x444706;};}();const a102_0xfbcbfd=a102_0x564bb3(this,function(){const _0x129ac8=function(){const _0x51178e=_0x129ac8[a102_0x545a('0x28')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a102_0x545a('0x14')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x51178e['test'](a102_0xfbcbfd);};return _0x129ac8();});a102_0xfbcbfd();'use strict';const tesseract_1=require(a102_0x545a('0x47'));const constants=require(a102_0x545a('0x2f'));const errors=require(a102_0x545a('0x3b'));const omnic=require('../../utils/omnic');module['exports']=class Rainbow6Command extends tesseract_1[a102_0x545a('0x1b')]{constructor(){super(a102_0x545a('0x3a'),{'description':'It\x20allows\x20you\x20to\x20see\x20the\x20stats\x20of\x20any\x20Rainbow\x206\x20player\x20in\x20any\x20supported\x20platform.','triggers':['r6'],'arguments':{'alias':{'platform':['p']},'string':['platform']},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a102_0x545a('0x22'),a102_0x545a('0xd')]});this[a102_0x545a('0x37')]=_0x4ebcd1=>{_0x4ebcd1=_0x4ebcd1['toLowerCase']();switch(_0x4ebcd1){case a102_0x545a('0xf'):return a102_0x545a('0x29');case a102_0x545a('0x3f'):return a102_0x545a('0x16');case'apac':return a102_0x545a('0xa');default:return _0x4ebcd1;}};this[a102_0x545a('0x13')]=async(_0x35e1a5,_0x230e51)=>{if(!_0x230e51['_'][a102_0x545a('0x40')])throw new errors[(a102_0x545a('0x31'))](errors['BASTION_ERROR_TYPE'][a102_0x545a('0x42')],this[a102_0x545a('0x4')]);const _0x54f66e=_0x230e51['_'][a102_0x545a('0x11')]('\x20');const _0x5562c9=_0x230e51[a102_0x545a('0x18')]&&this[a102_0x545a('0x4a')]['includes'](_0x230e51[a102_0x545a('0x18')][a102_0x545a('0x2e')]())?_0x230e51[a102_0x545a('0x18')][a102_0x545a('0x2e')]():this['platforms'][0x0];const _0x26526e=await omnic[a102_0x545a('0x33')]('/playerstats/rainbow6/'+_0x5562c9+'/'+encodeURIComponent(_0x54f66e));const _0x3a10f5=await _0x26526e[a102_0x545a('0x19')]();if(!Object[a102_0x545a('0x1')](_0x3a10f5)[a102_0x545a('0x40')])throw new Error(a102_0x545a('0x1a'));const _0x2e15fb=[{'name':a102_0x545a('0x0'),'value':_0x3a10f5[a102_0x545a('0x34')]['level'],'inline':!![]},{'name':'XP','value':_0x3a10f5[a102_0x545a('0x34')]['xp'],'inline':!![]}];let _0x36cdc1;if(_0x3a10f5[a102_0x545a('0x1c')]){const _0x3bbadb=Object[a102_0x545a('0x1')](_0x3a10f5['rank'][a102_0x545a('0x26')]);if(_0x3bbadb['length']){const _0x34e04a=_0x3a10f5[a102_0x545a('0x1c')][a102_0x545a('0x26')][_0x3bbadb[a102_0x545a('0x30')]()];let _0x39ccf6=-0x1;_0x2e15fb[a102_0x545a('0xe')]({'name':a102_0x545a('0x15')+_0x34e04a['id'],'value':_0x34e04a['name']},...Object[a102_0x545a('0x36')](_0x34e04a['regions'])[a102_0x545a('0x1d')](_0x24b2ba=>{if(_0x24b2ba[a102_0x545a('0xb')]['id']>_0x39ccf6){_0x39ccf6=_0x24b2ba[a102_0x545a('0xb')]['id'];_0x36cdc1=_0x24b2ba['current']['image'];}return{'name':this[a102_0x545a('0x37')](_0x24b2ba[a102_0x545a('0x21')]),'value':_0x24b2ba[a102_0x545a('0xb')]['name']+a102_0x545a('0x2b')+_0x24b2ba[a102_0x545a('0xb')]['id']+a102_0x545a('0x8')+_0x24b2ba[a102_0x545a('0x41')]['toFixed'](0x2)+a102_0x545a('0x48')+_0x24b2ba['skillStdev'][a102_0x545a('0x20')](0x2)+'\x0a'+_0x24b2ba['kills']+'\x20kills\x20/\x20'+_0x24b2ba[a102_0x545a('0x39')]+a102_0x545a('0x2c')+_0x24b2ba['wins']+a102_0x545a('0x2a')+_0x24b2ba[a102_0x545a('0x32')]+a102_0x545a('0x45'),'inline':!![]};}));}}if(_0x3a10f5['stats'][a102_0x545a('0x23')]&&_0x3a10f5[a102_0x545a('0x4d')][a102_0x545a('0x23')][a102_0x545a('0x6')]){_0x2e15fb[a102_0x545a('0xe')]({'name':'PvP','value':_0x3a10f5[a102_0x545a('0x49')][a102_0x545a('0x3c')]+a102_0x545a('0x5')+(_0x3a10f5[a102_0x545a('0x4d')][a102_0x545a('0x23')]['general'][a102_0x545a('0x17')]/0x3c/0x3c)[a102_0x545a('0x20')](0x2)+a102_0x545a('0x1f')},{'name':a102_0x545a('0x1e'),'value':_0x3a10f5[a102_0x545a('0x4d')][a102_0x545a('0x23')]['general'][a102_0x545a('0x2')],'inline':!![]},{'name':'Wins','value':_0x3a10f5['stats'][a102_0x545a('0x23')][a102_0x545a('0x6')][a102_0x545a('0x3d')],'inline':!![]},{'name':'Losses','value':_0x3a10f5[a102_0x545a('0x4d')]['pvp'][a102_0x545a('0x6')][a102_0x545a('0x32')],'inline':!![]},{'name':'Kills','value':_0x3a10f5['stats'][a102_0x545a('0x23')][a102_0x545a('0x6')][a102_0x545a('0x4c')],'inline':!![]},{'name':'Assists','value':_0x3a10f5[a102_0x545a('0x4d')][a102_0x545a('0x23')][a102_0x545a('0x6')][a102_0x545a('0x38')],'inline':!![]},{'name':a102_0x545a('0x3'),'value':_0x3a10f5['stats'][a102_0x545a('0x23')][a102_0x545a('0x6')][a102_0x545a('0x39')],'inline':!![]},{'name':a102_0x545a('0x46'),'value':_0x3a10f5[a102_0x545a('0x4d')]['pvp'][a102_0x545a('0x6')][a102_0x545a('0x32')]?(_0x3a10f5[a102_0x545a('0x4d')]['pvp'][a102_0x545a('0x6')][a102_0x545a('0x3d')]/_0x3a10f5['stats'][a102_0x545a('0x23')][a102_0x545a('0x6')][a102_0x545a('0x32')])['toFixed'](0x2):_0x3a10f5['stats'][a102_0x545a('0x23')][a102_0x545a('0x6')][a102_0x545a('0x3d')],'inline':!![]},{'name':a102_0x545a('0x3e'),'value':_0x3a10f5[a102_0x545a('0x4d')]['pvp'][a102_0x545a('0x6')]['deaths']?(_0x3a10f5[a102_0x545a('0x4d')][a102_0x545a('0x23')]['general'][a102_0x545a('0x4c')]/_0x3a10f5['stats'][a102_0x545a('0x23')][a102_0x545a('0x6')]['deaths'])['toFixed'](0x2):_0x3a10f5['stats'][a102_0x545a('0x23')]['general'][a102_0x545a('0x4c')],'inline':!![]});}if(_0x3a10f5[a102_0x545a('0x4d')][a102_0x545a('0x43')]&&_0x3a10f5['stats'][a102_0x545a('0x43')]['general']){_0x2e15fb['push']({'name':a102_0x545a('0x7'),'value':_0x3a10f5[a102_0x545a('0x49')]['username']+'\x20has\x20played\x20PvE\x20matches\x20for\x20'+(_0x3a10f5[a102_0x545a('0x4d')][a102_0x545a('0x43')][a102_0x545a('0x6')][a102_0x545a('0x17')]/0x3c/0x3c)[a102_0x545a('0x20')](0x2)+a102_0x545a('0x1f')},{'name':'Matches','value':_0x3a10f5[a102_0x545a('0x4d')]['pve'][a102_0x545a('0x6')][a102_0x545a('0x2')],'inline':!![]},{'name':a102_0x545a('0x9'),'value':_0x3a10f5[a102_0x545a('0x4d')][a102_0x545a('0x43')]['general'][a102_0x545a('0x3d')],'inline':!![]},{'name':'Losses','value':_0x3a10f5[a102_0x545a('0x4d')]['pve'][a102_0x545a('0x6')][a102_0x545a('0x32')],'inline':!![]},{'name':a102_0x545a('0x35'),'value':_0x3a10f5[a102_0x545a('0x4d')][a102_0x545a('0x43')]['general'][a102_0x545a('0x4c')],'inline':!![]},{'name':'Assists','value':_0x3a10f5['stats'][a102_0x545a('0x43')][a102_0x545a('0x6')]['assists'],'inline':!![]},{'name':'Deaths','value':_0x3a10f5[a102_0x545a('0x4d')]['pve'][a102_0x545a('0x6')][a102_0x545a('0x39')],'inline':!![]},{'name':a102_0x545a('0x46'),'value':_0x3a10f5[a102_0x545a('0x4d')]['pve'][a102_0x545a('0x6')][a102_0x545a('0x32')]?(_0x3a10f5[a102_0x545a('0x4d')][a102_0x545a('0x43')][a102_0x545a('0x6')][a102_0x545a('0x3d')]/_0x3a10f5['stats'][a102_0x545a('0x43')][a102_0x545a('0x6')][a102_0x545a('0x32')])[a102_0x545a('0x20')](0x2):_0x3a10f5[a102_0x545a('0x4d')][a102_0x545a('0x43')][a102_0x545a('0x6')]['wins'],'inline':!![]},{'name':a102_0x545a('0x24'),'value':_0x3a10f5[a102_0x545a('0x4d')]['pve'][a102_0x545a('0x6')][a102_0x545a('0x39')]?(_0x3a10f5[a102_0x545a('0x4d')][a102_0x545a('0x43')]['general'][a102_0x545a('0x4c')]/_0x3a10f5[a102_0x545a('0x4d')][a102_0x545a('0x43')][a102_0x545a('0x6')][a102_0x545a('0x39')])['toFixed'](0x2):_0x3a10f5[a102_0x545a('0x4d')]['pve'][a102_0x545a('0x6')][a102_0x545a('0x4c')],'inline':!![]});}await _0x35e1a5['channel'][a102_0x545a('0x44')]({'embed':{'color':constants['COLORS'][a102_0x545a('0x25')],'author':{'name':_0x3a10f5['user'][a102_0x545a('0x3c')]},'title':'Rainbow\x206\x20-\x20Player\x20Stats','fields':_0x2e15fb,'thumbnail':{'url':_0x36cdc1},'footer':{'text':_0x3a10f5[a102_0x545a('0x49')][a102_0x545a('0x18')]['toUpperCase']()+a102_0x545a('0x27')}}});};this[a102_0x545a('0x4a')]=[a102_0x545a('0x10'),a102_0x545a('0xc'),a102_0x545a('0x2d'),a102_0x545a('0x4b')];}};