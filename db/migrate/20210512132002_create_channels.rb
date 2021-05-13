class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :name, null:false
      t.string :description
      t.integer :admin_id, null:false
      t.boolean :public?, null:false, default: true
      t.timestamps
    end
    add_index :channels, :name
    add_index :channels, :admin_id
  end
end
