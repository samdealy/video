Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    get "videos/feed", to: "videos#feed_index"
    resources :videos, only: [:create, :update, :show]
    patch 'videos/:id/views', to: "videos#increase_views"
    resources :followings, only: [:create, :destroy]
    resources :comments, only: [:create, :update, :destroy]
    resource :session, only: [:create, :destroy, :show]
  end

   root "static_pages#root"
end
