class PlayersController < ApplicationController

    def index
        players = Player.all
        render json: players, include: [:cards]
    end

    def show
        player = Player.find_by(id: params[:id])
        render json: player, include: [:cards]
    end

    def create
        
    end

    def destroy
        player = Player.all.find_by(id: params[:id])
        player.destroy
        render json: player, include: [:cards]
    end
end
