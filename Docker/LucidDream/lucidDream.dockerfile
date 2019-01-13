FROM dream/lucid:latest

RUN echo "hello new world"

ADD ./you /home/you
ADD ./me /home/me

RUN echo "welcome"

EXPOSE 54321

ENTRYPOINT ["/usr/bin/enn"]
CMD ["bash","dream-service.sh"]