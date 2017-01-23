class HaikusController < ApplicationController
  def index
    @haikus = Haiku.all
  end
  def create
    binding.pry
  end
end
