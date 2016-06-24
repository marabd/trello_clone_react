class ItemsController < ApplicationController
  def index
  	@items = List.find(params[:list_id]).items
  	render json: @items
  end

  def create
  	@item = List.find(params[:list_id]).items.create(item_params)
  	if @item.save
  		render json: @item
  	else
  		render json: {errors: @item.errors.full_messages}
  	end
  end

  private
  def item_params
  	params.require(:item).permit(:name)
  end
  
end
