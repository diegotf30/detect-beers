Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'root#show'

  get '/xml', to: 'export#xml'
  get '/azure', to: 'export#azure'
end
