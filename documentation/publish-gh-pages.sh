set -e
set -x
cd $(dirname $0)
git checkout master
git pull origin master
git push origin master
npm run build
git add .
git commit -m 'new documentation automatically generated'
git checkout gh-pages
git pull origin gh-pages
git rebase master
git push origin gh-pages
git checkout master