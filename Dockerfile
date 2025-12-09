WORKDIR /the/workdir/path
COPY . .
RUN make /the/workdir/path/build-target
CMD ["/the/workdir/path/build-target"]
FROM ubuntu:20.04
LABEL maintainer=""
COPY --from=0 /the/workdir/path/build-target /usr/local/bin/build-target
ENTRYPOINT ["/usr/local/bin/build-target"]
FROM ubuntu:20.04 AS builder
LABEL maintainer=""
