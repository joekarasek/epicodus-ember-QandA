echo "Clean up"
rm -rf dist

echo "Create new production build"
ember build --environment production

echo "Switch to gh-pages branch"
git checkout gh-pages

echo "Add dist to commit and push it to GitHub"
git add dist --force
git commit -m "deploy"
git push

echo "Switch back to master branch"
git checkout master
