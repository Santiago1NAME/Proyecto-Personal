const IconMenu: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-menu" onClick={ onClick }><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
    )
}

export default IconMenu;