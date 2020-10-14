Rails.application.routes.draw do
  resources :games
  resources :cards, :only => [:index, :show, :create]
  resources :players, :only => [:index, :show, :create, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
