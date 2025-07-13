# talker 실행 파일 설치
install(TARGETS talker
  DESTINATION lib/${PROJECT_NAME})

# ❗️패키지 메타데이터 설치 (이거 없으면 ros2 run 실패)
install(DIRECTORY launch
  DESTINATION share/${PROJECT_NAME}
  OPTIONAL)

install(DIRECTORY
  include/
  DESTINATION include/
  OPTIONAL)

install(DIRECTORY
  src/
  DESTINATION share/${PROJECT_NAME}
  OPTIONAL)

install(DIRECTORY
  DESTINATION share/${PROJECT_NAME}
  FILES_MATCHING PATTERN "package.xml"
)
