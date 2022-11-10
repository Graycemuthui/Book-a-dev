Rails.application.routes.draw do
  devise_for :users
  root  'root#index'
  devise_scope :user do 
    get '/users/sign_out' => 'devise/sessions#destroy'
  end
  namespace :api do
    namespace :v1 do
      resources :developers
      resources :bookings
      resources :users
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '*path', to: 'root#index', via: :all
end
