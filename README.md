-- server --
cd ./coffee-machine-server
docker-compose --env-file ./envs/development.env up --build

-- client -- 
cd ./coffee-machine-client
ng serve