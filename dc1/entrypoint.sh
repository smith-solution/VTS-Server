#!/usr/bin/env bash
# entrypoint.sh

# 디바이스, 해상도, 프레임레이트 커스터마이징 가능
DEVICE=${DEVICE:-/dev/video0}
WIDTH=${WIDTH:-640}
HEIGHT=${HEIGHT:-480}
FPS=${FPS:-30}
PORT=${PORT:-8090}

# MJPEG HTTP output
mjpg_streamer \
  -i "input_uvc.so -d ${DEVICE} -r ${WIDTH}x${HEIGHT} -f ${FPS}" \
  -o "output_http.so -w /usr/local/share/mjpg-streamer/www -p ${PORT}"
