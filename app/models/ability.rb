class Ability
  include CanCan::Ability

  def initialize(user)
    # Define abilities for the user here. For example:
    return unless user.present?

    can :create, Booking
    can :destroy, Booking, user_id: user.id
    can :read, :all
    return unless user.admin?

    can :manage, :all
  end
end
