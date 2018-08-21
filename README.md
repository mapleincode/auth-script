# 用类似的 Shell 的脚本语言来实现运行 Node

```shell
set allbody [ assign $body $query $params ]
set keys [listsort [keys $allbody]]
set str [listjoin [ listbykeys $keys $allbody = ] &]
set base64str [base64 $str]
set signstr [join $appSecret $base64str]
set sign [sha1sign $privateKey $signstr]
printf $sign
```

具体见 `./demo`

也不知道什么用，就是觉得蛮好玩的。

本来设定是用来作为不会 Node 的同学，用简单的办法来构建 Node 脚本。