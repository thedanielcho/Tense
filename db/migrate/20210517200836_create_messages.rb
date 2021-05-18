class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.integer :user_id, null:false
      t.references :messageable, polymorphic: true
      t.string :body, null:false
      t.timestamps
    end
    add_index :messages, :user_id
    add_index :messages, :created_at
  end
end
