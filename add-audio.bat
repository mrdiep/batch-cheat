REM add audio to video. Note, use the shortest length
ffmpeg -i video.mp4 -i "C:\Users\Diep\audio.mp3" -map 0:v -map 1:a -c copy -shortest outputvideo.mp4
pause