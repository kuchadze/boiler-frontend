#!/bin/bash
if [ -f .env ]; then
  export $(cat .env | xargs)
fi

npx swagger-typescript-api -p $SWAGGER_API --no-client --responses -o  ./app/interfaces -n interfaces
