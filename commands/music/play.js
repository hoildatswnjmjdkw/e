const a91_0x2395=['get','RED','Constants','ArgumentTypes','has','type','unjoinable','setDeaf','--force-ipv4','play\x20Remember\x20The\x20Name\x20by\x20Ed\x20Sheeran','apply','getString','creator','speakable','Logger','--ignore-errors','activity','@bastion/tesseract','INVALID_COMMAND_SYNTAX','client','album','startStreamDispatcher','exports','noMusicChannelsAsOwner','push','error','rmdir','dispatcherFinishHandler','guild','href','getSongInfo','title','thumbnail','--referer=https://bastion.traction.one','members','--quiet','author','member','duration','mkdir','history','language','--no-cache-dir','--user-agent=Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010_15_0)\x20AppleWebKit/604.1\x20(KHTML,\x20like\x20Gecko)\x20Version/13.0.4\x20Safari/604.1','setActivity','URL','exec','locale','document','join','filter','keepAlive','pipe','uploader','musicDownloadError','playing','createWriteStream','track','channel','musicDirectory','textChannel','connection','alt_title','link','repeat','configurations','voice','../../utils/constants','isPublicBastion','Stopping\x20Playback','errors','shift','url','tag','.mp3','--no-warnings','cache','music','user','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','getInfo','uuid','COLORS','send','fulltitle','streamEndHandler','requester','enabled','../../utils/errors','channels','DiscordError','youtube-dl','return\x20/\x22\x20+\x20this\x20+\x20\x22/','./music/','promises','Up\x20Next','artist','catch','voiceChannel','--no-playlist','isMusicMaster','skipVotes','joinable','Added\x20to\x20Queue','failed','\x20•\x20','Playing','LISTENING','textChannelId','name','constructor','PINK','queue','--youtube-skip-dash-manifest','info','play','--format=bestaudio[protocol^=http]','streamInfoHandler','voiceChannelId','compile','leave','--geo-bypass-country=US','length'];(function(_0x4a5de7,_0x2395d6){const _0x1c6219=function(_0x356293){while(--_0x356293){_0x4a5de7['push'](_0x4a5de7['shift']());}};const _0x454d4c=function(){const _0x3ef5f5={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x35d6a6,_0x39ea87,_0x335fb6,_0x53ecd0){_0x53ecd0=_0x53ecd0||{};let _0x1fdb72=_0x39ea87+'='+_0x335fb6;let _0x475dfe=0x0;for(let _0x28bf25=0x0,_0x2c5c3e=_0x35d6a6['length'];_0x28bf25<_0x2c5c3e;_0x28bf25++){const _0x2790bf=_0x35d6a6[_0x28bf25];_0x1fdb72+=';\x20'+_0x2790bf;const _0x162d55=_0x35d6a6[_0x2790bf];_0x35d6a6['push'](_0x162d55);_0x2c5c3e=_0x35d6a6['length'];if(_0x162d55!==!![]){_0x1fdb72+='='+_0x162d55;}}_0x53ecd0['cookie']=_0x1fdb72;},'removeCookie':function(){return'dev';},'getCookie':function(_0x571fcf,_0x23c22f){_0x571fcf=_0x571fcf||function(_0xf9db2d){return _0xf9db2d;};const _0x58ad02=_0x571fcf(new RegExp('(?:^|;\x20)'+_0x23c22f['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x3952dd=function(_0x3a13d4,_0x8edeea){_0x3a13d4(++_0x8edeea);};_0x3952dd(_0x1c6219,_0x2395d6);return _0x58ad02?decodeURIComponent(_0x58ad02[0x1]):undefined;}};const _0x5357f1=function(){const _0x1ee222=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1ee222['test'](_0x3ef5f5['removeCookie']['toString']());};_0x3ef5f5['updateCookie']=_0x5357f1;let _0x2123f4='';const _0x269b16=_0x3ef5f5['updateCookie']();if(!_0x269b16){_0x3ef5f5['setCookie'](['*'],'counter',0x1);}else if(_0x269b16){_0x2123f4=_0x3ef5f5['getCookie'](null,'counter');}else{_0x3ef5f5['removeCookie']();}};_0x454d4c();}(a91_0x2395,0x77));const a91_0x1c62=function(_0x4a5de7,_0x2395d6){_0x4a5de7=_0x4a5de7-0x0;let _0x1c6219=a91_0x2395[_0x4a5de7];return _0x1c6219;};const a91_0x3ef5f5=function(){let _0x3cbac3=!![];return function(_0x1bd5af,_0x396050){const _0x2a8079=_0x3cbac3?function(){if(_0x396050){const _0x218a32=_0x396050[a91_0x1c62('0xe')](_0x1bd5af,arguments);_0x396050=null;return _0x218a32;}}:function(){};_0x3cbac3=![];return _0x2a8079;};}();const a91_0x356293=a91_0x3ef5f5(this,function(){const _0x277cba=function(){const _0x2b795f=_0x277cba[a91_0x1c62('0x72')](a91_0x1c62('0x60'))()[a91_0x1c62('0x0')](a91_0x1c62('0x53'));return!_0x2b795f['test'](a91_0x356293);};return _0x277cba();});a91_0x356293();'use strict';const fs=require('fs');const tesseract_1=require(a91_0x1c62('0x15'));const youtube=require(a91_0x1c62('0x5f'));const uuid_1=require(a91_0x1c62('0x55'));const constants=require(a91_0x1c62('0x47'));const errors=require(a91_0x1c62('0x5c'));module[a91_0x1c62('0x1a')]=class Play extends tesseract_1['Command']{constructor(){super(a91_0x1c62('0x77'),{'description':'It\x20allows\x20you\x20to\x20play\x20a\x20music\x20in\x20the\x20server,\x20from\x20the\x20given\x20queury\x20or\x20from\x20any\x20supported\x20source.','triggers':[],'arguments':{'alias':{'link':'l'},'coerce':{'link':tesseract_1[a91_0x1c62('0x6')][a91_0x1c62('0x7')][a91_0x1c62('0x31')]}},'scope':a91_0x1c62('0x20'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a91_0x1c62('0xd'),'play\x20--link\x20https://www.youtube.com/watch?v=dQw4w9WgXcQ']});this['streamInfoHandler']=(_0x36686b,_0x2ef6ba)=>{const _0x43541e=_0x2ef6ba['id'];const _0x36d1d8=_0x2ef6ba[a91_0x1c62('0x3d')]||_0x2ef6ba[a91_0x1c62('0x23')]||_0x2ef6ba[a91_0x1c62('0x58')]||_0x2ef6ba[a91_0x1c62('0x42')];const _0x23a39d=_0x2ef6ba['album'];const _0x47a5da=_0x2ef6ba['artist']||_0x2ef6ba[a91_0x1c62('0x10')]||_0x2ef6ba[a91_0x1c62('0x39')];const _0x30741c=_0x2ef6ba['duration'];const _0x3c7c66=_0x2ef6ba[a91_0x1c62('0x24')];const _0x77cdef=_0x2ef6ba['requester'];_0x36686b[a91_0x1c62('0x51')][a91_0x1c62('0x74')][a91_0x1c62('0x1c')]({'id':_0x43541e,'track':_0x36d1d8,'album':_0x23a39d,'artist':_0x47a5da,'duration':_0x30741c,'thumbnail':_0x3c7c66,'requester':_0x77cdef});const _0x531845=[];if(_0x23a39d){_0x531845[a91_0x1c62('0x1c')]({'name':'Album','value':_0x23a39d,'inline':!![]});}if(_0x47a5da){_0x531845[a91_0x1c62('0x1c')]({'name':'Artist','value':_0x47a5da,'inline':!![]});}_0x36686b[a91_0x1c62('0x51')][a91_0x1c62('0x40')][a91_0x1c62('0x57')]({'embed':{'color':tesseract_1['Constants'][a91_0x1c62('0x56')][a91_0x1c62('0x73')],'title':a91_0x1c62('0x6b'),'description':_0x36d1d8,'fields':_0x531845,'thumbnail':{'url':_0x3c7c66},'footer':{'text':(_0x36686b[a91_0x1c62('0x51')]['queue'][a91_0x1c62('0x3')]?'#'+(_0x36686b[a91_0x1c62('0x51')][a91_0x1c62('0x74')][a91_0x1c62('0x3')]-0x1):a91_0x1c62('0x63'))+(a91_0x1c62('0x6d')+_0x30741c+a91_0x1c62('0x6d')+(_0x36686b[a91_0x1c62('0x26')][a91_0x1c62('0x50')][a91_0x1c62('0x4')](_0x77cdef)[a91_0x1c62('0x52')][a91_0x1c62('0x4d')]||_0x77cdef))}}})[a91_0x1c62('0x65')](()=>{});};this[a91_0x1c62('0x59')]=_0x2ea24b=>{if(!_0x2ea24b[a91_0x1c62('0x51')]['playing']){this[a91_0x1c62('0x19')](_0x2ea24b);}};this['startStreamDispatcher']=_0x272cac=>{if(_0x272cac[a91_0x1c62('0x51')][a91_0x1c62('0x74')][a91_0x1c62('0x3')]){const _0x138f87=_0x272cac[a91_0x1c62('0x51')][a91_0x1c62('0x74')][0x0];const _0x543256=[];if(_0x138f87[a91_0x1c62('0x18')]){_0x543256[a91_0x1c62('0x1c')]({'name':'Album','value':_0x138f87[a91_0x1c62('0x18')],'inline':!![]});}if(_0x138f87[a91_0x1c62('0x64')]){_0x543256['push']({'name':'Artist','value':_0x138f87[a91_0x1c62('0x64')],'inline':!![]});}_0x272cac[a91_0x1c62('0x51')][a91_0x1c62('0x40')][a91_0x1c62('0x57')]({'embed':{'color':tesseract_1['Constants'][a91_0x1c62('0x56')][a91_0x1c62('0x73')],'title':a91_0x1c62('0x6e'),'description':_0x138f87[a91_0x1c62('0x3d')],'fields':_0x543256,'thumbnail':{'url':_0x138f87[a91_0x1c62('0x24')]},'footer':{'text':_0x138f87[a91_0x1c62('0x2a')]+a91_0x1c62('0x6d')+(_0x272cac[a91_0x1c62('0x26')][a91_0x1c62('0x50')][a91_0x1c62('0x4')](_0x138f87[a91_0x1c62('0x5a')])[a91_0x1c62('0x52')][a91_0x1c62('0x4d')]||_0x138f87[a91_0x1c62('0x5a')])}}})['catch'](()=>{});_0x272cac[a91_0x1c62('0x51')]['playing']=!![];const _0x186448=_0x272cac[a91_0x1c62('0x46')]&&_0x272cac[a91_0x1c62('0x46')][a91_0x1c62('0x41')][a91_0x1c62('0x77')](this['musicDirectory']+_0x272cac['id']+'/'+_0x138f87['id']+a91_0x1c62('0x4e'));if(this[a91_0x1c62('0x17')][a91_0x1c62('0x45')]['music']&&this[a91_0x1c62('0x17')][a91_0x1c62('0x45')][a91_0x1c62('0x51')]['activity']){this[a91_0x1c62('0x17')][a91_0x1c62('0x52')]['setActivity']({'name':_0x138f87['track'],'type':a91_0x1c62('0x6f')})['catch'](()=>{});}_0x186448['on']('finish',()=>this['dispatcherFinishHandler'](_0x272cac));_0x186448['on'](a91_0x1c62('0x1d'),_0x2f70c4=>{tesseract_1['Logger'][a91_0x1c62('0x1d')](_0x2f70c4);this[a91_0x1c62('0x1f')](_0x272cac);});}else{_0x272cac['music'][a91_0x1c62('0x74')]=[];_0x272cac[a91_0x1c62('0x51')][a91_0x1c62('0x2c')]=[];fs['promises'][a91_0x1c62('0x1e')](this['musicDirectory']+_0x272cac['id'],{'recursive':!![]})[a91_0x1c62('0x65')](()=>{});if(this[a91_0x1c62('0x17')][a91_0x1c62('0x45')][a91_0x1c62('0x51')]&&this['client'][a91_0x1c62('0x45')][a91_0x1c62('0x51')][a91_0x1c62('0x14')]){this[a91_0x1c62('0x17')][a91_0x1c62('0x52')][a91_0x1c62('0x30')](this[a91_0x1c62('0x17')][a91_0x1c62('0x45')]['presence']['activity'])[a91_0x1c62('0x65')](()=>{});}if(!_0x272cac['document'][a91_0x1c62('0x51')][a91_0x1c62('0x37')]){_0x272cac[a91_0x1c62('0x46')]&&_0x272cac[a91_0x1c62('0x46')][a91_0x1c62('0x3e')][a91_0x1c62('0x1')]();}_0x272cac[a91_0x1c62('0x51')][a91_0x1c62('0x40')]['send']({'embed':{'color':tesseract_1[a91_0x1c62('0x6')][a91_0x1c62('0x56')]['PINK'],'title':a91_0x1c62('0x49')}})[a91_0x1c62('0x65')](()=>{});}};this['dispatcherFinishHandler']=_0x5d0dd4=>{_0x5d0dd4[a91_0x1c62('0x51')][a91_0x1c62('0x3b')]=![];_0x5d0dd4[a91_0x1c62('0x51')][a91_0x1c62('0x69')]=[];if(_0x5d0dd4[a91_0x1c62('0x51')][a91_0x1c62('0x74')][a91_0x1c62('0x3')]){_0x5d0dd4[a91_0x1c62('0x51')]['history'][a91_0x1c62('0x1c')](_0x5d0dd4[a91_0x1c62('0x51')]['queue'][a91_0x1c62('0x4b')]());}if(!_0x5d0dd4[a91_0x1c62('0x51')]['queue']['length']&&_0x5d0dd4[a91_0x1c62('0x51')][a91_0x1c62('0x44')]){_0x5d0dd4['music'][a91_0x1c62('0x74')]=_0x5d0dd4[a91_0x1c62('0x51')][a91_0x1c62('0x2c')];_0x5d0dd4[a91_0x1c62('0x51')][a91_0x1c62('0x2c')]=[];}this[a91_0x1c62('0x19')](_0x5d0dd4);};this[a91_0x1c62('0x32')]=async(_0x551902,_0x2f43f6)=>{const _0x4778dd=_0x551902[a91_0x1c62('0x20')];if(!_0x4778dd['document'][a91_0x1c62('0x51')]||!_0x4778dd[a91_0x1c62('0x34')][a91_0x1c62('0x51')][a91_0x1c62('0x5b')]){return await _0x551902['channel'][a91_0x1c62('0x57')]({'embed':{'color':tesseract_1[a91_0x1c62('0x6')][a91_0x1c62('0x56')][a91_0x1c62('0x5')],'description':this[a91_0x1c62('0x17')][a91_0x1c62('0x33')][a91_0x1c62('0xf')](_0x551902['guild'][a91_0x1c62('0x34')][a91_0x1c62('0x2d')],a91_0x1c62('0x4a'),constants[a91_0x1c62('0x48')](_0x551902[a91_0x1c62('0x28')])?'musicDisabledPublic':'musicDisabled')}})[a91_0x1c62('0x65')](()=>{});}const _0x50bfe4=_0x2f43f6['_'][a91_0x1c62('0x35')]('\x20');const _0x43cde1=_0x50bfe4['length']?await this['getSongInfo'](_0x50bfe4):null;const _0x596630=_0x2f43f6[a91_0x1c62('0x43')]?_0x2f43f6['link'][a91_0x1c62('0x21')]:_0x43cde1?_0x43cde1['webpage_url']||_0x43cde1[a91_0x1c62('0x4c')]:null;if(!_0x596630)throw new errors[(a91_0x1c62('0x5e'))](errors['BASTION_ERROR_TYPE'][a91_0x1c62('0x16')],this['name']);_0x4778dd['music'][a91_0x1c62('0x40')]=_0x551902['guild']['channels'][a91_0x1c62('0x50')][a91_0x1c62('0x8')](_0x4778dd[a91_0x1c62('0x34')][a91_0x1c62('0x51')][a91_0x1c62('0x70')])?_0x551902['guild'][a91_0x1c62('0x5d')][a91_0x1c62('0x50')]['get'](_0x4778dd[a91_0x1c62('0x34')]['music'][a91_0x1c62('0x70')]):_0x551902[a91_0x1c62('0x3e')];_0x4778dd['music'][a91_0x1c62('0x66')]=_0x551902[a91_0x1c62('0x20')][a91_0x1c62('0x46')]&&_0x551902[a91_0x1c62('0x20')][a91_0x1c62('0x46')]['connection']?_0x551902['guild']['voice']['channel']:_0x551902[a91_0x1c62('0x20')][a91_0x1c62('0x5d')][a91_0x1c62('0x50')][a91_0x1c62('0x36')](_0x70c824=>_0x70c824[a91_0x1c62('0x9')]==='voice')['has'](_0x4778dd[a91_0x1c62('0x34')][a91_0x1c62('0x51')]['voiceChannelId'])?_0x551902[a91_0x1c62('0x20')][a91_0x1c62('0x5d')]['cache']['filter'](_0xcf8cd9=>_0xcf8cd9[a91_0x1c62('0x9')]===a91_0x1c62('0x46'))[a91_0x1c62('0x4')](_0x4778dd[a91_0x1c62('0x34')][a91_0x1c62('0x51')][a91_0x1c62('0x7a')]):_0x551902[a91_0x1c62('0x29')]['isMusicMaster']()?_0x551902[a91_0x1c62('0x29')][a91_0x1c62('0x46')][a91_0x1c62('0x3e')]:null;if(!_0x4778dd[a91_0x1c62('0x51')]['voiceChannel']){return await _0x551902[a91_0x1c62('0x3e')][a91_0x1c62('0x57')]({'embed':{'color':tesseract_1[a91_0x1c62('0x6')]['COLORS'][a91_0x1c62('0x5')],'description':this[a91_0x1c62('0x17')][a91_0x1c62('0x33')]['getString'](_0x551902[a91_0x1c62('0x20')][a91_0x1c62('0x34')][a91_0x1c62('0x2d')],a91_0x1c62('0x4a'),_0x551902['member'][a91_0x1c62('0x68')]()?a91_0x1c62('0x1b'):'noMusicChannels')}})[a91_0x1c62('0x65')](()=>{});}if(!_0x4778dd['music'][a91_0x1c62('0x66')][a91_0x1c62('0x6a')]){return await _0x551902['channel'][a91_0x1c62('0x57')]({'embed':{'color':tesseract_1[a91_0x1c62('0x6')][a91_0x1c62('0x56')][a91_0x1c62('0x5')],'description':this['client'][a91_0x1c62('0x33')][a91_0x1c62('0xf')](_0x551902['guild']['document'][a91_0x1c62('0x2d')],a91_0x1c62('0x4a'),a91_0x1c62('0xa'),_0x4778dd[a91_0x1c62('0x51')][a91_0x1c62('0x66')][a91_0x1c62('0x71')])}})['catch'](()=>{});}if(!_0x4778dd[a91_0x1c62('0x51')][a91_0x1c62('0x66')][a91_0x1c62('0x11')]){return await _0x551902['channel'][a91_0x1c62('0x57')]({'embed':{'color':tesseract_1[a91_0x1c62('0x6')]['COLORS']['RED'],'description':this['client'][a91_0x1c62('0x33')][a91_0x1c62('0xf')](_0x551902[a91_0x1c62('0x20')][a91_0x1c62('0x34')][a91_0x1c62('0x2d')],a91_0x1c62('0x4a'),'unspeakable',_0x4778dd[a91_0x1c62('0x51')]['voiceChannel'][a91_0x1c62('0x71')])}})['catch'](()=>{});}const _0x4aded9=await _0x4778dd[a91_0x1c62('0x51')][a91_0x1c62('0x66')][a91_0x1c62('0x35')]();_0x4aded9['on'](a91_0x1c62('0x1d'),tesseract_1['Logger'][a91_0x1c62('0x1d')]);_0x4aded9['on'](a91_0x1c62('0x6c'),tesseract_1['Logger'][a91_0x1c62('0x1d')]);_0x551902[a91_0x1c62('0x20')]['me'][a91_0x1c62('0x46')]['setMute'](![])[a91_0x1c62('0x65')](()=>{});_0x551902[a91_0x1c62('0x20')]['me'][a91_0x1c62('0x46')][a91_0x1c62('0xb')](!![])[a91_0x1c62('0x65')](()=>{});const _0x4e3619=uuid_1['v4']();const _0x41b81d=youtube(_0x596630,[a91_0x1c62('0x13'),a91_0x1c62('0xc'),a91_0x1c62('0x2'),'--no-playlist',a91_0x1c62('0x2e'),a91_0x1c62('0x27'),'--no-warnings',a91_0x1c62('0x2f'),a91_0x1c62('0x25'),'--format=bestaudio[protocol^=http]','--youtube-skip-dash-manifest'],{});_0x41b81d['on'](a91_0x1c62('0x76'),_0x379f4b=>this[a91_0x1c62('0x79')](_0x4778dd,{..._0x379f4b,'id':_0x4e3619,'requester':_0x551902[a91_0x1c62('0x28')]['id']}));_0x41b81d['on']('end',()=>this[a91_0x1c62('0x59')](_0x4778dd));_0x41b81d['on'](a91_0x1c62('0x1d'),()=>{_0x551902[a91_0x1c62('0x3e')][a91_0x1c62('0x57')]({'embed':{'color':tesseract_1[a91_0x1c62('0x6')][a91_0x1c62('0x56')][a91_0x1c62('0x5')],'description':this[a91_0x1c62('0x17')]['locale']['getString'](_0x551902[a91_0x1c62('0x20')][a91_0x1c62('0x34')][a91_0x1c62('0x2d')],a91_0x1c62('0x4a'),a91_0x1c62('0x3a'))}})[a91_0x1c62('0x65')](()=>{});});await fs[a91_0x1c62('0x62')][a91_0x1c62('0x2b')](this[a91_0x1c62('0x3f')]+_0x551902[a91_0x1c62('0x20')]['id']+'/',{'recursive':!![]})[a91_0x1c62('0x65')](tesseract_1[a91_0x1c62('0x12')][a91_0x1c62('0x1d')]);_0x41b81d[a91_0x1c62('0x38')](fs[a91_0x1c62('0x3c')](this[a91_0x1c62('0x3f')]+_0x551902[a91_0x1c62('0x20')]['id']+'/'+_0x4e3619+a91_0x1c62('0x4e')));};this['musicDirectory']=a91_0x1c62('0x61');}[a91_0x1c62('0x22')](_0x1f4230){return new Promise((_0x449af1,_0x16ed77)=>youtube[a91_0x1c62('0x54')]('ytsearch:'+_0x1f4230,['--ignore-errors',a91_0x1c62('0xc'),a91_0x1c62('0x2'),a91_0x1c62('0x67'),'--no-cache-dir',a91_0x1c62('0x27'),a91_0x1c62('0x4f'),a91_0x1c62('0x2f'),a91_0x1c62('0x25'),a91_0x1c62('0x78'),a91_0x1c62('0x75')],(_0x897ff4,_0x11f8c5)=>{if(_0x897ff4)return _0x16ed77(_0x897ff4);return _0x449af1(_0x11f8c5);}));}};