Rails.application.routes.draw do
  resources :users
  get 'home/index'
  resources :mends
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
