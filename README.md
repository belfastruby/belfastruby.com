# Belfast Ruby


## Getting Stared

First, make sure all dependencies are met (see bottom).

### Bundler 

    gem install bundler
    cd belfastruby
    bundle install

### Database

    rake db:create
    rake db:migrate

### Runing the server

    # In a new window
    cd belfastruby
    rails s
    open http://0.0.0.0:3000

### Other Dependencies

To get started with the application locally, you'll need Ruby 1.9.2 (using RVM)
  
#### Update to Ruby 1.9.2

    # This didn't work for me, using the instructions on this page did: http://beginrescueend.com/rvm/install/ [NP]
    bash < <( curl http://rvm.beginrescueend.com/releases/rvm-install-head )
    # Add this to the bottom of the file ~/.bash_profile
    [[ -s "$HOME/.rvm/scripts/rvm" ]] && . "$HOME/.rvm/scripts/rvm"
    rvm install 1.9.2
    rvm use 1.9.2 --default
