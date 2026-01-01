## Run Nodejs backend server using docker

```bash
docker build -t nodejs-app .
```

```bash
docker run -p 8000:8000 nodejs-app
```

```bash
curl localhost:8000
```
