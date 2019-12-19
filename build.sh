#!/bin/bash -x
env

if [ "${INCOMING_HOOK_BODY}" == "" ] ; then
  echo 'No webhook'
  exit 0
fi

echo "${INCOMING_HOOK_BODY}" | jq -r .CONTAINER_URL
export CONTAINER_URL=$(echo "${INCOMING_HOOK_BODY}" | jq -r .CONTAINER_URL)
npm run build
