# How2example
echo 'ng generate component|directive|pipe|service|class|guard|interface|enum|module'


ng g c components/login
ng g c components/inside/workspace
ng g c components/inside/board
ng g c components/reusable/table
ng g c components/reusable/graph

ng g s services/auth
ng g s services/data

ng g interface common/reading

# Install packages
npm install @supabase/supabase-js
npm install ngx-spinner ngx-gravatar json-server

# Unit testing rest api 
npx json-server db.json --port 8080 # previously json-server --watch db.json --port 8080
curl http://localhost:8080/readings/
curl http://localhost:8080/users/1

# Variables de entorno
ng generate environments