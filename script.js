const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('nav');
function closeMenu(){menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label',document.documentElement.lang==='ko'?'메뉴 열기':'Open menu');nav.classList.remove('open')}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',document.documentElement.lang==='ko'?(open?'메뉴 닫기':'메뉴 열기'):(open?'Close menu':'Open menu'));nav.classList.toggle('open',open)});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
const english=JSON.parse(document.getElementById('site-copy-en')?.textContent||'null')||Object.fromEntries([...document.querySelectorAll('[data-copy]')].map(el=>[el.dataset.copy,el.textContent]));
const korean={...window.pageKorean,headline:'샴버그에서 만나는 피아노 레슨',name:'정다미 선생님과 함께',award:'MTNA* 수상 경력의',teacher:'피아노 선생님',footnote:'*MTNA (미국 음악교사협회)',subscribers:'구독자 2.4만',youtube:'많은 사랑을 받는 YouTube 피아노 교육 채널 “Musium.”',experience:'30년 이상의 피아노 지도 경력',description:'수상 경력으로 인정받은 전문적인 피아노 지도. 어린이부터 성인, 상급자까지 탄탄한 기본기와 풍부한 음악적 표현을 학생 한분 한분에게 맞춰 가르칩니다.',consultation:'무료 상담 예약',best:'올해의 최우수 교사상',golden:'골든 티처상',organization:'MTNA (미국 음악교사협회)','nav-about':'강사 소개','nav-lessons':'레슨 안내','nav-features':'Musium의 특별함','nav-sample':'샘플 레슨','nav-testimonials':'수강 후기','nav-faq':'자주 묻는 질문','nav-contact':'문의하기'};
function updateSearchMetadata(language){
 const settings=JSON.parse(document.getElementById('seo-config').textContent),selected=settings[language];
 document.title=selected.title;
 document.querySelector('meta[name="description"]').content=selected.description;
 document.querySelector('link[rel="canonical"]').href=selected.url;
 const data=document.getElementById('structured-data'),graph=JSON.parse(data.textContent),page=graph['@graph'].find(item=>item['@type']==='WebPage');
 Object.assign(page,{'@id':selected.url+'#page',url:selected.url,name:selected.title,description:selected.description,inLanguage:language});data.textContent=JSON.stringify(graph);
 const next=language==='ko'?'/ko/':'/';
 const params=new URLSearchParams(location.search);params.delete('lang');
 history.replaceState(null,'',next+(params.size?'?'+params.toString():'')+location.hash);
}
function setLanguage(language){if(!['en','ko'].includes(language))language='en';document.documentElement.lang=language;document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===language)));document.querySelectorAll('[data-copy]').forEach(el=>el.textContent=(language==='ko'?korean:english)[el.dataset.copy]);updateSearchMetadata(language);document.querySelector('.photo img').alt=language==='ko'?'학생에게 피아노를 가르치는 정다미 선생님':'Dami Jeong teaching a student at the piano';closeMenu();document.dispatchEvent(new CustomEvent("musium-language",{detail:language}));try{localStorage.setItem('musium-language',language)}catch{}}
document.querySelectorAll('[data-lang]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.lang)));try{setLanguage(new URLSearchParams(location.search).get('lang')||(location.pathname.startsWith('/ko')?'ko':localStorage.getItem('musium-language')||'en'))}catch{setLanguage('en')}

const stickyHeader=document.querySelector(".header");
function updateHeaderHeight(){document.documentElement.style.setProperty("--header-height",`${stickyHeader.getBoundingClientRect().height}px`)}
new ResizeObserver(updateHeaderHeight).observe(stickyHeader);updateHeaderHeight();
stickyHeader.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener("click",()=>{closeMenu();updateHeaderHeight()}));
