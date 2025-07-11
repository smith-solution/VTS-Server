# dc1/Dockerfile
FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

# 1) 필수 패키지 설치
RUN apt-get update && apt-get install -y \
    git build-essential cmake libjpeg-dev libv4l-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /opt

# 2) mjpg-streamer 소스 클론 및 빌드
RUN git clone https://github.com/jacksonliam/mjpg-streamer.git mjpg-streamer \
 && cd mjpg-streamer/mjpg-streamer-experimental \
 && make \
 && make install

# 3) 웹 UI 파일 복사
RUN mkdir -p /usr/local/share/mjpg-streamer/www \
 && cp -r mjpg-streamer/mjpg-streamer-experimental/www/* /usr/local/share/mjpg-streamer/www/

# 4) 실행 스크립트 복사
COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["entrypoint.sh"]
