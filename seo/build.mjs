import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

// Run: node seo/build.mjs [static-directory] [public-origin]
const root=path.resolve(process.argv[2]||'dist');
const origin=new URL(process.argv[3]||'https://www.musium.org').origin;
const file=path.join(root,'index.html');
let html=fs.readFileSync(file,'utf8');
const escape=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const json=x=>JSON.stringify(x).replaceAll('<','\\u003c');
const pattern=/(<([a-z0-9]+)\b[^>]*\bdata-copy="([^"]+)"[^>]*>)(.*?)(<\/\2>)/gis;
const context={window:{}};
vm.runInNewContext(fs.readFileSync(path.join(root,'translations.js'),'utf8'),context);
const script=fs.readFileSync(path.join(root,'script.js'),'utf8');
const definition=script.match(/const korean=([\s\S]*?);\nfunction /)[1];
const ko=vm.runInNewContext('('+definition+')',context);
const existing=html.match(/<script id="site-copy-en" type="application\/json">(.*?)<\/script>/s);
const en=existing?JSON.parse(existing[1]):Object.fromEntries([...html.matchAll(pattern)].map(m=>[m[3],m[4].replace(/<[^>]+>/g,'').replaceAll('&amp;','&').replaceAll('&quot;','"').replaceAll('&#39;',"'")]));
html=html.replace(/<script id="site-copy-en" type="application\/json">.*?<\/script>/s,'').replace(/<!-- SEO:start -->.*?<!-- SEO:end -->/s,'');
html=html.replace(/<meta name="description"[^>]*>/,'').replace(/<title>.*?<\/title>/s,'');
// Root-relative assets let both / and /ko/ render the identical layout.
html=html.replace(/\b(src|href)="(assets\/[^\"]+|(?:site-utilities|site-overrides|style|page|fidelity)\.css|(?:translations|videos|script|page)\.js)"/g,'$1="/$2"');
const config={en:{title:'Piano Lessons in Schaumburg | Dami Jeong | Musium',description:'Private piano lessons for children and adults in Schaumburg and online with Dami Jeong. Over 30 years of teaching experience. Book a free consultation.',url:origin+'/'},ko:{title:'샴버그 피아노 레슨 | 정다미 선생님 | Musium',description:'정다미 선생님의 샴버그 어린이·성인 피아노 레슨과 온라인 수업. 30년 이상의 지도 경력으로 초보부터 상급자까지 함께합니다. 무료 상담을 신청하세요.',url:origin+'/ko/'}};
for(const lang of ['en','ko']){
 const c=config[lang];
 let page=html.replace(/<html lang="[^"]+">/,`<html lang="${lang}">`).replace(pattern,(all,open,tag,key,content,close)=>open+escape((lang==='ko'?ko:en)[key]??en[key]??content)+close);
 const graph={'@context':'https://schema.org','@graph':[
  {'@type':'EducationalOrganization','@id':origin+'/#studio',name:'Musium',url:origin+'/',description:config.en.description,email:'pianomusium@gmail.com',telephone:'+1-331-223-4456',logo:origin+'/assets/img/musium-circle-logo%202.svg',sameAs:['https://www.youtube.com/@PianoMusium','https://blog.naver.com/pianomusium/','https://www.instagram.com/pianomusium/'],areaServed:{'@type':'City',name:'Schaumburg, Illinois'},founder:{'@id':origin+'/#instructor'}},
  {'@type':'Person','@id':origin+'/#instructor',name:'Dami Jeong',alternateName:'정다미',jobTitle:'Piano Teacher',worksFor:{'@id':origin+'/#studio'}},
  {'@type':'WebSite','@id':origin+'/#website',url:origin+'/',name:'Musium',alternateName:'PianoMusium',inLanguage:['en','ko'],publisher:{'@id':origin+'/#studio'}},
  {'@type':'WebPage','@id':c.url+'#page',url:c.url,name:c.title,description:c.description,inLanguage:lang,isPartOf:{'@id':origin+'/#website'},about:{'@id':origin+'/#studio'}}
 ]};
 const head=`<!-- SEO:start --><title>${escape(c.title)}</title><meta name="description" content="${escape(c.description)}"><meta name="robots" content="index,follow"><link rel="canonical" href="${c.url}"><link rel="alternate" hreflang="en" href="${config.en.url}"><link rel="alternate" hreflang="ko" href="${config.ko.url}"><link rel="alternate" hreflang="x-default" href="${config.en.url}"><script id="seo-config" type="application/json">${json(config)}</script><script id="structured-data" type="application/ld+json">${json(graph)}</script><!-- SEO:end --><script id="site-copy-en" type="application/json">${json(en)}</script>`;
 page=page.replace('</head>',head+'</head>');
 if(lang==='ko')page=page.replace('alt="Dami Jeong teaching a student at the piano"','alt="학생에게 피아노를 가르치는 정다미 선생님"').replace('data-lang="ko" aria-pressed="false"','data-lang="ko" aria-pressed="true"').replace('data-lang="en" aria-pressed="true"','data-lang="en" aria-pressed="false"');
 const dir=lang==='ko'?path.join(root,'ko'):root;fs.mkdirSync(dir,{recursive:true});fs.writeFileSync(path.join(dir,'index.html'),page);
}
fs.writeFileSync(path.join(root,'robots.txt'),`User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
fs.writeFileSync(path.join(root,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${['en','ko'].map(lang=>`<url><loc>${config[lang].url}</loc><xhtml:link rel="alternate" hreflang="en" href="${config.en.url}"/><xhtml:link rel="alternate" hreflang="ko" href="${config.ko.url}"/><xhtml:link rel="alternate" hreflang="x-default" href="${config.en.url}"/></url>`).join('\n')}\n</urlset>\n`);
console.log('Generated English/Korean SEO pages, structured data, robots.txt and sitemap.xml.');
