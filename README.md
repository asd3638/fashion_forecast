# fashion_forecast

[![Video Label](http://img.youtube.com/vi/3-U6LTDu3rI/0.jpg)](https://youtu.be/3-U6LTDu3rI)

***이미지를 클릭하면 시연 영상을 볼 수 있습니다.***

### 1. 개요
　딥러닝 모델로 사용자의 옷차림을 분석해 날씨와 적합한지 판단해주는 웹 애플리케이션

### 2. 기술 스택
* 프론트엔드: ReactJS
* 백엔드: NodeJS, ExpressJS, Flask
* 데이터베이스: MySQL
* 머신러닝 학습: PyTorch, Keras

### 3. 딥러닝 모델 구축 개요
　입력한 이미지에서 의상의 종류와 기장을 반환하는 **Multi-label Image Classification Model** 구축
![image](https://user-images.githubusercontent.com/18097984/136150543-220cac34-e572-46f3-9966-c1e30ba389fc.png)

#### 　1) 데이터셋
　　AI허브의 K-Fashion 이미지 데이터셋(https://aihub.or.kr/aidata/7988):
 
　　총 1,200,000건 분량의 의상 이미지와 그에 맞는 스타일 및 세부속성이 레이블링된 데이터셋

#### 　2) 학습시킨 모델 개요
　<img src="https://user-images.githubusercontent.com/18097984/136151010-7454dfac-5a03-4daa-92e9-48e0cb26d0b5.png" width="65%" alt="screenshot">

### 4. 향후 보완점
#### 　1) 모델구축 면
　　학습과정:

　　　hyperparameter 튜닝 자동화 툴을 도입해 다양한 실험을 시도해 모델 보완

　　검증과정:

　　　모델의 accuracy(%) 측정 시 **예측값과 정답 사이의 유사성을 고려해 부분점수를 부여**하는 로직 포함시켜 검증과정 보완

　　　　예) **현재는** 블라우스를 셔츠라 예측하거나, 7부소매를 긴팔이라고 예측하는 등 유사한 예측을 한 경우에 부분점수를 주지 않기 때문에 **accuracy가 실제 성능보다 낮아보이는 착시**가 발생함

#### 　2) 기능구현 면
* 옷차림을 상의/하의/아우터/원피스 나눠서 받지 않고 한 번에 받고 예측값을 반환해주는 UI로 보완 가능
* 조건문이 아닌 머신러닝 모델을 통한 추천으로 옷차림 추천기능 보완 가능
