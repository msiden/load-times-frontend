
build:
	docker build --no-cache -t lt-frontend -f ./app/Dockerfile ./app

run-local:
	cd app; npm run start

run-docker: build
	docker run -ti -p 3000:3000 lt-frontend

run-full-stack: build
	cd app && docker-compose up
