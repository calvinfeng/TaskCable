require 'test_helper'

class Api::TaskItemsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @api_task_item = api_task_items(:one)
  end

  test "should get index" do
    get api_task_items_url
    assert_response :success
  end

  test "should get new" do
    get new_api_task_item_url
    assert_response :success
  end

  test "should create api_task_item" do
    assert_difference('Api::TaskItem.count') do
      post api_task_items_url, params: { api_task_item: { completed: @api_task_item.completed, summary: @api_task_item.summary } }
    end

    assert_redirected_to api_task_item_url(Api::TaskItem.last)
  end

  test "should show api_task_item" do
    get api_task_item_url(@api_task_item)
    assert_response :success
  end

  test "should get edit" do
    get edit_api_task_item_url(@api_task_item)
    assert_response :success
  end

  test "should update api_task_item" do
    patch api_task_item_url(@api_task_item), params: { api_task_item: { completed: @api_task_item.completed, summary: @api_task_item.summary } }
    assert_redirected_to api_task_item_url(@api_task_item)
  end

  test "should destroy api_task_item" do
    assert_difference('Api::TaskItem.count', -1) do
      delete api_task_item_url(@api_task_item)
    end

    assert_redirected_to api_task_items_url
  end
end
