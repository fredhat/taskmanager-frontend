# TaskManager Angular Front-End Application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build --prod` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Docker

I have included the necessary Docker files for building a Docker image of this application. The following commands should help build and run that image:

```
docker build -t taskmanager-frontend:dev .

docker run -d -v ${PWD}:/app -v /app/node_modules -p 4201:4200 --rm taskmanager-frontend:dev

Navigate to `http://localhost:4201/
```

This process is not guaranteed to work as I have not yet had a chance to test the docker build proces due to currently developing on a Windows machine.

I will confirm Docker functionality as soon as I have a chance to spin up a remote Linux server and recreate my dev environment on it.