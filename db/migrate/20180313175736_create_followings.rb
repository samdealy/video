class CreateFollowings < ActiveRecord::Migration[5.1]
  def change
    create_table :followings do |t|
      t.integer :follower_id, null: false
      t.integer :leader_id, null: false

      t.timestamps
    end

    add_index :followings, :follower_id
    add_index :followings, :leader_id
  end
end
