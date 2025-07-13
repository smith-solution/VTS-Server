FROM ubuntu:20.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y \
    git cmake libjpeg-dev imagemagick \
    libv4l-dev ffmpeg curl unzip build-essential \
    libopencv-dev && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /opt

RUN git clone https://github.com/jacksonliam/mjpg-streamer.git

WORKDIR /opt/mjpg-streamer/mjpg-streamer-experimental

RUN make && make install

COPY start.sh /start.sh
RUN chmod +x /start.sh

CMD ["/start.sh"]
