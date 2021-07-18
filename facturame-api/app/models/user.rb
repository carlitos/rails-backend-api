class User < ApplicationRecord
  has_secure_password

  def to_token
    {
        id: self.id,
        name: self.name,
        username: self.username,
    }
  end
  
end
