const a127_0x1cbd=['nextLevel','member','computeExperience','resolveBadges','find','DEFAUL_LEVELUP_MULTIPLIER','../../utils/badges','Bastion\x20Coins','../../utils/gamification','profileNotFound','Location','default','exec','../../models/Member','map','isPublicBastion','getConstant','About','Constants','send','exports','round','profile','author','guild','Karma','fetchBadges','backdrop','locale','Command','channel','IRIS','findOne','@bastion/tesseract','catch','badgeValue','../../utils/progress','currentLevel','cakeDay','client','Level','level','Rank','experience','displayAvatarURL','profile\x20USER','constructor','test','Oh,\x20hey!\x20Here\x27s\x20my\x20developer!','user','emoji','Cake\x20Day','../../models/User','tag','balance','Progress\x20-\x20','author.discord.id','memberNotFound','language','document','\x20/\x20','gamification','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','multiplier','karma','resolveGuildMember','Experience','It\x20allows\x20you\x20to\x20see\x20your\x20(or\x20any\x20of\x20the\x20server\x20member\x27s)\x20Bastion\x20Profile.','errors','countDocuments'];(function(_0x50978a,_0x1cbdec){const _0x54ee35=function(_0x25fabf){while(--_0x25fabf){_0x50978a['push'](_0x50978a['shift']());}},_0x5db451=function(){const _0x461c6f={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x56cc38,_0x22d033,_0x3917d0,_0x50f82d){_0x50f82d=_0x50f82d||{};let _0x22a04d=_0x22d033+'='+_0x3917d0,_0x17e00=0x0;for(let _0x4faf57=0x0,_0x2275a0=_0x56cc38['length'];_0x4faf57<_0x2275a0;_0x4faf57++){const _0x49d4d7=_0x56cc38[_0x4faf57];_0x22a04d+=';\x20'+_0x49d4d7;const _0x37841c=_0x56cc38[_0x49d4d7];_0x56cc38['push'](_0x37841c),_0x2275a0=_0x56cc38['length'],_0x37841c!==!![]&&(_0x22a04d+='='+_0x37841c);}_0x50f82d['cookie']=_0x22a04d;},'removeCookie':function(){return'dev';},'getCookie':function(_0x42b216,_0xb6af11){_0x42b216=_0x42b216||function(_0x8ba1cf){return _0x8ba1cf;};const _0x5a5d8c=_0x42b216(new RegExp('(?:^|;\x20)'+_0xb6af11['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0xf2de30=function(_0x9bff97,_0x1d0569){_0x9bff97(++_0x1d0569);};return _0xf2de30(_0x54ee35,_0x1cbdec),_0x5a5d8c?decodeURIComponent(_0x5a5d8c[0x1]):undefined;}},_0xc52526=function(){const _0x26d4ef=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x26d4ef['test'](_0x461c6f['removeCookie']['toString']());};_0x461c6f['updateCookie']=_0xc52526;let _0x17f4d7='';const _0x3ec843=_0x461c6f['updateCookie']();if(!_0x3ec843)_0x461c6f['setCookie'](['*'],'counter',0x1);else _0x3ec843?_0x17f4d7=_0x461c6f['getCookie'](null,'counter'):_0x461c6f['removeCookie']();};_0x5db451();}(a127_0x1cbd,0x1dc));const a127_0x54ee=function(_0x50978a,_0x1cbdec){_0x50978a=_0x50978a-0x0;let _0x54ee35=a127_0x1cbd[_0x50978a];return _0x54ee35;};const _0x2c1a5a=a127_0x54ee,a127_0x461c6f=function(){let _0x17f4d7=!![];return function(_0x3ec843,_0x56cc38){const _0x22d033=_0x17f4d7?function(){if(_0x56cc38){const _0x3917d0=_0x56cc38['apply'](_0x3ec843,arguments);return _0x56cc38=null,_0x3917d0;}}:function(){};return _0x17f4d7=![],_0x22d033;};}(),a127_0x25fabf=a127_0x461c6f(this,function(){const _0x50f82d=function(){const _0xc149be=a127_0x54ee,_0x22a04d=_0x50f82d[_0xc149be('0x3c')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0xc149be('0x3c')](_0xc149be('0x6'));return!_0x22a04d[_0xc149be('0x3d')](a127_0x25fabf);};return _0x50f82d();});a127_0x25fabf();'use strict';const tesseract_1=require(_0x2c1a5a('0x2f')),Member_1=require(_0x2c1a5a('0x1b')),User_1=require(_0x2c1a5a('0x42')),badges=require(_0x2c1a5a('0x14')),constants=require('../../utils/constants'),gamification=require(_0x2c1a5a('0x16')),progress_1=require(_0x2c1a5a('0x32'));module[_0x2c1a5a('0x22')]=class ProfileCommand extends tesseract_1[_0x2c1a5a('0x2b')]{constructor(){const _0x22ef9a=_0x2c1a5a;super('profile',{'description':_0x22ef9a('0xb'),'triggers':[],'arguments':{},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[_0x22ef9a('0x24'),_0x22ef9a('0x3b')]}),this[_0x22ef9a('0x1a')]=async(_0x17e00,_0x4faf57)=>{const _0x52a997=_0x22ef9a,_0x2275a0=_0x4faf57['_']['length']?_0x4faf57['_'][0x0]:_0x17e00[_0x52a997('0x25')]['id'],_0x49d4d7=_0x2275a0===_0x17e00['author']['id']?_0x17e00[_0x52a997('0xf')]:this[_0x52a997('0x35')]['resolver'][_0x52a997('0x9')](_0x17e00[_0x52a997('0x26')],_0x2275a0);if(!_0x49d4d7)throw new Error(this[_0x52a997('0x35')][_0x52a997('0x2a')]['getString'](_0x17e00[_0x52a997('0x26')][_0x52a997('0x3')][_0x52a997('0x2')],_0x52a997('0xc'),_0x52a997('0x1')));const _0x37841c=_0x2275a0===_0x17e00[_0x52a997('0x25')]['id']?_0x17e00[_0x52a997('0x25')]['document']:await User_1['default']['findById'](_0x2275a0),_0x42b216=_0x2275a0===_0x17e00[_0x52a997('0x25')]['id']?_0x49d4d7[_0x52a997('0x3')]:await Member_1[_0x52a997('0x19')][_0x52a997('0x2e')]({'user':_0x2275a0,'guild':_0x17e00[_0x52a997('0x26')]['id']});if(!_0x37841c||!_0x42b216)throw new Error(this[_0x52a997('0x35')][_0x52a997('0x2a')]['getString'](_0x17e00[_0x52a997('0x26')]['document'][_0x52a997('0x2')],_0x52a997('0xc'),_0x52a997('0x17'),_0x49d4d7[_0x52a997('0x3f')][_0x52a997('0x43')]));const _0xb6af11=await Member_1[_0x52a997('0x19')][_0x52a997('0x12')]({'guild':_0x17e00['guild']['id']},null,{'sort':{'level':-0x1,'experience':-0x1,'karma':-0x1,'balance':-0x1}})[_0x52a997('0xd')]({'$or':[{'level':{'$gt':_0x42b216[_0x52a997('0x37')]}},{'level':_0x42b216[_0x52a997('0x37')],'experience':{'$gt':_0x42b216[_0x52a997('0x39')]}},{'level':_0x42b216[_0x52a997('0x37')],'experience':_0x42b216[_0x52a997('0x39')],'karma':{'$gt':_0x42b216['karma']}},{'level':_0x42b216[_0x52a997('0x37')],'experience':_0x42b216[_0x52a997('0x39')],'karma':_0x42b216['karma'],'balance':{'$gt':_0x42b216[_0x52a997('0x44')]}}]}),_0x5a5d8c={'currentLevel':gamification['computeExperience'](_0x42b216['level'],_0x17e00[_0x52a997('0x26')][_0x52a997('0x3')][_0x52a997('0x5')]?_0x17e00[_0x52a997('0x26')]['document']['gamification']['multiplier']:gamification[_0x52a997('0x13')]),'nextLevel':gamification[_0x52a997('0x10')](_0x42b216['level']+0x1,_0x17e00[_0x52a997('0x26')]['document']['gamification']?_0x17e00[_0x52a997('0x26')][_0x52a997('0x3')][_0x52a997('0x5')][_0x52a997('0x7')]:gamification[_0x52a997('0x13')])},_0xf2de30={'currentLevel':_0x42b216[_0x52a997('0x39')]-_0x5a5d8c[_0x52a997('0x33')],'nextLevel':_0x5a5d8c[_0x52a997('0xe')]-_0x5a5d8c[_0x52a997('0x33')]},_0x8ba1cf=_0xf2de30['currentLevel']/_0xf2de30[_0x52a997('0xe')]*0x64,_0x9bff97=constants[_0x52a997('0x1d')](this[_0x52a997('0x35')][_0x52a997('0x3f')])&&await badges[_0x52a997('0x28')](_0x49d4d7['id'])['then'](_0x1d0569=>_0x1d0569['json']())['catch'](()=>{});_0x17e00[_0x52a997('0x2c')][_0x52a997('0x21')]({'embed':{'color':_0x37841c['color']||tesseract_1[_0x52a997('0x20')]['COLORS'][_0x52a997('0x2d')],'author':{'name':_0x49d4d7[_0x52a997('0x3f')][_0x52a997('0x43')]},'title':'Bastion\x20Profile','description':(_0x9bff97&&'badgeValue'in _0x9bff97?badges[_0x52a997('0x11')](_0x9bff97[_0x52a997('0x31')]):[])[_0x52a997('0x1c')](_0x26d4ef=>_0x26d4ef[_0x52a997('0x40')])['join']('\x20'),'fields':[{'name':_0x52a997('0x1f'),'value':_0x37841c['info']||'-'},{'name':_0x52a997('0x38'),'value':_0xb6af11+0x1,'inline':!![]},{'name':_0x52a997('0x36'),'value':_0x42b216[_0x52a997('0x37')],'inline':!![]},{'name':_0x52a997('0xa'),'value':_0x42b216[_0x52a997('0x39')],'inline':!![]},{'name':_0x52a997('0x27'),'value':_0x42b216[_0x52a997('0x8')],'inline':!![]},{'name':_0x52a997('0x15'),'value':_0x42b216[_0x52a997('0x44')],'inline':!![]},{'name':_0x52a997('0x45')+_0xf2de30['currentLevel']+_0x52a997('0x4')+_0xf2de30[_0x52a997('0xe')]+'\x20-\x20'+Math[_0x52a997('0x23')](_0x8ba1cf)+'%','value':'`'+progress_1['default'](_0x8ba1cf,0x23)+'`'},{'name':_0x52a997('0x41'),'value':_0x37841c[_0x52a997('0x34')]?_0x37841c[_0x52a997('0x34')]['toDateString']():'-','inline':!![]},{'name':_0x52a997('0x18'),'value':_0x37841c['location']||'-','inline':!![]}],'thumbnail':{'url':_0x49d4d7[_0x52a997('0x3f')][_0x52a997('0x3a')]({'dynamic':!![],'size':0x200})},'image':{'url':_0x37841c[_0x52a997('0x29')]},'footer':{'text':_0x49d4d7['id']===this['client'][_0x52a997('0x2a')][_0x52a997('0x1e')](_0x52a997('0x0'))?_0x52a997('0x3e'):''}}})[_0x52a997('0x30')](()=>{});};}};