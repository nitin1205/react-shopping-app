import './button.syles.scss';

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]} ${isLoading ? 'button-spinner-container' : ''}`}
        disabled={isLoading}
        {...otherProps}
    >
        {isLoading || children}
    </button>
  )
}

export default Button;