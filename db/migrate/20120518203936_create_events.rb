class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name
      t.datetime :starts_at, null: false
      t.datetime :ends_at, null: false
      t.text :description, null: false

      t.timestamps null: false
    end
  end
end
