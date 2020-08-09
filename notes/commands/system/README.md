# LINUX
```bash
ls -la # all files
mv name1.txt name2.txt # rename
head -n 100 file.txt # read 100 lines
lsb_release -a  
uname -r
lscpu
ps
service --status-all
KILL -9 <PID>
```
# WINDOWS

## Setup path variables
- Windows : double check to make sure you see python in your PATH. You can find your path by opening your control panel -> System and Security -> System -> Advanced System Settings -> Environment Variables -> Selecting Path -> Edit ->


## Find programs running on port number
```bash
netstat -a -o -n | findstr port_number
```

## Kill task using PID
```bash
taskkill /F /PID 6136
```

