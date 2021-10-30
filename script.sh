echo '\nrequesting all heroes '
curl localhost:3000/heroes

echo '\n\nrequesting hero '
curl localhost:3000/heroes/1

echo '\n\nrequesting with wrong body\n'
curl --silent -X POST \
    --data-binary '{"invalid": "data"}' \
    localhost:3000/heroes

echo '\n\nCreating SpiderMan\n'
CREATE=$(curl --silent -X POST \
    --data-binary '{"name": "SpiderMan","age":20,"power":"spider"}' \
    localhost:3000/heroes)

echo $CREATE

ID=$(echo $CREATE | jq.id)

echo '\n\n requesting chapolin'
curl localhost:3000/heroes/$ID