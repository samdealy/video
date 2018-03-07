json.set! :currentUser do
  json.extract! user, :id, :username, :email
end
