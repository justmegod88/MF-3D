(function(){
  const video = document.getElementById('video');
  const canvas = document.getElementById('captureCanvas');
  const statusText = document.getElementById('statusText');

  const btnShoot = document.getElementById('btnShoot');
  const btnSkip  = document.getElementById('btnSkip');
  const btnClose = document.getElementById('btnClose');

  function setStatus(t){ statusText.textContent = t; }

  btnClose.addEventListener('click', () => {
    // 데모: 그냥 새로고침 (실서비스면 WebView close 또는 이전 화면)
    window.location.href = './result.html';
  });

  btnSkip.addEventListener('click', () => {
    sessionStorage.removeItem('ar_capture');
    window.location.href = './result.html';
  });

  async function startCamera(){
    try{
      setStatus('카메라 권한 요청');
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }, audio: false
      });
      video.srcObject = stream;
      await video.play();
      setStatus('실행 중');
    }catch(e){
      console.error(e);
      setStatus('카메라 실행 실패(권한/HTTPS 확인)');
      alert('카메라 실행에 실패했어요.\n- iOS/모바일에서는 HTTPS(또는 localhost)에서만 카메라가 동작해요.\n- GitHub Pages는 HTTPS라 OK 입니다.');
    }
  }

  function captureFrame(){
    const w = video.videoWidth || 1280;
    const h = video.videoHeight || 720;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    // mirror 제거: environment라 보통 필요 없음. (필요 시 ctx.scale(-1,1) 사용)
    ctx.drawImage(video, 0, 0, w, h);
    return canvas.toDataURL('image/jpeg', 0.85);
  }

  btnShoot.addEventListener('click', () => {
    if(!video.srcObject){
      alert('카메라가 아직 준비되지 않았어요.');
      return;
    }
    setStatus('촬영 완료');
    const dataUrl = captureFrame();
    sessionStorage.setItem('ar_capture', dataUrl);
    window.location.href = './result.html';
  });

  // iOS 사파리에서 자동재생/권한 이슈가 있어 사용자 제스처가 필요할 수 있음.
  // 일단 로드 시 시도하고, 실패 시 버튼 클릭으로 재시도할 수 있게 함.
  startCamera();

})();