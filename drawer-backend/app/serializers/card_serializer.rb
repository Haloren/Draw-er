class CardSerializer < ActiveModel::Serializer
    attributes :id, :content, :player_id
    belongs_to :player
    belongs_to :game
end