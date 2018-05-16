# emDataStandards
EveryMundo's Data Standards


## Stack

[Doca A CLI tool that scaffolds API documentation based on JSON HyperSchemas.](https://github.com/cloudflare/doca)

## Deploy to gihub pages manually

**Note:** This commands assumes that you have commited already all your changes in master. For Windows, run the commands in git bash.

```bash
git checkout gh-pages
git merge master
git pull origin gh-pages
cd documentation
npm run build
git add .
git commit -m 'new documentation automatic generated'
git push origin gh-pages
git checkout master
```