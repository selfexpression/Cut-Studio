lint:
	make -C frontend lint

install:
	npm ci

start:
	make -C frontend start

deploy:
	git push heroku main

build:
	npm run build