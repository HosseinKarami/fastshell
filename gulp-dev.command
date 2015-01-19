cd "$(dirname "$0")"
if [ ! -d node_modules ];then
  npm install
fi
gulp
