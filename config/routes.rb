Rails.application.routes.draw do
  namespace :api, defaults: { format: 'json' } do
    namespace :v1 do
      resources :articles do
        resources :comments
      end
      resources :events do
        resources :comments
      end
    end
  end

  resources :articles do
    resources :comments
  end

  resources :photos do
    resources :comments
  end

  resources :events do
    resources :comments
  end

  namespace :ng do
    match "(*path)" => "welcome#index", via: [:get, :post]
  end
end
