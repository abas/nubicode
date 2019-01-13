> Docker Lucid Dreamer

```bash
  # Building Our Dream
  $ docker build -f lucidDream.dockerfile -t our/dream:someday .
  
  # Creating Infrastructure
  $ docker run -d \
      --name our-dreams 
      -v /home/me:/home/me 
      -v /home/you:/home/you \
      our/dream:someday
```

`<Kankuu>` Believe,.. if someday we able to know each other.