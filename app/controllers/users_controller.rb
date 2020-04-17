class UsersController < ApplicationController

  def index
    render json: {
        username: 'raghu',
        dept: 'dev'
    }.to_json
  end

end