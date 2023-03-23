
Remote Branch  
MATERI PENTING !!

Ideal nya ketika ingin konstribusi ke sebuah repo, 
    harus lah membuat branch tertentu, 
    agar branch master kita tetap sama dengan master repo aslinya. 

Step 1 : 
seperti biasa repo asli difork, lalu di fork dari akun kita diclone ke local. 
> git branch newbranch(buat branch baru).
> git checkout newbranch(switch ke newbranch).
> edit / update / rewrite. 

> git add. / git commit -am "message". 
> git push - u origin newbranch(push dari newbranch ke master kita). 

> cek akun repo forking kita untuk mealakukan CreatPullRequest.
> tunggu MergePull oleh pemilik repo asli. 

> setelah Request kita di Merge pemelik repo lalu update repo local. 
> git fetch repoasli

> merge repo asli ke repo forking kita. 
> checkout dulu ke master. 
> git merge repoasli / master. 

> update repo forking github kita. 
> git push - u origin master. 

> delete branch setelah diterima. 
> git branch - d newbranch. 
> git push origin--delete newbranch. 

DONE !!





