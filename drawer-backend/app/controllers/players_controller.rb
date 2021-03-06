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
        # byebug 
        game = Game.first
        player = game.players.new(player_params)
        if player.save
             render json: player
        else
             render json: {message: player.errors.full_messages.to_sentence}
        end
    end

    def destroy
        player = Player.all.find_by(id: params[:id])
        player.destroy
        render json: {message: "Mess with the best, die like the rest"}
        # render json: player, include: [:cards]
    end

    private

    def player_params
        params.require(:player).permit(:name, :game_id)
    end
end
