class CreateHaikus < ActiveRecord::Migration
  def change
    create_table :haikus do |t|
      t.string :line1
      t.string :line2
      t.string :line3

      t.timestamps null: false
    end
  end
end
