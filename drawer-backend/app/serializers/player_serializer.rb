class PlayerSerializer < ActiveModel::Serializer
    attributes :id, :name, :points
    has_many :cards
end