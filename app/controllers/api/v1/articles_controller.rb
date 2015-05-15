class Api::V1::ArticlesController < ApplicationController
  def index
    @articles = Article.all
  end

  def show
    @article = Article.find(params[:id])
    @comments = @article.comments
  end

  def create
    article = Article.new(article_params)

    res = if article.save
            { status: 200, message: "Article Posted Successfully"}
          else
            { status: 500, message: article.errors.full_messages.to_sentence }
          end

    render json: res, status: res[:status]
  end

  def update
    article = Article.find(params[:id])

    res = if article.update(article_params)
            { status: 200, message: "Article Updated Successfully"}
          else
            { status: 500, message: article.errors.full_messages.to_sentence }
          end

    render json: res, status: res[:status]
  end

  def destroy
    Article.find(params[:id]).destroy
    render json: { status: 200, message: "Article Deleted"}
  end

  private

  def article_params
    params.require(:article).permit(:content, :name)
  end
end
