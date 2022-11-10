# code-template
1. 根据不同分支，下载对应的coding模板
2. 删除.git文件，再重新git init

…or create a new repository on the command line
echo "# empty-repository" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/waltiu/empty-repository.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin https://github.com/waltiu/empty-repository.git
git branch -M main
git push -u origin main
…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.

