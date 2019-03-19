class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.belongs_to :department, foreign_key: true
      t.string :name
      t.string :description
      t.float :price

      t.timestamps
    end
  end
end
