var ie=Object.defineProperty;var re=(n,e,t)=>e in n?ie(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var v=(n,e,t)=>re(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const te=[{id:"twinkle",title:"Twinkle, Twinkle, Little Star",tradition:"Traditional (Ah! vous dirai-je, Maman)",key:"C major",timeSignature:"4/4",pitch:"Simple contour, steady rhythm, and a full major scale in the melody — ideal first map for ear, voice, and fingers.",instrumentAngles:["Piano: hands stay in C position; notice tonic on strong beats.","Guitar: open C–G–Am–F style harmony can support the tune later."],steps:[{id:"tw-1",title:"Start from the song, not from a textbook",kind:"intro",summary:"We anchor every idea in what you actually sing or play.",detailHtml:`
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
        `}]}];function G(n){return te.find(e=>e.id===n)}let D=null;function N(){return D||(D=new AudioContext),D}let E=null,U=!1,L=null,z=null;function q(){return U}function K(n,e){y();const t=N();t.state==="suspended"&&t.resume();const a=6e4/n|0;let o=0;U=!0;const s=(i,l)=>{const u=t.createOscillator(),b=t.createGain();u.type="sine",u.frequency.value=l?1e3:760,b.gain.value=l?.12:.07,b.gain.exponentialRampToValueAtTime(1e-4,i+.06),u.connect(b),b.connect(t.destination),u.start(i),u.stop(i+.07)},r=()=>{const i=t.currentTime;s(i+.02,o%4===0),e(o),o+=1};r(),E=window.setInterval(r,a)}function y(){E!=null&&(clearInterval(E),E=null),U=!1}function le(n){w();const e=N();e.state==="suspended"&&e.resume();const t=e.createOscillator(),a=e.createGain();t.type="sine",t.frequency.value=n,a.gain.value=0,t.connect(a),a.connect(e.destination),t.start();const o=e.currentTime;a.gain.linearRampToValueAtTime(.08,o+.15),L=t,z=a}function w(){if(!L||!z)return;const e=N().currentTime;try{z.gain.cancelScheduledValues(e),z.gain.setValueAtTime(z.gain.value,e),z.gain.linearRampToValueAtTime(1e-4,e+.12),L.stop(e+.15)}catch{}L=null,z=null}function J(n,e=450){const t=N();t.state==="suspended"&&t.resume();const a=t.createOscillator(),o=t.createGain();a.type="sine",a.frequency.value=n,o.gain.value=1e-4;const s=t.currentTime,r=e/1e3;o.gain.exponentialRampToValueAtTime(.12,s+.02),o.gain.exponentialRampToValueAtTime(1e-4,s+r),a.connect(o),o.connect(t.destination),a.start(s),a.stop(s+r+.02)}const M={hindustani:{title:"Hindustani classical",summary:"Emphasis on sustained vowels (ākār), microtones (shruti), meend (slides), and taān-style agility — always with a guru or recording reference for rāg-specific nuance.",pillars:["Long ākār on Sa–Pa","Sargam patterns in vilambit laya","Meend between nearby swaras","Breath before gamak-heavy phrases"],drills:[{name:"Ākār on Sa",detail:"Hold a comfortable Sa for 4 slow beats; release without dropping support. Repeat on lower Ni if Sa is high."},{name:"Meend awareness",detail:"Slide slowly between two adjacent scale degrees without “stepping”; keep jaw quiet, let larynx height follow the line."},{name:"Layakārī with metronome",detail:"Use the app metronome at 60–72 BPM; sing simple sargam in doubles, then triplets, keeping vowel narrow."}]},rock:{title:"Rock & contemporary belt",summary:"Mix chest and head resonance safely, use twang for cut without pushing volume, and manage breath for phrases that sit “forward”.",pillars:["Twang / cry on onset","Short belt bursts, not marathon screams","Consonants for rhythm, vowels for tone","Cool-down humming after loud sets"],drills:[{name:"Nay–nay on a 5-note scale",detail:"Forward placement; keep throat wide, edges soft; stop if you feel pinching."},{name:"Glottal-friendly onsets",detail:"Start phrases on “hoo” or “yeah” airflow before lyrics to avoid hard glottal hits on high notes."},{name:"Distortion hygiene",detail:"If you use grit, alternate with clean takes; hydrate; never “grind” through pain."}]},opera:{title:"Opera / classical legato",summary:"Spin tone on steady breath, manage passaggio with vowel shape, and prioritise line over local “push”.",pillars:["Tall back vowels, narrow front space","Legato through consonant clusters","Mess di voce only with guidance","Text-driven rhythm, breath-driven line"],drills:[{name:"Five-note lip trill or straw",detail:"Keeps pressure off folds while mapping support; glide slowly up and down a minor third."},{name:"Vowel ladder on one pitch",detail:"On a mid vowel, morph [a] → [e] → [i] slowly without losing spin or dropping the soft palate."},{name:"Phrase mapping",detail:"Mark one breath per phrase in your sheet music; speak text in rhythm, then sing on “loo” before words."}]}};function H(n,e){return n.includes(e)}function F(n,e){return n.includes(e)}function ce(n,e,t,a){const o=[],s=r=>{o.some(i=>i.id===r.id)||o.push(r)};return(H(n,"pitch")||F(e,"accuracy"))&&s({id:"t-pitch-drone",title:"Drone–match sustained vowels",why:"Trains steady fundamental against a reference — useful when pitch drifts under fatigue.",minutes:"5–8 min",style:t}),(H(n,"breath")||F(e,"health"))&&s({id:"t-breath-pulse",title:"Pulse breaths + hiss control",why:"Separates ribcage stability from throat tension; extends phrase capacity.",minutes:"4–6 min"}),(H(n,"range")||F(e,"range"))&&s({id:"t-range-straw",title:"Straw phonation glides",why:"Encourages efficient fold closure through passaggio-like zones without slamming weight.",minutes:"6 min"}),H(n,"tone")&&s({id:"t-tone-hum",title:"Hummed scales with nasal–oral balance",why:"Builds resonance awareness without over-pressing.",minutes:"5 min"}),H(n,"agility")&&s({id:"t-agility-five",title:"Five-note patterns at slow → medium tempo",why:"Accuracy first; speed only after shapes are even.",minutes:"8 min"}),H(n,"stamina")&&s({id:"t-stamina-50",title:"50% volume “micro-sets”",why:"Builds coordination before adding weight or length.",minutes:"10 min"}),(H(n,"projection")||F(e,"performance"))&&s({id:"t-proj-text",title:"Spoken text at performance distance",why:"Forwards resonance without yelling; map consonant energy.",minutes:"5 min"}),H(n,"confidence")&&s({id:"t-conf-short",title:"Short “concert” recordings (30s)",why:"Exposure therapy in small doses; review once for pitch, once for joy.",minutes:"3 min × 3"}),t==="hindustani"&&s({id:"st-hin-meend",title:"Meend between Pa–Sa and back",why:"Core Hindustani gesture; pairs with breath planning.",minutes:"7 min",style:"hindustani"}),t==="rock"&&s({id:"st-rock-belt",title:"Twang onset on mid voice before extending",why:"Carries cut without pushing chest weight too high.",minutes:"6 min",style:"rock"}),t==="opera"&&s({id:"st-op-legato",title:"Legato “loo” through one line of your repertoire",why:"Line-first singing; consonants light, vowels carry.",minutes:"8 min",style:"opera"}),a&&(a.meanAbsCents>35&&s({id:"a-pitch-narrow",title:"Narrow-range matching game",why:"Your last take wandered more than ~35 cents on average from the target; shrink the interval until stable, then widen.",minutes:"5 min"}),a.jitterCents>25&&s({id:"a-stability",title:"Slow vibrato or straight-tone drills",why:"Frame-to-frame pitch moved a lot — work a steady source before adding ornament.",minutes:"5 min"}),a.voicedRatio<.45&&s({id:"a-voice-onset",title:"Onset exercises: voiced “goo” / lip trill",why:"Many frames were unvoiced or too quiet — onset and breath pressure may need tuning.",minutes:"6 min"})),o.length===0&&s({id:"fallback",title:"General warm-up + song course",why:"Complete the diagnostic for more tailored ideas, or pick a song course from the home screen.",minutes:"10 min"}),o.slice(0,8)}function de(n,e){const t=n.length;if(t<512)return-1;let a=0;for(let p=0;p<t;p++)a+=n[p]*n[p];if(a=Math.sqrt(a/t),a<.02)return-1;const o=75,r=Math.floor(e/1100),i=Math.ceil(e/o),l=new Float32Array(i+2);for(let p=r;p<=i;p++){let T=0;for(let m=0;m<t-p;m++)T+=n[m]*n[m+p];l[p]=T}let u=-1,b=0;for(let p=r+2;p<i-2;p++){const T=l[p];T>b&&l[p]>l[p-1]&&l[p]>l[p+1]&&(b=T,u=p)}if(u<r)return-1;const h=l[u-1],A=l[u],I=l[u+1],P=h-2*A+I,B=P!==0?.5*(h-I)/P:0,j=u+B;return j<r?-1:e/j}function he(n,e){return 1200*Math.log2(n/e)}function ue(n){if(n.length===0)return NaN;const e=[...n].sort((a,o)=>a-o),t=Math.floor(e.length/2);return e.length%2?e[t]:(e[t-1]+e[t])/2}function Q(n){return n.length===0?NaN:n.reduce((e,t)=>e+t,0)/n.length}const me=[{label:"C3",hz:130.81},{label:"D3",hz:146.83},{label:"E3",hz:164.81},{label:"F3",hz:174.61},{label:"G3",hz:196},{label:"A3",hz:220},{label:"B3",hz:246.94},{label:"C4",hz:261.63},{label:"D4",hz:293.66},{label:"E4",hz:329.63},{label:"F4",hz:349.23},{label:"G4",hz:392},{label:"A4",hz:440}];class pe{constructor(){v(this,"ctx",null);v(this,"stream",null);v(this,"source",null);v(this,"analyser",null);v(this,"buf",null);v(this,"raf",0);v(this,"samples",[]);v(this,"centsSeries",[]);v(this,"frameCount",0);v(this,"voicedFrames",0);v(this,"targetHz",261.63);v(this,"active",!1)}setTargetHz(e){this.targetHz=e}async start(e){await this.stop(),this.samples=[],this.centsSeries=[],this.frameCount=0,this.voicedFrames=0,this.ctx=new AudioContext,this.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1}}),this.source=this.ctx.createMediaStreamSource(this.stream),this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=4096,this.analyser.smoothingTimeConstant=.35,this.source.connect(this.analyser);const t=this.analyser.fftSize;this.buf=new Float32Array(t),this.active=!0;const a=()=>{if(!this.active||!this.analyser||!this.buf||!this.ctx)return;this.frameCount+=1,this.analyser.getFloatTimeDomainData(this.buf);const o=de(this.buf,this.ctx.sampleRate);if(o>0){this.voicedFrames+=1,this.samples.push(o);const s=he(o,this.targetHz);this.centsSeries.push(s),e==null||e(o,s)}this.raf=requestAnimationFrame(a)};this.raf=requestAnimationFrame(a)}async stop(){var i;this.active=!1,cancelAnimationFrame(this.raf),this.raf=0;try{(i=this.source)==null||i.disconnect()}catch{}if(this.source=null,this.analyser=null,this.buf=null,this.stream)for(const l of this.stream.getTracks())l.stop();if(this.stream=null,this.ctx&&await this.ctx.close(),this.ctx=null,this.samples.length<8)return null;const e=ue(this.samples),t=this.centsSeries.map(l=>Math.abs(l)),a=Q(t),o=[];for(let l=1;l<this.centsSeries.length;l++)o.push(Math.abs(this.centsSeries[l]-this.centsSeries[l-1]));const s=o.length?Q(o):0,r=this.frameCount>0?this.voicedFrames/this.frameCount:0;return{at:new Date().toISOString(),targetHz:this.targetHz,meanAbsCents:a,jitterCents:s,voicedRatio:r,medianHz:e}}}const ge=[{id:"pitch",label:"Pitch / intonation (singing flat or sharp)"},{id:"breath",label:"Breath control & phrase length"},{id:"range",label:"Range or passaggio / register breaks"},{id:"tone",label:"Tone colour, resonance, or nasality"},{id:"agility",label:"Agility & fast passages"},{id:"stamina",label:"Stamina & vocal fatigue"},{id:"projection",label:"Projection & dynamics"},{id:"confidence",label:"Nerves / consistency under pressure"}],fe=[{id:"accuracy",label:"More accurate pitch"},{id:"tone",label:"Richer or more consistent tone"},{id:"range",label:"Comfortable high or low notes"},{id:"style",label:"Sound more “in style” (genre-specific)"},{id:"health",label:"Sustainable technique (less strain)"},{id:"performance",label:"Performance & stage confidence"}],ne="harmony-mentor-progress-v1",ae="harmony-mentor-vocal-v1";function ye(){try{const n=localStorage.getItem(ne);if(!n)return{track:"all",completedSteps:{}};const e=JSON.parse(n);return{track:e.track??"all",completedSteps:e.completedSteps??{}}}catch{return{track:"all",completedSteps:{}}}}function W(n){localStorage.setItem(ne,JSON.stringify(n))}function O(){return{version:1,completedDiagnostic:!1,problemIds:[],goalIds:[],updatedAt:new Date().toISOString()}}function be(){try{const n=localStorage.getItem(ae);if(!n)return O();const e=JSON.parse(n);return e.version!==1?O():{...O(),...e,problemIds:e.problemIds??[],goalIds:e.goalIds??[]}}catch{return O()}}function X(n){n.updatedAt=new Date().toISOString(),localStorage.setItem(ae,JSON.stringify(n))}let d={name:"home"},x=ye(),g=be(),R=80,V=0,$=null;const S=document.querySelector("#app");async function k(){$&&(await $.stop(),$=null)}function Y(n,e){return`${n}::${e}`}function ve(n,e){x.completedSteps[Y(n,e)]=!0,W(x)}function _(n,e){return!!x.completedSteps[Y(n,e)]}function we(n){return{done:n.steps.filter(t=>_(n.id,t.id)).length,total:n.steps.length}}function oe(n){switch(n){case"vocals":return"Vocals";case"guitar":return"Guitar";case"piano":return"Piano";default:return"Everything"}}function ke(n,e){return e==="all"?!0:e==="vocals"?["intro","context","vocal","theory","rhythm","recap"].includes(n):e==="guitar"||e==="piano"?["intro","context","instrument","theory","rhythm","recap"].includes(n):!0}function Se(){const n=g.completedDiagnostic;return`
    <div class="layout vocal-layout">
      <header class="course-head">
        <button type="button" class="btn text" data-action="home">← Home</button>
        <div>
          <p class="eyebrow">Vocal training</p>
          <h1>Vocal lab</h1>
          <p class="meta">Tell us what you are working on, pick a tradition, then use the mic coach for pitch feedback. This is educational software — not a replacement for a qualified teacher.</p>
        </div>
      </header>
      <div class="vocal-nav-grid">
        <article class="vocal-card ${n?"":"accent"}" data-action="vocal-diag">
          <h3>1 · Your profile</h3>
          <p>${n?"Update your goals and problem areas.":"Answer a few questions so suggestions match you better."}</p>
          <span class="chev">→</span>
        </article>
        ${["hindustani","rock","opera"].map(e=>`
        <article class="vocal-card" data-action="vocal-style" data-style="${e}">
          <h3>${c(M[e].title)}</h3>
          <p>${c(M[e].summary.slice(0,120))}…</p>
          <span class="chev">→</span>
        </article>`).join("")}
        <article class="vocal-card accent2" data-action="vocal-record">
          <h3>Mic coach · pitch check</h3>
          <p>Sing toward a target note; we estimate pitch in the browser and suggest drills. Allow microphone access when asked.</p>
          <span class="chev">→</span>
        </article>
      </div>
    </div>`}function $e(){const n=ge.map(a=>`
    <label class="chk"><input type="checkbox" name="prob" value="${a.id}" ${g.problemIds.includes(a.id)?"checked":""} /> ${c(a.label)}</label>`).join(""),e=fe.map(a=>`
    <label class="chk"><input type="checkbox" name="goal" value="${a.id}" ${g.goalIds.includes(a.id)?"checked":""} /> ${c(a.label)}</label>`).join(""),t=["","hindustani","rock","opera"].map(a=>a===""?`<option value="" ${g.primaryStyle?"":"selected"}>No main focus yet</option>`:`<option value="${a}" ${g.primaryStyle===a?"selected":""}>${M[a].title}</option>`).join("");return`
    <div class="layout vocal-layout">
      <header class="course-head">
        <button type="button" class="btn text" data-action="vocal-hub">← Vocal lab</button>
        <div>
          <p class="eyebrow">Step 1 of 2</p>
          <h1>Where do you want to grow?</h1>
          <p class="meta">Select everything that applies. You can change this any time.</p>
        </div>
      </header>
      <article class="step-panel diag-panel">
        <h2>Problem areas you notice</h2>
        <div class="chk-grid">${n}</div>
        <h2>Improvements you are chasing</h2>
        <div class="chk-grid">${e}</div>
        <h2>Primary tradition (optional)</h2>
        <label class="select-row">Main focus <select id="diag-style">${t}</select></label>
        <footer class="step-foot" style="margin-top:1.25rem">
          <button type="button" class="btn ghost" data-action="vocal-hub">Cancel</button>
          <button type="button" class="btn" data-action="diag-submit">Save profile</button>
        </footer>
      </article>
    </div>`}function xe(n){const e=M[n],t=e.pillars.map(o=>`<li>${c(o)}</li>`).join(""),a=e.drills.map(o=>`
      <div class="drill-card">
        <h4>${c(o.name)}</h4>
        <p>${c(o.detail)}</p>
      </div>`).join("");return`
    <div class="layout vocal-layout">
      <header class="course-head">
        <button type="button" class="btn text" data-action="vocal-hub">← Vocal lab</button>
        <div>
          <p class="eyebrow">Tradition toolkit</p>
          <h1>${c(e.title)}</h1>
          <p class="meta">${c(e.summary)}</p>
        </div>
      </header>
      <div class="course-body" style="grid-template-columns:1fr">
        <article class="step-panel">
          <h2>Practice pillars</h2>
          <ul class="tips">${t}</ul>
          <h2>Sample drills</h2>
          <div class="drill-grid">${a}</div>
          <p class="muted" style="margin-top:1rem">Use the metronome and drones inside song lessons, then open the mic coach to check intonation on a sustained vowel.</p>
          <footer class="step-foot">
            <button type="button" class="btn ghost" data-action="vocal-hub">Back</button>
            <button type="button" class="btn" data-action="vocal-record" data-style="${n}">Open mic coach</button>
          </footer>
        </article>
      </div>
    </div>`}function Te(n){const e=me.map(i=>`<option value="${i.hz}" ${Math.abs(i.hz-261.63)<1?"selected":""}>${i.label} (${Math.round(i.hz)} Hz)</option>`).join(""),t=g.lastSession,a=t?`
    <section class="feedback-block">
      <h3>Last session snapshot</h3>
      <ul class="tips">
        <li>Target ≈ ${Math.round(t.targetHz)} Hz · median heard ≈ ${Math.round(t.medianHz)} Hz</li>
        <li>Average distance from target: <strong>${t.meanAbsCents.toFixed(0)} cents</strong> (about ${(t.meanAbsCents/100).toFixed(2)} semitones)</li>
        <li>Frame-to-frame pitch motion (rough stability): <strong>${t.jitterCents.toFixed(0)} cents</strong> per step</li>
        <li>Voiced portion of listen: <strong>${(t.voicedRatio*100).toFixed(0)}%</strong></li>
      </ul>
    </section>`:"",o=ce(g.problemIds,g.goalIds,n??g.primaryStyle,g.lastSession).map(i=>`
      <div class="suggest-card">
        <h4>${c(i.title)}</h4>
        <p>${c(i.why)}</p>
        <span class="badge">${c(i.minutes)}</span>
      </div>`).join(""),s=n??g.primaryStyle,r=s?M[s].title:"";return`
    <div class="layout vocal-layout">
      <header class="course-head">
        <button type="button" class="btn text" data-action="vocal-hub">← Vocal lab</button>
        <div>
          <p class="eyebrow">Mic coach</p>
          <h1>Pitch & stability check</h1>
          <p class="meta">Audio stays in your browser. We run a simple pitch tracker — use headphones to reduce bleed from the reference tone.</p>
        </div>
      </header>
      <article class="step-panel">
        <h2>1 · Target pitch</h2>
        <label class="select-row">Note <select id="vrec-target">${e}</select></label>
        <button type="button" class="btn ghost sm" data-action="vrec-blip">Play target blip</button>

        <h2 style="margin-top:1.25rem">2 · Listen</h2>
        <p class="muted">Hold a steady vowel (e.g. “ah” or “oo”) toward your mic. Start, sing for a few seconds, then stop for analysis.</p>
        <div class="vrec-controls">
          <button type="button" class="btn" data-action="vrec-start" id="vrec-start-btn">Start listening</button>
          <button type="button" class="btn ghost" data-action="vrec-stop" id="vrec-stop-btn" disabled>Stop & analyze</button>
        </div>
        <div class="vrec-live" id="vrec-live" aria-live="polite">Idle — start when ready.</div>

        ${a}

        <h2 style="margin-top:1.25rem">Suggested trainings</h2>
        <p class="muted small">Based on your profile${r?` and ${c(r)}`:""}, plus your last analysis when available.</p>
        <div class="suggest-grid">${o}</div>

        <footer class="step-foot">
          <button type="button" class="btn ghost" data-action="vocal-hub">Done</button>
        </footer>
      </article>
    </div>`}function Z(){const n=x.track,e=te.map(t=>{const{done:a,total:o}=we(t);return`
        <article class="song-card" data-action="open-song" data-song="${t.id}">
          <header>
            <h3>${c(t.title)}</h3>
            <span class="badge">${c(t.key)} · ${c(t.timeSignature)}</span>
          </header>
          <p class="pitch">${c(t.pitch)}</p>
          <footer>
            <span class="progress">${a}/${o} steps checked off</span>
            <span class="chev" aria-hidden="true">→</span>
          </footer>
        </article>`}).join("");return`
    <div class="layout home">
      <header class="hero">
        <p class="eyebrow">Song-first music mentor</p>
        <h1>Harmony Mentor</h1>
        <p class="lede">Train vocals with a quick profile, tradition-specific ideas, and a browser mic coach — or learn instruments through song-based lessons, metronome, and drones.</p>
        <div class="hero-actions">
          <button type="button" class="btn hero-cta" data-action="open-vocal-hub">Open vocal lab</button>
        </div>
        <div class="track-row">
          <span class="label">Song course focus</span>
          <div class="seg" role="group" aria-label="Learning focus">
            ${["all","vocals","guitar","piano"].map(t=>`
              <button type="button" class="seg-btn ${t===n?"on":""}" data-action="set-track" data-track="${t}">
                ${oe(t)}
              </button>`).join("")}
          </div>
        </div>
      </header>
      <section class="song-grid" aria-label="Courses">
        ${e}
      </section>
      <footer class="site-foot">
        <p>Melodies referenced are traditional / public domain; lesson text is original. Mic analysis is heuristic only — pair with a teacher for diagnosis of strain or injury.</p>
      </footer>
    </div>`}function Ce(n,e){var I,P,B,j,p,T;const t=n.steps[e],a=x.track,o=ke(t.kind,a),s=((I=t.tips)==null?void 0:I.map(m=>`<li>${c(m)}</li>`).join(""))??"",r=((P=t.theory)==null?void 0:P.map(m=>`
      <details class="callout">
        <summary>${c(m.term)}</summary>
        <p>${c(m.explanation)}</p>
      </details>`).join(""))??"",i=((B=t.vocalPhrases)==null?void 0:B.map(m=>{const C=m.referenceHz;return`
        <div class="vphrase" data-hz="${C??""}">
          <p class="lyric">${c(m.text)}${m.breathAfter?' <span class="breath">(breathe)</span>':""}</p>
          <p class="tech">${c(m.technique)}</p>
          ${C?`<button type="button" class="btn ghost sm" data-action="blip" data-hz="${C}">Play reference pitch (~${Math.round(C)} Hz)</button>`:""}
        </div>`}).join(""))??"",l=((j=t.chords)==null?void 0:j.map(m=>`
      <div class="chord-card">
        <h4>${c(m.name)}</h4>
        <p class="role">${c(m.role)}</p>
        <p>${c(m.fingering)}</p>
        <pre class="diag">${c(m.diagramHint)}</pre>
      </div>`).join(""))??"",u=(p=t.interactives)==null?void 0:p.includes("metronome"),b=(T=t.interactives)==null?void 0:T.includes("drone"),h=t.keyRootHz,A=n.steps.map((m,C)=>{const se=_(n.id,m.id);return`<button type="button" class="${["step-dot",C===e?"current":"",se?"done":""].filter(Boolean).join(" ")}" data-action="goto-step" data-index="${C}" title="${c(m.title)}">${C+1}</button>`}).join("");return`
    <div class="layout course">
      <header class="course-head">
        <button type="button" class="btn text" data-action="home">← Home</button>
        <div>
          <p class="eyebrow">${c(n.tradition)}</p>
          <h1>${c(n.title)}</h1>
          <p class="meta">${c(n.key)} · ${c(n.timeSignature)} · Focus: ${oe(a)}</p>
        </div>
      </header>

      ${o?"":'<div class="banner">This step is general — switch focus to <strong>Everything</strong> in the home screen for the full path, or skip ahead.</div>'}

      <div class="course-body">
        <nav class="step-rail" aria-label="Lesson steps">
          ${A}
        </nav>
        <article class="step-panel">
          <header class="step-head">
            <span class="pill kind-${t.kind}">${c(t.kind)}</span>
            <h2>${c(t.title)}</h2>
            <p class="summary">${c(t.summary)}</p>
          </header>
          <div class="step-content prose">${t.detailHtml}</div>
          ${s?`<ul class="tips">${s}</ul>`:""}
          ${r?`<section class="theory-block"><h3>Deep dives</h3>${r}</section>`:""}
          ${i?`<section class="vocal-block"><h3>Vocal line</h3>${i}</section>`:""}
          ${l?`<section class="chord-block"><h3>Fingerboard / voicing</h3><div class="chord-grid">${l}</div></section>`:""}

          <section class="tools" aria-label="Practice tools">
            <h3>Interactive tools</h3>
            <div class="tool-row">
              ${u?`
                <div class="tool metronome ${q()?"active":""}" id="metro-panel">
                  <div class="metro-top">
                    <span>Metronome</span>
                    <span class="beat" id="beat-indicator" aria-live="polite">${q()?"●":"○"}</span>
                  </div>
                  <label class="bpm">BPM <input type="range" min="40" max="160" value="${R}" data-action="bpm" /></label>
                  <div class="metro-actions">
                    <button type="button" class="btn" data-action="metro-start">Start</button>
                    <button type="button" class="btn ghost" data-action="metro-stop">Stop</button>
                  </div>
                </div>`:'<p class="muted">No metronome on this step — open a rhythm step.</p>'}
              ${b&&h?`
                <div class="tool drone">
                  <span>Key drone (root)</span>
                  <p class="small">Sustained pitch for intonation — keep volume low; rest your ears.</p>
                  <div class="metro-actions">
                    <button type="button" class="btn" data-action="drone-start" data-hz="${h}">Hold drone</button>
                    <button type="button" class="btn ghost" data-action="drone-stop">Stop drone</button>
                  </div>
                </div>`:""}
            </div>
          </section>

          <footer class="step-foot">
            <button type="button" class="btn ghost" data-action="prev" ${e===0?"disabled":""}>Previous</button>
            <label class="check-done"><input type="checkbox" data-action="toggle-done" aria-label="Mark step practiced" ${_(n.id,t.id)?"checked":""} /> I practiced this step</label>
            <button type="button" class="btn" data-action="next" ${e>=n.steps.length-1?"disabled":""}>Next</button>
          </footer>
        </article>
        <aside class="side">
          <h3>Angles for your instruments</h3>
          <ul>${n.instrumentAngles.map(m=>`<li>${c(m)}</li>`).join("")}</ul>
        </aside>
      </div>
    </div>`}function c(n){return n.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function f(){if(d.name==="home")S.innerHTML=Z();else if(d.name==="vocal-hub")S.innerHTML=Se();else if(d.name==="vocal-diagnostic")S.innerHTML=$e();else if(d.name==="vocal-style")S.innerHTML=xe(d.style);else if(d.name==="vocal-record")S.innerHTML=Te(d.style);else{const n=G(d.songId);n?S.innerHTML=Ce(n,d.stepIndex):(d={name:"home"},S.innerHTML=Z())}He()}function He(){S.onclick=n=>{const e=n.target.closest("[data-action]");if(!e)return;const t=e.dataset.action;if(t==="open-vocal-hub"){k(),y(),w(),d={name:"vocal-hub"},f();return}if(t==="vocal-hub"){k(),y(),w(),d={name:"vocal-hub"},f();return}if(t==="vocal-diag"){k(),y(),w(),d={name:"vocal-diagnostic"},f();return}if(t==="vocal-style"){k(),y(),w();const a=e.dataset.style;a&&(d={name:"vocal-style",style:a}),f();return}if(t==="vocal-record"){k(),y(),w(),d={name:"vocal-record",style:e.dataset.style},f();return}if(t==="diag-submit"){k(),y(),w();const a=Array.from(document.querySelectorAll('input[name="prob"]:checked')).map(i=>i.value),o=Array.from(document.querySelectorAll('input[name="goal"]:checked')).map(i=>i.value),s=document.getElementById("diag-style"),r=(s==null?void 0:s.value)||"";g.problemIds=a,g.goalIds=o,g.primaryStyle=r||void 0,g.completedDiagnostic=!0,X(g),d={name:"vocal-hub"},f();return}if(t==="vrec-blip"){const a=document.getElementById("vrec-target"),o=Number(a==null?void 0:a.value);o>0&&J(o);return}if(t==="vrec-start"){(async()=>{const a=document.getElementById("vrec-target"),o=Number(a==null?void 0:a.value)||261.63,s=document.getElementById("vrec-live"),r=document.getElementById("vrec-start-btn"),i=document.getElementById("vrec-stop-btn");await k(),$=new pe,$.setTargetHz(o),r&&(r.disabled=!0),i&&(i.disabled=!1),s&&(s.textContent="Listening… sing a steady tone.");try{await $.start((l,u)=>{s&&(s.textContent=`≈ ${Math.round(l)} Hz · ${u>=0?"+":""}${u.toFixed(0)} cents from target`)})}catch{s&&(s.textContent="Microphone permission denied or unavailable."),r&&(r.disabled=!1),i&&(i.disabled=!0)}})();return}if(t==="vrec-stop"){const a=d.name==="vocal-record"?d.style:void 0;(async()=>{const o=document.getElementById("vrec-live"),s=document.getElementById("vrec-start-btn"),r=document.getElementById("vrec-stop-btn"),i=$?await $.stop():null;$=null,s&&(s.disabled=!1),r&&(r.disabled=!0),i?(g.lastSession=i,X(g),o&&(o.textContent=`Analyzed. Average |Δ| ≈ ${i.meanAbsCents.toFixed(0)} cents · stability ≈ ${i.jitterCents.toFixed(0)} cents/step · voiced ${(i.voicedRatio*100).toFixed(0)}% of frames.`),d={name:"vocal-record",style:a},f()):o&&(o.textContent="Not enough pitched signal — try closer to the mic, louder vowel, or longer hold.")})();return}if(t==="open-song"){k(),y(),w(),d={name:"course",songId:e.dataset.song,stepIndex:0},f();return}if(t==="home"){k(),y(),w(),d={name:"home"},f();return}if(t==="set-track"){x.track=e.dataset.track,W(x),f();return}if(t==="goto-step"&&d.name==="course"){y(),w(),d.stepIndex=Number(e.dataset.index),f();return}if(t==="prev"&&d.name==="course"){y(),w(),d.stepIndex=Math.max(0,d.stepIndex-1),f();return}if(t==="next"&&d.name==="course"){y(),w();const a=G(d.songId);a&&(d.stepIndex=Math.min(a.steps.length-1,d.stepIndex+1)),f();return}if(t==="metro-start"){K(R,()=>{V+=1;const o=document.getElementById("beat-indicator"),s=document.getElementById("metro-panel");o&&(o.textContent=V%2===0?"●":"○"),s==null||s.classList.add("active")}),f();return}if(t==="metro-stop"){y(),f();return}if(t==="drone-start"){const a=Number(e.dataset.hz);a>0&&le(a);return}if(t==="drone-stop"){w();return}if(t==="blip"){const a=Number(e.dataset.hz);a>0&&J(a)}},S.onchange=n=>{var t,a;const e=n.target;if(((t=e==null?void 0:e.dataset)==null?void 0:t.action)==="bpm"){R=Number(e.value);const o=q();y(),o&&K(R,()=>{const s=document.getElementById("beat-indicator");s&&(s.textContent=V%2===0?"●":"○"),V+=1})}if(((a=e==null?void 0:e.dataset)==null?void 0:a.action)==="toggle-done"&&d.name==="course"){const o=G(d.songId);if(!o)return;const s=o.steps[d.stepIndex];e.checked?ve(o.id,s.id):(delete x.completedSteps[Y(o.id,s.id)],W(x)),f()}}}function Ie(){f()}const ze="modulepreload",Ae=function(n){return"/learner/"+n},ee={},Pe=function(e,t,a){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),i=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));o=Promise.allSettled(t.map(l=>{if(l=Ae(l),l in ee)return;ee[l]=!0;const u=l.endsWith(".css"),b=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${b}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":ze,u||(h.as="script"),h.crossOrigin="",h.href=l,i&&h.setAttribute("nonce",i),document.head.appendChild(h),u)return new Promise((A,I)=>{h.addEventListener("load",A),h.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(r){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r}return o.then(r=>{for(const i of r||[])i.status==="rejected"&&s(i.reason);return e().catch(s)})};function je(n={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:a,onRegistered:o,onRegisteredSW:s,onRegisterError:r}=n;let i,l;const u=async(h=!0)=>{await l};async function b(){if("serviceWorker"in navigator){if(i=await Pe(async()=>{const{Workbox:h}=await import("./workbox-window.prod.es5-vqzQaGvo.js");return{Workbox:h}},[]).then(({Workbox:h})=>new h("/learner/sw.js",{scope:"/learner/",type:"classic"})).catch(h=>{r==null||r(h)}),!i)return;i.addEventListener("activated",h=>{(h.isUpdate||h.isExternal)&&window.location.reload()}),i.addEventListener("installed",h=>{h.isUpdate||a==null||a()}),i.register({immediate:e}).then(h=>{s?s("/learner/sw.js",h):o==null||o(h)}).catch(h=>{r==null||r(h)})}}return l=b(),u}je({immediate:!0});Ie();
