const a101_0x3475=['psn','pubg\x20USERNAME\x20--platform\x20PLATFORM','winPoints','PLAYER_NOT_FOUND','squad-fpp','Command','stats','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','losses','channel','min\x20longest','Best\x20Kill\x20Streak','toLowerCase','toFixed','BASTION_ERROR_TYPE','stadia','profile','exec','m\x20on\x20vehicle\x20and\x20','name','roundMostKills','../../utils/errors','\x20days,\x20in\x20which\x20they\x20have\x20traveled\x20','\x20/\x20','Heals','platforms','Damage\x20Dealt','@bastion/tesseract','longestKill','Matches','kills','\x20•\x20Powered\x20by\x20Tracker\x20Network','\x20vehicles,\x20during\x20that\x20period.','\x20suicides','gameModeStats','pubg\x20USERNAME','send','exports','COLORS','guild','platform','headshotKills','Losses','pubg','toUpperCase','min\x20/\x20','modes','solo','join','vehicleDestroys','days','mode','solo-fpp','Overall\x20Points','rideDistance','test','m\x20on\x20foot.','\x20•\x20','return\x20/\x22\x20+\x20this\x20+\x20\x22/','damageDealt','duo-fpp','maxKillStreaks','compile','INVALID_COMMAND_SYNTAX','DiscordError','squad','length','Most\x20Kills\x20/\x20Round','/playerstats/pubg/','apply','Revives','timeSurvived','Kills','../../utils/constants','walkDistance','\x20headshots','keys','assists','wins','PUBG','revives','Assists','duo','attributes','killPoints','weaponsAcquired','It\x20allows\x20you\x20to\x20see\x20the\x20stats\x20of\x20any\x20Playerunknown\x27s\x20Battlegrounds\x20player\x20in\x20any\x20supported\x20platform.\x20It\x20also\x20allows\x20you\x20to\x20see\x20the\x20stats\x20in\x20separate\x20game\x20modes.'];(function(_0x1e24ee,_0x3475fc){const _0x303366=function(_0x4ed062){while(--_0x4ed062){_0x1e24ee['push'](_0x1e24ee['shift']());}};const _0x57f660=function(){const _0x59a713={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1a81e2,_0x5dbdf1,_0x314ac5,_0x7a00a6){_0x7a00a6=_0x7a00a6||{};let _0x1a1262=_0x5dbdf1+'='+_0x314ac5;let _0x4f8a9b=0x0;for(let _0x4707e6=0x0,_0x58fa3c=_0x1a81e2['length'];_0x4707e6<_0x58fa3c;_0x4707e6++){const _0x41c773=_0x1a81e2[_0x4707e6];_0x1a1262+=';\x20'+_0x41c773;const _0x10ed2a=_0x1a81e2[_0x41c773];_0x1a81e2['push'](_0x10ed2a);_0x58fa3c=_0x1a81e2['length'];if(_0x10ed2a!==!![]){_0x1a1262+='='+_0x10ed2a;}}_0x7a00a6['cookie']=_0x1a1262;},'removeCookie':function(){return'dev';},'getCookie':function(_0x8533e6,_0x383b55){_0x8533e6=_0x8533e6||function(_0x29f244){return _0x29f244;};const _0x254b46=_0x8533e6(new RegExp('(?:^|;\x20)'+_0x383b55['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x5df585=function(_0x31052e,_0x1e1d15){_0x31052e(++_0x1e1d15);};_0x5df585(_0x303366,_0x3475fc);return _0x254b46?decodeURIComponent(_0x254b46[0x1]):undefined;}};const _0x32d67d=function(){const _0x4c6cca=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4c6cca['test'](_0x59a713['removeCookie']['toString']());};_0x59a713['updateCookie']=_0x32d67d;let _0x247962='';const _0x5a853f=_0x59a713['updateCookie']();if(!_0x5a853f){_0x59a713['setCookie'](['*'],'counter',0x1);}else if(_0x5a853f){_0x247962=_0x59a713['getCookie'](null,'counter');}else{_0x59a713['removeCookie']();}};_0x57f660();}(a101_0x3475,0xe2));const a101_0x3033=function(_0x1e24ee,_0x3475fc){_0x1e24ee=_0x1e24ee-0x0;let _0x303366=a101_0x3475[_0x1e24ee];return _0x303366;};const a101_0x59a713=function(){let _0x406394=!![];return function(_0x440f80,_0x5d950c){const _0x2c55f3=_0x406394?function(){if(_0x5d950c){const _0x3a821e=_0x5d950c[a101_0x3033('0x11')](_0x440f80,arguments);_0x5d950c=null;return _0x3a821e;}}:function(){};_0x406394=![];return _0x2c55f3;};}();const a101_0x4ed062=a101_0x59a713(this,function(){const _0x248bba=function(){const _0xd6ef60=_0x248bba['constructor'](a101_0x3033('0x6'))()[a101_0x3033('0xa')](a101_0x3033('0x2a'));return!_0xd6ef60[a101_0x3033('0x3')](a101_0x4ed062);};return _0x248bba();});a101_0x4ed062();'use strict';const tesseract_1=require(a101_0x3033('0x3e'));const constants=require(a101_0x3033('0x15'));const errors=require(a101_0x3033('0x38'));const omnic=require('../../utils/omnic');module[a101_0x3033('0x48')]=class PUBGCommand extends tesseract_1[a101_0x3033('0x28')]{constructor(){super(a101_0x3033('0x4e'),{'description':a101_0x3033('0x22'),'triggers':[],'arguments':{'alias':{'platform':['p'],'mode':['m']},'string':[a101_0x3033('0x4b'),'mode']},'scope':a101_0x3033('0x4a'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a101_0x3033('0x46'),a101_0x3033('0x24'),'pubg\x20USERNAME\x20--platform\x20PLATFORM\x20--mode\x20MODE']});this[a101_0x3033('0x34')]=async(_0x2bb452,_0x44db93)=>{if(!_0x44db93['_'][a101_0x3033('0xe')])throw new errors[(a101_0x3033('0xc'))](errors[a101_0x3033('0x31')][a101_0x3033('0xb')],this[a101_0x3033('0x36')]);const _0x56ddea=_0x44db93['_'][a101_0x3033('0x53')]('\x20');const _0x2ba4fa=_0x44db93[a101_0x3033('0x4b')]&&this[a101_0x3033('0x3c')]['includes'](_0x44db93[a101_0x3033('0x4b')][a101_0x3033('0x2f')]())?_0x44db93[a101_0x3033('0x4b')][a101_0x3033('0x2f')]():this[a101_0x3033('0x3c')][0x0];const _0x339c6a=_0x44db93[a101_0x3033('0x56')]&&this['modes']['includes'](_0x44db93[a101_0x3033('0x56')][a101_0x3033('0x2f')]())?_0x44db93[a101_0x3033('0x56')][a101_0x3033('0x2f')]():this[a101_0x3033('0x51')][0x0];const _0x3d7d72=await omnic['makeRequest'](a101_0x3033('0x10')+_0x2ba4fa+'/'+encodeURIComponent(_0x56ddea));const _0x37156b=await _0x3d7d72['json']();if(!Object[a101_0x3033('0x18')](_0x37156b)['length'])throw new Error(a101_0x3033('0x26'));await _0x2bb452[a101_0x3033('0x2c')][a101_0x3033('0x47')]({'embed':{'color':constants[a101_0x3033('0x49')][a101_0x3033('0x1b')],'author':{'name':_0x37156b[a101_0x3033('0x33')][a101_0x3033('0x1f')][a101_0x3033('0x36')]},'title':'Playerunknown\x27s\x20Battlegrounds\x20-\x20Player\x20Stats','description':_0x37156b['profile'][a101_0x3033('0x1f')][a101_0x3033('0x36')]+'\x20has\x20played\x20for\x20'+_0x37156b[a101_0x3033('0x29')]['attributes']['gameModeStats'][_0x339c6a][a101_0x3033('0x55')]+a101_0x3033('0x39')+_0x37156b[a101_0x3033('0x29')][a101_0x3033('0x1f')][a101_0x3033('0x45')][_0x339c6a][a101_0x3033('0x2')][a101_0x3033('0x30')](0x2)+a101_0x3033('0x35')+_0x37156b[a101_0x3033('0x29')][a101_0x3033('0x1f')][a101_0x3033('0x45')][_0x339c6a][a101_0x3033('0x16')][a101_0x3033('0x30')](0x2)+a101_0x3033('0x4')+'\x20They\x27ve\x20acquired\x20'+_0x37156b[a101_0x3033('0x29')][a101_0x3033('0x1f')]['gameModeStats'][_0x339c6a][a101_0x3033('0x21')]+'\x20weapons\x20and\x20destroyed\x20'+_0x37156b[a101_0x3033('0x29')][a101_0x3033('0x1f')][a101_0x3033('0x45')][_0x339c6a][a101_0x3033('0x54')]+a101_0x3033('0x43'),'fields':[{'name':a101_0x3033('0x1'),'value':(_0x37156b[a101_0x3033('0x29')]['attributes'][a101_0x3033('0x45')][_0x339c6a][a101_0x3033('0x25')]+_0x37156b[a101_0x3033('0x29')]['attributes'][a101_0x3033('0x45')][_0x339c6a][a101_0x3033('0x20')]*0.2)[a101_0x3033('0x30')](0x2),'inline':!![]},{'name':'Win\x20Points','value':_0x37156b[a101_0x3033('0x29')]['attributes']['gameModeStats'][_0x339c6a][a101_0x3033('0x25')][a101_0x3033('0x30')](0x2),'inline':!![]},{'name':'Kill\x20Points','value':_0x37156b[a101_0x3033('0x29')][a101_0x3033('0x1f')][a101_0x3033('0x45')][_0x339c6a][a101_0x3033('0x20')]['toFixed'](0x2),'inline':!![]},{'name':a101_0x3033('0x40'),'value':_0x37156b['stats']['attributes'][a101_0x3033('0x45')][_0x339c6a]['roundsPlayed'],'inline':!![]},{'name':'Wins','value':_0x37156b['stats'][a101_0x3033('0x1f')]['gameModeStats'][_0x339c6a][a101_0x3033('0x1a')],'inline':!![]},{'name':a101_0x3033('0x4d'),'value':_0x37156b[a101_0x3033('0x29')][a101_0x3033('0x1f')]['gameModeStats'][_0x339c6a][a101_0x3033('0x2b')],'inline':!![]},{'name':a101_0x3033('0x14'),'value':_0x37156b[a101_0x3033('0x29')][a101_0x3033('0x1f')][a101_0x3033('0x45')][_0x339c6a][a101_0x3033('0x41')]+a101_0x3033('0x3a')+_0x37156b[a101_0x3033('0x29')][a101_0x3033('0x1f')][a101_0x3033('0x45')][_0x339c6a][a101_0x3033('0x4c')]+a101_0x3033('0x17'),'inline':!![]},{'name':a101_0x3033('0x1d'),'value':_0x37156b[a101_0x3033('0x29')][a101_0x3033('0x1f')][a101_0x3033('0x45')][_0x339c6a][a101_0x3033('0x19')],'inline':!![]},{'name':'Time\x20Survived','value':(_0x37156b[a101_0x3033('0x29')][a101_0x3033('0x1f')][a101_0x3033('0x45')][_0x339c6a][a101_0x3033('0x13')]/0x3c)['toFixed'](0x2)+a101_0x3033('0x50')+(_0x37156b[a101_0x3033('0x29')][a101_0x3033('0x1f')][a101_0x3033('0x45')][_0x339c6a]['longestTimeSurvived']/0x3c)[a101_0x3033('0x30')](0x2)+a101_0x3033('0x2d'),'inline':!![]},{'name':a101_0x3033('0x3b'),'value':_0x37156b[a101_0x3033('0x29')][a101_0x3033('0x1f')][a101_0x3033('0x45')][_0x339c6a]['heals'],'inline':!![]},{'name':a101_0x3033('0x12'),'value':_0x37156b['stats'][a101_0x3033('0x1f')][a101_0x3033('0x45')][_0x339c6a][a101_0x3033('0x1c')],'inline':!![]},{'name':a101_0x3033('0x3d'),'value':_0x37156b[a101_0x3033('0x29')][a101_0x3033('0x1f')][a101_0x3033('0x45')][_0x339c6a][a101_0x3033('0x7')][a101_0x3033('0x30')](0x2)+a101_0x3033('0x3a')+_0x37156b[a101_0x3033('0x29')][a101_0x3033('0x1f')][a101_0x3033('0x45')][_0x339c6a]['suicides']+a101_0x3033('0x44'),'inline':!![]},{'name':a101_0x3033('0xf'),'value':_0x37156b[a101_0x3033('0x29')]['attributes'][a101_0x3033('0x45')][_0x339c6a][a101_0x3033('0x37')],'inline':!![]},{'name':a101_0x3033('0x2e'),'value':_0x37156b['stats'][a101_0x3033('0x1f')][a101_0x3033('0x45')][_0x339c6a][a101_0x3033('0x9')],'inline':!![]},{'name':'Longest\x20Kill','value':_0x37156b[a101_0x3033('0x29')][a101_0x3033('0x1f')][a101_0x3033('0x45')][_0x339c6a][a101_0x3033('0x3f')][a101_0x3033('0x30')](0x2)+'s','inline':!![]}],'footer':{'text':_0x339c6a[a101_0x3033('0x4f')]()+a101_0x3033('0x5')+_0x2ba4fa[a101_0x3033('0x4f')]()+a101_0x3033('0x42')}}});};this[a101_0x3033('0x3c')]=['steam',a101_0x3033('0x23'),'xbox',a101_0x3033('0x32')];this[a101_0x3033('0x51')]=[a101_0x3033('0x52'),a101_0x3033('0x0'),a101_0x3033('0x1e'),a101_0x3033('0x8'),a101_0x3033('0xd'),a101_0x3033('0x27')];}};