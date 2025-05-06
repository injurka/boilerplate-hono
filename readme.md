# Backend Boilerplaye

## Local Development

> Required dependencies

- `deno` is used to install packages and for runtime environment

> Run project

- `deno install` installing dependencies
- `deno run dev` starting development mode

```md
✨ default server listening on the port 8080

🌱 REST endpoints
http://localhost:8000/api
```

### In order for everything to work correctly, the PostgreSQL database must be up and running.

> inline .env

```bash
docker run -p 5432:5432 \
  --name bd-postgres \
  -e POSTGRES_PASSWORD=bd \
  -e POSTGRES_USER=bd \
  -e POSTGRES_DB=bd_dev \
  -d \
  --restart always \
  postgres:latest
```

> file .env

```bash
docker run -p 8080:8080 \
  --name back \
  --env-file .env \
  -v /root/sources/back/static:/opt/app/static \
  -d \
  --restart always \
  back:v1
```

After launching, perform migrations and seeding of all data, this can be done by writing:

- `bun run prisma:reset`

## Build image and run

### Build

```
docker buildx build -t back .
```

### Run

```
docker run -d \
  --name back \
  -p 8080:8080 \
  --env-file .env \
  back
```
