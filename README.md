# ACUVUE AR → 3D 교육 웹(데모)

이 프로젝트는 **AR 카메라(촬영) → 결과(3D 뷰어)** 흐름을 웹으로 재현한 데모 템플릿입니다.

## 1) 폴더 구조
- index.html : AR 카메라(촬영) 화면
- result.html : 결과(3D) 화면
- styles.css / app.js / result.js
- assets/lens.glb : 3D 모델(여기에 본인 GLB 넣기)

## 2) 로컬 실행
가장 쉬운 방법(파이썬):
```bash
python -m http.server 8000
```
그리고 브라우저에서:
- http://localhost:8000

> iOS 카메라는 HTTPS/localhost에서만 동작합니다.

## 3) GitHub Pages 배포
1. 새 repo 생성(예: acuvue-ar-3d-web)
2. 이 폴더의 파일을 repo 루트에 업로드
3. GitHub > Settings > Pages
   - Source: Deploy from a branch
   - Branch: main / root
4. 저장 후 나오는 URL로 접속

## 4) 3D 파일 넣기
- 본인 3D 모델을 `assets/lens.glb`로 교체하세요.
- glb가 아니라면 GLB로 변환해서 넣는 걸 추천합니다.

## 5) 다음 단계(선택)
- 핫스팟(포인트) / 확대 / 카메라 이동
- 뒤집힘 판정(실제 인식 로직) 연결
- 설문 버튼을 실제 URL(구글폼 등)로 연결
