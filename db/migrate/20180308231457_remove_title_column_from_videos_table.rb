class RemoveTitleColumnFromVideosTable < ActiveRecord::Migration[5.1]
  def change
    remove_column :videos, :title, :string
    add_column :videos, :title, :string
  end
end
