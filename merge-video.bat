(for %%i in (*.mp4) do @echo file '%%i') > mylist.txt
ffmpeg -f concat -safe 0 -i mylist.txt -c copy output2.mp4