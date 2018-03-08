class CreateVideos < ActiveRecord::Migration[5.1]
  def change
    create_table :videos do |t|
      t.integer :uploader_id, null: false
      t.string :title, null: false
      t.text :description
      t.integer :views, default: 0

      t.timestamps
    end

    add_index :videos, :uploader_id
  end
end
