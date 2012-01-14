class InterestedUser < ActiveRecord::Base
  validates :email, :email => { :message => "is not formatted correctly" }, :uniqueness => true
end

