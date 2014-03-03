Belfastruby::Application.routes.draw do

 root :to => 'site#index'
 resources :interested_users, :only => [:create]

end
