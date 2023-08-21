set fish_greeting

alias nv=nvim
alias git_push=git_push
alias config='/usr/bin/git --git-dir=$HOME/dotfiles/ --work-tree=$HOME'
alias to_clip='xclip -selection clipboard'
alias mkimage=mkimage

export EDITOR=/bin/nvim

function git_push
    git add . && git commit -m "$argv" && git push -u origin main
end

function mkimage
    sudo rm -rf out work && sudo mkarchiso -v $argv
end

pfetch

export LS_COLORS="$(vivid generate molokai)"
export APAGNAN=~/Documents/apagnan-iso

