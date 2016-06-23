class ListsController < ApplicationController
	before_action :find_board
  def index
  	render json: @board.lists
  end

  def create
  	@list = @board.lists.new(list_params)
  	if @list.save
  		render json: @list
  	else
  		render json: {errors: @list.errors.full_messages}
  	end
  end

  def destroy
    @board.list.find(params[:id]).destroy
    render json: {message: 'list deleted'}
  end

  private

  def list_params
  	params.require(:list).permit(:name)
  end

  def find_board
  	@board = Board.find(params[:board_id])
  end
end
