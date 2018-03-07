class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users, force: :cascade do |t|
      t.string :session_token
      t.string :username
      t.string :password_digest
      t.string :email

      t.timestamps
    end
  end
end
