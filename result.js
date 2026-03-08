(function(){
  const btnClose = document.getElementById('btnClose');
  const btnRetry = document.getElementById('btnRetry');
  const btnSurvey = document.getElementById('btnSurvey');

  const btnPvp = document.getElementById('btnPvp');
  const btn123 = document.getElementById('btn123');
  const btnDesign = document.getElementById('btnDesign');

  const infoTitle = document.getElementById('infoTitle');
  const infoBody  = document.getElementById('infoBody');
  const infoSub   = document.getElementById('infoSub');
  const howtoText = document.getElementById('howtoText');

  const thumb = document.getElementById('thumb');
  const thumbImg = document.getElementById('thumbImg');

  // AR 캡처 썸네일 표시
  const cap = sessionStorage.getItem('ar_capture');
  if(cap){
    thumb.hidden = false;
    thumbImg.src = cap;
  }

  btnClose.addEventListener('click', () => {
    window.location.href = './index.html';
  });

  btnRetry.addEventListener('click', () => {
    window.location.href = './index.html';
  });

  btnSurvey.addEventListener('click', () => {
    alert('만족도 조사는 데모입니다.\n(구글폼/설문 URL로 연결하면 완성!)');
  });

  function setActive(which){
    [btnPvp, btn123, btnDesign].forEach(b => b.classList.remove('active'));
    which.classList.add('active');
  }

  function setCard(type){
    if(type === 'pvp'){
      infoTitle.textContent = '눈물 안정화 기술';
      infoBody.textContent  = '습윤인자를 통한 오랫동안 촉촉하고 편안한 착용감 제공';
      infoSub.textContent   = 'PVP 습윤인자 → 수분을 머금어 렌즈 표면 촉촉함 유지';
      howtoText.textContent = '우측 상단 아이콘 클릭';
      setActive(btnPvp);
    }else if(type === '123'){
      infoTitle.textContent = '123마크';
      infoBody.textContent  = '콘택트렌즈가 뒤집혀 있는지 확인이 가능해요';
      infoSub.textContent   = '필요 시 실제 가이드 문구로 교체하면 됩니다.';
      howtoText.textContent = '드래그(살짝 회전)';
      setActive(btn123);
    }else{
      infoTitle.textContent = '렌즈 구조';
      infoBody.textContent  = '렌즈 구조/디자인 포인트를 확인할 수 있어요';
      infoSub.textContent   = '예: 동공 맞춤형/가장자리/표면 처리 등(추후 상세 문구로 교체)';
      howtoText.textContent = '우측 상단 아이콘 클릭';
      setActive(btnDesign);
    }
  }

  btnPvp.addEventListener('click', () => setCard('pvp'));
  btn123.addEventListener('click', () => setCard('123'));
  btnDesign.addEventListener('click', () => setCard('design'));

  // 기본은 123
  setCard('123');

})();