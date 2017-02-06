Rails.application.routes.draw do
  root 'haikus#index'
  resources :haikus, only: [:index, :create]
end
