FROM ros:humble

# 의존성 설치
RUN apt-get update && apt-get install -y \
  build-essential \
  python3-colcon-common-extensions \
  && rm -rf /var/lib/apt/lists/*

# 워크스페이스 복사
WORKDIR /ros2_ws
COPY ./ros2_ws /ros2_ws

# 빌드 (bash 환경에서 ROS setup 적용 확실히)
RUN bash -c "source /opt/ros/humble/setup.bash && cd /ros2_ws && colcon build"


# 실행
CMD ["bash", "-c", "source /opt/ros/humble/setup.bash && source install/setup.bash && ros2 run my_talker talker"]
