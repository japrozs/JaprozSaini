#! /usr/local/bin/fish
yarn build
yarn export
yarn deploy
git add . 
echo "Git commit message : "
read msg
git commit -m "$msg"
git push -u origin main