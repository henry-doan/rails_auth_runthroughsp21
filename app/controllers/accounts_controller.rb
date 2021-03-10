class AccountsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_account, only: [:show, :edit, :update, :destroy]

  def index
    @accounts = current_user.accounts
    render component: "Accounts", props: { accounts: @accounts, user: current_user }
  end

  def show
    render component: "Account", props: { account: @account, user: current_user }
  end

  def new
    @account = current_user.accounts.new
    render component: "AccountNew", props: { account: @account, user: current_user }
  end

  def create
    @account = current_user.accounts.new(account_params)
    if @account.save
      redirect_to accounts_path
    else
      render component: "AccountNew", props: { account: @account, user: current_user, errors: @account.errors.messages[:balance][0] }
    end
  end

  def edit
    render component: "AccountEdit", props: { account: @account, user: current_user }
  end

  def update
    if @account.update(account_params)
      redirect_to accounts_path
    else
      render :edit
    end
  end

  def destroy
    @account.destroy
    redirect_to accounts_path
  end

  private
    def account_params
      params.require(:account).permit(:name, :balance, :user_id)
    end

    def set_account
      @account = current_user.accounts.find(params[:id])
    end
end
