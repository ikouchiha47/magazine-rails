class Api::V1::EventsController < ApplicationController
  def index
    @events = Event.all
  end

  def show
    @event = Event.find(params[:id])
  end

  def create
    event = Event.new(event_params)
    res   = event.save ? { status: 200, message: "Article Posted Successfully"} :
      { status: 500, message: event.errors.full_messages.to_sentence }

    respond_to do |format|
      format.json { render json: res }
    end
  end

  def update
    event = Event.find(params[:id])
    res   = event.update(article_params) ? { status: 200, message: "Article Updated Successfully"} :
      { status: 500, message: event.errors.full_messages.to_sentence }

    respond_to do |format|
      format.json { render json: res }
    end
  end

  def destroy
    Event.find(params[:id]).destroy

    respond_to do |format|
      format.json { render json: { status: 200, message: "Event Deleted"} }
    end
  end

  private

  def event_params
    params.require(:event).permit(:description, :ends_at, :name, :starts_at)
  end
end
