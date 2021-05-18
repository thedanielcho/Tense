Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  mount ActionCable.server, at: '/cable'

  namespace :api, defaults: { format: :json } do

    resources :users, only: [:create]

    resource :session, only: [:create, :destroy]

    resources :channels, only: [:index, :show, :create, :update, :destroy] do
      resources :users, only: [:index]
      resources :memberships, only: [:create, :index]
      resources :messages, only: [:index]
    end
    resources :memberships, only: :destroy
    resources :messages, only: [:update, :destroy, :create]
    # bonus feature for searching
    # get '/channels/search', to: 'channels#search', as: 'channels_search'

  end

  
end
