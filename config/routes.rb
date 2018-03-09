Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resources :videos, only: [:create, :update, :show]
    resource :session, only: [:create, :destroy, :show]
  end

   root "static_pages#root"
end
