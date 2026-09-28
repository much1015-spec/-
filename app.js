"use strict";

const stages = [
  { day: "D-Day 1", title: "오늘의 첫 선택", icon: "🌱", intro: "새로운 건강 루틴을 시작해 볼까? 오늘은 바쁜 하루가 기다리고 있어요.", scene: "아침 알람을 끄고 일어난 민준. 아침 식사부터 하루의 리듬까지, 어떤 선택을 해볼까요?", options: [
    { icon: "🥣", title: "간단히 아침을 먹고 하루를 시작한다", detail: "요거트와 과일, 통곡물빵으로 든든하게", kind: "balance", result: "적당히 챙겨 먹으면 에너지를 유지하고 규칙적인 식사 리듬을 만드는 데 도움이 돼요." },
    { icon: "🥤", title: "달콤한 음료로 아침을 대신한다", detail: "달달한 라테와 시럽으로 빠르게", kind: "excess", result: "단 음료는 당류를 빠르게 많이 섭취하게 할 수 있어요. 자주 마신다면 물이나 무가당 음료로 바꿔보세요." },
    { icon: "🚫", title: "당뇨가 걱정돼 아침부터 아무것도 먹지 않는다", detail: "탄수화물은 아예 끊는 게 안전할까?", kind: "restriction", result: "음식을 무조건 제한하는 것이 예방책은 아니에요. 특히 당뇨약을 사용하는 사람은 식사 거르기가 저혈당 위험을 높일 수 있어요." },
    { icon: "⏰", title: "배가 고프면 나중에 균형 있게 먹기로 한다", detail: "지금은 물을 마시고, 점심은 거르지 않기", kind: "balance", result: "아침을 먹는 방식은 사람마다 달라요. 중요한 건 하루 전체의 균형과 본인에게 맞는 규칙적인 리듬이에요." }
  ]},
  { day: "D+30일", title: "한 달 뒤, 점심시간", icon: "🍱", intro: "작은 선택들이 한 달 쌓였어요. 한 번의 식사보다 반복되는 습관을 살펴볼 때예요.", scene: "동료들과 점심 메뉴를 고르려는 민준. 오후 일정과 저녁 약속도 생각해야 해요.", options: [
    { icon: "🍔", title: "햄버거와 탄산음료를 즐긴다", detail: "오늘은 세트 메뉴가 당겨요", kind: "excess", result: "햄버거 한 번으로 당뇨가 생기지는 않아요. 다만 고열량 식사와 단 음료가 자주 반복되는 생활은 장기적인 위험에 영향을 줄 수 있어요." },
    { icon: "🍔💧", title: "햄버거를 먹되 음료는 물로 고른다", detail: "먹고 싶은 메뉴와 작은 균형을 함께", kind: "balance", result: "좋아하는 음식을 즐기면서 음료를 바꾸는 것도 실천 가능한 균형이에요. 한 번의 완벽한 식사보다 지속 가능한 습관이 중요해요." },
    { icon: "🥗", title: "채소와 단백질, 밥을 적당히 곁들인다", detail: "구성은 다양하게, 양은 편안하게", kind: "balance", result: "다양한 식품을 적당한 양으로 먹는 식사 패턴을 꾸준히 이어가 보세요." },
    { icon: "🥬", title: "살이 찔까 봐 점심을 건너뛰고 저녁도 조금만 먹는다", detail: "오늘은 가능한 한 적게 먹기", kind: "restriction", result: "지나친 제한은 지속하기 어렵고 몸에 부담을 줄 수 있어요. 당뇨약을 쓰는 사람에게 식사 거르기는 특히 주의가 필요해요." }
  ]},
  { day: "D+1년", title: "일 년 뒤, 퇴근길", icon: "🚶", intro: "생활 리듬은 몸의 컨디션과 혈당 관리에 영향을 줄 수 있어요. 민준은 요즘 자주 피곤합니다.", scene: "하루 종일 앉아서 일한 민준. 퇴근 후 운동과 저녁 루틴을 어떻게 꾸릴까요?", options: [
    { icon: "🪑", title: "피곤하니 소파에서 밤늦게까지 쉰다", detail: "움직임은 내일부터 생각하기", kind: "excess", result: "앉아 있는 시간이 길고 활동이 적은 생활이 이어지면 건강에 영향을 줄 수 있어요. 중간중간 일어나 움직이는 것부터 시작해요." },
    { icon: "🚶‍♂️", title: "저녁 식사 후 30분 산책한다", detail: "무리하지 않고 꾸준히 걷기", kind: "balance", result: "걷기처럼 자신에게 맞는 규칙적인 활동은 건강한 생활에 도움이 될 수 있어요. 시작 전 건강 상태에 맞는 강도를 생각해요." },
    { icon: "🏃", title: "살을 빨리 빼려고 밤새 강도 높게 운동한다", detail: "잠은 줄여도 운동량을 채우기", kind: "restriction", result: "과도한 운동과 수면 부족은 몸에 무리가 될 수 있어요. 특히 식사를 지나치게 제한하거나 당뇨약을 쓰는 상황에서 운동하면 저혈당 위험을 살펴야 해요." },
    { icon: "🧘", title: "가볍게 스트레칭하고 충분히 잔다", detail: "내일도 이어갈 수 있는 속도로", kind: "balance", result: "충분한 수면과 규칙적인 생활은 건강 관리의 바탕이에요. 생활 패턴을 조금씩 안정시켜 보세요." }
  ]},
  { day: "D+5년", title: "5년 뒤, 건강 체크", icon: "🩺", intro: "혈당이 높아도 초기에 특별한 증상이 없을 수 있어요. 아프지 않다고 확인을 미루지 않아도 괜찮을까요?", scene: "민준에게 건강검진 안내가 왔어요. 최근 복부 둘레도 조금 늘었습니다.", options: [
    { icon: "🩻", title: "안내받은 건강검진을 받고 결과를 상담한다", detail: "필요한 확인은 의료진과 함께", kind: "balance", result: "정기적인 건강 확인은 위험 요인을 살피는 데 도움이 돼요. 검사와 상담 주기는 개인의 상태에 따라 의료진과 정하세요." },
    { icon: "🙈", title: "아픈 곳이 없으니 검진은 미룬다", detail: "증상이 생기면 그때 확인하기", kind: "excess", result: "혈당이 높아도 초기에는 뚜렷한 증상이 없을 수 있어요. 혈당 이상을 증상만으로 알아채기 어려워 정기적인 확인이 중요해요." },
    { icon: "📉", title: "복부지방이 걱정돼 식사를 대폭 줄인다", detail: "검진보다 빠른 체중 감량을 먼저", kind: "restriction", result: "복부지방은 인슐린 저항성과 관련될 수 있지만, 굶는 방식은 좋은 해결책이 아니에요. 지속 가능한 식사와 활동을 살펴보세요." },
    { icon: "🥗", title: "식사와 걷기 습관을 조금씩 조정하고 검진도 예약한다", detail: "결과를 보고 나에게 맞는 계획 세우기", kind: "balance", result: "생활습관을 꾸준히 살피면서 검진도 챙기는 접근은 균형 잡힌 관리의 한 부분이에요." }
  ]},
  { day: "D+10년", title: "10년 뒤, 몸의 신호", icon: "🔑", intro: "오랜 시간이 흐른 뒤 몸 안에서는 어떤 일이 일어날 수 있을까요? 생활습관과 건강 상태는 사람마다 달라요.", scene: "민준은 인슐린과 세포가 혈당을 조절하는 원리를 배우게 됐어요. 지금까지의 습관도 돌아봅니다.", options: [
    { icon: "🗝️", title: "몸에 무리가 없는 활동과 균형 있는 식사를 이어간다", detail: "검진 결과에 맞춰 생활을 조정하기", kind: "balance", result: "꾸준한 균형과 필요한 건강 확인이 중요해요. 생활습관만으로 모든 위험을 없앨 수 있는 건 아니며, 필요하면 의료진의 도움을 받아요." },
    { icon: "🍰", title: "바쁜 일상에 단 음료와 야식이 자주 이어진다", detail: "움직임은 적고 수면도 불규칙한 편", kind: "excess", result: "이런 생활이 장기간 반복되면 복부지방과 인슐린 저항성, 혈당 조절 문제의 위험이 높아질 수 있어요. 결과는 개인마다 다릅니다." },
    { icon: "🥣", title: "혈당이 걱정돼 식사를 자주 거르고 운동량을 늘린다", detail: "쉬거나 먹는 건 불안해요", kind: "restriction", result: "지나친 식사 제한, 장시간 금식, 과도한 운동은 저혈당 위험을 높일 수 있어요. 몸의 신호가 나타나면 멈추고 도움을 받으세요." },
    { icon: "🌿", title: "수면·식사·활동을 돌아보고 필요한 검진을 받는다", detail: "완벽함보다 오래 이어갈 수 있는 변화", kind: "balance", result: "작은 습관과 정기적인 건강 확인을 꾸준히 이어가는 것이 도움이 돼요. 필요할 때 의료진과 함께 계획을 세우세요." }
  ]}
];

const lessons = [
  { icon: "🧩", title: "한 끼보다 반복되는 패턴을 살펴봐요", text: "햄버거 한 번이나 특정 음식 하나가 당뇨를 만들지는 않아요. 장기간 이어지는 생활습관과 여러 건강 요인이 함께 영향을 줍니다." },
  { icon: "🫧", title: "혈당이 높아도 티가 안 날 수 있어요", text: "고혈당은 초기에 특별한 증상이 없을 수 있어요. 장기간 지속되면 눈·신장·신경·혈관 합병증 위험이 높아질 수 있습니다." },
  { icon: "⚖️", title: "무조건 적게 먹는 것이 답은 아니에요", text: "지나친 식사 제한이나 장시간 금식, 과도한 운동은 저혈당 위험을 높일 수 있어요. 특히 혈당을 낮추는 약을 쓰는 경우에는 의료진과 상의하세요." },
  { icon: "🔑", title: "인슐린은 열쇠, 세포는 문", text: "인슐린은 포도당이 세포로 들어가도록 돕는 역할을 해요. 인슐린 저항성이 높아지면 열쇠가 있어도 문이 잘 열리지 않아 혈당 조절이 어려워질 수 있어요." },
  { icon: "🌱", title: "작은 변화도 꾸준하면 의미 있어요", text: "균형 잡힌 식사, 적절한 활동, 수면, 건강 확인은 서로 연결되어 있어요. 누구에게나 같은 방법이 맞는 것은 아니니 내 상태에 맞게 실천해요." }
];

const state = { page: "home", index: 0, history: [], sound: false };
const screen = document.querySelector("#screen");

function render() {
  if (state.page === "home") return renderHome();
  if (state.page === "intro") return renderIntro();
  if (state.page === "story") return renderStory();
  if (state.page === "result") return renderResult();
  if (state.page === "today") return renderToday();
}
function renderHome() {
  screen.innerHTML = `<div class="hero"><div class="hero-art" aria-hidden="true">🧑🏻‍🌾</div><span class="pill">🍀 선택형 스토리 게임</span><h1>괜찮은 줄<br>알았는데</h1><p class="subtitle">당뇨, 너무 많이도 너무 적게도 위험합니다.</p><p>주인공 민준의 생활을 함께 선택하며 혈당 관리에서 균형이 왜 중요한지 알아봐요.</p><div class="button-wrap"><button class="primary" data-action="intro">START <span aria-hidden="true">→</span></button></div><p class="note">교육을 위한 이야기입니다. 의료 진단이나 개인별 치료 조언을 대신하지 않습니다.</p></div>`;
}
function renderIntro() {
  screen.innerHTML = `<div class="intro-card"><span class="eyebrow">게임 안내 · 약 3분</span><h2>민준의 10년을 함께 걸어요</h2><p>날짜가 흐를 때마다 민준의 일상에서 하나를 골라주세요. 선택은 생활습관 이야기와 마지막 장면을 바꿉니다.</p><div class="intro-grid"><div class="mini-card"><span class="mini-icon">🍔</span><strong>너무 많이</strong>반복되는 과함 살펴보기</div><div class="mini-card"><span class="mini-icon">🥣</span><strong>너무 적게</strong>지나친 제한의 위험 알기</div><div class="mini-card"><span class="mini-icon">⚖️</span><strong>균형</strong>오래 이어갈 습관 찾기</div></div><div class="lesson-card"><span class="lesson-icon">💡</span><div><strong>기억해요</strong><p>한 번의 선택으로 질병이 정해지지 않아요. 반복되는 습관과 개인의 건강 상태에 따라 결과는 달라질 수 있습니다.</p></div></div><p class="note">당뇨 치료 중이거나 혈당을 낮추는 약을 복용한다면 식사나 운동을 바꾸기 전에 의료진과 상담하세요.</p><div class="button-wrap"><button class="primary" data-action="begin">민준의 이야기 시작하기 <span aria-hidden="true">→</span></button></div></div>`;
}
function timeline() {
  return `<nav class="timeline" aria-label="이야기 시간표">${stages.map((s,i)=>`<div class="time-node ${i<state.index?"done":i===state.index?"current":""}"><div class="time-dot">${i<state.index?"✓":s.icon}</div>${s.day}</div>`).join("")}</nav>`;
}
function renderStory() {
  const stage=stages[state.index], picked=state.history[state.index], lesson=lessons[state.index];
  const count=k=>state.history.filter(x=>x.kind===k).length;
  const previous=state.history.slice(0,state.index).reduce((t,x)=>(t[x.kind]++,t),{balance:0,excess:0,restriction:0});
  const leading=Object.entries(previous).sort((a,b)=>b[1]-a[1])[0];
  const echo=state.index===0?"":leading[1]===0?"":"<div class=\"lesson-card\"><span class=\"lesson-icon\">🧭</span><div><strong>지난 선택이 남긴 흔적</strong><p>"+(leading[0]==="excess"?"바쁜 날에 단 음료와 앉아 있는 시간이 늘어났어요. 한 번의 선택 때문은 아니지만, 이런 생활이 반복될 때 몸이 보내는 신호에도 귀 기울여요.":leading[0]==="restriction"?"민준은 식사를 줄이고 운동량을 늘렸어요. 어지러움이나 손 떨림, 식은땀처럼 저혈당과 관련된 신호를 가볍게 넘기지 않도록 해요.":"민준은 무리하지 않는 선택을 이어왔어요. 완벽할 필요 없이, 자신에게 맞는 리듬을 계속 찾아가요.")+"</p></div></div>";
  screen.innerHTML=`${timeline()}<div class="scene-head"><div><span class="eyebrow">민준의 이야기</span><div class="day-label">${stage.day} · ${stage.title}</div></div><span class="scene-count">${state.index+1} / ${stages.length}</span></div><p class="scene-intro">${stage.intro}</p><div class="story-card"><div class="character-line"><div class="avatar" aria-hidden="true">${stage.icon}</div><div><span class="scene-caption">오늘의 장면</span><p>${stage.scene}</p></div></div></div>${echo}<div class="lesson-card"><span class="lesson-icon">${lesson.icon}</span><div><strong>${lesson.title}</strong><p>${lesson.text}</p></div></div>${state.index===4?`<div class="cell-demo" aria-label="인슐린과 세포의 설명"><div class="demo-flow"><span>🔑</span><span>→</span><span>🚪</span><span>←</span><span>🍬</span></div><span class="demo-label">인슐린이 문을 열면 포도당이 세포 안으로 들어가요</span></div>`:""}<h2 class="choice-title">민준은 어떻게 할까요?</h2><div class="choices">${stage.options.map((o,i)=>`<button class="choice ${picked?.option===i?"selected":""}" data-action="choose" data-index="${i}" aria-pressed="${picked?.option===i?"true":"false"}"><span class="choice-icon" aria-hidden="true">${o.icon}</span><span>${o.title}<small>${o.detail}</small></span></button>`).join("")}</div><div id="feedback" class="feedback ${picked?"visible":""}" role="status">${picked?`<strong>민준의 선택</strong> · ${picked.result}`:""}</div><div class="score-strip" aria-label="지금까지의 선택 경향"><span class="score-chip">⚖️ 균형 ${count("balance")}</span><span class="score-chip">🔴 과함 ${count("excess")}</span><span class="score-chip">🔵 제한 ${count("restriction")}</span></div><div class="button-wrap"><button class="primary" data-action="next" ${picked?"":"disabled"}>${state.index===stages.length-1?"결과 보기":"시간을 앞으로"} <span aria-hidden="true">→</span></button></div>`;
}
function getOutcome() {
  const tally={balance:0,excess:0,restriction:0};
  state.history.forEach(x=>tally[x.kind]++);
  if(tally.excess>=2 && tally.excess>tally.restriction && tally.excess>=tally.balance) return "over";
  if(tally.restriction>=2 && tally.restriction>tally.excess && tally.restriction>=tally.balance) return "under";
  return "balance";
}
function renderResult() {
  const outcome=getOutcome();
  const data={
    over:{emoji:"🌧️",label:"🔴 너무 많이",title:"반복되는 과함을 돌아봐요",text:"이번 이야기에서는 단 음료와 활동 부족처럼 과한 방향의 선택이 반복됐어요. 이런 생활이 장기간 이어질 경우 복부지방 증가와 인슐린 저항성, 혈당 조절 문제의 위험이 높아질 수 있습니다.",more:"혈당이 높아도 초기에 증상이 없을 수 있어요. 고혈당이 오래 지속되면 눈·신장·신경·혈관 합병증 위험이 높아질 수 있으므로 건강 확인과 상담이 도움이 됩니다.",klass:"over"},
    under:{emoji:"🌬️",label:"🔵 너무 적게",title:"지나친 제한에도 주의해요",text:"이번 이야기에서는 식사 제한과 과도한 운동 같은 부족한 방향의 선택이 반복됐어요. 장시간 굶거나 몸에 비해 무리한 운동을 하면 저혈당 위험이 생길 수 있습니다.",more:"저혈당은 어지러움, 손 떨림, 식은땀, 힘 빠짐으로 나타날 수 있어요. 심하면 의식저하·경련이 생기고 생명을 위협할 수 있습니다. 증상이 심하거나 의식이 흐려지면 즉시 응급 도움을 요청하세요.",klass:"under"},
    balance:{emoji:"🌿",label:"🟢 균형",title:"TRUE ENDING · 나다운 균형",text:"민준은 좋아하는 음식을 조절하고, 몸에 맞는 활동과 수면, 건강 확인을 꾸준히 이어갔어요. 완벽한 하루보다 오래 지속할 수 있는 작은 선택들이 모였습니다.",more:"건강은 무조건 많이, 무조건 적게가 아니에요. 과해도 위험하고 부족해도 위험합니다. 균형 잡힌 습관과 개인의 건강 상태에 맞는 관리를 계속해요.",klass:"balance"}
  }[outcome];
  const tally={balance:0,excess:0,restriction:0};state.history.forEach(x=>tally[x.kind]++);
  screen.innerHTML=`<div class="hero"><div class="result-emoji spark">${data.emoji}</div><span class="eyebrow">민준의 10년 이야기 · 결과</span><div class="result-card ${data.klass}"><div class="result-kicker">${data.label}</div><h2>${data.title}</h2><p>${data.text}</p><h3>몸 안에서는 무슨 일이?</h3><div class="cell-demo"><div class="demo-flow"><span>🔑 인슐린</span><span>→</span><span>🚪 세포</span><span>←</span><span>🍬 포도당</span></div><span class="demo-label">저항성이 높아지면 열쇠가 있어도 문이 잘 열리지 않을 수 있어요</span></div><p>${data.more}</p><div class="score-strip"><span class="score-chip">⚖️ 균형 ${tally.balance}</span><span class="score-chip">🔴 과함 ${tally.excess}</span><span class="score-chip">🔵 제한 ${tally.restriction}</span></div></div><p class="note">이 결과는 게임 속 선택의 경향을 보여주는 교육용 이야기이며, 실제 질병이나 개인의 건강 상태를 진단하지 않습니다.</p><div class="button-wrap"><button class="primary" data-action="today">오늘의 건강 선택 보기 <span aria-hidden="true">→</span></button></div></div>`;
}
function renderToday() {
  screen.innerHTML=`<div class="intro-card"><span class="eyebrow">마지막 장면 · 오늘부터</span><h2>오늘의 건강 선택</h2><p>모든 걸 한꺼번에 바꿀 필요는 없어요. 내 생활에 맞는 작은 걸 하나 골라 이어가 보세요.</p><div class="checklist"><div class="check-row"><span>💧</span><p>단 음료를 마신다면 오늘 한 잔은 물이나 무가당 음료로 바꿔보기</p></div><div class="check-row"><span>🚶</span><p>오래 앉아 있었다면 잠깐 일어나 걷거나 몸을 풀어보기</p></div><div class="check-row"><span>🥗</span><p>끼니를 무조건 줄이기보다 다양한 음식을 적당히 먹기</p></div><div class="check-row"><span>🩺</span><p>건강검진이나 복용 약이 궁금하면 의료진에게 확인하기</p></div></div><div class="lesson-card"><span class="lesson-icon">💚</span><div><strong>기억해 주세요</strong><p>당뇨를 피한다고 무조건 굶을 필요도,<br>한 번의 식사 때문에 지나치게 걱정할 필요도 없습니다.<br><b>건강은 균형에서 시작됩니다.</b></p></div></div><p class="note">교육용 콘텐츠입니다. 저혈당 증상이 심하거나 의식이 흐려지면 즉시 응급 도움을 요청하세요. 개인 건강 문제는 의료진과 상담하세요.</p><div class="button-wrap"><button class="secondary" data-action="restart">↺ 이야기 다시 하기</button></div></div>`;
}

screen.addEventListener("click", event=>{
  const button=event.target.closest("button[data-action]");if(!button)return;
  const action=button.dataset.action;
  if(action==="intro"){state.page="intro";render();return;}
  if(action==="begin"){state.index=0;state.history=[];state.page="story";render();return;}
  if(action==="choose"){
    const option=stages[state.index].options[Number(button.dataset.index)];
    state.history[state.index]={...option,option:Number(button.dataset.index)};
    render();return;
  }
  if(action==="next"){
    if(!state.history[state.index])return;
    if(state.index<stages.length-1){state.index++;render();}else{state.page="result";render();}return;
  }
  if(action==="today"){state.page="today";render();return;}
  if(action==="restart"){state.page="home";state.index=0;state.history=[];render();}
});
render();
