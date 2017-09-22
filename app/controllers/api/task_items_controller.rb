class Api::TaskItemsController < ApplicationController
  before_action :set_api_task_item, only: [:show, :edit, :update, :destroy]

  # GET /api/task_items
  # GET /api/task_items.json
  def index
    @api_task_items = Api::TaskItem.all
  end

  # GET /api/task_items/1
  # GET /api/task_items/1.json
  def show
  end

  # GET /api/task_items/new
  def new
    @api_task_item = Api::TaskItem.new
  end

  # GET /api/task_items/1/edit
  def edit
  end

  # POST /api/task_items
  # POST /api/task_items.json
  def create
    @api_task_item = Api::TaskItem.new(api_task_item_params)

    respond_to do |format|
      if @api_task_item.save
        format.html { redirect_to @api_task_item, notice: 'Task item was successfully created.' }
        format.json { render :show, status: :created, location: @api_task_item }
      else
        format.html { render :new }
        format.json { render json: @api_task_item.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /api/task_items/1
  # PATCH/PUT /api/task_items/1.json
  def update
    respond_to do |format|
      if @api_task_item.update(api_task_item_params)
        format.html { redirect_to @api_task_item, notice: 'Task item was successfully updated.' }
        format.json { render :show, status: :ok, location: @api_task_item }
      else
        format.html { render :edit }
        format.json { render json: @api_task_item.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /api/task_items/1
  # DELETE /api/task_items/1.json
  def destroy
    @api_task_item.destroy
    respond_to do |format|
      format.html { redirect_to api_task_items_url, notice: 'Task item was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_task_item
      @api_task_item = Api::TaskItem.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def api_task_item_params
      params.require(:api_task_item).permit(:summary, :completed)
    end
end
