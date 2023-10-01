lint:
	make -C frontend lint

install:
	make -C frontend install

start:
	make -C frontend start

deploy:
	git push heroku main

build:
	npm run build