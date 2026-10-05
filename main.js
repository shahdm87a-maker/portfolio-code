(function(){
'use strict';

var $ = function(s,r){
  return (r || document).querySelector(s);
};

var $$ = function(s,r){
  return Array.prototype.slice.call(
    (r || document).querySelectorAll(s)
  );
};

var root = document.documentElement;

var store = {
  get:function(k){
    try{
      return localStorage.getItem(k);
    }catch(e){
      return null;
    }
  },
  set:function(k,v){
    try{
      localStorage.setItem(k,v);
    }catch(e){}
  }
};

var reduce =
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if(reduce){
  root.setAttribute('data-motion','off');
}

/* =========================================================
   IMAGE PATHS
   IMPORTANT:
   All images are in the SAME folder as index.html
   There is NO assets folder.
========================================================= */

var IMG = {
  dd: 'digital-detective.jpg',
  nk: 'nakhaty.jpg',
  lib: 'library-website.jpg',
  skin: 'skincare-store.jpg',

  c_mean: 'certificate-mean-stack.jpg',
  c_ccna: 'certificate-ccna.jpg',
  c_cpp: 'certificate-cpp-101.jpg',
  c_java102: 'certificate-java-102.jpg',
  c_java101: 'certificate-java-101.jpg',
  c_intro: 'certificate-intro-programming.jpg'
};

var LINKS = {
  linkedin:'https://www.linkedin.com/in/shahd-mohammed-7a2840357',
  github:'https://github.com/shahdm87a-maker',
  recipes:'https://github.com/shahdm87a-maker/Recipes-From-Around-the-World'
};

var FORM_ENDPOINT =
  'https://formsubmit.co/ajax/shahd.m87a@gmail.com';


/* =========================================================
   I18N
========================================================= */

var AR = {

  b1:'شهد',
  b2:'محمد',
  brand_role:'مطورة Full-Stack',

  nav_home:'الرئيسية',
  nav_about:'عنّي',
  nav_skills:'المهارات',
  nav_services:'الخدمات',
  nav_projects:'المشاريع',
  nav_experience:'الخبرات',
  nav_certs:'الشهادات',
  nav_contact:'تواصل',

  cv:'تحميل السيرة الذاتية',

  hello:'أهلاً، أنا',
  n1:'شهد',
  n2:'محمد',
  role:'مطورة',

  lead:
  'أبني تطبيقات ويب حديثة باستخدام .NET وأصمّم أنظمة خلفية قابلة للتوسّع، لأحوّل الأفكار إلى حلول حقيقية. شغوفة بالكود النظيف وحل المشكلات والتعلّم المستمر.',

  btn_projects:'شاهد مشاريعي',
  scroll:'مرّر للأسفل',

  about_t:'عنّي',
  about_sub:'من أنا وماذا أفعل',

  about_p:
  'أنا <b>شهد محمد عويس</b>، مطورة برمجيات متخصصة في تطوير الـ Full-Stack وبناء حلول برمجية عملية وموثوقة. أدرس حالياً تكنولوجيا المعلومات وأركّز على تنمية مهاراتي في .NET، مع العمل على تقنيات الويب الحديثة مثل Angular وJavaScript وNode.js.',

  loc:'الفيوم، مصر',
  btn_more_about:'المزيد عنّي',

  skills_t:'مهاراتي',
  skills_sub:'التقنيات والأدوات التي أعمل بها',

  learn:'أتعلّم دائماً<br>وأتطوّر باستمرار',

  tech_h:'المهارات التقنية',
  prof_h:'المهارات المهنية',

  r_ps:'حل المشكلات',
  r_tw:'العمل الجماعي',
  r_cm:'التواصل',
  r_cl:'التعلّم المستمر',

  svc_t:'خدماتي',
  svc_sub:'ما يمكنني تقديمه لك',

  sv1_h:'تطوير ويب متكامل (Full-Stack)',
  sv1_p:'بناء تطبيقات ويب كاملة باستخدام أحدث التقنيات.',

  sv2_h:'تطوير ويب بـ .NET',
  sv2_p:'تطوير أنظمة خلفية موثوقة وقابلة للتوسّع باستخدام ASP.NET Core.',

  sv3_h:'ربط وتكامل الـ API',
  sv3_p:'تصميم وربط واجهات RESTful API لتواصل سلس بين الأنظمة.',

  sv4_h:'تطوير قواعد البيانات',
  sv4_p:'العمل مع SQL Server وMongoDB وتصميم قواعد بيانات فعّالة.',

  sv5_h:'تطوير الواجهات الأمامية',
  sv5_p:'إنشاء واجهات متجاوبة وتفاعلية باستخدام Angular وTypeScript وJavaScript وHTML وCSS.',

  sv_aria:'شاهد المشاريع',

  proj_t:'مشاريعي',
  proj_sub:'بعض من أحدث أعمالي',

  p_dd_d:
  'منصة ألعاب تحقيق مبنية بتقنية MEAN (Angular وExpress وMongoDB وNode.js).',

  p_nk_d:
  'تطبيق ويب لاستكشاف وصفات من مختلف دول العالم بواجهة عصرية.',

  p_lib_t:'موقع مكتبة',

  p_lib_d:
  'موقع أنيق لمكتبة عامة لتصفّح الكتب والبحث عنها وحجزها عبر الإنترنت.',

  p_sk_t:'متجر عناية بالبشرة',

  p_sk_d:
  'تجربة تسوّق إلكتروني عصرية لمنتجات العناية الطبيعية بالبشرة.',

  view_project:'عرض المشروع',
  view_cert:'عرض الشهادة',

  more_c_sub:'شاهد كل الشهادات',

  all_c_t:'كل الشهادات',
  all_c_sub:'التدريب والدورات والإنجازات',

  sending_msg:'جارٍ إرسال رسالتك...',
  sent_ok:'تم إرسال رسالتك بنجاح! سأرد عليك قريباً.',

  more:'المزيد',
  more_sub:'استكشف كل المشاريع',

  concept:'تصميم تجريبي',

  modal_note_c:'مشروع تجريبي: معاينة للتصميم.',
  modal_note_r:'معاينة المشروع.',
  modal_close:'إغلاق',

  all_t:'كل المشاريع',
  all_sub:'مجموعة من أعمالي وتصاميمي التجريبية',

  back:'العودة للرئيسية',

  f_all:'الكل',
  f_full:'Full-Stack',
  f_front:'واجهات أمامية',

  exp_t:'التعليم والخبرة',
  exp_sub:'رحلتي الأكاديمية والمهنية',

  acad:'الخلفية الأكاديمية',

  d_2024:'2024 - الآن',
  it_student:'طالبة تكنولوجيا معلومات',
  it_fac:
  'كلية الحاسبات والمعلومات والجامعة المصرية للتعلّم الإلكتروني (EELU).',

  d_2025:'2025 - الآن',
  depi:'مبادرة شباب مصر الرقمية (DEPI)',
  depi_d:'برنامج التخصّص في مسار .NET.',

  train:'التدريب والتخصّص',

  intensive:'تدريب مكثّف',
  fs_d:'مشاريع عملية متقدمة ومعماريات ويب للمؤسسات.',

  dbm:'إتقان قواعد البيانات',
  sql_d:'تصميم قواعد البيانات وتحسين الأداء وEntity Framework Core.',

  proexp:'الخبرة المهنية',

  iti_date:'أغسطس 2026 - سبتمبر 2026',
  iti:'معهد تكنولوجيا المعلومات (ITI)',
  iti_d:
  'تدريب عملي مكثّف في تطوير الـ Back-end والـ Full-Stack.',

  cert_t:'الشهادات',
  cert_sub:'الشهادات والإنجازات',

  cert1_t:
  'مبادرة شباب مصر الرقمية (DEPI) - مسار .NET',

  cert1_i:
  'مبادرة شباب مصر الرقمية',

  cert1_s:
  'قيد الدراسة - 2025 حتى الآن',

  cert_slot:'عنوان الشهادة',
  cert_slot_i:'الجهة المانحة · السنة',
  cert_slot_s:'مكان لشهادة جديدة',

  ban_t:'نبني حلولاً حقيقية',

  ban_p:
  'نحوّل الأفكار إلى تطبيقات عملية وقابلة للتوسّع بمعمارية نظيفة وأنظمة خلفية موثوقة وواجهات مستخدم عصرية.',

  st_projects:'مشاريع',
  st_tech:'تقنيات',
  st_passion:'شغف',

  con_t:'تواصل معي',
  con_sub:'لنبنِ شيئاً رائعاً معاً',

  con_lead:
  'أنا متاحة لفرص جديدة وتعاونات ومشاريع مميزة. لا تترددوا في التواصل معي!',

  lbl_email:'البريد الإلكتروني',
  lbl_phone:'الهاتف',
  lbl_loc:'الموقع',

  ph_name:'اسمك',
  ph_email:'بريدك الإلكتروني',
  ph_msg:'رسالتك',

  send:'إرسال الرسالة',

  err:
  'من فضلك اكتب اسمك وبريداً صحيحاً ورسالتك.',

  sending:
  'شكراً {n}! جارٍ فتح تطبيق البريد...',

  toast_cv:
  'السيرة الذاتية متاحة عند الطلب، أرسلوا لي رسالة من النموذج بالأسفل.',

  foot:'&copy; {y} شهد محمد. جميع الحقوق محفوظة.',

  foot_sc:'لنبنِ شيئاً<br>رائعاً معاً',

  theme_light:'التبديل إلى الوضع النهاري',
  theme_dark:'التبديل إلى الوضع الليلي',

  doc_title:
  'شهد محمد | مطورة Full-Stack .NET'
};


/* =========================================================
   ENGLISH
========================================================= */

var EN = {};
var lang = 'en';

function captureEN(){

  $$('[data-i18n]').forEach(function(el){

    var k = el.dataset.i18n;

    if(!(k in EN)){
      EN[k] = el.textContent;
    }

  });

  $$('[data-i18n-html]').forEach(function(el){

    var k = el.dataset.i18nHtml;

    if(!(k in EN)){
      EN[k] = el.innerHTML;
    }

  });

  $$('[data-i18n-ph]').forEach(function(el){

    var k = el.dataset.i18nPh;

    if(!(k in EN)){
      EN[k] = el.getAttribute('placeholder');
    }

  });

}


EN.theme_light='Switch to light theme';
EN.theme_dark='Switch to dark theme';

EN.doc_title=
'Shahd Mohammed | Full-Stack .NET Developer';

EN.err=
'Please fill in your name, a valid email and a message.';

EN.sending=
'Thanks {n}! Opening your email app...';

EN.toast_cv=
'My CV is available on request - send me a message below.';

EN.view_cert='View Certificate';
EN.more_c_sub='See all certificates';

EN.sending_msg=
'Sending your message...';

EN.sent_ok=
'Message sent! I will get back to you soon.';

EN.modal_note_c=
'Concept project - design preview.';

EN.modal_note_r=
'Project preview.';

EN.view_project='View Project';

EN.concept='Concept';

EN.more='More';
EN.more_sub='Explore all projects';

EN.sv_aria='See related projects';

EN.p_dd_d=
'A detective game platform built with the MEAN stack (Angular, Express, MongoDB, Node.js).';

EN.p_nk_d=
'A web app to explore recipes from different countries with a modern UI.';

EN.p_lib_t='Library Website';

EN.p_lib_d=
'An elegant public-library website to browse, search and reserve books online.';

EN.p_sk_t='Skincare Store';

EN.p_sk_d=
'A modern e-commerce experience for natural skincare products.';

EN.cert1_t=
'Digital Egypt Youth (DEPI) - .NET Track';

EN.cert1_i=
'Digital Egypt Youth Initiative';

EN.cert1_s=
'In progress - 2025 to Present';

EN.cert_slot='Certificate title';
EN.cert_slot_i='Issuer name · Year';
EN.cert_slot_s='Slot for a new certificate';

EN.tech_h='Technical Skills';
EN.prof_h='Professional Skills';

EN.r_ps='Problem Solving';
EN.r_tw='Teamwork';
EN.r_cm='Communication';
EN.r_cl='Continuous Learning';

EN.sv1_h='Full Stack Web Development';
EN.sv1_p=
'Build complete web applications with modern technologies.';

EN.sv2_h='.NET Web Development';
EN.sv2_p=
'Develop reliable and scalable backend systems using ASP.NET Core.';

EN.sv3_h='API Integration';
EN.sv3_p=
'Design and integrate RESTful APIs for seamless communication.';

EN.sv4_h='Database Development';
EN.sv4_p=
'Work with SQL Server, MongoDB and design efficient databases.';

EN.sv5_h='Frontend Development';
EN.sv5_p=
'Create responsive and interactive UI using Angular, TypeScript, JavaScript, HTML & CSS.';


function t(k){

  var d = lang === 'ar' ? AR : EN;

  return (k in d) ? d[k] : (EN[k] || k);

}


function fill(v){

  return v.replace(
    '{y}',
    new Date().getFullYear()
  );

}


function applyLang(l){

  lang = l;

  root.setAttribute('lang',l);

  root.setAttribute(
    'dir',
    l === 'ar' ? 'rtl' : 'ltr'
  );

  store.set('sm-lang',l);


  $$('[data-i18n]').forEach(function(el){

    el.textContent =
      t(el.dataset.i18n);

  });


  $$('[data-i18n-html]').forEach(function(el){

    el.innerHTML =
      fill(t(el.dataset.i18nHtml));

  });


  $$('[data-i18n-ph]').forEach(function(el){

    var v = t(el.dataset.i18nPh);

    el.setAttribute('placeholder',v);

    el.setAttribute('aria-label',v);

  });


  $$('[data-i18n-aria]').forEach(function(el){

    el.setAttribute(
      'aria-label',
      t(el.dataset.i18nAria)
    );

  });


  var langEn = $('#langEn');
  var langAr = $('#langAr');

  if(langEn){
    langEn.setAttribute(
      'aria-pressed',
      String(l === 'en')
    );
  }

  if(langAr){
    langAr.setAttribute(
      'aria-pressed',
      String(l === 'ar')
    );
  }


  document.title =
    t('doc_title');


  if(
    typeof updateCerts === 'function' &&
    typeof CERTS !== 'undefined' &&
    CERTS
  ){
    updateCerts();
  }


  var themeBtn = $('#themeBtn');

  if(themeBtn){

    themeBtn.setAttribute(
      'aria-label',
      root.getAttribute('data-theme') === 'dark'
        ? t('theme_light')
        : t('theme_dark')
    );

  }


  if(typeof typedReset === 'function'){
    typedReset();
  }

}


/* =========================================================
   THEME
========================================================= */

function setTheme(th){

  root.setAttribute(
    'data-theme',
    th
  );

  store.set(
    'sm-theme',
    th
  );


  var themeUse =
    $('#themeIc use');

  if(themeUse){

    themeUse.setAttribute(
      'href',
      th === 'dark'
        ? '#i-moon'
        : '#i-sun'
    );

  }


  var themeBtn =
    $('#themeBtn');

  if(themeBtn){

    themeBtn.setAttribute(
      'aria-label',
      th === 'dark'
        ? t('theme_light')
        : t('theme_dark')
    );

  }


  var meta =
    document.querySelector(
      'meta[name="theme-color"]'
    );

  if(meta){

    meta.setAttribute(
      'content',
      th === 'dark'
        ? '#060a18'
        : '#eef3fc'
    );

  }

}


var themeBtn = $('#themeBtn');

if(themeBtn){

  themeBtn.addEventListener(
    'click',
    function(){

      setTheme(
        root.getAttribute('data-theme') === 'dark'
          ? 'light'
          : 'dark'
      );

    }
  );

}


var langEn = $('#langEn');
var langAr = $('#langAr');

if(langEn){
  langEn.addEventListener(
    'click',
    function(){
      applyLang('en');
    }
  );
}

if(langAr){
  langAr.addEventListener(
    'click',
    function(){
      applyLang('ar');
    }
  );
}


/* =========================================================
   TOAST
========================================================= */

var toast = $('#toast');
var tt;

function say(msg){

  if(!toast) return;

  toast.textContent = msg;

  toast.classList.add('show');

  clearTimeout(tt);

  tt = setTimeout(
    function(){
      toast.classList.remove('show');
    },
    3800
  );

}


$$('.cvlink').forEach(function(a){

  a.addEventListener(
    'click',
    function(){
      say(t('toast_cv'));
    }
  );

});


/* =========================================================
   MOBILE MENU
========================================================= */

var mnav = $('#mnav');
var mb = $('#menuBtn');

function closeMenu(){

  if(!mnav || !mb) return;

  mnav.classList.remove('open');

  mb.setAttribute(
    'aria-expanded',
    'false'
  );

}


if(mb && mnav){

  mb.addEventListener(
    'click',
    function(e){

      e.stopPropagation();

      var o =
        !mnav.classList.contains('open');

      mnav.classList.toggle(
        'open',
        o
      );

      mb.setAttribute(
        'aria-expanded',
        String(o)
      );

    }
  );

}


$$('#mnav a').forEach(function(a){

  a.addEventListener(
    'click',
    closeMenu
  );

});


document.addEventListener(
  'click',
  function(e){

    if(mnav && !mnav.contains(e.target)){
      closeMenu();
    }

  }
);


/* =========================================================
   PROJECTS
========================================================= */

var PROJECTS = [

  {
    id:'dd',
    img:'dd',
    cat:'full',
    title:'Digital Detective',
    desc:'p_dd_d',
    tags:[
      'Angular',
      'Node.js',
      'MongoDB',
      'Express.js'
    ],
    concept:false,
    url:LINKS.github
  },

  {
    id:'nk',
    img:'nk',
    cat:'full',
    title:
      'Nakhaty - Recipes From Around the World',
    desc:'p_nk_d',
    tags:[
      'React',
      'TypeScript',
      'API',
      'SQL Server'
    ],
    concept:false,
    url:LINKS.recipes
  },

  {
    id:'lib',
    img:'lib',
    cat:'full',
    titleKey:'p_lib_t',
    desc:'p_lib_d',
    tags:[
      'ASP.NET Core',
      'SQL Server',
      'Angular',
      'EF Core'
    ],
    concept:true
  },

  {
    id:'skin',
    img:'skin',
    cat:'front',
    titleKey:'p_sk_t',
    desc:'p_sk_d',
    tags:[
      'React',
      'TypeScript',
      'Tailwind',
      'API'
    ],
    concept:true
  }

];


function ptitle(p){

  return p.titleKey
    ? t(p.titleKey)
    : p.title;

}


function cardHTML(p,i){

  var tags =
    p.tags.map(function(x){
      return '<b>'+x+'</b>';
    }).join('');

  var tag =
    p.concept
      ? '<span class="ptag" data-i18n="concept">'+
        t('concept')+
        '</span>'
      : '';

  var ttl =
    p.titleKey
      ? '<h4 data-i18n="'+
        p.titleKey+
        '">'+
        t(p.titleKey)+
        '</h4>'
      :
        '<h4>'+
        p.title+
        '</h4>';

  var nm =
    ptitle(p).replace(/"/g,'');

  var inner =
    tag+
    '<img alt="" loading="lazy" data-img="'+
    p.img+
    '">'+
    '<span class="zoom">'+
    '<svg class="ic">'+
    '<use href="#i-expand"></use>'+
    '</svg>'+
    '</span>';


  var pimg =
    p.url

      ?

      '<a class="pimg" href="'+
      p.url+
      '" target="_blank" rel="noopener noreferrer" aria-label="'+
      nm+
      ' - GitHub">'+
      inner+
      '</a>'

      :

      '<div class="pimg" data-open="'+
      p.id+
      '" role="button" tabindex="0" aria-label="'+
      nm+
      '">'+
      inner+
      '</div>';


  var vbtn =
    p.url

      ?

      '<a class="vp" href="'+
      p.url+
      '" target="_blank" rel="noopener noreferrer">'+
      '<span data-i18n="view_project">'+
      t('view_project')+
      '</span>'+
      ' <svg class="ic flip">'+
      '<use href="#i-arrow"></use>'+
      '</svg>'+
      '</a>'

      :

      '<button class="vp" type="button" data-open="'+
      p.id+
      '">'+
      '<span data-i18n="view_project">'+
      t('view_project')+
      '</span>'+
      ' <svg class="ic flip">'+
      '<use href="#i-arrow"></use>'+
      '</svg>'+
      '</button>';


  return (

    '<div class="pw" data-rv="up" data-cat="'+
    p.cat+
    '" style="--d:'+
    (i*110)+
    'ms">'+

    '<article class="card spot pcard" data-id="'+
    p.id+
    '">'+

    pimg+

    '<div class="pbody">'+

    ttl+

    '<p data-i18n="'+
    p.desc+
    '">'+
    t(p.desc)+
    '</p>'+

    '<div class="tags">'+
    tags+
    '</div>'+

    vbtn+

    '</div>'+

    '</article>'+

    '</div>'

  );

}


function renderProjects(){

  var h = $('#homeProjects');
  var a = $('#allProjects');

  if(!h || !a) return;


  h.innerHTML =
    PROJECTS
      .slice(0,2)
      .map(cardHTML)
      .join('')

    +

    '<div class="pw" data-rv="up" style="--d:220ms">'+

      '<a class="card morec spot" href="#all-projects">'+

        '<span class="bigarr">'+

          '<svg class="ic flip">'+
            '<use href="#i-arrow"></use>'+
          '</svg>'+

        '</span>'+

        '<h4 data-i18n="more">'+
          t('more')+
        '</h4>'+

        '<span data-i18n="more_sub">'+
          t('more_sub')+
        '</span>'+

      '</a>'+

    '</div>';


  a.innerHTML =
    PROJECTS
      .map(cardHTML)
      .join('');


  $$('img[data-img]').forEach(function(im){

    var key =
      im.dataset.img;

    if(IMG[key]){

      im.src =
        IMG[key];

    }

  });


  $$('.spot',h)
    .concat($$('.spot',a))
    .forEach(spot);

}


function spot(c){

  if(!c) return;

  c.addEventListener(
    'pointermove',
    function(e){

      var r =
        c.getBoundingClientRect();

      c.style.setProperty(
        '--mx',
        (e.clientX-r.left)+'px'
      );

      c.style.setProperty(
        '--my',
        (e.clientY-r.top)+'px'
      );

    }
  );

}


/* =========================================================
   MODAL
========================================================= */

var modal = $('#modal');
var lastFocus = null;


function openModal(id){

  var p =
    PROJECTS.filter(
      function(x){
        return x.id === id;
      }
    )[0];

  if(!p || !modal) return;


  lastFocus =
    document.activeElement;


  var mImg =
    $('#mImg');

  if(mImg){

    mImg.src =
      IMG[p.img];

    mImg.className = '';

    mImg.alt =
      ptitle(p);

  }


  $('#mTitle').textContent =
    ptitle(p);

  $('#mDesc').textContent =
    t(p.desc);

  $('#mTags').innerHTML =
    p.tags
      .map(function(x){
        return '<b>'+x+'</b>';
      })
      .join('');

  $('#mNote').textContent =
    t(
      p.concept
        ? 'modal_note_c'
        : 'modal_note_r'
    );


  modal.classList.add('open');

  $('#mClose').focus();

  document.body.style.overflow =
    'hidden';

}


function closeModal(){

  if(!modal) return;

  modal.classList.remove(
    'open'
  );

  document.body.style.overflow =
    '';

  if(
    lastFocus &&
    lastFocus.focus
  ){
    lastFocus.focus();
  }

}


document.addEventListener(
  'click',
  function(e){

    var o =
      e.target.closest &&
      e.target.closest('[data-open]');

    if(o){

      e.preventDefault();

      openModal(
        o.dataset.open
      );

      return;

    }


    var c =
      e.target.closest &&
      e.target.closest('[data-cert]');

    if(c){

      e.preventDefault();

      openCert(
        +c.dataset.cert
      );

    }

  }
);


document.addEventListener(
  'keydown',
  function(e){

    if(e.key === 'Escape'){

      closeModal();
      closeMenu();

    }


    if(
      (e.key === 'Enter' || e.key === ' ') &&
      e.target.matches &&
      e.target.matches('.pimg[data-open]')
    ){

      e.preventDefault();

      openModal(
        e.target.dataset.open
      );

    }

  }
);


var mClose = $('#mClose');

if(mClose){

  mClose.addEventListener(
    'click',
    closeModal
  );

}


if(modal){

  modal.addEventListener(
    'click',
    function(e){

      if(e.target === modal){
        closeModal();
      }

    }
  );

}


/* =========================================================
   PROJECT FILTERS
========================================================= */

var filters = $('#filters');

if(filters){

  filters.addEventListener(
    'click',
    function(e){

      var b =
        e.target.closest('button');

      if(!b) return;


      $$('#filters button')
        .forEach(function(x){

          x.setAttribute(
            'aria-pressed',
            String(x === b)
          );

        });


      var f =
        b.dataset.f;


      $$('#allProjects .pw')
        .forEach(function(w){

          var show =
            f === 'all' ||
            w.dataset.cat === f;

          w.hidden =
            !show;

          if(show){

            w.classList.remove(
              'in'
            );

            requestAnimationFrame(
              function(){

                requestAnimationFrame(
                  function(){
                    w.classList.add('in');
                  }
                );

              }
            );

          }

        });

    }
  );

}


/* =========================================================
   CERTIFICATES
========================================================= */

var CERTS = [

  {
    img:'c_mean',

    en:{
      t:'MEAN-Stack Web Development',
      i:'ITIDA & NTI - National Telecommunication Institute',
      d:'09 Aug - 03 Sep 2026',
      g:[
        '120 Hours',
        'Score 97.5%',
        'Certificate of Training'
      ]
    },

    ar:{
      t:'MEAN-Stack Web Development',
      i:'ITIDA والمعهد القومي للاتصالات (NTI)',
      d:'9 أغسطس - 3 سبتمبر 2026',
      g:[
        '120 ساعة',
        'النتيجة 97.5%',
        'شهادة تدريب'
      ]
    }
  },


  {
    img:'c_ccna',

    en:{
      t:'CCNA: Introduction to Networks',
      i:'Cisco Networking Academy - Egyptian E-Learning University',
      d:'23 May 2026',
      g:[
        'Cisco',
        'Networking'
      ]
    },

    ar:{
      t:'CCNA: Introduction to Networks',
      i:'أكاديمية سيسكو للشبكات - الجامعة المصرية للتعلّم الإلكتروني',
      d:'23 مايو 2026',
      g:[
        'Cisco',
        'الشبكات'
      ]
    }
  },


  {
    img:'c_cpp',

    en:{
      t:'C++ 101',
      i:'Satr - Tuwaiq Academy',
      d:'18 Jul 2026',
      g:[
        'Beginner',
        '1 Hour'
      ]
    },

    ar:{
      t:'C++ 101',
      i:'سطر - أكاديمية طويق',
      d:'18 يوليو 2026',
      g:[
        'مبتدئ',
        'ساعة واحدة'
      ]
    }
  },


  {
    img:'c_java102',

    en:{
      t:'JAVA 102',
      i:'Satr - Tuwaiq Academy',
      d:'10 Apr 2025',
      g:[
        'Intermediate',
        '5 Hours'
      ]
    },

    ar:{
      t:'JAVA 102',
      i:'سطر - أكاديمية طويق',
      d:'10 أبريل 2025',
      g:[
        'متوسط',
        '5 ساعات'
      ]
    }
  },


  {
    img:'c_java101',

    en:{
      t:'JAVA 101',
      i:'Satr - Tuwaiq Academy',
      d:'25 Feb 2025',
      g:[
        'Beginner',
        '5 Hours'
      ]
    },

    ar:{
      t:'JAVA 101',
      i:'سطر - أكاديمية طويق',
      d:'25 فبراير 2025',
      g:[
        'مبتدئ',
        '5 ساعات'
      ]
    }
  },


  {
    img:'c_intro',

    en:{
      t:'Intro to Programming',
      i:'Satr - Tuwaiq Academy',
      d:'12 Feb 2025',
      g:[
        'Beginner',
        '8 Hours'
      ]
    },

    ar:{
      t:'مقدمة في البرمجة (Intro to Programming)',
      i:'سطر - أكاديمية طويق',
      d:'12 فبراير 2025',
      g:[
        'مبتدئ',
        '8 ساعات'
      ]
    }
  }

];


function certCard(c,i){

  var w =
    document.createElement('div');

  w.className =
    'cw';

  w.setAttribute(
    'data-rv',
    'up'
  );

  w.style.setProperty(
    '--d',
    ((i%3)*120)+'ms'
  );


  w.innerHTML =

    '<article class="card spot cert" data-tilt data-ci="'+
    i+
    '">'+

      '<button class="cimg" type="button" data-cert="'+
      i+
      '">'+

        '<span class="cdate" data-c="d"></span>'+

        '<img alt="" loading="lazy" data-img="'+
        c.img+
        '">' +

        '<i class="shine"></i>'+

        '<span class="zoom">'+
          '<svg class="ic">'+
            '<use href="#i-expand"></use>'+
          '</svg>'+
        '</span>'+

      '</button>'+

      '<div class="bd">'+

        '<h4 data-c="t"></h4>'+

        '<div class="iss" data-c="i"></div>'+

        '<div class="tags" data-c="g"></div>'+

        '<button class="vp" type="button" data-cert="'+
        i+
        '">'+

          '<span data-i18n="view_cert">'+
            t('view_cert')+
          '</span>'+

          ' <svg class="ic flip">'+
            '<use href="#i-arrow"></use>'+
          '</svg>'+

        '</button>'+

      '</div>'+

    '</article>';


  var cert =
    $('.cert',w);

  if(cert){
    spot(cert);
  }

  return w;

}


var cgH = $('#cgridHome');
var cgA = $('#cgridAll');


if(cgA){

  CERTS.forEach(
    function(c,i){

      cgA.appendChild(
        certCard(c,i)
      );

    }
  );

}


if(cgH){

  CERTS.slice(0,2).forEach(
    function(c,i){

      cgH.appendChild(
        certCard(c,i)
      );

    }
  );


  var moreC =
    document.createElement('div');

  moreC.className =
    'cw';

  moreC.setAttribute(
    'data-rv',
    'up'
  );

  moreC.style.setProperty(
    '--d',
    '240ms'
  );


  moreC.innerHTML =

    '<a class="card morec spot" href="#all-certificates">'+

      '<span class="bigarr">'+

        '<svg class="ic flip">'+
          '<use href="#i-arrow"></use>'+
        '</svg>'+

      '</span>'+

      '<h4 data-i18n="more">'+
        t('more')+
      '</h4>'+

      '<span data-i18n="more_c_sub">'+
        t('more_c_sub')+
      '</span>'+

    '</a>';


  cgH.appendChild(
    moreC
  );

  spot(
    $('.morec',moreC)
  );

}


/* IMPORTANT:
   Set the certificate images after creating cards.
*/

$$('.cert img[data-img]').forEach(
  function(im){

    var key =
      im.dataset.img;

    if(IMG[key]){

      im.src =
        IMG[key];

    }

  }
);


function updateCerts(){

  $$('.cert[data-ci]')
    .forEach(function(w){

      var d =
        CERTS[
          +w.dataset.ci
        ][lang];


      $$('[data-c]',w)
        .forEach(function(el){

          var k =
            el.dataset.c;

          if(k === 'g'){

            el.innerHTML =
              d.g.map(
                function(x){
                  return '<b>'+x+'</b>';
                }
              ).join('');

          }else{

            el.textContent =
              d[k];

          }

        });


      var cimg =
        $('.cimg',w);

      if(cimg){

        cimg.setAttribute(
          'aria-label',
          d.t
        );

      }

    });

}


function openCert(i){

  var c =
    CERTS[i];

  if(!c || !modal) return;


  var d =
    c[lang];


  lastFocus =
    document.activeElement;


  var im =
    $('#mImg');

  if(im){

    im.src =
      IMG[c.img];

    im.alt =
      d.t;

    im.className =
      'contain';

  }


  $('#mTitle').textContent =
    d.t;

  $('#mDesc').textContent =
    d.i+
    ' · '+
    d.d;

  $('#mTags').innerHTML =
    d.g.map(
      function(x){
        return '<b>'+x+'</b>';
      }
    ).join('');

  $('#mNote').textContent =
    '';


  modal.classList.add(
    'open'
  );

  $('#mClose').focus();

  document.body.style.overflow =
    'hidden';

}


/* =========================================================
   HERO TYPING
========================================================= */

var words = [
  'Full-Stack',
  'Backend .NET',
  'ASP.NET',
   'Front-end' 
];

var wi = 0;
var wc = 10;
var wd = true;

var typed =
  $('#typed');

var tto = 0;


function typedReset(){

  if(!typed) return;

  clearTimeout(tto);

  wi = 0;
  wc = 10;
  wd = true;

  typed.textContent =
    'Full-Stack';

  tto =
    setTimeout(
      typeTick,
      2600
    );

}


function typeTick(){

  if(!typed) return;


  if(
    root.getAttribute('data-motion') === 'off'
  ){

    typed.textContent =
      'Full-Stack';

    tto =
      setTimeout(
        typeTick,
        1500
      );

    return;

  }


  var w =
    words[wi];


  if(wd){

    wc--;

    typed.textContent =
      w.slice(0,wc) ||
      '\u200b';


    if(wc <= 0){

      wd = false;

      wi =
        (wi+1) %
        words.length;

    }

  }else{

    wc++;

    typed.textContent =
      words[wi].slice(
        0,
        wc
      );


    if(
      wc >=
      words[wi].length
    ){

      wd = true;

      tto =
        setTimeout(
          typeTick,
          1900
        );

      return;

    }

  }


  tto =
    setTimeout(
      typeTick,
      wd ? 55 : 95
    );

}


/* =========================================================
   REVEAL
========================================================= */

var io = null;

if(
  'IntersectionObserver'
  in window
){

  io =
    new IntersectionObserver(
      function(es){

        es.forEach(
          function(e){

            e.target.classList.toggle(
              'in',
              e.isIntersecting
            );

          }
        );

      },
      {
        threshold:.14,
        rootMargin:'0px 0px -6% 0px'
      }
    );

}


function observeAll(){

  $$('[data-rv],[data-tl]')
    .forEach(function(el){

      if(el._o) return;

      el._o = 1;

      if(io){

        io.observe(el);

      }else{

        el.classList.add(
          'in'
        );

      }

    });

}


/* =========================================================
   COUNTERS
========================================================= */

function ease(x){

  return 1 -
    Math.pow(
      1-x,
      3
    );

}


function countTo(
  el,
  target,
  suffix,
  dur,
  delay
){

  cancelAnimationFrame(
    el._raf
  );

  clearTimeout(
    el._to
  );


  el.textContent =
    '0'+suffix;


  el._to =
    setTimeout(
      function(){

        var s =
          performance.now();


        (function f(n){

          var p =
            Math.min(
              1,
              (n-s)/dur
            );


          el.textContent =
            Math.round(
              target *
              ease(p)
            )+
            suffix;


          if(p<1){

            el._raf =
              requestAnimationFrame(
                f
              );

          }

        })(s);

      },
      delay || 0
    );

}


function stopCount(
  el,
  suffix
){

  cancelAnimationFrame(
    el._raf
  );

  clearTimeout(
    el._to
  );

  el.textContent =
    '0'+suffix;

}


var sk2 =
  $('#sgrid');


if(
  sk2 &&
  'IntersectionObserver'
  in window
){

  var sv =
    $$('[data-v]',sk2);


  new IntersectionObserver(
    function(es){

      es.forEach(
        function(e){

          if(e.isIntersecting){

            sk2.classList.add(
              'on'
            );


            sv.forEach(
              function(el){

                var h =
                  el.closest(
                    '[style*="--i"]'
                  );

                var idx =
                  h
                    ? (
                      +h.style.getPropertyValue(
                        '--i'
                      ) || 0
                    )
                    : 0;


                countTo(
                  el,
                  +el.dataset.v,
                  '%',
                  1700,
                  idx*130
                );

              }
            );

          }else{

            sk2.classList.remove(
              'on'
            );


            sv.forEach(
              function(el){

                stopCount(
                  el,
                  '%'
                );

              }
            );

          }

        }
      );

    },
    {
      threshold:.28
    }
  ).observe(sk2);

}else if(sk2){

  sk2.classList.add(
    'on'
  );

  $$('[data-v]',sk2)
    .forEach(
      function(el){

        el.textContent =
          el.dataset.v+
          '%';

      }
    );

}


var stats =
  $$('[data-count]');


if(
  'IntersectionObserver'
  in window
){

  var co =
    new IntersectionObserver(
      function(es){

        es.forEach(
          function(e){

            var el =
              e.target;


            if(e.isIntersecting){

              countTo(
                el,
                +el.dataset.count,
                el.dataset.suffix || '',
                1600,
                200
              );

            }else{

              stopCount(
                el,
                el.dataset.suffix || ''
              );

            }

          }
        );

      },
      {
        threshold:.5
      }
    );


  stats.forEach(
    function(el){
      co.observe(el);
    }
  );

}else{

  stats.forEach(
    function(el){

      el.textContent =
        el.dataset.count+
        (el.dataset.suffix || '');

    }
  );

}


/* =========================================================
   ROUTING
========================================================= */

var vh =
  $('#viewHome');

var vp =
  $('#viewProjects');

var vc =
  $('#viewCerts');

var spyLinks =
  $$('[data-spy]');

var first = true;


function setActive(id){

  spyLinks.forEach(
    function(a){

      a.classList.toggle(
        'active',
        a.dataset.spy === id
      );

    }
  );

}


function route(){

  var h =
    location.hash.replace(
      '#',
      ''
    );

  var wasP =
    (vp && !vp.hidden) ||
    (vc && !vc.hidden);


  closeMenu();


  if(h === 'all-projects'){

    if(vh) vh.hidden = true;
    if(vc) vc.hidden = true;
    if(vp) vp.hidden = false;

    window.scrollTo(
      0,
      0
    );

    setActive(
      'projects'
    );

    observeAll();

    frame();

    return;

  }


  if(h === 'all-certificates'){

    if(vh) vh.hidden = true;
    if(vp) vp.hidden = true;
    if(vc) vc.hidden = false;

    window.scrollTo(
      0,
      0
    );

    setActive(
      'certificates'
    );

    observeAll();

    frame();

    return;

  }


  if(vp) vp.hidden = true;
  if(vc) vc.hidden = true;
  if(vh) vh.hidden = false;

  observeAll();


  if(h){

    var el =
      document.getElementById(h);

    if(
      el &&
      (wasP || first)
    ){

      setTimeout(
        function(){

          el.scrollIntoView({
            behavior:
              wasP
                ? 'auto'
                : 'smooth'
          });

        },
        40
      );

    }

  }else if(wasP){

    window.scrollTo(
      0,
      0
    );

  }


  first = false;

  frame();

}


window.addEventListener(
  'hashchange',
  route
);


/* =========================================================
   SCROLLSPY / NAVBAR / PARALLAX
========================================================= */

var secs =
  $$('[data-section]');

var topbar =
  $('#topbar');

var totop =
  $('#totop');

var ring =
  $('#ringfg');

var art =
  $('#art');

var ticking = false;
var mx = 0;


function frame(){

  ticking = false;


  var y =
    window.pageYOffset ||
    document.documentElement.scrollTop;


  var h =
    document.documentElement.scrollHeight -
    window.innerHeight;


  if(topbar){

    topbar.classList.toggle(
      'scrolled',
      y > 40 ||
      (vp && !vp.hidden) ||
      (vc && !vc.hidden)
    );

  }


  if(totop){

    totop.classList.toggle(
      'show',
      y > 600
    );

  }


  if(ring){

    ring.style.strokeDashoffset =
      String(
        150.8 *
        (
          1 -
          (
            h > 0
              ? y/h
              : 0
          )
        )
      );

  }


  if(
    (vp && !vp.hidden) ||
    (vc && !vc.hidden)
  ){

    return;

  }


  var cur =
    'home';


  var line =
    y +
    window.innerHeight *
    .38;


  secs.forEach(
    function(s){

      if(
        s.offsetTop <= line
      ){

        cur =
          s.id;

      }

    }
  );


  if(
    window.innerHeight+y >=
    document.documentElement.scrollHeight-4
  ){

    cur =
      'contact';

  }


  if(cur === 'solutions'){

    cur =
      'certificates';

  }


  setActive(
    cur
  );


  if(
    art &&
    root.getAttribute(
      'data-motion'
    ) === 'on' &&
    y <
    window.innerHeight*1.2
  ){

    art.style.translate =
      (
        (mx+.5)*18
      ).toFixed(1)+
      'px '+
      (
        y*.12
      ).toFixed(1)+
      'px';

  }

}


function req(){

  if(!ticking){

    ticking = true;

    requestAnimationFrame(
      frame
    );

  }

}


window.addEventListener(
  'scroll',
  req,
  {
    passive:true
  }
);


window.addEventListener(
  'resize',
  req
);


window.addEventListener(
  'mousemove',
  function(e){

    mx =
      e.clientX /
      window.innerWidth -
      .5;

    req();

  },
  {
    passive:true
  }
);


if(totop){

  totop.addEventListener(
    'click',
    function(){

      window.scrollTo({
        top:0,
        behavior:'smooth'
      });

    }
  );

}


/* =========================================================
   TILT
========================================================= */

if(
  window.matchMedia &&
  window.matchMedia(
    '(hover:hover)'
  ).matches
){

  $$('[data-tilt]')
    .forEach(function(c){

      c.addEventListener(
        'pointermove',
        function(e){

          if(
            root.getAttribute(
              'data-motion'
            ) !== 'on'
          ){

            return;

          }


          var r =
            c.getBoundingClientRect();


          var x =
            (
              e.clientX-r.left
            ) /
            r.width -
            .5;


          var y =
            (
              e.clientY-r.top
            ) /
            r.height -
            .5;


          c.style.transition =
            'transform .08s';


          c.style.transform =
            'perspective(900px) '+
            'rotateY('+
            (x*7).toFixed(2)+
            'deg) '+
            'rotateX('+
            (-y*7).toFixed(2)+
            'deg) '+
            'translateY(-4px)';

        }
      );


      c.addEventListener(
        'pointerleave',
        function(){

          c.style.transition =
            'transform .6s cubic-bezier(.2,.75,.2,1)';

          c.style.transform =
            '';

        }
      );

    });

}


/* =========================================================
   CONTACT FORM
========================================================= */

var form =
  $('#form');

var st =
  $('#status');

var sbtn =
  $('#sendBtn');


function postMessage(payload){

  return new Promise(
    function(res,rej){

      if(!window.fetch){

        rej(
          new Error(
            'nofetch'
          )
        );

        return;

      }


      var ctl =
        ('AbortController' in window)
          ? new AbortController()
          : null;


      var to =
        setTimeout(
          function(){

            if(ctl){
              ctl.abort();
            }

            rej(
              new Error(
                'timeout'
              )
            );

          },
          9000
        );


      fetch(
        FORM_ENDPOINT,
        {
          method:'POST',

          headers:{
            'Content-Type':
              'application/json',

            'Accept':
              'application/json'
          },

          body:
            JSON.stringify(payload),

          signal:
            ctl
              ? ctl.signal
              : undefined

        }
      )

      .then(
        function(r){

          clearTimeout(to);

          return r.json()
            .then(
              function(j){

                return {
                  ok:r.ok,
                  j:j
                };

              },
              function(){

                return {
                  ok:r.ok,
                  j:{}
                };

              }
            );

        }
      )

      .then(
        function(o){

          if(
            o.ok &&
            String(o.j.success) !== 'false'
          ){

            res();

          }else{

            rej(
              new Error(
                'rejected'
              )
            );

          }

        }
      )

      .catch(
        function(e){

          clearTimeout(to);

          rej(e);

        }
      );

    }
  );

}


if(form){

  form.addEventListener(
    'submit',
    function(e){

      e.preventDefault();


      var n =
        $('#fn');

      var m =
        $('#fe');

      var tx =
        $('#fm');

      var ok =
        true;


      [n,m,tx].forEach(
        function(f){

          if(f){

            f.setAttribute(
              'aria-invalid',
              'false'
            );

          }

        }
      );


      if(
        !n ||
        !n.value.trim()
      ){

        if(n){

          n.setAttribute(
            'aria-invalid',
            'true'
          );

        }

        ok = false;

      }


      if(
        !m ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/
          .test(
            m.value.trim()
          )
      ){

        if(m){

          m.setAttribute(
            'aria-invalid',
            'true'
          );

        }

        ok = false;

      }


      if(
        !tx ||
        tx.value.trim().length < 5
      ){

        if(tx){

          tx.setAttribute(
            'aria-invalid',
            'true'
          );

        }

        ok = false;

      }


      if(!ok){

        if(st){

          st.className =
            'status err';

          st.textContent =
            t('err');

        }

        return;

      }


      var name =
        n.value.trim();

      var mail =
        m.value.trim();

      var msg =
        tx.value.trim();


      var honey =
        $('#fh');


      if(
        honey &&
        honey.value
      ){

        if(st){

          st.className =
            'status';

          st.textContent =
            t('sent_ok');

        }

        form.reset();

        return;

      }


      if(sbtn){

        sbtn.disabled =
          true;

      }


      if(st){

        st.className =
          'status';

        st.textContent =
          t('sending_msg');

      }


      postMessage({

        name:name,
        email:mail,
        message:msg,

        _subject:
          'Portfolio message from '+name,

        _template:
          'table',

        _captcha:
          'false'

      })

      .then(
        function(){

          if(st){

            st.className =
              'status';

            st.textContent =
              t('sent_ok');

          }

          form.reset();

        }
      )

      .catch(
        function(){

          if(st){

            st.className =
              'status';

            st.textContent =
              t('sending')
                .replace(
                  '{n}',
                  name.split(' ')[0]
                );

          }


          window.location.href =
            'mailto:shahd.m87a@gmail.com?subject='+
            encodeURIComponent(
              'Portfolio message from '+name
            )+
            '&body='+
            encodeURIComponent(
              msg+
              '\n\n- '+
              name+
              ' ('+
              mail+
              ')'
            );

        }
      )

      .then(
        function(){

          if(sbtn){

            sbtn.disabled =
              false;

          }

        }
      );

    }
  );

}


/* =========================================================
   EXTRA IMAGE SAFETY FIX
   If any old HTML image still contains assets/,
   automatically remove it.
========================================================= */

$$('img[src^="assets/"]')
.forEach(
  function(img){

    var src =
      img.getAttribute('src');

    if(src){

      img.setAttribute(
        'src',
        src.replace(
          /^assets\//,
          ''
        )
      );

    }

  }
);


/* =========================================================
   IMAGE ERROR CHECK
========================================================= */

$$('img').forEach(
  function(img){

    img.addEventListener(
      'error',
      function(){

        console.error(
          'Image not found:',
          img.src
        );

        img.classList.add(
          'image-error'
        );

      }
    );

  }
);


/* =========================================================
   BOOT
========================================================= */

renderProjects();

$$('.sv.spot')
.forEach(spot);

captureEN();

setTheme(
  store.get('sm-theme') === 'light'
    ? 'light'
    : 'dark'
);

applyLang(
  store.get('sm-lang') === 'ar'
    ? 'ar'
    : 'en'
);

route();

frame();

})();