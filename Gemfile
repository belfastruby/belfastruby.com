source 'http://rubygems.org'
ruby "1.9.3"

gem 'rails', '~> 3.2.12'

group :assets do
  gem 'sass-rails'#,   '~> 3.1.5'
  gem 'coffee-rails'#, '~> 3.1.1'
  gem 'uglifier'#, '>= 1.0.3'
end

gem "haml"
gem 'jquery-rails'
gem "validate_email"
gem 'rails_exception_handler', :git => "git://github.com/rumblelabs/rails_exception_handler.git"

gem "asset_sync"

group :production do
  gem 'pg'
end

group :development do
  gem 'mysql2'
  #gem 'ruby-debug19', :require => 'ruby-debug'
end

group :test do
  # Pretty printed test output
  gem 'turn', '0.8.2', :require => false
end
