const a117_0x9a2a=['data','value','includes','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','\x20Suicides','return\x20/\x22\x20+\x20this\x20+\x20\x22/','adventuresCompleted','destiny2\x20USERNAME\x20--platform\x20PLATFORM','keys','/playerstats/destiny2/','Score','@bastion/tesseract','merged','COLORS','deaths','Playtime','toUTCString','\x20Objectives\x20Completed\x0a','Extras','stats','join','\x20•\x20Powered\x20by\x20Bungie','PLAYER_DOESNT_EXIST','Win\x20Loss\x20Ratio','constructor','platforms','membershipType','\x20Precision\x20Kills','secondsPlayed','teamScore','heroicPublicEventsCompleted','Destiny\x202\x20-\x20Player\x20Stats','DiscordError','kills','name','displayValue','assists','\x20/\x20','allMedalsEarned','toLowerCase','steam','killsDeathsRatio','profile','Assists','xbl','indexOf','allTime','highestLightLevel','mergedAllCharacters','apply','Kills','It\x20allows\x20you\x20to\x20see\x20the\x20stats\x20of\x20any\x20Destiny\x202\x20player\x20in\x20any\x20supported\x20platform.','guild','basic','Best\x20Weapon\x20Type','length','killsDeathsAssists','objectivesCompleted','platform','DESTINY_2','KDR','../../utils/omnic','stadia','Team\x20Score','channel','Highest\x20Light\x20Level','test','KAD','makeRequest','destiny2\x20USERNAME','\x20Adventures\x20Completed\x0a','winLossRatio','KDA','blizzard'];(function(_0x1759b4,_0x9a2a77){const _0x4ad79e=function(_0x2da5c2){while(--_0x2da5c2){_0x1759b4['push'](_0x1759b4['shift']());}},_0x4e93bf=function(){const _0x56969c={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x953ff0,_0x1280b3,_0x4b70ac,_0xdd968d){_0xdd968d=_0xdd968d||{};let _0x4bb448=_0x1280b3+'='+_0x4b70ac,_0x10de51=0x0;for(let _0x1923ec=0x0,_0x1cd676=_0x953ff0['length'];_0x1923ec<_0x1cd676;_0x1923ec++){const _0x2e8436=_0x953ff0[_0x1923ec];_0x4bb448+=';\x20'+_0x2e8436;const _0x40abc3=_0x953ff0[_0x2e8436];_0x953ff0['push'](_0x40abc3),_0x1cd676=_0x953ff0['length'],_0x40abc3!==!![]&&(_0x4bb448+='='+_0x40abc3);}_0xdd968d['cookie']=_0x4bb448;},'removeCookie':function(){return'dev';},'getCookie':function(_0x37abd9,_0x310846){_0x37abd9=_0x37abd9||function(_0xc70757){return _0xc70757;};const _0x19a915=_0x37abd9(new RegExp('(?:^|;\x20)'+_0x310846['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x2240ca=function(_0x2a34ce,_0x5cfca1){_0x2a34ce(++_0x5cfca1);};return _0x2240ca(_0x4ad79e,_0x9a2a77),_0x19a915?decodeURIComponent(_0x19a915[0x1]):undefined;}},_0x4e7268=function(){const _0x5d4a70=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5d4a70['test'](_0x56969c['removeCookie']['toString']());};_0x56969c['updateCookie']=_0x4e7268;let _0x1c9785='';const _0xc1cbf8=_0x56969c['updateCookie']();if(!_0xc1cbf8)_0x56969c['setCookie'](['*'],'counter',0x1);else _0xc1cbf8?_0x1c9785=_0x56969c['getCookie'](null,'counter'):_0x56969c['removeCookie']();};_0x4e93bf();}(a117_0x9a2a,0x1bb));const a117_0x4ad7=function(_0x1759b4,_0x9a2a77){_0x1759b4=_0x1759b4-0x0;let _0x4ad79e=a117_0x9a2a[_0x1759b4];return _0x4ad79e;};const _0x2f7bd3=a117_0x4ad7,a117_0x56969c=function(){let _0x1c9785=!![];return function(_0xc1cbf8,_0x953ff0){const _0x1280b3=_0x1c9785?function(){const _0x346fa2=a117_0x4ad7;if(_0x953ff0){const _0x4b70ac=_0x953ff0[_0x346fa2('0x32')](_0xc1cbf8,arguments);return _0x953ff0=null,_0x4b70ac;}}:function(){};return _0x1c9785=![],_0x1280b3;};}(),a117_0x2da5c2=a117_0x56969c(this,function(){const _0xdd968d=function(){const _0x40f686=a117_0x4ad7,_0x4bb448=_0xdd968d[_0x40f686('0x19')](_0x40f686('0x6'))()['constructor'](_0x40f686('0x4'));return!_0x4bb448[_0x40f686('0x43')](a117_0x2da5c2);};return _0xdd968d();});a117_0x2da5c2();'use strict';const tesseract_1=require(_0x2f7bd3('0xc')),constants=require('../../utils/constants'),errors=require('../../utils/errors'),omnic=require(_0x2f7bd3('0x3e'));module['exports']=class Destiny2Command extends tesseract_1['Command']{constructor(){const _0x5219e8=_0x2f7bd3;super('destiny2',{'description':_0x5219e8('0x34'),'triggers':[],'arguments':{'alias':{'platform':['p']},'string':[_0x5219e8('0x3b')]},'scope':_0x5219e8('0x35'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[_0x5219e8('0x46'),_0x5219e8('0x8')]}),this['exec']=async(_0x10de51,_0x1923ec)=>{const _0x578715=_0x5219e8;if(!_0x1923ec['_'][_0x578715('0x38')])throw new errors[(_0x578715('0x21'))](errors['BASTION_ERROR_TYPE']['INVALID_COMMAND_SYNTAX'],this[_0x578715('0x23')]);const _0x1cd676=_0x1923ec['_'][_0x578715('0x15')]('\x20'),_0x2e8436=_0x1923ec[_0x578715('0x3b')]&&this[_0x578715('0x1a')][_0x578715('0x3')](_0x1923ec[_0x578715('0x3b')][_0x578715('0x28')]())?this[_0x578715('0x1a')][_0x578715('0x2e')](_0x1923ec['platform']['toLowerCase']()):-0x1,_0x40abc3=await omnic[_0x578715('0x45')](_0x578715('0xa')+_0x2e8436+'/'+encodeURIComponent(_0x1cd676)),_0x37abd9=await _0x40abc3['json']();if(!Object[_0x578715('0x9')](_0x37abd9)[_0x578715('0x38')])throw new Error(_0x578715('0x17'));await _0x10de51[_0x578715('0x41')]['send']({'embed':{'color':constants[_0x578715('0xe')][_0x578715('0x3c')],'author':{'name':_0x37abd9['membership']['displayName']},'title':_0x578715('0x20'),'description':'Last\x20played\x20on\x20'+new Date(_0x37abd9['profile'][_0x578715('0x2b')][_0x578715('0x1')]['dateLastPlayed'])[_0x578715('0x11')](),'fields':[{'name':_0x578715('0x10'),'value':_0x37abd9['stats'][_0x578715('0x31')][_0x578715('0xd')][_0x578715('0x2f')][_0x578715('0x1d')][_0x578715('0x36')][_0x578715('0x24')],'inline':!![]},{'name':'Highest\x20Light\x20Level','value':_0x37abd9[_0x578715('0x14')][_0x578715('0x31')]['merged'][_0x578715('0x2f')][_0x578715('0x30')]['basic']['displayValue'],'inline':!![]},{'name':_0x578715('0x42'),'value':_0x37abd9[_0x578715('0x14')][_0x578715('0x31')][_0x578715('0xd')][_0x578715('0x2f')]['highestLightLevel'][_0x578715('0x36')][_0x578715('0x24')],'inline':!![]},{'name':'Combat\x20Rating','value':_0x37abd9[_0x578715('0x14')][_0x578715('0x31')]['merged'][_0x578715('0x2f')]['combatRating'][_0x578715('0x36')][_0x578715('0x24')],'inline':!![]},{'name':_0x578715('0xb'),'value':_0x37abd9[_0x578715('0x14')][_0x578715('0x31')][_0x578715('0xd')]['allTime']['score'][_0x578715('0x36')][_0x578715('0x24')],'inline':!![]},{'name':_0x578715('0x40'),'value':_0x37abd9[_0x578715('0x14')]['mergedAllCharacters']['merged'][_0x578715('0x2f')][_0x578715('0x1e')][_0x578715('0x36')][_0x578715('0x24')],'inline':!![]},{'name':_0x578715('0x33'),'value':_0x37abd9[_0x578715('0x14')]['mergedAllCharacters'][_0x578715('0xd')][_0x578715('0x2f')][_0x578715('0x22')]['basic']['displayValue']+'\x20/\x20'+_0x37abd9[_0x578715('0x14')][_0x578715('0x31')]['merged'][_0x578715('0x2f')]['precisionKills'][_0x578715('0x36')][_0x578715('0x24')]+_0x578715('0x1c'),'inline':!![]},{'name':_0x578715('0x2c'),'value':_0x37abd9[_0x578715('0x14')]['mergedAllCharacters'][_0x578715('0xd')]['allTime'][_0x578715('0x25')]['basic'][_0x578715('0x24')],'inline':!![]},{'name':'Deaths','value':_0x37abd9[_0x578715('0x14')][_0x578715('0x31')][_0x578715('0xd')][_0x578715('0x2f')][_0x578715('0xf')][_0x578715('0x36')]['displayValue']+_0x578715('0x26')+_0x37abd9['stats'][_0x578715('0x31')]['merged']['allTime']['suicides'][_0x578715('0x36')]['displayValue']+_0x578715('0x5'),'inline':!![]},{'name':_0x578715('0x3d'),'value':_0x37abd9[_0x578715('0x14')]['mergedAllCharacters'][_0x578715('0xd')][_0x578715('0x2f')][_0x578715('0x2a')][_0x578715('0x36')]['displayValue'],'inline':!![]},{'name':_0x578715('0x49'),'value':_0x37abd9[_0x578715('0x14')][_0x578715('0x31')]['merged'][_0x578715('0x2f')][_0x578715('0x39')]['basic'][_0x578715('0x24')],'inline':!![]},{'name':_0x578715('0x44'),'value':((_0x37abd9[_0x578715('0x14')]['mergedAllCharacters'][_0x578715('0xd')][_0x578715('0x2f')][_0x578715('0x22')][_0x578715('0x36')][_0x578715('0x2')]+_0x37abd9['stats']['mergedAllCharacters'][_0x578715('0xd')]['allTime']['assists'][_0x578715('0x36')][_0x578715('0x2')])/_0x37abd9[_0x578715('0x14')][_0x578715('0x31')][_0x578715('0xd')][_0x578715('0x2f')]['deaths'][_0x578715('0x36')][_0x578715('0x2')])['toFixed'](0x2),'inline':!![]},{'name':_0x578715('0x18'),'value':_0x37abd9[_0x578715('0x14')][_0x578715('0x31')]['merged']['allTime'][_0x578715('0x48')][_0x578715('0x36')][_0x578715('0x24')],'inline':!![]},{'name':_0x578715('0x37'),'value':_0x37abd9['stats']['mergedAllCharacters'][_0x578715('0xd')][_0x578715('0x2f')]['weaponBestType']['basic']['displayValue'],'inline':!![]},{'name':'Total\x20Medals\x20Earned','value':_0x37abd9[_0x578715('0x14')][_0x578715('0x31')][_0x578715('0xd')][_0x578715('0x2f')][_0x578715('0x27')]['basic'][_0x578715('0x24')],'inline':!![]},{'name':_0x578715('0x13'),'value':_0x37abd9[_0x578715('0x14')]['mergedAllCharacters'][_0x578715('0xd')][_0x578715('0x2f')][_0x578715('0x3a')][_0x578715('0x36')]['displayValue']+_0x578715('0x12')+_0x37abd9['stats'][_0x578715('0x31')][_0x578715('0xd')][_0x578715('0x2f')][_0x578715('0x7')][_0x578715('0x36')]['displayValue']+_0x578715('0x47')+_0x37abd9[_0x578715('0x14')]['mergedAllCharacters'][_0x578715('0xd')][_0x578715('0x2f')][_0x578715('0x1f')]['basic'][_0x578715('0x24')]+'\x20Heroic\x20Public\x20Events\x20Completed'}],'footer':{'text':this[_0x578715('0x1a')][_0x37abd9['membership'][_0x578715('0x1b')]]['toUpperCase']()+_0x578715('0x16')}}});},this[_0x5219e8('0x1a')]=[null,_0x5219e8('0x2d'),'psn',_0x5219e8('0x29'),_0x5219e8('0x0'),_0x5219e8('0x3f')];}};