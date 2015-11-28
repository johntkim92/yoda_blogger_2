class PostsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    if @post.save

    else
      render json: {
        error: {
          message: @post.errors.full_messages.to_sentence
        }
      }
    end

  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    @post.update(post_params)


  end

  private

  def post_params
    return params.require(:post).permit(:title, :body)

  end

end
