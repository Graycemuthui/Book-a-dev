class CreateDevelopers < ActiveRecord::Migration[7.0]
  def change
    create_table :developers do |t|
      t.string :name
      t.string  :photo
      t.string :email
      t.string :phone
      t.string   :city
      t.text   :bio
      t.string :github
      t.timestamps
    end
  end
end
