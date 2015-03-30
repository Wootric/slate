---
title: Wootric Docs

language_tabs:
  - javascript

toc_footers:
  - <a href='#'>Sign Up for a Developer Key</a>
  - <a href='http://github.com/tripit/slate'>Documentation Powered by Slate</a>

includes:
  - install
  - custom_sampling
  - custom_fields
  - custom_messages


search: true
---

# Installing Wootric – A One Step Process!

Installing Wootric is easy – it should only take you 30 seconds. If coding isn’t your thing, we have
an option to email the Wootric code to a developer/colleague for quick assistance.

## Step 1. ­Add the code

Once you are signed up on the Wootric homepage, you will be taken directly to an installation
page. If you’re a return visitor to the site, sign in at wootric.com and click on the “Help” button in
the black banner near the top of the dashboard. You will see a code snippet with a unique
account_token for you to install.

```javascript
<!-- begin Wootric code -->
<script type="text/javascript">
wootric_survey_immediately = true; // Shows survey immediately for testing purposes. TODO: Comment out for production.
window.wootricSettings = {
  email:'nps@example.com',// TODO: The current logged in user's email address.
  created_at: 1234567890, // TODO: The current logged in user's sign-up date as a Unix timestamp.
  product_name: 'Wootric',// TODO: The name of the product or service
  account_token: 'NPS-7fbb3f3c'
};

</script>
<script type="text/javascript">/*{literal}<![CDATA[*/ if(window.wootricSettings){i=new Image;i.src="//d8myem934l1zi.cloudfront.net/pixel.gif?account_token="+window.wootricSettings.account_token+"&email="+encodeURIComponent(window.wootricSettings.email)+"&created_at="+window.wootricSettings.created_at+"&url="+encodeURIComponent(window.location)+"&random="+Math.random()}window.lightningjs||function(c){function g(b,d){d&&(d+=(/\?/.test(d)?"&":"?")+"lv=1");c[b]||function(){var i=window,h=document,j=b,g=h.location.protocol,l="load",k=0;(function(){function b(){a.P(l);a.w=1;c[j]("_load")}c[j]=function(){function m(){m.id=e;return c[j].apply(m,arguments)}var b,e=++k;b=this&&this!=i?this.id||0:0;(a.s=a.s||[]).push([e,b,arguments]);m.then=function(b,c,h){var d=a.fh[e]=a.fh[e]||[],j=a.eh[e]=a.eh[e]||[],f=a.ph[e]=a.ph[e]||[];b&&d.push(b);c&&j.push(c);h&&f.push(h);return m}; return m};var a=c[j]._={};a.fh={};a.eh={};a.ph={};a.l=d?d.replace(/^\/\//,(g=="https:"?g:"http:")+"//"):d;a.p={0:+new Date};a.P=function(b){a.p[b]=new Date-a.p[0]};a.w&&b();i.addEventListener?i.addEventListener(l,b,!1):i.attachEvent("on"+l,b);var q=function(){function b(){return["<head></head><",c,' onload="var d=',n,";d.getElementsByTagName('head')[0].",d,"(d.",g,"('script')).",i,"='",a.l,"'\"></",c,">"].join("")}var c="body",e=h[c];if(!e)return setTimeout(q,100);a.P(1);var d="appendChild",g="createElement", i="src",k=h[g]("div"),l=k[d](h[g]("div")),f=h[g]("iframe"),n="document",p;k.style.display="none";e.insertBefore(k,e.firstChild).id=o+"-"+j;f.frameBorder="0";f.id=o+"-frame-"+j;/MSIE[ ]+6/.test(navigator.userAgent)&&(f[i]="javascript:false");f.allowTransparency="true";l[d](f);try{f.contentWindow[n].open()}catch(s){a.domain=h.domain,p="javascript:var d="+n+".open();d.domain='"+h.domain+"';",f[i]=p+"void(0);"}try{var r=f.contentWindow[n];r.write(b());r.close()}catch(t){f[i]=p+'d.write("'+b().replace(/"/g, String.fromCharCode(92)+'"')+'");d.close();'}a.P(2)};a.l&&q()})()}();c[b].lv="1";return c[b]}var o="lightningjs",k=window[o]=g(o);k.require=g;k.modules=c}({}); window.wootric = lightningjs.require("wootric", "//d27j601g4x0gd5.cloudfront.net/beacon.js"); window.wootric("run"); /*]]>{/literal}*/</script> <!-- end Wootric code -->
```

You can either install the code yourself or email the code to a colleague.

### Forward the snippet to a colleague for help with install

In the section entitled “Share the Snippet”, enter the email of the person you’d like to receive the
snippet. We'll send them the code along with installation instructions.
