class AddPointsToPlayers < ActiveRecord::Migration[6.0]
  def change
    add_column :players, :points, :integer
  end
end
