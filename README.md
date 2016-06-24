# Setup

Configure repo within a repo for simpler deployment.

    git clone git@github.com:Wootric/slate.git
    cd slate
    git checkout wootric-master
    mkdir build
    cd build
    git init
    git remote add origin git@github.com:Wootric/slate.git
    git fetch
    git checkout gh-pages

Install Ruby dependencies.

    rbenv install 2.2.3
    gem install bundler
    bundle install
    
# Development

    bundle exec middleman server

When you make changes in the parent repo, wootric-master, in development mode your 
changes will be compiled to the build directory which is also a repo, gh-pages.

Once you're all done and everything has been commited to wootric-master:

    rake build
    cd build
    git commit -m "Updated site"
    git push
