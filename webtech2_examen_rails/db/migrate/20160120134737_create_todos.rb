class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :entrydate
      t.string :enddate
      t.string :prio
      t.string :desc
      t.string :status

      t.timestamps
    end
  end
end
