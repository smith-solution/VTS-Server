#!/bin/bash

mjpg_streamer -i "input_uvc.so -n -f 30 -r 640x480" \
              -o "output_http.so -p 8080 -w ./www"
