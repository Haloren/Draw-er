class PlayerSerializer < ActiveModel::Serializer
    attributes :id, :name
    has_many :cards
    belongs_to :game
end