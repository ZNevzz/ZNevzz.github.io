# LINUX
```bash

uname --all
lsb_release -a
lscpu

ls -la # all files
ls -lrt # all files sorted by time
ls -lS # all files sorted by size

head -n 100 file.txt # read 100 lines
tail -n 100 file.txt # read 100 lines

mv name1.txt name2.txt # rename
?scp


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

