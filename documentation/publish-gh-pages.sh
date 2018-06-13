set -x
cd $(dirname $0)
npm run build
git add .
git commit -m 'new documentation automatic generated'
git checkout gh-pages
git pull origin gh-pages
git merge master
git push origin gh-pages
git checkout master