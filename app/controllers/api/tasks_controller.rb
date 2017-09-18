class Api::TasksController < ApplicationController
  before_action :set_api_task, only: [:show, :edit, :update, :destroy]

  # GET /api/tasks
  # GET /api/tasks.json
  def index
    @api_tasks = Api::Task.all
  end

  # GET /api/tasks/1
  # GET /api/tasks/1.json
  def show
  end

  # GET /api/tasks/new
  def new
    @api_task = Api::Task.new
  end

  # GET /api/tasks/1/edit
  def edit
  end

  # POST /api/tasks
  # POST /api/tasks.json
  def create
    @api_task = Api::Task.new(api_task_params)

    respond_to do |format|
      if @api_task.save
        format.html { redirect_to @api_task, notice: 'Task was successfully created.' }
        format.json { render :show, status: :created, location: @api_task }
      else
        format.html { render :new }
        format.json { render json: @api_task.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /api/tasks/1
  # PATCH/PUT /api/tasks/1.json
  def update
    respond_to do |format|
      if @api_task.update(api_task_params)
        format.html { redirect_to @api_task, notice: 'Task was successfully updated.' }
        format.json { render :show, status: :ok, location: @api_task }
      else
        format.html { render :edit }
        format.json { render json: @api_task.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /api/tasks/1
  # DELETE /api/tasks/1.json
  def destroy
    @api_task.destroy
    respond_to do |format|
      format.html { redirect_to api_tasks_url, notice: 'Task was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_task
      @api_task = Api::Task.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def api_task_params
      params.require(:api_task).permit(:title, :description, :completed)
    end
end
