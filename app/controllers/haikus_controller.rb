class HaikusController < ApplicationController
  def index
    @haikus = Haiku.all
  end
end
