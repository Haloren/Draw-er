class Player < ApplicationRecord
    has_many :cards
    belongs_to :game

    validates :name, presence: true, length: {minimum: 1, maximum: 11}
end
