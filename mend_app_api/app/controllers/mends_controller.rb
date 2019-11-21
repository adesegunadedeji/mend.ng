class MendsController < ApplicationController
  before_action :set_mend, only: [:show, :update, :destroy]

  # GET /mends
  def index
    @mends = Mend.all

    render json: @mends
  end

  # GET /mends/1
  def show
    render json: @mend
  end

  # POST /mends
  def create
    @mend = Mend.new(mend_params)

    if @mend.save
      render json: @mend, status: :created, location: @mend
    else
      render json: @mend.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /mends/1
  def update
    if @mend.update(mend_params)
      render json: @mend
    else
      render json: @mend.errors, status: :unprocessable_entity
    end
  end

  # DELETE /mends/1
  def destroy
    @mend.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_mend
      @mend = Mend.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def mend_params
      params.require(:mend).permit(:make, :model, :year, :description, :service, :price)
    end
end
