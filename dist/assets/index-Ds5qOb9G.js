(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d={title:"Premium Beginner Session 2026",statusTag:"UPCOMING EVENT",description:"新入生・未経験者を対象とした、クリーンかつ安全に配慮したサバゲー体験会です。各種装備一式はサークル側で完全レンタル可能。手ぶらで最高の非日常を体験してください。",date:"2026年6月中旬 開催予定",location:"首都圏近郊 インドアフィールド"};function g(){const o=document.getElementById("site-title");o&&(o.innerText="SPAC.");const n=document.getElementById("event-container");n&&(n.innerHTML=`
            <div class="premium-card">
                <span class="card-tag">${d.statusTag}</span>
                <h3>${d.title}</h3>
                <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 20px;">
                    ${d.description}
                </p>
                <div class="premium-card-meta">
                    <div>📅 日時: ${d.date}</div>
                    <div style="margin-top: 4px;">📍 場所: ${d.location}</div>
                </div>
            </div>
        `),y(),h(),x(),v()}function v(){const o=document.getElementById("bg-text-1"),n=document.getElementById("bg-text-2"),i=document.getElementById("bg-text-3");window.addEventListener("scroll",()=>{const r=window.pageYOffset;o&&(o.style.transform=`translateX(${r*.15}px)`),n&&(n.style.transform=`translateX(${r*-.15}px)`),i&&(i.style.transform=`translateX(${r*.08}px)`)})}function y(){const o=document.getElementById("photo-gallery"),n=document.getElementById("gallery-inner");if(!o||!n)return;const i=Array.from(n.getElementsByTagName("img"));if(i.length===0)return;const r=20;i.forEach(a=>{const m=a.cloneNode(!0);n.appendChild(m)});let e=0;i.forEach(a=>{e+=a.offsetWidth+r}),n.style.width=`${e*2}px`;let t=0;const l=.6;let c=!1,u=0,s=null;function f(){if(c){const a=u*8;t-=a}else t-=l;t>0?t=-e+t%e:Math.abs(t)>=e&&(t=t%e),n&&(n.style.transform=`translateX(${t}px)`),requestAnimationFrame(f)}requestAnimationFrame(f),o.addEventListener("mousemove",a=>{s&&window.clearTimeout(s),c=!0;const m=o.getBoundingClientRect(),p=m.width;u=(a.clientX-m.left)/p-.5}),o.addEventListener("mouseleave",()=>{s&&window.clearTimeout(s),s=window.setTimeout(()=>{c=!1},2e3)}),o.addEventListener("touchstart",()=>{s&&window.clearTimeout(s),c=!0,u=0},{passive:!0}),o.addEventListener("touchend",()=>{s&&window.clearTimeout(s),s=window.setTimeout(()=>{c=!1},2e3)})}function h(){const o=document.querySelectorAll(".animate-on-scroll"),n={root:null,rootMargin:"0px 0px -80px 0px",threshold:.1},i=new IntersectionObserver(r=>{r.forEach(e=>{e.isIntersecting&&(e.target.classList.add("is-visible"),i.unobserve(e.target))})},n);o.forEach(r=>i.observe(r))}function x(){const o=document.getElementById("join-form");o&&o.addEventListener("submit",n=>{n.preventDefault();const i=document.getElementById("user-email").value;o.innerHTML=`
            <div style="text-align: center; padding: 20px 0; animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;">
                <div style="font-size: 3rem; margin-bottom: 16px;">🎉</div>
                <h3 style="font-size: 1.4rem; font-weight: 700; color: var(--text-main); margin-bottom: 8px;">申請を受け付けました！</h3>
                <p style="color: var(--text-muted); font-size: 0.9rem; max-width: 400px; margin: 0 auto 24px auto;">
                    ご入力いただいた内容を確認後、登録されたメールアドレス（${i}）宛てにサークル運営担当から折り返しご連絡いたします。
                </p>
                <div style="font-size: 0.8rem; color: var(--text-light);">※通常24時間以内に返信しております。</div>
            </div>
        `})}window.addEventListener("load",g);
