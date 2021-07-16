class UserSerializer < ActiveModel::Serializer

  attributes :name, :last_name, :full_name

  def full_name
    "#{object.name} #{object.last_name}"
  end

  def token
    Auth::JsonWebToken.encode(object.to_token)
  end
  

end
