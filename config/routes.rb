Rails.application.routes.draw do
  get 'places/search'
  
  devise_for :users
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :places, only: [:search, :show] do
    resources :bookmarks
  end
  resources :lists
  resources :bookmarks
end
