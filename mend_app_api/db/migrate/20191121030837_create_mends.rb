class CreateMends < ActiveRecord::Migration[6.0]
  def change
    create_table :mends do |t|
      t.string :make
      t.string :model
      t.string :year
      t.string :description
      t.string :service
      t.string :price

      t.timestamps
    end
  end
end
