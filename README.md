# trentprynn.com
Repository for my personal website

## development
- Clone the project, navigate into the `src` directory and run `python3 -m http.server` (requires `python3` be installed), the website should now be available at `localhost:8000`

## Deployment
- On a push to master the website will be deployed automatically by Railway
- The following commands can be used to locally build and run the Dockerfile that will be deployed
    - build image: `docker build . -t trentprynn.com`
    - create container: `docker run -d --name trentprynn.com -p 8080:80 trentprynn.com`
    - stop container: `docker stop trentprynn.com`
    - delete container: `docker rm trentprynn.com`
    - delete image: `docker rmi trentprynn.com`
