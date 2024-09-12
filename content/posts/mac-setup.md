+++
title = 'Mac Setup'
date = 2024-09-11T13:12:02+05:30
draft = true
tags = ["mac"]
+++

Developers who have worked with me know I am an absolute stickler for productivity.
I always make it a point to use the best tools available out there to get my job done.

## Install Xcode Software Tools

```sh
xcode-select --install
```

## Install Homebrew as a package manager for MacOS

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Install GUI Applications

```sh
brew install --cask \
    alt-tab \
    docker \
    google-chrome \
    iterm2 \
    maccy \
    postman \
    slack \
    spotify \
    visual-studio-code
```

## Install Terminal Applications

```sh
brew install \
    atuin \
    bat \
    eza \
    git \
    kubectx
```

## Install Oh My ZSH

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

<!-- ## Setup Aliases

```sh

``` -->

## Configure Git

```sh
git config --global init.defaultBranch main
git config --global user.name "Nilesh2000"
git config --global user.email nileshlund@gmail.com
```

## Configure Vim

```vim
syntax on " Turn on syntax highlighting
set number " Show line numbers
set showmatch " Show matching brackets when text indicator is over them
```

## Install Trash CLI

```sh
npm install --global trash-cli
```

<!-- ## VSCode JSON Settings

```sh

``` -->

## Install IPython

```sh
pip3 install ipython
```
