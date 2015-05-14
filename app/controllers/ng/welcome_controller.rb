class Ng::WelcomeController < ActionController::Base
  protect_from_forgery

  def index
    render "layouts/ngapplication"
  end
end
