class Api::DepartmentsController < ApplicationController
  before_action :set_department, only: [:update, :destroy]

  def index
    render json: Department.all
  end

  def create
    department = Department.new(department_params)
    if department.save
      render json: department
    else
      render json: { errors: department.errors }, status: :unprocessable_entity
    end
  end

  def update
    
    if @department.update(department_params)
      render json: @department
    else
      render json:  @department.errors, status: 422
    end
  end

  def destroy
    @department.destroy
    render json: {alert: ("you have deleted a Department")}
  end

  private
    def set_department
      @department = Department.find(params[:id])
      
    end

    def department_params
      params.require(:department).permit(:name)
    end

end
