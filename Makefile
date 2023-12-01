
build-local:
	cd app; npm run build

build-local-docker:
	docker build --no-cache -t lt-frontend -f ./app/Dockerfile.dev ./app

build-deploy:
	docker build --no-cache -t lt-frontend:latest ./app

run-local:
	cd app; npm run start

run-local-docker: build-local-docker
	docker run -ti -p 3000:3000 lt-frontend

run-deploy-local: build-deploy
	docker run -ti -p 3000:3000 lt-frontend:latest
