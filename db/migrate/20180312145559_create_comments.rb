class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments, force: :cascade do |t|
      t.integer :user_id, null: false
      t.integer :video_id, null: false
      t.integer :parent_comment_id
      t.text :body

      t.timestamps
    end
    add_index :comments, :user_id
    add_index :comments, :video_id
    add_index :comments, :parent_comment_id
  end
end
