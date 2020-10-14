# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Game.delete_all
Game.create

Player.delete_all
Player.create(name: 'Drawer', game_id: Game.first.id)

Card.delete_all
words = [
    'Hot Dog',
    'Scream',
    'Crane',
    'Drop'
]
words.each do |word|
    Card.create(content: word, player_id: Player.first.id, game_id: Game.first.id)
end
