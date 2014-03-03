class InterestedUsersController < ApplicationController
  respond_to :html, :js

  def create
    @interested_user = InterestedUser.new(params[:interested_user])

    respond_with do |format|
      if @interested_user.save
        @message = 'Thanks for declaring your interest!'
        @success = true
        format.js 
        format.html { redirect_to :back, :notice => @message }
      else
        if @interested_user.valid?
          @message = 'Something went wrong, please try again'
        else
          @message = @interested_user.errors.messages.map { |k, v| v.map { |message| "#{k} #{message}".capitalize } }.flatten.join(', ')
        end
        @success = false
        format.js 
        format.html { redirect_to :back, :alert => @message }
      end
    end
  end

end
