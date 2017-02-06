class HaikusController < ApplicationController
  def index
    @haikus = Haiku.all
  end
  def create
    @haiku = Haiku.create(haiku_params(params))
  end

  private
  def haiku_params(params)
    return params.require(:haiku).permit(:line1, :line2, :line3)
  end
end
