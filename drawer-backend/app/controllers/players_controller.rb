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
        byebug
        @player = Player.new(character_parmas)
        @player.game_id = session[:game_id]

    end

    def destroy
        player = Player.all.find_by(id: params[:id])
        player.destroy
        render json: player, include: [:cards]
    end

    private

    def player_params
        params.require(:player).permit(:name, )
    end
end
