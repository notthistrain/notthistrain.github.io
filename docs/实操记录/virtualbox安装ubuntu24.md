# VirtualBox 搭建工作站点

## 新建虚拟电脑Ubuntu24.04 server

### 配置iso

iso文件下载地址：https://mirrors.huaweicloud.com/ubuntu-releases/24.04/

![](/asset/image-20250330142425548.png)

### 配置用户名和密码

![](/asset/image-20250330142534824.png)

### 分配8cpu 8g内存

![](/asset/image-20250330143819568.png)

### 分配150g虚拟磁盘

![](/asset/image-20250330144133428.png)

### 安装ssh

点击完成等待安装，安装完成后登录账号执行关机

```shell
sudo shutdown now
```

配置网络连接方式为**桥接网络**

![](/asset/image-20250330150800706.png)

启动虚拟机，安装openssh-server

```shell
sudo apt update
sudo apt install openssh-server
sudo systemctl enable ssh
sudo systemctl start ssh
```

## 安装通用软件

### 创建用户目录

1. code：代码目录
2. downloads：文件下载保存目录
3. software：软件安装目录
4. workspace：软件工作区目录

![](/asset/image-20250330153334364.png)

### 配置代理

```shell
cat << EOF >> ~/.bashrc
> alias proxy_on='export http_proxy=http://192.168.0.126:7890; export https_proxy=http://192.168.0.126:7890; export ftp_proxy=http://192.168.0.126:7890; export all_proxy=http://192.168.0.126:7890;'
> alias proxy_off='export http_proxy=; export https_proxy=; export ftp_proxy=; export all_proxy=;'
> EOF
```

### git

```shell
##安装依赖
sudo apt install build-essential libz-dev libssl-dev libcurl4-openssl-dev libexpat1-dev gettext autoconf
##下载
cd ~/downloads && wget https://mirrors.edge.kernel.org/pub/software/scm/git/git-2.34.1.tar.gz
##解压
tar -xvf git-2.34.1.tar.gz
cd git-2.34.1
make configure
./configure --prefix=/home/jack/software/git
make && make install

git config --global user.name "notthistrain"
git config --global user.email "940457524@qq.com"
```

### docker

```shell
sudo apt remove docker docker-engine docker.io containerd runc
sudo apt install ca-certificates curl gnupg lsb-release
curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"
sudo apt install docker-ce docker-ce-cli containerd.io
sudo usermod -aG docker $USER
exit
```

### golang

```shell
##下载
cd ~/downloads && wget https://dl.google.com/go/go1.24.1.linux-amd64.tar.gz
##解压
tar -zxvf go1.24.1.linux-amd64.tar.gz
mv go ~/software

##环境变量
cat << EOF >> ~/.bashrc
> export GOROOT=$HOME/software/go
> export GOPATH=$HOME/workspace/go
> export GOBIN=$GOPATH/bin
> export PATH=$GOPATH:$GOBIN:$GOROOT/bin:$PATH
> EOF
source ~/.bashrc
```

### nvm

```shell
##下载文件
cd ~/code && git clone https://github.com/nvm-sh/nvm.git
cat << EOF >> ~/.bashrc
> export NVM_DIR="$HOME/code/nvm"
> [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
> [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
> EOF

source ~/.bashrc
nvm install v22.14.0
npm config set registry https://registry.npmmirror.com/
npm i -g pnpm
```

### rust

```shell
cat << EOF >> ~/.bashrc
> export RUSTUP_DIST_SERVER="https://rsproxy.cn"
> export RUSTUP_UPDATE_ROOT="https://rsproxy.cn/rustup"
> EOF

curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh

cat << EOF > ~/.cargo/config.toml
> [source.crates-io]
> replace-with = 'rsproxy'
> 
> [source.rsproxy]
> registry = "https://rsproxy.cn/crates.io-index"
> 
> [registries.rsproxy]
> index = "https://rsproxy.cn/crates.io-index"
> 
> [net]
> git-fetch-with-cli = true
> EOF
```

## Vscode免密登录

```shell
##powershell 一直回车
ssh-keygen
##复制公钥内容到远程主机.ssh/authorized_keys文件中
##vscode下载Remote Development插件
```

