require 'test_helper'

class MendsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @mend = mends(:one)
  end

  test "should get index" do
    get mends_url, as: :json
    assert_response :success
  end

  test "should create mend" do
    assert_difference('Mend.count') do
      post mends_url, params: { mend: { description: @mend.description, make: @mend.make, model: @mend.model, price: @mend.price, service: @mend.service, year: @mend.year } }, as: :json
    end

    assert_response 201
  end

  test "should show mend" do
    get mend_url(@mend), as: :json
    assert_response :success
  end

  test "should update mend" do
    patch mend_url(@mend), params: { mend: { description: @mend.description, make: @mend.make, model: @mend.model, price: @mend.price, service: @mend.service, year: @mend.year } }, as: :json
    assert_response 200
  end

  test "should destroy mend" do
    assert_difference('Mend.count', -1) do
      delete mend_url(@mend), as: :json
    end

    assert_response 204
  end
end
