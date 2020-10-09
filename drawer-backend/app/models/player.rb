class Player < ApplicationRecord
    has_many :cards

    validates :name, presence: true, uniqueness: true, length: {minimum: 1, maximum: 11}
end
