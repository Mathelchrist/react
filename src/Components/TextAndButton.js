const TextAndButton = ({firstName}) => {
    return (
        <div className="TextAndButton">
            <header className="TextAndButton-header">
                <>
                    <p>
                        Hello {firstName}
                    </p>
                    <button>
                        Click
                    </button>
                </>
            </header>
        </div>
    );
}

export default TextAndButton;