(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function e(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=e(o);fetch(o.href,r)}})();const W=[{id:"twinkle",title:"Twinkle, Twinkle, Little Star",tradition:"Traditional (Ah! vous dirai-je, Maman)",key:"C major",timeSignature:"4/4",pitch:"Simple contour, steady rhythm, and a full major scale in the melody — ideal first map for ear, voice, and fingers.",instrumentAngles:["Piano: hands stay in C position; notice tonic on strong beats.","Guitar: open C–G–Am–F style harmony can support the tune later."],steps:[{id:"tw-1",title:"Start from the song, not from a textbook",kind:"intro",summary:"We anchor every idea in what you actually sing or play.",detailHtml:`
          <p>Most apps drill abstract exercises first. Here, the <strong>song is the syllabus</strong>: each step names something you hear in the melody — contour, pulse, landing notes — then we zoom in.</p>
          <p>Your goal this course: sing the first phrase in tune with a steady pulse, and name the <em>home note</em> (tonic) when you land on it.</p>
        `,tips:["Hum first if full voice tires you; shape matters more than volume.","Tap your foot on beats 1 and 3 to feel the bar without rushing."]},{id:"tw-2",title:"What you are hearing: meter and tonic",kind:"theory",summary:"Four beats per bar; the melody wants to rest on C.",detailHtml:`
          <p>The piece is in <strong>4/4</strong>: four quarter-note pulses per measure. The opening rises from middle C, circles, and keeps returning to C as a resting place — that is the <strong>tonic</strong> of C major.</p>
        `,theory:[{term:"Tonic",explanation:"The gravitational center of the key. Melodies often pause or end here because it feels “finished.”"},{term:"Contour",explanation:"The shape of ups and downs in pitch. Twinkle’s first phrase is an arch: up, then down to the tonic."}]},{id:"tw-3",title:"Vocal line: first phrase, breath, and placement",kind:"vocal",summary:"Sing on a forward, relaxed vowel; plan one breath for the opening question.",detailHtml:`
          <p>Speak the words in rhythm once, then float the same rhythm on “nyah” or “loo” — soft edges, no push. Keep the jaw loose; let the tongue do consonants lightly.</p>
        `,vocalPhrases:[{text:"Twin-kle, twin-kle, lit-tle star",breathAfter:!0,technique:"Lift softly on “tw-”; let “star” settle without dropping support — imagine a small steady flame in the belly.",referenceHz:261.63}],tips:["If pitch drifts, use the drone button below on C (≈262 Hz) and match your hum.","Record yourself on your phone for 10 seconds — listen once for pitch, once for rhythm."],interactives:["drone"],keyRootHz:261.63},{id:"tw-4",title:"On guitar: resting in first position",kind:"instrument",summary:"The melody lives in open position; think string + fret as coordinates.",detailHtml:`
          <p>On guitar, the same tune often starts on the <strong>B string, 1st fret</strong> (C) or nearby depending on arrangement. For now, focus on <strong>one note per syllable</strong> when you fingerpick — no rubato until the pulse is honest.</p>
        `,chords:[{name:"C major",role:"Tonic — “home” under the first phrase",fingering:"Open C: ring on A3, middle on D2, index on B1",diagramHint:"x32010 — low E muted"},{name:"G major",role:"Dominant pull — sets up return to C",fingering:"Open G: middle A2, index E3, ring D3, pinky high E3",diagramHint:"320003"}]},{id:"tw-5",title:"On piano: C major in the right hand",kind:"instrument",summary:"White keys from C to C; thumb on C, one finger per degree.",detailHtml:`
          <p>Place the right hand so the thumb sits on middle C. Walk the first five notes C–D–E–F–G saying the numbers 1–5. That is the <strong>major pentachord</strong> — the ladder Twinkle climbs before it turns.</p>
        `,theory:[{term:"Scale degree",explanation:"Numbers 1–7 (or solfege) describe steps inside the key. Twinkle highlights 1 and 5 early — a very stable sound."}]},{id:"tw-6",title:"Rhythm lab: lock the pulse",kind:"rhythm",summary:"Use the metronome on 2 and 4, then on every beat.",detailHtml:`
          <p>Set a comfortable tempo (try 72–88 BPM). Clap once per click, then speak the lyrics in rhythm. When that feels easy, sing on a single vowel.</p>
        `,defaultBpm:80,interactives:["metronome"]},{id:"tw-7",title:"Recap: what you trained without noticing",kind:"recap",summary:"Ear map + breath + pulse + tonic awareness.",detailHtml:`
          <p>You used a real melody to practice <strong>pitch memory</strong>, <strong>breath planning</strong>, <strong>steady meter</strong>, and <strong>tonal center</strong>. Those four transfer to almost every song you will learn next.</p>
        `,tips:["Tomorrow: repeat step 3 and 6 only — shorter sessions beat long cramming."]}]},{id:"saints",title:"When the Saints Go Marching In",tradition:"Traditional spiritual / jazz standard (melody)",key:"F major (common busking key)",timeSignature:"4/4",pitch:"Call-and-response phrasing and a walking pulse — great for swing feel, projection, and simple chord loops.",instrumentAngles:["Guitar: shuffle or straight eighths over I–IV–V in F.","Piano: left-hand fifths or roots on strong beats; melody in the right."],steps:[{id:"sa-1",title:"Why this tune for groove and voice",kind:"intro",summary:"Short motives repeat; you learn projection and bounce.",detailHtml:`
          <p>The melody is built from <strong>short cells</strong> that repeat with small changes — perfect for memorizing quickly, then spending your attention on <em>time feel</em> and <em>tone color</em>.</p>
        `},{id:"sa-2",title:"Vocal: consonants that carry",kind:"vocal",summary:"Front-load rhythm on consonants; open vowels on stressed beats.",detailHtml:`
          <p>On “Oh when the saints”, let the “Wh” be crisp but not punched. Vowels on beats 1 carry the lyric line; keep them tall in the mouth without tightening the throat.</p>
        `,vocalPhrases:[{text:"Oh, when the saints go marching in",technique:"Imagine the sound arriving a foot in front of your face — forward placement, not loudness.",referenceHz:349.23},{text:"Oh, when the saints go marching in",breathAfter:!0,technique:"Second time: add a hair more weight on beat 1; still no jaw tension.",referenceHz:349.23}],tips:["Practice the phrase on “doo-bah” to isolate swing without lyrics."],interactives:["drone"],keyRootHz:174.61},{id:"sa-3",title:"Harmony skeleton: I → IV → V",kind:"theory",summary:"Thousands of tunes move between these three functions.",detailHtml:`
          <p>In F major, common chords are <strong>F</strong> (I), <strong>B♭</strong> (IV), and <strong>C</strong> (V). Hearing when the harmony moves — even if you only play roots — makes your solos and fills land in the right places later.</p>
        `,theory:[{term:"I / IV / V",explanation:"Roman numerals name chords by their scale step. I is home, IV adds color, V creates tension that wants to resolve home."}]},{id:"sa-4",title:"Guitar loop: friendly barre-free shapes",kind:"instrument",summary:"Capo or open shapes — consistency beats cleverness.",detailHtml:`
          <p>Try F–B♭–C–F with shapes you can sustain for two minutes without hand pain. If barre F is new, use an Fmaj7 or a capo shape that lets you practice <strong>time</strong> first.</p>
        `,chords:[{name:"F major",role:"Tonic",fingering:"Index barre or small F; keep wrist straight",diagramHint:"133211 (barre) or xx3211"},{name:"B♭ major",role:"Subdominant color",fingering:"A-shape or 6-string partial as appropriate",diagramHint:"x13331"},{name:"C major",role:"Dominant → pulls back to F",fingering:"Open C or movable shape higher",diagramHint:"x32010"}]},{id:"sa-5",title:"Rhythm: straight vs swung eighths",kind:"rhythm",summary:"Subdivide each beat honestly; swing is a ratio, not a random delay.",detailHtml:`
          <p>At slow tempos, clap triplets “1-la-li” then mute the middle — you approximate a long–short pair inside each beat. Use the metronome; nudge only after the straight version is clean.</p>
        `,defaultBpm:96,interactives:["metronome"]},{id:"sa-6",title:"Recap",kind:"recap",summary:"Projection, harmonic home, and repeatable groove.",detailHtml:`
          <p>You connected <strong>phrasing</strong> to a repeating tune, mapped <strong>I–IV–V</strong> in F, and used the metronome as a mirror — not a crutch.</p>
        `}]},{id:"amazing",title:"Amazing Grace (melody)",tradition:"Hymn tune New Britain (melody line for study)",key:"G major (common)",timeSignature:"3/4",pitch:"Triple meter and long lines — perfect for breath planning and legato on any instrument.",instrumentAngles:["Strings: slur across beats where possible; decide bow or pick direction early.","Voice: consonant clusters light; vowels carry the lyric on stressed syllables."],steps:[{id:"ag-1",title:"Three beats per bar: waltz gravity",kind:"context",summary:"Beat 1 is a downbeat; 2 and 3 lift toward the next bar.",detailHtml:`
          <p>In <strong>3/4</strong>, group everything in threes. Conduct a triangle in the air: down–out–up. The melody often peaks near the end of a three-beat unit — plan breaths <em>after</em> cadences, not in the middle of a pick-up.</p>
        `,theory:[{term:"Pickup (anacrusis)",explanation:"Notes before the first full bar. They lean forward into bar 1’s downbeat."}]},{id:"ag-2",title:"Vocal: long lines, soft onset",kind:"vocal",summary:"Start each phrase without a glottal hit unless the text needs it.",detailHtml:`
          <p>Begin “A-mazing” on a gentle “h” airflow into the vowel — then sustain. If you run out of air mid-phrase, shorten the phrase in practice: sing two bars, breathe, repeat.</p>
        `,vocalPhrases:[{text:"A-ma-zing grace, how sweet the sound",breathAfter:!0,technique:"Think “narrow vowels, tall space” — ee shape inside ah keeps tone focused without strain.",referenceHz:196}],interactives:["drone"],keyRootHz:196},{id:"ag-3",title:"Piano: chord shells under the tune",kind:"instrument",summary:"Left hand: root and fifth; add the third when stable.",detailHtml:`
          <p>Play G–D in the left on beat 1 of each bar while the right hums the melody. Adding B makes a full triad — notice how the third defines major vs minor color.</p>
        `,chords:[{name:"G major",role:"Tonic in G",fingering:"Left: G2–D3; right melody near middle C",diagramHint:"GBD — spread for clarity"},{name:"D major",role:"Dominant in G",fingering:"Often appears before returns to G",diagramHint:"DF#A"}]},{id:"ag-4",title:"Metronome: one click per bar, then subdivide",kind:"rhythm",summary:"Outer pulse first; inner beats second.",detailHtml:`
          <p>Start with the metronome representing <strong>beat 1 only</strong> (set BPM to about one third of your phrase tempo, or use every-fourth click mentally). When phrases align, subdivide to full three beats per bar.</p>
        `,defaultBpm:60,interactives:["metronome"]},{id:"ag-5",title:"Recap",kind:"recap",summary:"Breath architecture + triple meter + harmonic support.",detailHtml:`
          <p>This tune rewards <strong>legato thinking</strong> across bars. Carry that into your next 3/4 piece — waltzes, minuets, many ballads.</p>
        `}]}];function j(n){return W.find(t=>t.id===n)}let A=null;function C(){return A||(A=new AudioContext),A}let T=null,O=!1,H=null,v=null;function P(){return O}function R(n,t){b();const e=C();e.state==="suspended"&&e.resume();const a=6e4/n|0;let o=0;O=!0;const r=(l,u)=>{const p=e.createOscillator(),m=e.createGain();p.type="sine",p.frequency.value=u?1e3:760,m.gain.value=u?.12:.07,m.gain.exponentialRampToValueAtTime(1e-4,l+.06),p.connect(m),m.connect(e.destination),p.start(l),p.stop(l+.07)},s=()=>{const l=e.currentTime;r(l+.02,o%4===0),t(o),o+=1};s(),T=window.setInterval(s,a)}function b(){T!=null&&(clearInterval(T),T=null),O=!1}function K(n){w();const t=C();t.state==="suspended"&&t.resume();const e=t.createOscillator(),a=t.createGain();e.type="sine",e.frequency.value=n,a.gain.value=0,e.connect(a),a.connect(t.destination),e.start();const o=t.currentTime;a.gain.linearRampToValueAtTime(.08,o+.15),H=e,v=a}function w(){if(!H||!v)return;const t=C().currentTime;try{v.gain.cancelScheduledValues(t),v.gain.setValueAtTime(v.gain.value,t),v.gain.linearRampToValueAtTime(1e-4,t+.12),H.stop(t+.15)}catch{}H=null,v=null}function Y(n,t=450){const e=C();e.state==="suspended"&&e.resume();const a=e.createOscillator(),o=e.createGain();a.type="sine",a.frequency.value=n,o.gain.value=1e-4;const r=e.currentTime,s=t/1e3;o.gain.exponentialRampToValueAtTime(.12,r+.02),o.gain.exponentialRampToValueAtTime(1e-4,r+s),a.connect(o),o.connect(e.destination),a.start(r),a.stop(r+s+.02)}const N="harmony-mentor-progress-v1";function J(){try{const n=localStorage.getItem(N);if(!n)return{track:"all",completedSteps:{}};const t=JSON.parse(n);return{track:t.track??"all",completedSteps:t.completedSteps??{}}}catch{return{track:"all",completedSteps:{}}}}function z(n){localStorage.setItem(N,JSON.stringify(n))}let h={name:"home"},f=J(),S=80,x=0;const k=document.querySelector("#app");function E(n,t){return`${n}::${t}`}function Q(n,t){f.completedSteps[E(n,t)]=!0,z(f)}function V(n,t){return!!f.completedSteps[E(n,t)]}function X(n){return{done:n.steps.filter(e=>V(n.id,e.id)).length,total:n.steps.length}}function _(n){switch(n){case"vocals":return"Vocals";case"guitar":return"Guitar";case"piano":return"Piano";default:return"Everything"}}function Z(n,t){return t==="all"?!0:t==="vocals"?["intro","context","vocal","theory","rhythm","recap"].includes(n):t==="guitar"||t==="piano"?["intro","context","instrument","theory","rhythm","recap"].includes(n):!0}function q(){const n=f.track,t=W.map(e=>{const{done:a,total:o}=X(e);return`
        <article class="song-card" data-action="open-song" data-song="${e.id}">
          <header>
            <h3>${c(e.title)}</h3>
            <span class="badge">${c(e.key)} · ${c(e.timeSignature)}</span>
          </header>
          <p class="pitch">${c(e.pitch)}</p>
          <footer>
            <span class="progress">${a}/${o} steps checked off</span>
            <span class="chev" aria-hidden="true">→</span>
          </footer>
        </article>`}).join("");return`
    <div class="layout home">
      <header class="hero">
        <p class="eyebrow">Song-first music mentor</p>
        <h1>Harmony Mentor</h1>
        <p class="lede">Pick a traditional tune. Each lesson step explains what you hear, what your voice or fingers should do, and why it matters — with a metronome and reference tones built in.</p>
        <div class="track-row">
          <span class="label">Focus</span>
          <div class="seg" role="group" aria-label="Learning focus">
            ${["all","vocals","guitar","piano"].map(e=>`
              <button type="button" class="seg-btn ${e===n?"on":""}" data-action="set-track" data-track="${e}">
                ${_(e)}
              </button>`).join("")}
          </div>
        </div>
      </header>
      <section class="song-grid" aria-label="Courses">
        ${t}
      </section>
      <footer class="site-foot">
        <p>Melodies referenced are traditional / public domain; lesson text is original. For serious ear training, pair this with a teacher and recordings you love.</p>
      </footer>
    </div>`}function ee(n,t){var $,B,F,G,L,M;const e=n.steps[t],a=f.track,o=Z(e.kind,a),r=(($=e.tips)==null?void 0:$.map(d=>`<li>${c(d)}</li>`).join(""))??"",s=((B=e.theory)==null?void 0:B.map(d=>`
      <details class="callout">
        <summary>${c(d.term)}</summary>
        <p>${c(d.explanation)}</p>
      </details>`).join(""))??"",l=((F=e.vocalPhrases)==null?void 0:F.map(d=>{const y=d.referenceHz;return`
        <div class="vphrase" data-hz="${y??""}">
          <p class="lyric">${c(d.text)}${d.breathAfter?' <span class="breath">(breathe)</span>':""}</p>
          <p class="tech">${c(d.technique)}</p>
          ${y?`<button type="button" class="btn ghost sm" data-action="blip" data-hz="${y}">Play reference pitch (~${Math.round(y)} Hz)</button>`:""}
        </div>`}).join(""))??"",u=((G=e.chords)==null?void 0:G.map(d=>`
      <div class="chord-card">
        <h4>${c(d.name)}</h4>
        <p class="role">${c(d.role)}</p>
        <p>${c(d.fingering)}</p>
        <pre class="diag">${c(d.diagramHint)}</pre>
      </div>`).join(""))??"",p=(L=e.interactives)==null?void 0:L.includes("metronome"),m=(M=e.interactives)==null?void 0:M.includes("drone"),i=e.keyRootHz,I=n.steps.map((d,y)=>{const U=V(n.id,d.id);return`<button type="button" class="${["step-dot",y===t?"current":"",U?"done":""].filter(Boolean).join(" ")}" data-action="goto-step" data-index="${y}" title="${c(d.title)}">${y+1}</button>`}).join("");return`
    <div class="layout course">
      <header class="course-head">
        <button type="button" class="btn text" data-action="home">← All songs</button>
        <div>
          <p class="eyebrow">${c(n.tradition)}</p>
          <h1>${c(n.title)}</h1>
          <p class="meta">${c(n.key)} · ${c(n.timeSignature)} · Focus: ${_(a)}</p>
        </div>
      </header>

      ${o?"":'<div class="banner">This step is general — switch focus to <strong>Everything</strong> in the home screen for the full path, or skip ahead.</div>'}

      <div class="course-body">
        <nav class="step-rail" aria-label="Lesson steps">
          ${I}
        </nav>
        <article class="step-panel">
          <header class="step-head">
            <span class="pill kind-${e.kind}">${c(e.kind)}</span>
            <h2>${c(e.title)}</h2>
            <p class="summary">${c(e.summary)}</p>
          </header>
          <div class="step-content prose">${e.detailHtml}</div>
          ${r?`<ul class="tips">${r}</ul>`:""}
          ${s?`<section class="theory-block"><h3>Deep dives</h3>${s}</section>`:""}
          ${l?`<section class="vocal-block"><h3>Vocal line</h3>${l}</section>`:""}
          ${u?`<section class="chord-block"><h3>Fingerboard / voicing</h3><div class="chord-grid">${u}</div></section>`:""}

          <section class="tools" aria-label="Practice tools">
            <h3>Interactive tools</h3>
            <div class="tool-row">
              ${p?`
                <div class="tool metronome ${P()?"active":""}" id="metro-panel">
                  <div class="metro-top">
                    <span>Metronome</span>
                    <span class="beat" id="beat-indicator" aria-live="polite">${P()?"●":"○"}</span>
                  </div>
                  <label class="bpm">BPM <input type="range" min="40" max="160" value="${S}" data-action="bpm" /></label>
                  <div class="metro-actions">
                    <button type="button" class="btn" data-action="metro-start">Start</button>
                    <button type="button" class="btn ghost" data-action="metro-stop">Stop</button>
                  </div>
                </div>`:'<p class="muted">No metronome on this step — open a rhythm step.</p>'}
              ${m&&i?`
                <div class="tool drone">
                  <span>Key drone (root)</span>
                  <p class="small">Sustained pitch for intonation — keep volume low; rest your ears.</p>
                  <div class="metro-actions">
                    <button type="button" class="btn" data-action="drone-start" data-hz="${i}">Hold drone</button>
                    <button type="button" class="btn ghost" data-action="drone-stop">Stop drone</button>
                  </div>
                </div>`:""}
            </div>
          </section>

          <footer class="step-foot">
            <button type="button" class="btn ghost" data-action="prev" ${t===0?"disabled":""}>Previous</button>
            <label class="check-done"><input type="checkbox" data-action="toggle-done" aria-label="Mark step practiced" ${V(n.id,e.id)?"checked":""} /> I practiced this step</label>
            <button type="button" class="btn" data-action="next" ${t>=n.steps.length-1?"disabled":""}>Next</button>
          </footer>
        </article>
        <aside class="side">
          <h3>Angles for your instruments</h3>
          <ul>${n.instrumentAngles.map(d=>`<li>${c(d)}</li>`).join("")}</ul>
        </aside>
      </div>
    </div>`}function c(n){return n.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function g(){if(h.name==="home")k.innerHTML=q();else{const n=j(h.songId);n?k.innerHTML=ee(n,h.stepIndex):(h={name:"home"},k.innerHTML=q())}te()}function te(){k.onclick=n=>{const t=n.target.closest("[data-action]");if(!t)return;const e=t.dataset.action;if(e==="open-song"&&(h={name:"course",songId:t.dataset.song,stepIndex:0},b(),w(),g()),e==="home"&&(h={name:"home"},b(),w(),g()),e==="set-track"&&(f.track=t.dataset.track,z(f),g()),e==="goto-step"&&h.name==="course"&&(h.stepIndex=Number(t.dataset.index),b(),w(),g()),e==="prev"&&h.name==="course"&&(h.stepIndex=Math.max(0,h.stepIndex-1),b(),w(),g()),e==="next"&&h.name==="course"){const a=j(h.songId);a&&(h.stepIndex=Math.min(a.steps.length-1,h.stepIndex+1)),b(),w(),g()}if(e==="metro-start"&&(R(S,()=>{x+=1;const o=document.getElementById("beat-indicator"),r=document.getElementById("metro-panel");o&&(o.textContent=x%2===0?"●":"○"),r==null||r.classList.add("active")}),g()),e==="metro-stop"&&(b(),g()),e==="drone-start"){const a=Number(t.dataset.hz);a>0&&K(a)}if(e==="drone-stop"&&w(),e==="blip"){const a=Number(t.dataset.hz);a>0&&Y(a)}},k.onchange=n=>{var e,a;const t=n.target;if(((e=t==null?void 0:t.dataset)==null?void 0:e.action)==="bpm"){S=Number(t.value);const o=P();b(),o&&R(S,()=>{const r=document.getElementById("beat-indicator");r&&(r.textContent=x%2===0?"●":"○"),x+=1})}if(((a=t==null?void 0:t.dataset)==null?void 0:a.action)==="toggle-done"&&h.name==="course"){const o=j(h.songId);if(!o)return;const r=o.steps[h.stepIndex];t.checked?Q(o.id,r.id):(delete f.completedSteps[E(o.id,r.id)],z(f)),g()}}}function ne(){g()}const oe="modulepreload",ae=function(n){return"/learner/"+n},D={},re=function(t,e,a){let o=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(e.map(u=>{if(u=ae(u),u in D)return;D[u]=!0;const p=u.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${m}`))return;const i=document.createElement("link");if(i.rel=p?"stylesheet":oe,p||(i.as="script"),i.crossOrigin="",i.href=u,l&&i.setAttribute("nonce",l),document.head.appendChild(i),p)return new Promise((I,$)=>{i.addEventListener("load",I),i.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return o.then(s=>{for(const l of s||[])l.status==="rejected"&&r(l.reason);return t().catch(r)})};function se(n={}){const{immediate:t=!1,onNeedRefresh:e,onOfflineReady:a,onRegistered:o,onRegisteredSW:r,onRegisterError:s}=n;let l,u;const p=async(i=!0)=>{await u};async function m(){if("serviceWorker"in navigator){if(l=await re(async()=>{const{Workbox:i}=await import("./workbox-window.prod.es5-vqzQaGvo.js");return{Workbox:i}},[]).then(({Workbox:i})=>new i("/learner/sw.js",{scope:"/learner/",type:"classic"})).catch(i=>{s==null||s(i)}),!l)return;l.addEventListener("activated",i=>{(i.isUpdate||i.isExternal)&&window.location.reload()}),l.addEventListener("installed",i=>{i.isUpdate||a==null||a()}),l.register({immediate:t}).then(i=>{r?r("/learner/sw.js",i):o==null||o(i)}).catch(i=>{s==null||s(i)})}}return u=m(),p}se({immediate:!0});ne();
