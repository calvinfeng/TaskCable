require 'test_helper'

class Api::TasksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @api_task = api_tasks(:one)
  end

  test "should get index" do
    get api_tasks_url
    assert_response :success
  end

  test "should get new" do
    get new_api_task_url
    assert_response :success
  end

  test "should create api_task" do
    assert_difference('Api::Task.count') do
      post api_tasks_url, params: { api_task: { completed: @api_task.completed, description: @api_task.description, title: @api_task.title } }
    end

    assert_redirected_to api_task_url(Api::Task.last)
  end

  test "should show api_task" do
    get api_task_url(@api_task)
    assert_response :success
  end

  test "should get edit" do
    get edit_api_task_url(@api_task)
    assert_response :success
  end

  test "should update api_task" do
    patch api_task_url(@api_task), params: { api_task: { completed: @api_task.completed, description: @api_task.description, title: @api_task.title } }
    assert_redirected_to api_task_url(@api_task)
  end

  test "should destroy api_task" do
    assert_difference('Api::Task.count', -1) do
      delete api_task_url(@api_task)
    end

    assert_redirected_to api_tasks_url
  end
end
